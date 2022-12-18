// var w = new Audio("sounds/tom-1.mp3")
// var a = new Audio("sounds/tom-2.mp3")
// var s = new Audio("sounds/tom-3.mp3")
// var d = new Audio("sounds/tom-4.mp3")
// var j = new Audio("sounds/crash.mp3")
// var k = new Audio("sounds/kick-bass.mp3")
// var l = new Audio("sounds/snare.mp3")
for(var temp = 0 ; temp < document.querySelectorAll(".buttons").length; temp++){
    document.querySelectorAll(".buttons")[temp].addEventListener("click",function (){
        // this.style.color = "#FFF"b  document.addEventListener("keydown",function (event) {alert(event.key)})
        switch(this.innerText){
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
    })
}
document.addEventListener("keydown",function (event) {switch(event.key){
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
}})
switch(this.innerText){
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