
for(var temp = 0 ; temp < document.querySelectorAll(".buttons").length; temp++){
    document.querySelectorAll(".buttons")[temp].addEventListener("click",function (){ 
        makeSound(this.innerText) 
        buttonAnimation(event.key)
    })
}
document.addEventListener("keydown",function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

let makeSound = (key) => {
    switch(key){
        case 'w': var w = new Audio("sounds/tom-1.mp3")
                  w.play()
                  break
        case 'a': var a = new Audio("sounds/tom-2.mp3")
                  a.play()
                  break
        case 's': var s = new Audio("sounds/tom-3.mp3")
                  s.play()
                  break
        case 'd': var d = new Audio("sounds/tom-4.mp3")
                  d.play()
                  break  
        case 'j': var j = new Audio("sounds/crash.mp3")
                  j.play()
                  break   
        case 'k': var k = new Audio("sounds/kick-bass.mp3")
                  k.play()
                  break
        case 'l': var l = new Audio("sounds/snare.mp3")
                  l.play()
                  break      
    }
}
let buttonAnimation = (key) =>{
    document.querySelector("."+key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")
    },100)
}