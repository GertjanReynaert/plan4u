// JavaScript Document
$('document').ready(function() {
	//hide box on load
	$('#feedbackbox').toggle();
	//add click eventlistener to label
	$('#feedbacklabel').click(function(){
			$('#feedbackbox').toggle();
		})
	//add click eventlistener to verzend button
	$('#verzendfeedback').click(function(){
			$('#feedbackbox').toggle();
		})
	
	
	//hide settings on load
	$('#accountsettings').toggle();
	//add click event to all aside tags, the only aside is in the header-tag with the username
	$('aside').click(function(){
		$('#accountsettings').slideToggle(200);
		})
	$('#accountdrop p').click(function(){
		popup('pops',400,450);
		popcontent('<h2>Kijk in accountdropfeedback.js naar de laatste.click functie</h2>');
		$('#accountsettings').slideToggle(200);
		})
		
});
