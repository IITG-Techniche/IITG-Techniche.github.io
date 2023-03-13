// navbar start
const hamburger =document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
// navbar end

/////////// marquee start /////////////

test = document.getElementById("scroll-images")

test.addEventListener("mouseenter", (event) => {
   
    document.getElementById("first-image").src = "./static/marquee2.jpg";
    document.getElementById("second-image").src = "./static/marquee2.jpg";
    document.getElementById("third-image").src = "./static/marquee2.jpg";
  }, false);

  test.addEventListener("mouseout", (event) => {
    // highlight the mouseout target
   
    document.getElementById("first-image").src = "./static/marquee1.jpg";
    document.getElementById("second-image").src = "./static/marquee1.jpg";
    document.getElementById("third-image").src = "./static/marquee1.jpg";
  }, false);


////////// marquee end ////////////

////////// horizontal scroll start  ////////

const scrollContainer = document.querySelector("img");
const xx = document.querySelector("#x")


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    // to understand this function read this: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >=0 
    );
}


window.addEventListener("scroll", async function (evt) {
   
    if(isInViewport(xx)){

        const rect = xx.getBoundingClientRect();
        let text = "0px"
        if(rect.bottom > 0){

            let X = xx.style.width - this.window.innerWidth
            let Y = this.window.innerHeight + xx.style.height
            let disp = X * (Y - rect.bottom) / Y;
            disp = Math.abs(disp);
            text = "-"+disp.toString()+"px";
            console.log(text)
        }

        xx.style.marginLeft = text;
    }
    
    
});




////////// horizontal scroll end /////////////


/// gallery start


(function(){
    init();

    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }

    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();
// gallery end