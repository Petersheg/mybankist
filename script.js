'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// PAGE TAB IMPLEMENTATION
const tabContainer = document.querySelector(".operations__tab-container");
const opContent = document.querySelectorAll('.operations__content');
const opTab = document.querySelectorAll('.operations__tab');
// Scroll to view element
const scrollBtn = document.querySelector('.btn--scroll-to');
const targetEl = document.querySelector('#section--1');
const navUL = document.querySelector('.nav__links');


class SiteAnimate{

  // Method to handle modal open and close
  handlePageModal(){
    const openModal = function (e) {
      e.preventDefault();
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    };
    
    const closeModal = function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    };
    
    btnsOpenModal.forEach((el)=>{
      el.addEventListener('click', openModal);
    })
    
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // This method will handle navigation item fadeout on hover using Event delegation
  navItemFadeOut(){
    function handleHover(e){
      e.preventDefault();
      if(e.target.classList.contains('nav__link')){
        const link = e.target
        const links = link.closest('nav').querySelectorAll('.nav__link');
        const logo = link.closest('nav').querySelector('img');

        links.forEach(el =>{
          if(el !== link) el.style.opacity = this;
        })
      };
    };

    const nav = document.querySelector('.nav');

    nav.addEventListener('mouseover', handleHover.bind(0.5));
    nav.addEventListener('mouseout', handleHover.bind(1));
  }

  // This method will hadle the tab implementation 
  contentTab(){
    tabContainer.addEventListener('click',(e)=>{
      e.preventDefault();
    
      // Match the button
      const tab = e.target.closest('.operations__tab');
    
      if(tab){
    
        // Apply active class to the clicked tab operations__tab--active
        opTab.forEach(el =>{
          el.classList.remove('operations__tab--active');
        });
        
        opContent.forEach(el =>{
          el.classList.remove('operations__content--active');
        });
    
        tab.classList.add('operations__tab--active');
    
        document.querySelector(`.operations__content--${tab.dataset.tab}`)
        .classList.add('operations__content--active');
      }
    });
  }


  // This method will perform the scroll into view functionality
  scrollToView(){
    // Get the coordinate of the target element
    scrollBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      // Easisest way
      targetEl.scrollIntoView({behavior:"smooth"})

      // Another Way using client rect.
        // const coord = targetEl.getBoundingClientRect();
        // const currentScrollX = window.pageXOffset;
        // const currentScrollY = window.pageYOffset;
        // window.scrollTo({
        //   left:currentScrollX + coord.left,
        //   top : currentScrollY + coord.top,
        //   behavior : "smooth"
        // });
    });

    // PAGE NAVIGATION WITH EVENT DELEGATION
    navUL.addEventListener('click',(e)=>{
      e.preventDefault();
      if(e.target.classList.contains('nav__link')){
        let att = e.target.getAttribute('href');
        document.querySelector(att).scrollIntoView({behavior:'smooth'})
      }
    });
  }
}

const siteAnimate = new SiteAnimate;
siteAnimate.handlePageModal();
siteAnimate.navItemFadeOut();
siteAnimate.contentTab();
siteAnimate.scrollToView();


// Sticky navigation
class Intersect{

  stickyHeader(selector){

    // Interseting Threshold
    const observeElement = document.querySelector(selector);//get your observe element
    const navHeader = nav.getBoundingClientRect().height;

    // define your intersetion call back
    const intersectCallBack = function(thres){
      const [thre] = thres;
      if(thre.isIntersecting === false) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
    };

    // Define your intersection options
    const intersetOptions = {
      root:null,
      rootMargin:`-${navHeader}px`,
      threshold:0
    };

    // Initiate intersection constructor
    const observer = new IntersectionObserver(intersectCallBack,intersetOptions);

    // observe the element with the observe method
    observer.observe(observeElement);

  }

  showSectionOnScroll(selector){
    // Reveal Section on scroll
    const sections = document.querySelectorAll(selector);

    // interset function
    const intersectFunction = function(enteries,observe){
      const [entry] = enteries;
      if(entry.isIntersecting === false) return
      entry.target.classList.remove('section--hidden');

      observe.unobserve(entry.target);
    }

    // interset Options
    const optionsReal = {
      root:null,
      threshold : 0.15
    };

    // Initiate a constructor
    const revealConstructor = new IntersectionObserver(intersectFunction,optionsReal);

    sections.forEach(section=>{
      section.classList.add('section--hidden');
      revealConstructor.observe(section);
    })
  }

  lazyLoadIMG(){
    const imgToLoad = document.querySelectorAll('img[data-src]');

    // Interset function
    const intersectFunction = function(enteries,observe){
      const [entry] = enteries;
      if(entry.isIntersecting === false) return
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener('load',function(){
        entry.target.classList.remove('lazy-img');
      })
      
      observer.unobserve(entry.target);
    }
    // Interset Options
    const intersetOptions = {
      root:null,
      rootMargin:'100px',
      threshold: 0
    }

    // Initiate a constructor
    const observer = new IntersectionObserver(intersectFunction,intersetOptions);

    imgToLoad.forEach(img => observer.observe(img))
    console.log(imgToLoad);
  }
}

const interset = new Intersect
interset.stickyHeader('.header');
interset.showSectionOnScroll('.section');
interset.lazyLoadIMG();
