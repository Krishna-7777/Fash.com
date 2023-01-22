let products = document.getElementById("products");
(async()=>{
    let data=await fetch("http://127.0.0.1:3000/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    data=await data.json();
    products.innerHTML =data.reduce((acc,item)=>{
        acc+=`<div >
        <img src=${item.image} alt="">
        <h3>  ${item.brand}</h3>
        <p id="name">  ${item.name}</p>
        <div id="price">
        <h4>  Rs.${item.price}</h4>
        <p> <strike>Rs.${item.mrp}</strike></p>
        <p id="discount">  ${item.discount}<p>
        </div>
        <button id=${item._id}>Add to Cart</button>
    </div>`
    return acc
    },``)
})();

products.addEventListener('click', async(event) => {
    if (event.target.nodeName === 'BUTTON') {
        let res=await fetch(`http://127.0.0.1:3000/cart/${event.target.id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        });
        res=await res.json();
        if(res.msg=="Please Login to access"){
            alert(res.msg);
        }
    }})

  document.getElementById('pagination').addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      let page=event.target.innerText;
      (async()=>{
        let data=await fetch(`http://127.0.0.1:3000/products?page=${page}`,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        data=await data.json();
        products.innerHTML="";
        products.innerHTML =data.reduce((acc,item)=>{
            acc+=`<div >
            <img src=${item.image} alt="">
            <h3>  ${item.brand}</h3>
            <p id="name">  ${item.name}</p>
            <div id="price">
            <h4>  Rs.${item.price}</h4>
            <p> <strike>Rs.${item.mrp}</strike></p>
            <p id="discount">  ${item.discount}<p>
            </div>
            <button id=${item._id}>Add to Cart</button>
        </div>`
        return acc
        },``)
    })();
    }
  });