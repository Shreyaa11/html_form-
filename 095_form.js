function btnClick() {
            var uid = document.getElementById("nm").value;
            var uidPattern = /^[A-Z|a-z]{5,15} [A-Z|a-z]{5, 15}$/;
            if (!uidPattern.test(uid)){
                document.getElementById("nm").value ="";
                document.getElementById("err").innerHTML="invalid username";
                document.getElementById("err").focus();
                return;
            } else {
                document.getElementById("err").innerHTML="";
            }

            var email = document.getElementById("email").value;
            var emailPattern = /^[\w\.-]{6,15}@[\w]{3,5}\.[a-z]{3,5}$/;
            if(!emailPattern.test(email)){
                document.getElementById("email").value="";
                document.getElementById("errmail").innerHTML = "invalid email id";
                document.getElementById("email").focus();
                return;
            } else {
                document.getElementById("errmail").innerHTML="";
            }

            
        }

        

            
        