function submitValues()
 {
     var user, pass;
     user = document.getElementById("user").value;
     pass = document.getElementById("pass").value;
     if(user == "abcd" && pass == "1234")
     {
        window.location = "../html/home.html";
     }
     else
     {      
         alert("Wrong Credentials");
     }
     return true;
 }