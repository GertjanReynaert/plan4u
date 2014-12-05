var loginOpen = false;
var signupOpen = false;

$(document).ready(function(){
	$('#loginbox').toggle();	//hide loginbox by default
	$('#signupbox').toggle();	//hide signupbox by default
	$('#signupbox').toggle();	//hide signupbox by default

	$('#login').click(function(){
		if(loginOpen == false)
		{
			if(signupOpen == true)
			{
				signupOpen = false;
				$('#signupbox').animate(
				{
   					left: "350px",
  				}
 			, 0 );
			}
			loginOpen = true;
			$('#loginbox').slideToggle(200);
		}
		else
		{
			loginOpen = false;
			$('#loginbox').slideToggle(200);
		}
	});
	$('#signup').click(function(){
		if(signupOpen == false)
		{
			if(loginOpen == true)
			{
				loginOpen = false;
				$('#loginbox').toggle();
			}
			signupOpen = true;
			$('#signupbox').animate(
				{
   					left: "0px",
  				}
 			, 200 );
		}
		else
		{
			signupOpen = false;
			$('#signupbox').animate(
				{
   					left: "350px",
  				}
 			, 200 );
		}
	});
});