// JavaScript Document
var dagnr;
var weekdagnr;
var maandnr;
var maandMax;
var jaar;
var schrikkel;


$(document).ready(function ()
{
	getCompleteData();
	$('.dagnummer').empty();
	var dagnrs = $('.dagnummer');

	dagnr -= (weekdagnr-1);
	var counter = 0;
	jQuery.each(dagnrs, function(i){
		var hulp = dagnr+counter;
		if(hulp == maandMax)
		{
			dagnr = 0;
			counter = 0;
		}
		counter++;
		$(this).append('<p>'+hulp+'</p>');
	});

});
function getCompleteData()
{
	var huidigeTijd = new Date();
	dagnr = huidigeTijd.getDate();
	weekdagnr = huidigeTijd.getDay();
	maandnr = huidigeTijd.getMonth()+1;
	jaar = huidigeTijd.getFullYear();
	getSchrikkel(jaar);
	getMaxMonth(maandnr,schrikkel);
}
function getMaxMonth(maandnr, schrikkel)
{
	if(maandnr !=2)
	{
	switch(maandnr)
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			maandMax = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			maandMax = 30;
	}
	}
	else
	{
		if(schrikkel == true)
		{
			maandMax = 29;	
		}	
		else
		{
			maandMax = 28;	
		}
	}
}

function getSchrikkel(jaar)
{
	var hulp = jaar;
	var restG = jaar%4;
	var restS = hulp%100;
	var restS2 = hulp%400;
	schrikkel = false;
	if(restG == 0)
	{
		if(restS==0)
		{
			if(restS2 == 0)
				{
					schrikkel = true;	
				}
		}
		else
		{
			schrikkel = true;
		}	
	}	
}
