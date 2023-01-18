let parent=document.getElementById('parent');
let popup=document.getElementById('popup');
parent.onmouseover=()=>{
    popup.setAttribute("style","display:block") 
}
popup.onmouseover=()=>{
    popup.setAttribute("style","display:block")
}
popup.onmouseout=()=>{
    popup.setAttribute("style","display:none")
    
}
