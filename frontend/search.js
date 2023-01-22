let search=localStorage.getItem('search');
document.getElementById("searchStatement").innerText=`Search Results for ${search}`;

let products = document.getElementById("products");
(async()=>{
    let data=await fetch(`http://127.0.0.1:3000/products/${search}`,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    data=await data.json();
    products.innerHTML =data.reduce((acc,item)=>{
        acc+=`<div id=${item._id}>
        <img src=${item.image} alt="">
        <h3>  ${item.brand}</h3>
        <p id="name">  ${item.name}</p>
        <div id="price">
        <h4>  Rs.${item.price}</h4>
        <p> <strike>Rs.${item.mrp}</strike></p>
        <p id="discount">  ${item.discount}<p>
        </div>
    </div>`
    return acc
    },``)
})();

  document.getElementById('pagination').addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      let page=event.target.innerText;
      (async()=>{
        let data=await fetch(`http://127.0.0.1:3000/products/${search}?page=${page}`,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        data=await data.json();
        if(data.length){
            products.innerHTML="";
        products.innerHTML =data.reduce((acc,item)=>{
            acc+=`<div id=${item._id}>
            <img src=${item.image} alt="">
            <h3>  ${item.brand}</h3>
            <p id="name">  ${item.name}</p>
            <div id="price">
            <h4>  Rs.${item.price}</h4>
            <p> <strike>Rs.${item.mrp}</strike></p>
            <p id="discount">  ${item.discount}<p>
            </div>
        </div>`
        return acc
        },``)
        }else{
            products.innerHTML="<h2>No More results found<h2>";
        }
        
    })();
    }
  });