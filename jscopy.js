
function validate()
	{

		var name= document.getElementById("name").value;
		var phone= document.getElementById("phone").value;
		var email= document.getElementById("email").value;
		var pwd= document.getElementById("pwd").value;			
		var cpwd= document.getElementById("retype").value;
		
        //regex for mail,password,name
		var Name = /^[A-Z\sa-z]+$/;
		var mail = /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
		var Password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]*)/;
		
		var z = mobileno();
		
		if(name.trim()==""||phone.trim()==""||email.trim()==""||pwd.trim()==""||cpwd.trim()==""){
			alert('Fields cannot be empty');
			return false;
		}
	
		else if(!Name.test(name))
		{
			alert('Please check your name');
			return false;
		}
		
		else if(z==0)
		{
			alert('Phone number must be of 10 digits in any of the format xxxxxxxxxx, xxx xxx xxxx, xxx.xxx.xxxx, xxx-xxx-xxxx');
			return false;
		}

		else if (!mail.test(email))
		{
			alert('Invalid email');
			return false;
		}
				
		else if(!Password.test(pwd))
		{
			alert ('Upper case, Lower case and Numeric letter are required in Password field');
			return false;
		}
		
		else if(pwd != cpwd)
		{
			alert ('Password Mismatch');
			return false;
		}
		
	 	else
	 	{		
			return true; 		                            
              
	 	}
	}
	function mobileno(){
		var phone= document.getElementById("phone").value;
		var Mobile1 = /^([0-9]{10})$/
		var Mobile2 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
		var Mobile3 = /^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/
		var Mobile4 = /^([0-9]{3})\s([0-9]{3})\s([0-9]{4})$/
		if(Mobile1.test(phone)||Mobile2.test(phone)||Mobile3.test(phone)||Mobile4.test(phone)){
			return 1;
		}
		else{
			return 0;
		}

	}
	function passwordChanged() {
        var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]*)");
        var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var pwd = document.getElementById("pwd");
		if(pwd.value.length !== 0) {
			strength.style.display = 'block';
		} else {
			strength.style.display = 'none';
		}
		if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
		}
		
		
    }
