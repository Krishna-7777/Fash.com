fetch("https://fash-com.onrender.com/",{
    headers:{
        "Content-Type":"application/json",
    }
}).then((res)=>{
    if(!res.ok){
        window.alert("The server is spining up, please try again later. Usually it takes 50 seconds to spin up.");
    }
}).catch((err)=>{
    window.alert("The server is spining up, please try again later. Usually it takes 50 seconds to spin up.");
})


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
let nam=localStorage.getItem('name')
if(nam){
    document.getElementById('text').innerText=''
    document.getElementById('login').setAttribute("style","display:none")
    document.getElementById('parent').innerHTML=`<i class="fa-solid fa-user"></i> ${nam}`;
    document.getElementById('logout').addEventListener('click',()=>{
        localStorage.clear();
        window.location.reload();
    })
}else{
    document.getElementById('logout').setAttribute("style","display:none");
}
