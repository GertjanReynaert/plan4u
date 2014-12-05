// JavaScript Document
var activepop = null;
var hei = null;
var wi = null;


function popup(windowname, h, w) {
        blanket_size(windowname,h);
        window_pos(windowname,w);
        toggle('blanket');
        toggle(windowname);    
		  if(activepop == null)
			{
				activepop = windowname;
				hei = h;
				wi = w;
			}
			else
			{
				activepop = null;
				hei = null;
				wi = null;
				/*$('.wrap').empty();*/
			}        
}
function toggle(div_id) {
        var el = document.getElementById(div_id);
        if ( el.style.display == 'none' ) {     el.style.display = 'block';}
        else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar,h) {
        blanket_height = window.innerHeight;
        var blanket = document.getElementById('blanket');
        blanket.style.height = blanket_height + 'px';
        var popUpDiv = document.getElementById(popUpDivVar);
        popUpDiv_height=(blanket_height-h)/2;
        popUpDiv.style.top = popUpDiv_height + 'px';
        popUpDiv.style.height = h + 'px';
}
function window_pos(popUpDivVar,w) {
        window_width = window.innerWidth;
        var popUpDiv = document.getElementById(popUpDivVar);
        window_width=(window_width-w)/2;
        popUpDiv.style.left = window_width + 'px';
        popUpDiv.style.width = w + 'px';
}

function resizer(naam, hoogte, breedte)
{
	if(!(naam == null))
	{
		blanket_size(naam,hoogte);
		window_pos(naam,breedte);
	}
}
function test()
{
		n = activepop;
		h = hei;
		w = wi;
		resizer(n,h,w);
}
function getActivePopName()
{
	return activepop;
}
window.addEventListener('resize', test,true);

function popcontent(strcontent)
{
	if(strcontent == "empty")
	{
		$('#wrap').empty();
	}
	else
	{
		$('#wrap').append(strcontent);
	}
}