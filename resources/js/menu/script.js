window.onload = function() {
isregistered();
}

function logout()
{
  let conf=confirm("Are You Sure You Want to Log Out?");
  if(conf==true){
  localStorage.removeItem("currentuser");
  location.reload();
}
}








