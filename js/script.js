let crsr = document.querySelector("#cursor ")
let crsrBlr = document.querySelector("#cursor-blr ")
let h4all = document.querySelectorAll("#nav h4")
let arow = document.querySelector("#arow")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+15+"px"
    crsrBlr.style.left = dets.x-150+"px"
    crsr.style.top = dets.y+"px"
    crsrBlr.style.top = dets.y-150+"px"
})

arow.addEventListener("mouseenter", function(){
    // console.log("haii  arrow");
    arow.style.scale =0.5

    crsr.style.scale = 2
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"

})


arow.addEventListener("mouseleave", function(){
    // console.log("haii  arrow");
    arow.style.scale =1
    crsr.style.scale = 1 
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"

})


h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1 
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -30%",
        scrub:2,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:"true",
        start:"top -30%",
        end:"top -100%",
        scrub:3,
    }
}) 

gsap.from("#about-us  img,#about-us-in",{
    y:50,
    opacity: 0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:"true",
        start:"top 60%",
        end:"top  58%",

        
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    duration:1,
    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top  65%",

        
    }
})
gsap.from("#col1",{
    y:-70,
    x:-70,

    scrollTrigger:{
        trigger:"#col1", 
        scroller:"body",
        // markers:"true",
        start:"top 50%",
        end:"top 57%",
        scrub:3

    }
})

gsap.from("#col2",{
    y:50,
    x:50,

    scrollTrigger:{
        trigger:"#col1", 
        scroller:"body",
        // markers:"true",
        start:"top 50%",
        end:"top 57%",
        scrub:3,

    }
})





gsap.from("#page4 h1" ,{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1", 
        scroller:"body",
        // markers:"true",
        start:"top 75%",
        end:"top 70%",
        scrub:2,

    }
})
