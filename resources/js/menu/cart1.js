function openModel(){
   const model = document.getElementById('container')
   const overlay = document.getElementById('overlay')
     model.classList.add('active')
     overlay.classList.add('active')
     const c = document.getElementById('cart').style.backgroundColor="blue";
 
}
function closeModel(){
   const model = document.getElementById('container')
   const overlay = document.getElementById('overlay')
     model.classList.remove('active')
     overlay.classList.remove('active')
     const c = document.getElementById('cart').style.backgroundColor="#eee";
}
function closeouter(){
 const model = document.querySelectorAll('.container.active')
 model.forEach(model => {
     closeModel();
 })
}
function openModel(){
   const model = document.getElementById('container')
   const overlay = document.getElementById('overlay')
     model.classList.add('active')
     overlay.classList.add('active')
     const c = document.getElementById('cart').style.backgroundColor="blue";
 
}
function closeModel(){
   const model = document.getElementById('container')
   const overlay = document.getElementById('overlay')
     model.classList.remove('active')
     overlay.classList.remove('active')
     const c = document.getElementById('cart').style.backgroundColor="#eee";
}
function closeouter(){
 const model = document.querySelectorAll('.container.active')
 model.forEach(model => {
     closeModel();
 })
}


 




function openModel1(){
  const model = document.getElementById('containerpay')
  const overlay = document.getElementById('overlay1')
    model.classList.add('active')
    overlay.classList.add('active')

}
function closeModel1(){
  const model = document.getElementById('containerpay')
  const overlay = document.getElementById('overlay1')
    model.classList.remove('active')
    overlay.classList.remove('active')
}
function closeouter1(){
const model = document.querySelectorAll('.containerpay.active')
model.forEach(model => {
    closeModel();
})
}
/*
  function menuDisplay()
  {
  
    function Food(name,src,price)
    {
      this.name=name;
      this.src=src;
      this.price=price;
    }
    const food-cont=[];
    food-cont[0]=new Food("Banana-bread","photos/banana-bread.jfif","120 birr");
    food-cont[1]=new Food("French Toast","photos/frencht.jfif","130 birr");

    for(let i=0;i<food-cont.length;i++)
    {
    let x=food-cont[i].name;
    let y=food-cont[i].src;
    let z=food-cont[i].price;
    let a=document.createElement("img");
    a.setAttribute("src",y);
    a.className = "food-image"
  
    let e=document.createElement("a");
    let f=document.createTextNode("Add to cart");
    e.appendChild(f);
    e.setAttribute("class","btn btn-primary  order-now");
    e.setAttribute("href","");
  
    
  
    let c=document.createElement("div");
    let g=document.createElement("div");
    c.className = "box"
    let h=document.createElement("h3");
    h.className = "food-title"
    let fd = document.createElement("div")
    fd.className = "shop-item-details"
    let fp = document.createElement("span")
    fd.className = "food-price"
    var til = document.createElement("summary")
    til.innerText = "New foods"
    til.setAttribute("id" , "glow")

    c.setAttribute("class","pos1");
    fd.appendChild(e)
    fd.appendChild(fp);
    g.appendChild(fd);
    g.appendChild(h);
    g.appendChild(a);
    c.appendChild(g);
    var new1 = document.getElementById("pos")
    new.appendChild(til)
    new1.appendChild(c);}
  }
  */
  
  
  
  
  
  
  
  
  


 