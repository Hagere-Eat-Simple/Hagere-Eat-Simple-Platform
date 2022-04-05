 
window.onload = function() {
    trendDisplay();
    }
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');
    
    menu.onclick = () =>{
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    }
    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header .navbar a');
    
    window.onscroll = () =>{
    
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
    
      section.forEach(sec =>{
    
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
          });
        };
    
      });
    
    }
    
    
    document.querySelector('#search-icon').onclick = () =>{
      document.querySelector('#search-form').classList.toggle('active');
    }
    
    document.querySelector('#close').onclick = () =>{
      document.querySelector('#search-form').classList.remove('active');
    }
    
    var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });
    
    var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      loop:true,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    
    function loader(){
      document.querySelector('.loader-container').classList.add('fade-out');
    }
    
    function fadeOut(){
      setInterval(loader, 3000);
    }
    
    window.onload = fadeOut;
    
    function func(){
      document.querySelector('#sidebar').classList.toggle('active');
    }
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    function trendDisplay(m, n)
    {
    
      function Restaurant(name,src,alt)
      {
        this.name=name;
        this.src=src;
        this.alt=alt;
      }
      const trend=[];
      trend[0]=new Restaurant("Cascara Coffee and Cocktail","resources/images/cofee.jfif","Logo of Restaurant");
      trend[1]=new Restaurant("Yod Abissinya Cultural Food","resources/images/kitfobeaybe.jfif","Logo of Restaurant");
      trend[2]=new Restaurant("Damas Habesha Resturant","resources/images/tibs.jfif","Logo of Restaurant");
      trend[3]=new Restaurant("Pizza Hut","resources/images//pizza.jfif","Logo of Restaurant");
      trend[4]=new Restaurant("OM Indian Bistro","resources/images/dish-5.png","Logo of Restaurant");
      trend[5]=new Restaurant("In Joy Burger","resources/images/burgeriza.jfif","Logo of Restaurant");
      
      for(let i=0 ; i<trend.length;i++)
      {
      let x=trend[i].name;
      let y=trend[i].src;
      let z=trend[i].alt;
      let a=document.createElement("img");
      a.setAttribute("src",y);
      a.setAttribute("alt",z);
    
      let b=document.createElement("h3");
      let d=document.createTextNode(x);
      b.appendChild(d);
    
      let e=document.createElement("a");
      let f=document.createTextNode("Visit");
      e.appendChild(f);
      e.setAttribute("class","btn");
      e.setAttribute("href","");
    
      let g=document.createElement("br");
      let h=document.createElement("br");
    
    
      let c=document.createElement("div");
      c.setAttribute("class","box");
      c.appendChild(a);
      c.appendChild(b);
      c.appendChild(g);
      c.appendChild(h);
      c.appendChild(e);
      
    
      document.getElementById("boxContain").appendChild(c);}
    }

    function hub(){
        var x = document.getElementById("hub").value;
        if (x==='Bole'){  
          m = 2
          n = 0
        }
    }


    function select()
    {
      
      var hub = document.getElementById("hub").value;

      if(hub=="Bole")
      {
        document.getElementById("Bole").style.display = "block";
        document.getElementById("Bole1").style.display = "block";
        document.getElementById("bisrate gebrail").style.display = "none";
       document.getElementById("bisrate gebrail1").style.display = "none";
        document.getElementById("sarbet").style.display = "none";
        document.getElementById("sarbet1").style.display = "none";

      }

      if(hub == "bisrate gebrail")
      {
        document.getElementById("bisrate gebrail").style.display = "block";
        document.getElementById("bisrate gebrail1").style.display = "block";
        document.getElementById("Bole").style.display = "none";
        document.getElementById("Bole1").style.display = "none";

        document.getElementById("sarbet").style.display = "none";
        document.getElementById("sarbet1").style.display = "none";

      }

      if(hub == "sarbet")
      {
        document.getElementById("sarbet").style.display = "block";
          document.getElementById("sarbet1").style.display = "block";
        document.getElementById("Bole").style.display = "none";
        document.getElementById("bisrate gebrail").style.display = "none";
        document.getElementById("Bole1").style.display = "none";
        document.getElementById("bisrate gebrail1").style.display = "none";

      }
      if(hub=="all")
      {
         document.getElementById("sarbet").style.display = "block";
            document.getElementById("sarbet1").style.display = "block";
        document.getElementById("Bole").style.display = "block";
        document.getElementById("bisrate gebrail").style.display = "block";
        document.getElementById("Bole1").style.display = "block";
        document.getElementById("bisrate gebrail1").style.display = "block";

      } 
    }

    function search()
    {
      const trend = JSON.parse(localStorage.getItem("trend"));
      var search = document.getElementById("search-box").value;
      var c = document.getElementById("c");
      //window.alert(trend[1].pos);
      var i = 0;
      var state = true;
      while(true)
      {
        
        if(search == trend[i].name)
        {
          window.alert(" resturant found");
          const name = trend[i].name;
         // window.alert(name);
          
          
            if(name == "Cascara Coffee and Cocktail")
            {
              //window.alert(name);
              /*document.getElementById("bisrate gebrail").style.display = "none";
              document.getElementById("sarbet").style.display = "none";
              document.getElementById("bisrate gebrail1").style.display = "none";
              document.getElementById("sarbet1").style.display = "none";*/
             
              document.getElementById("Bole").style.backgroundColor = "green";
              document.getElementById("Bole").style.borderColor = "green";
              document.getElementById("Bole").style.borderWidth = "4px";
              document.getElementById("Bole").style.borderStyle = "dotted";


           
              
              

              
             
            }

            
            if(name == "Yod Abissinya Cultural Food")
            {
              document.getElementById("bisrate gebrail").style.backgroundColor = "green";
              document.getElementById("bisrate gebrail").style.borderColor = "green";
              document.getElementById("bisrate gebrail").style.borderWidth = "4px";
              document.getElementById("bisrate gebrail").style.borderStyle = "dotted";


         
              
              

           
             
            }

            if(name == "Damas Habesha Resturant")
            {
              document.getElementById("Bole1").style.backgroundColor = "green";
              document.getElementById("Bole1").style.borderColor = "green";
              document.getElementById("Bole1").style.borderWidth = "4px";
              document.getElementById("Bole1").style.borderStyle = "dotted";

             
            }

            if(name == "Pizza Hut")
            {
              document.getElementById("sarbet").style.backgroundColor = "green";
              document.getElementById("sarbet").style.borderColor = "green";
              document.getElementById("sarbet").style.borderWidth = "4px";
              document.getElementById("sarbet").style.borderStyle = "dotted";

             
            }

            if(name == "OM Indian Bistro")
            {
              document.getElementById("sarbet1").style.backgroundColor = "green";
              document.getElementById("sarbet1").style.borderColor = "green";
              document.getElementById("sarbet1").style.borderWidth = "4px";
              document.getElementById("sarbet1").style.borderStyle = "dotted";
             
            }

            if(name == "In Joy Burger")
            {
              document.getElementById("bisrate gebrail1").style.backgroundColor = "green";
              document.getElementById("bisrate gebrail1").style.borderColor = "green";
              document.getElementById("bisrate gebrail1").style.borderWidth = "4px";
              document.getElementById("bisrate gebrail1").style.borderStyle = "dotted";
             
            }
            
            
          
          window.alert(pos);
          state = true;
          break;
        }

        if(search != trend[i].pos)
        {
          
          state = false;
          
        }
        if(i == 6 && state == false)
        {
          window.alert("not found");

        }

        i++;
      }
     
      }
    

    
    
    
    
    
    
    
    
    
    
    
    
    