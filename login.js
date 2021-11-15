function validate()
	{


        var email= document.getElementById("email").value;
        var pwd= document.getElementById("pwd").value;  
        

        var mail = /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        var Password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]*)/;

            if(email.trim()==""||pwd.trim()==""){
                alert("Fields cannot be empty");
                return false;
            }
            else if (!mail.test(email))
            {
                alert('Invalid email');
                return false;
            }
            else if(!Password.test(pwd))
            {
                alert('Invalid Password');
                return false;
            }
            else
            {
            return true;
            }
    }