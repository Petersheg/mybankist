############################# SCROLL TO VIEW ##################################

    PAGE COORDINATE
    1) select your initiator(button), 
    2) Get the coordinate of the target element
    3) use getBoundingClientRect() to get some properties to use.



    CURRENT SCROLL (Page Offset)
    Make use of window.pageXOffset and window.PapeYOffset,
    to get the current scroll relative to the window.



    VIEWPORT HEIGHT and WIDTH
    make use of document.documentElement.clientHeight and document.documentElement.clientWidth
    to know the current height and the width of the view port.

############################# WAYS TO ADD EVENT LISTERS ##################################

There are 3 ways to add eventListeners to elements

    1) By getting the element and then using addEventListener() function on it.
       eg elememt.addEventListener('click', func)

    2) By usin on then before event then set it to the function we want to execute;
        eg element.onclick = function(){ action here }
    
    3) By specifying the event on the element right in the HTML file
        eg <h1 onClick='alert("I am clicked")'></h1>

############################# EVENT BUBLING AND CAPTURING ##################################

    When an event listener is added to an elemnet, it happens right from the document root
    and then travel down to the elememnt on which it is specified, that is know as 
    EVENT CAPTURING

    After the event execute, it travel back to the root until it action is required and that is known as 
    EVENT BUBBLING

    Usecase
    When you wish to apply event listen on multiple elements performing the same or silimar function
    then apply the event listern on the parent element then use e.targe to get to the child elements.
    eg
    <ul>
        <li></li>
        <li></li>
    </ul>
    apply the event listiner on <ul>


############################# DOM TRAVERSING ##################################

    The ideal of selecting relative element using another element within the DOM is known as 
    DOM TRAVERSING
    
    1) SELECTING CHILDREN
        After selecting the parant element, use .children on it to return all available children
        => lastElementChild and firstElementChild are use to select last and first element child

    2) SELECTING PARENT
        => After slecting child element, it DIRECT parent can be selscted with .parentElement or .parentNode
        => To select Parent other than the direct one then .closest() can be use to select with either with
            className, Id or by element.

    3) SELECTING SIBLINGS
        Make use of .previousElementSibling or .nextElementSibling on selected element toget 
        it either previous or next sibling.


############################# PASSING AN ARGUMENT TO EVENT HANDLER ##################################

    If an event handler have to receive an argument then
    specifiy a function and then bind the function while calling it and pass in the argue
    eg if function handler(e) (kindly note that e is for event arg for the handler) accepts (argg) as argument and u wan to call it, will handling event 
    listener then do. ki
    nav.addEventListener('click',handler.handler(7)); 


############################# INTERSECTION OBSERVER ##################################

    Intersetion obserser is use to monitor when exactly two element or section on a page intersect on the viewport
    below are steps

    STEPS
    1) Select the interset element eg header 
    2) Define intersect Call back function eg ==> funtion intersetCallBack(){}
    3) Define intersect options eg ==> intersetOptions = { }
    4) initiate a new intersetObserver from intersectObsercer() constructor
    5) Pass in interset function and ineterset Option as first and second argument to the constructor 
    6) Make use of observe() method to observe the selected element eg observer.observe(header);

    Use Case is when you want a navbar to appear at a certain position or when you wan to reveal section on scroll.


############################# DOM LIFECYCLE ##################################
    There are 3 major DOM lifecycle 
    1) DOMContendLoad : This ebent occur after all HTML file has been parsed
    2) load : This occur when the entire page content has been loaded
    3) beforeunload : This event fires when user is about to leave the page.
