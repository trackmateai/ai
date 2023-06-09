
function getAccess(){
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

        if(username=="Masele"&&password=="Mypass"){
            
            window.location.href = "html2.html";
        }
         else{

            alert('Wrong Credential! Please make sure to create an Account');
         }



    
 }

