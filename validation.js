function validate() {
    var mail = document.getElementById("text").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    
     if( regx.test(mail)) {
         alert("Provided Mail Is Valid")
         return true
     } else{
         alert("Provided Mail Id Is Not Valid")
         return false;
     }
    }