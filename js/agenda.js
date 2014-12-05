// JavaScript Document
$('document').ready(function() {
	var color = "";
	var title = "";
	var data = "";
	
	//click function om nieuwe agenda aan te maken
	$('#agbuttonnew').live('click',function(){
			popup('pops',400,500);
			popcontent('<input type="text" placeholder="Agendatitel" id="newagendatitle"/><div id="colorpicker"><h2>Color</h2><div class="colorpick red"></div><div class="colorpick orange"></div><div class="colorpick yellow"></div><div class="colorpick green"></div><div class="colorpick blue"><div class="selected"><p>✓</p></div></div></div>	<div id="agendaborders"><nav><p>Agendaborders</p><p class="borderchoice">One border</p><p class="">Multiple borders</p></nav><div id="borderbox"><div id="oneborder"><div class="before nonselectable"><p>00</p></div><div id="hourbox" class="nonselectable"><span class="borderhour"><p>0</p></span><span class="borderhour"><p>1</p></span><span class="borderhour"><p>2</p></span><span class="borderhour"><p>3</p></span><span class="borderhour"><p>3</p></span><span class="borderhour"><p>4</p></span><span class="borderhour"><p>5</p></span><span class="borderhour"><p>6</p></span><span class="borderhour"><p>7</p></span><span class="borderhour"><p>8</p></span><span class="borderhour"><p>9</p></span><span class="borderhour"><p>10</p></span><span class="borderhour"><p>11</p></span><span class="borderhour"><p>12</p></span><span class="borderhour"><p>13</p></span><span class="borderhour"><p>14</p></span><span class="borderhour"><p>15</p></span><span class="borderhour"><p>16</p></span><span class="borderhour"><p>17</p></span><span class="borderhour"><p>18</p></span><span class="borderhour"><p>19</p></span><span class="borderhour"><p>20</p></span><span class="borderhour"><p>21</p></span><span class="borderhour"><p>22</p></span><span class="borderhour"><p>23</p></span><span class="borderhour"><p>0</p></span></div><div class="after nonselectable"><p>00</p></div></div></div></div><div id="submitnewagenda" class="button"><p>Submit</p></div>');
			var agendatitel = "";
			var agendacolor = "";
			var agendadata = "";
			var fncSubmit = function()
			{
				agendatitel = $('#newagendatitle').val();
				$('#newagendatitle').val("");
				if(agendatitel != "")//enkel de titel moet ingevuld worden, border en color kunnen op default geplaatst worden
				{
					agendatitel = agendatitel.toLowerCase();
					//get agendacolor
					agendacolor = getColor($('.colorpick').children('.selected').parent().attr('class'));
					//get agendaborders
					
					$('#agendas').append('<div class="agenda '+agendacolor+'" id="'+agendatitel+'"><div class="agendaheader"><div class="agendasettings"><img src="pictures/gear.png" alt=""/></div><div class="agendatitel"><p>'+agendatitel+'</p></div><div class="addnote"><p>+</p></div></div><div class="agendanotes"></div></div>');
			
					
					$('#submitnewagenda').unbind('click',fncSubmit);
					popup('pops',400,500);
					popcontent('empty');
				}
			}
			$('#submitnewagenda').bind('click',fncSubmit);
			
		});
		
	//add click eventlistener to all the gear images
	$('.agendasettings').live('click',function(){
			popcontent('<input type="text" id="setupagendatitle"/><div id="colorpicker"><h2>Color</h2><div class="colorpick red"></div><div class="colorpick orange"></div><div class="colorpick yellow"></div><div class="colorpick green"></div><div class="colorpick blue"></div></div><div id="agendaborders"><nav><p>Agendaborders</p><p class="borderchoice">One border</p><p class="">Multiple borders</p></nav><div id="borderbox"><div id="oneborder"><div class="before nonselectable"><p>00</p></div><div id="hourbox" class="nonselectable"><span class="borderhour"><p>0</p></span><span class="borderhour"><p>1</p></span><span class="borderhour"><p>2</p></span><span class="borderhour"><p>3</p></span><span class="borderhour"><p>3</p></span><span class="borderhour"><p>4</p></span><span class="borderhour"><p>5</p></span><span class="borderhour"><p>6</p></span><span class="borderhour"><p>7</p></span><span class="borderhour"><p>8</p></span><span class="borderhour"><p>9</p></span><span class="borderhour"><p>10</p></span><span class="borderhour"><p>11</p></span><span class="borderhour"><p>12</p></span><span class="borderhour"><p>13</p></span><span class="borderhour"><p>14</p></span><span class="borderhour"><p>15</p></span><span class="borderhour"><p>16</p></span><span class="borderhour"><p>17</p></span><span class="borderhour"><p>18</p></span><span class="borderhour"><p>19</p></span><span class="borderhour"><p>20</p></span><span class="borderhour"><p>21</p></span><span class="borderhour"><p>22</p></span><span class="borderhour"><p>23</p></span><span class="borderhour"><p>0</p></span></div><div class="after nonselectable"><p>00</p></div></div></div></div><div id="confirmagendasetup" class="button"><p>Submit</p></div><div id="deleteagenda" class="button red"><p>Delete</p></div>');

		//plaats de originele titel als value in het inputveld
		title = $(this).parent().parent().attr('id');
		title = title.substring(0,1).toUpperCase()+title.substring(1,title.length).toLowerCase();
		$('#setupagendatitle').val(""+title+"");
		
		//selecteer de originele kleur
		color = getColor($(this).parent().parent().attr('class'));
		$('.colorpick.'+color+'').append('<div class="selected"><p>✓</p></div>');
		
		//stel de sliders in op de juiste positie dmv datastring
		
		//open het popupvenster
		popup('pops',400,500);
	})
	$('#confirmagendasetup').live('click',function(){
				title = title.toLowerCase();				//doe oude titel in kleine letters
				var agenda = $('#'+title+'');				//zoek de juiste agenda adh van de oude titel
				var prevColor = getColor(agenda.attr('class'));	//zoek het oude kleur (om met removeclass te verwijderen)
				
				//zoek nieuwe dingen
					//zoek nieuwe titel
				title = $('#setupagendatitle').val();
				title = title.toLowerCase();
				//controle of de agendatitel uniek is
				//indien correct titel gebruiken
				agenda.attr('id',title);
				title = title.substr(0,1).toUpperCase()+title.substr(1,title.length).toLowerCase();
				agenda.children().children('.agendatitel').children('p').replaceWith('<p>'+title+'</p>')
					//zoek nieuw kleur en vernieuw het agendakleur
				var newColor =  getColor($('.colorpick').children('.selected').parent().attr('class'));
				agenda.removeClass(prevColor).addClass(newColor);	
				
				popup('pops',400,450);		//verberg de popup
				popcontent('empty');
				//reset title en deselect colorpick voor volgende keer	
				title ="";
			$('.colorpick').empty();	
			})	
	$('#newagenda .locker').live('click',function(){
			$('.after').bind('mousedown',slider);
			$('.before').bind('mousedown',slider);
			popup('pops',0,0);
			popcontent('empty');
		});
	$('#agendasetup .locker').live('click',function(){
			//om na de setup de titel terug leeg te maken
			title ="";
			$('.colorpick').empty();
			popup('pops',0,0);
			popcontent('empty');
		});
	$('#deleteagenda').live('click', function () {
		title = title.toLowerCase();
		$('#'+title+'').remove();
		title = "";
		$('.colorpick').empty();
		popup('pops',0,0);
		popcontent('empty');
	})
	
	$('.colorpick').live('click',function () {
			$('.colorpick').empty();
			$(this).append('<div class="selected"><p>✓</p></div>');
		})
	
		var down = false;
		var slider = function(e){
			down = true;
			$(this).live('mousemove',sliding);
			}
		var sliding = function(e){
				var lefter = $('#pops').css('left');
				lefter = parseInt(lefter.substr(0,lefter.length-2));
				var x_offset = (lefter+20)*(-1);
				var xpos = e.pageX+x_offset;
				if(xpos > 3 && xpos < 455) 
				{
					var hourpwidth = $('#hourbox p').css('width');
					hourpwidth = hourpwidth.substring(0,hourpwidth.length-2);
					var marginp = -1;
					hourpwidth = parseInt(hourpwidth) +(marginp);

					var hulp = xpos;					
					hulp -= 3;
					var rest = hulp%hourpwidth;
					
					if((rest>=0) && (rest< (hourpwidth/4)))
					{
						var kwartier = "00";
						$(this).children('p').replaceWith('<p>'+kwartier+'</p>');
					}
					else if((rest >= (hourpwidth/4)) && (rest < (hourpwidth/2)))
					{
						var kwartier = "15";
						$(this).children('p').replaceWith('<p>'+kwartier+'</p>');	
					}
					else if((rest >= (hourpwidth/2)) && (rest<((hourpwidth/4)*3)))
					{
						var kwartier = "30";
						$(this).children('p').replaceWith('<p>'+kwartier+'</p>');
					}
					else if((rest >= ((hourpwidth/4)*3))&&(rest <= hourpwidth))
					{
						var kwartier = "45";
						$(this).children('p').replaceWith('<p>'+kwartier+'</p>');
					}
					$(this).css('left', xpos).css('display', 'block');
				}
				$(this).mouseup(function(){
					if(down ==true)
					{
						$(this).die('mousemove',sliding);
						down=false;
						
					}
				});
			}
		
		$('.after').live('mousedown',slider);
		$('.before').live('mousedown',slider);
});
function getColor(colorstring)
{
		var resultaat="";
	
		var regexred = /red/;
		var regexorange=/orange/;
		var regexyellow = /yellow/;
		var regexgreen = /green/;
		var regexblue = /blue/;
		
		if(colorstring.search(regexred) >= 0)
		{
			resultaat='red';
		}
		else if(colorstring.search(regexorange) >=0)
		{
			resultaat="orange";
		}
		else if(colorstring.search(regexyellow) >= 0)
		{
			resultaat = 'yellow';
		}
		else if(colorstring.search(regexgreen) >= 0)
		{
			resultaat = 'green';
		}
		else if(colorstring.search(regexblue) >= 0)
		{
			resultaat = 'blue';
		}
		return resultaat;
}
