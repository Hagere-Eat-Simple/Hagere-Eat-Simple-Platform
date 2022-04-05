function openModel(){
    const model = document.getElementById('container')
    const overlay = document.getElementById('overlay')
      model.classList.add('active')
      overlay.classList.add('active')
  
 }
 function closeModel(){
    const model = document.getElementById('container')
    const overlay = document.getElementById('overlay')
      model.classList.remove('active')
      overlay.classList.remove('active')
  
 }
 function closeouter(){
  const model = document.querySelectorAll('.container.active')
  model.forEach(model => {
      closeModel();
  })
 }

 var state = true;
 if(localStorage.getItem("count")==null)
  {localStorage.setItem("count",0);}
 c = Number((localStorage.getItem("count")));
 function validate1()
 {
  var fname = document.getElementById("fname").value;
   
  var regName = /^[A-Za-z]+$/;
  
  
  if(regName.test(fname) == false)
  {
    //window.alert("incorrect first name");
   
    state = false;
  }
 }

 function change1()
 {
  var fname = document.getElementById("fname").value;
  var regName = /^[A-Za-z]+$/;
  if(regName.test(fname) == true)
  {
    //window.alert("incorrect first name");
    document.getElementById("v1").src = "../images/v1.jfif"; 
  }
  else
  {
    document.getElementById("v1").src = "../images/n1.png";

  }
 }

 

 function validate2()
 {
  var regName = /^[A-Za-z]+$/;
  var lname = document.getElementById("lname").value;
  if(regName.test(lname) == false)
  {
    //window.alert("incorrect last name");
    state = false;
    
  }
 }
 function change2()
 {
  var lname = document.getElementById("lname").value;
  var regName = /^[A-Za-z]+$/;
  if(regName.test(lname) == true)
  {
    //window.alert("incorrect first name");
    document.getElementById("v2").src = "../images/v1.jfif";    
  }

  else
  {
    document.getElementById("v2").src = "../images/n1.png";
  } 
 }

 function validate3()
 {
  var regName1 = /^[a-zA-Z0-9_\.]+(@)+(hes.com)/;
  var username = document.getElementById("username").value;
  if(regName1.test(username) == false)
  {
    //window.alert("incorrect username");
    state = false;
  }
 }

 function change3()
 {
   let count = 0;
  var username = document.getElementById("username").value;
  var regName1 = /^[a-zA-Z0-9_\.]+(@)+(hes.com)/;
  let l = localStorage.length;
  if(regName1.test(username) == true)
  {
    for(let i = 0 ; i < l; i++)
    {
      if(username == localStorage.getItem(localStorage.key(i)))
      {
        document.getElementById("v3").src = "../images/n1.png";
    
      }
    if(username != localStorage.getItem(localStorage.key(i)))
    {
      count++;    
      if(count >(l-1))
      {
       
        document.getElementById("v3").src = "../images/v1.jfif";
        break;
      }    
    }
  } 
  }  
 }

 function validate4()
 {
  var regName2 =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var email = document.getElementById("email").value;
  if(regName2.test(email) == false)
  {
   // window.alert("incorrect email");
   state = false; 
  }
  state = true;
 }

 function change4()
 {
  var regName2 =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var email = document.getElementById("email").value;
  if(regName2.test(email) == true)
  {
    //window.alert("incorrect first name");
    document.getElementById("v4").src = "v1.jfif";
  }
  else
  {
    document.getElementById("v4").src = "n1.png";
  }
 }

 function validate5()
 {
  var regName3 =  /^\d{10}$/;
  var tel = document.getElementById("tel").value;


  if(regName3.test(tel) == false)
  {
   //window.alert("incorrect phone number");
   state = false;

  }
 }

 function change5()
 {
  var regName3 =  /^\d{10}$/;
  var tel = document.getElementById("tel").value;
  if(regName3.test(tel) == true)
  {
    //window.alert("incorrect first name");
    document.getElementById("v5").src = "v1.jfif";
  }

  else
  {
    document.getElementById("v5").src = "n1.png";
  }
}

 function validate6()
 {
  var regName4 =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  var password = document.getElementById("password").value;

  if(regName4.test(password) == false)
  {
   window.alert("incorrect password");
   state = false;
  }
 }
 function change6()
 {
  var regName4 =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  var password = document.getElementById("password").value;
  if(regName4.test(password) == true)
  {
    //window.alert("incorrect first name");
    document.getElementById("v6").src = "v1.jfif";
  }
  else
  {
    document.getElementById("v6").src = "n1.png";
  }       
 }

 function validate7()
 {
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  if(password2 != password)
  {
   // window.alert("dont macht");
   
  }

 }

 function change7()
 {
  var password2 = document.getElementById("password2").value;
  var password = document.getElementById("password").value;
  if(password == password2)
  {
    //window.alert("incorrect first name");
    document.getElementById("v6").src = "v1.jfif";
    document.getElementById("v7").src = "v1.jfif"; 
  }

  else
  {
    document.getElementById("v6").src = "n1.png";
    document.getElementById("v7").src = "n1.png";
  }    
 }
 function validate8()
 {
  for(let i = 0 ; i < localStorage.length; i++ )
  {
    if(username.value == localStorage.getItem(localStorage.key(i)))
    {
      state = false;
      window.alert("username already in use");
      break;
      
    }
  }

 }

 function display()
 {
  if(state == true)
  {
   localStorage.setItem("user"+c,username.value);
   let token=2000;
   const db = [fname.value,lname.value,username.value,email.value,tel.value,password.value,token.value];
   localStorage.setItem("person"+c,JSON.stringify(db));
   c = Number((localStorage.getItem("count")));
   localStorage.removeItem("count");
   localStorage.setItem("count",c+1);
   c= Number(localStorage.getItem("count"));
   localStorage.setItem("currentuser","user"+(c-1));
   isregistered();
  }
 }


 
  


 


