let form=document.getElementById('form');

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let res=await fetch("https://jolly-ox-earmuffs.cyclic.app/user/login",{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    res=await res.json();
    if(res.status){
        alert(`Login Succesful!`);
        localStorage.setItem("name",res.name);
        localStorage.setItem("token",res.token);
        window.location="./index.html"
    }else{
        alert('Wrong Credentials!')
    }

})
