let products = document.getElementById("products");
(async()=>{
    let data=await fetch("https://fash-com.onrender.com/products",{
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
        event.target.innerText="Adding...";
        let res=await fetch(`https://fash-com.onrender.com/cart/${event.target.id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        });
        
        res=await res.json();
        if(res.msg=="Please Login to access"){
            alert(res.msg);
        }else{
            event.target.innerText="Added";
        }
    }})

  document.getElementById('pagination').addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      let page=event.target.innerText;
      (async()=>{
        let data=await fetch(`https://fash-com.onrender.com/products?page=${page}`,{
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