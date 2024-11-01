 let menu = document.getElementById('list')
 let bar = document.getElementById('open')
 let closing = document.getElementById('close')

function showmenu(){
    menu.style.display='flex'
    bar.style.display='none'
    closing.style.display='block'
}

function closebar(){
  menu.style.display='none' 
  bar.style.display='flex' 
  closing.style.display='none'
}

