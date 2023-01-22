document.getElementById("Search").addEventListener('click',()=>{
    let query=document.getElementById('sbox').value;
    localStorage.setItem('search',query);
    window.location="./search.html"
})