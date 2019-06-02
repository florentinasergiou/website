var img = document.getElementsByTagName('img')[0]
img.style.top = '0px'
img.style.right = '0px'

function drop(){
   var oldTop = parseInt(img.style.top)
   if (oldTop >= window.innerWidth) {
       oldTop = -700
   }
   var newTop = oldTop + 1
   img.style.top = newTop + 'px'
}

window.setInterval(drop, 30)
