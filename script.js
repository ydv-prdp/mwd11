var tl = gsap.timeline()
function time(){
    var tick = 0
    setInterval(function(){
        tick = tick +  Math.floor(Math.random()*10)
        if(tick<100){
            document.querySelector("#loader h1").innerHTML = `${tick}%`;
        }

    },150)
}

time()
tl.to("#loader h1",{ 
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"10",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})