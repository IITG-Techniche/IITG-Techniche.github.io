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

  
/////////// marquee start /////////////

test = document.getElementById("scroll-images")

test.addEventListener("mouseenter", (event) => {
   
    document.getElementById("first-image").src = "./marquee2.jpg";
    document.getElementById("second-image").src = "./marquee2.jpg";
    document.getElementById("third-image").src = "./marquee2.jpg";
  }, false);

  test.addEventListener("mouseout", (event) => {
    // highlight the mouseout target
   
    document.getElementById("first-image").src = "./marquee1.jpg";
    document.getElementById("second-image").src = "./marquee1.jpg";
    document.getElementById("third-image").src = "./marquee1.jpg";
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
