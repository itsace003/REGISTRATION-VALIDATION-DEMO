function validate(id) {
	
  var f_name = document.getElementById("fname").value;
  var l_name = document.getElementById("lname").value;
  var g_ender = document.getElementById("gender").value;
  var d_ob = document.getElementById("dob").value;
  var e_mail = document.getElementById("email").value;
  var pwd_1 = document.getElementById("pwd1").value;
  var pwd_2 = document.getElementById("pwd2").value;
  
  var emailReg = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  var namecheck=/^[A-Za-z. ]{3,30}$/;
  var passcheck=/^([a-zA-Z0-9@*#]{8,15})$/;
  var datecheck=/(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
		
	if (f_name != '' && l_name != '' && g_ender != '' && d_ob != '' && e_mail != '' && pwd_1 != '' && pwd_2 != '')
		{
		if (e_mail.match(emailReg)) 
			{
			if (f_name.match(namecheck)) 
				{
				if (l_name.match(namecheck)) 
					{
					if (pwd_1.match(passcheck)) 
						{
						if (pwd_1 == pwd_2) 
							{
							if (d_ob.match(datecheck))
								{
								return true;
								}
							else 
								{
								alert("Date Invalid...!!!");
								return false;
								}
							}
						else 
							{
							alert("Both Password Donot Match...!!!");
							return false;
							}
						}
					else 
						{
						alert("Check Password Format...!!!");
						return false;
						}
					}
				else 
					{
					alert("Check Last Name...!!!");
					return false;
					}
				}
			else 
				{
				alert("Check First Name...!!!");
				return false;
				}
			}
		else 
			{
			alert("Invalid Email Address...!!!");
			return false;
			}
		}
	else 
		{
		alert("All fields are required.....!");
		return false;
		}
	
}

function frstname(fname)
{
	var f_name = document.getElementById("fname").value;
	var namecheck=/^[A-Za-z. ]{3,30}$/;
	
	if (f_name.match(namecheck)) 
		{
		document.getElementById("f_name_error").innerHTML = "No errors";
		return true;
		}
	else 
		{
		document.getElementById("f_name_error").innerHTML = "Invalid First Name";
		return false;
		}
		
}

function lstname(lname)
{
	var l_name = document.getElementById("lname").value;
	var namecheck=/^[A-Za-z. ]{3,30}$/;
	
	if (l_name.match(namecheck)) 
		{
		document.getElementById("l_name_error").innerHTML = "No errors";
		return true;
		}
	else 
		{
		document.getElementById("l_name_error").innerHTML = "Invalid Last Name";
		return false;
		}
		
}

function gndr(gender)
{
	var g_ender = document.getElementById("gender").value;
	
	if (g_ender != "") 
		{
		document.getElementById("gender_error").innerHTML = "No errors";
		return true;
		}
	else
		{
		return false;
		}
}

function d_o_b(dob)
{
	var d_ob = document.getElementById("dob").value;
	var datecheck=/(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
	
	if (d_ob.match(datecheck)) 
		{
		document.getElementById("dob_error").innerHTML = "No errors";
		return true;
		}
	else 
		{
		document.getElementById("dob_error").innerHTML = "Date Invalid";
		return false;
		}
		
}

function i_d(email)
{
	var i_d = document.getElementById("email").value;
	var emailReg = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	
	if (i_d.match(emailReg)) 
		{
		document.getElementById("id_error").innerHTML = "No errors";
		return true;
		}
	else 
		{
		document.getElementById("id_error").innerHTML = "Invalid Email Type";
		return false;
		}
		
}

function p_w_d(pwd1,pwd2)
{
	var pw_d1 = document.getElementById("pwd1").value;
	var pw_d2 = document.getElementById("pwd2").value;
	var passcheck=/^([a-zA-Z0-9@*#]{8,15})$/;
	
	if (pw_d1.match(passcheck)) 
		{
		if (pw_d1 == pw_d2) 
			{
			document.getElementById("pwd_error").innerHTML = "No errors";
			return true;
			}
		else 
			{
			document.getElementById("pwd_error").innerHTML = "Both Password Donot Match";
			return false;
			}
		}
	else 
		{
		document.getElementById("pwd_error").innerHTML = "Check Password Format";
		return false;
		}
		
}