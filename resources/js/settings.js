
/*function loadme()
{
    var c = String(localStorage.getItem("currentuser"));
    var n = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+n));
    
    
   
}*/

function change1()
{
    var c = String(localStorage.getItem("currentuser"));
    var n = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+n));
    var cemail = personc[3];
    var nemail = document.getElementById("email").value;
    if(nemail == "")
    {
        window.alert("Please fill out the field.");
    }

    var reg =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(reg.test(nemail) == true)
    {
        personc[3] = nemail;
        localStorage.setItem("currentuser","user"+(n));
        localStorage.setItem("person" +n, JSON.stringify(personc));
        window.alert("Email Has Been Changed");
    }
}

function change2()
{
    var c = String(localStorage.getItem("currentuser"));
    var n = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+n));
    var cphone = personc[4];
    var nphone = document.getElementById("tel").value;
    if(nphone == "")
    {
        window.alert("Please fill out the field.");
    }
    var reg1 =  /^\d{10}$/;
    if(reg1.test(nphone) == true)
    {
        personc[4] = nphone;
        localStorage.setItem("currentuser","user"+(n));
        localStorage.setItem("person" +n, JSON.stringify(personc));
        window.alert("Your registered Phone Number has been changed.");
    }
}
function change3()
{
     var c = String(localStorage.getItem("currentuser"));
    var n = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+n));
    var ph = personc[4];
    let x1=document.getElementById("p1").value;
    let x2=document.getElementById("p2").value;
    let x3=document.getElementById("p3").value;
    if((x1 == "")||(x2 == "")||(x3 == ""))
    {
        window.alert("Please fill out the field.");
    }
    if((x1==ph)&&(x2==x3))
    {
        personc[5] = x3;
        localStorage.setItem("currentuser","user"+(n));
        localStorage.setItem("person" +n, JSON.stringify(personc));
        window.alert("Your Password has been changed.");
    }

}