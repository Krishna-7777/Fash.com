
(async()=>{
    let data=await fetch("https://fash-com.onrender.com/cart",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    })
    data=await data.json();
        if(data.msg=="Please Login to access"){
            alert(data.msg);
        }else if(data.length==0){
            console.log(1);
            document.getElementById('heading').append("You haven't added anything!")
        }
    document.getElementById('main').innerHTML =data.reduce((acc,item)=>{
        acc+=`<div >
        <h3>  ${item.brand}</h3>
        <p id="name">  ${item.name}</p>
        <div id="price">
        <h4>  Rs.${item.price}</h4>
        <p> <strike>Rs.${item.mrp}</strike></p>
        <p id="discount">  ${item.discount}<p>
        </div>
        <img src=${item.image} alt="">
    </div>`
    return acc
    },``)
})();