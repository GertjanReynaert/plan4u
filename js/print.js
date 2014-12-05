// JavaScript Document
var printpop = false;
var timer = false;
var chrometimer;
$(document).ready(function(e) {
	$('#td_print_pop').toggle();

	var printer = function (){

		if (printpop == false)									//controle of het popupvenster toe is
			 {
			 	printpop = true;								//zet de variabele op "popup open"
				$('#td_print_pop').slideToggle(200);			//laat het venster verschijnen
				$('#agendas').css('height','68%');				//verklein het agendas venster zodat ze in #todo blijft passen
			}
		else	//indien het popmenu open staat en je drukt op #print of ctrl-p, dan zal de box terug sluiten
			{
				printpop = false;
				$('#td_print_pop').slideToggle(200);
				setTimeout(function(){ $('#agendas').css('height','93%'); },200);  
				
			}
		}
		$('#confirm_print').click(function(){	/*print commando door knop in popmenu*/
			if (timer==false) {
					var selectedpaper = $('.paper').children('.printpaper').parent().attr('id');	//selecteer het id van het geselecteerde papier
					if (selectedpaper == undefined) {			//indien het id undefined is: geef een foutmelding
						$('#print_msgbox').toggle();
						$('#print_msgbox').prepend('<h2>Melding:</h2><p>Je hebt nog geen keuze gemaakt. Maak eerst een keuze en print daarna pas.</p><div id="print_msgbox_close" class="button"><p>Close</p></div>');
						$('#td_print_month').attr('class','');
						$('#td_print_week').attr('class','');
						$('#paperstack_month').css('display','none');
						$('#paperstack_week').css('display','none');
						$('#print_msgbox_close').click(function(){
							$('#print_msgbox').toggle();
							$('#print_msgbox').empty();
							$('#td_print_month').attr('class','printchoice');
							$('#td_print_week').attr('class','');
							$('#paperstack_month').css('display','block');
							$('#paperstack_week').css('display','none');
						});
					}
					else
					{
						var filename = "";
						switch(selectedpaper)
						{
							case "montha4": filename="print_full_A4.css";break;
							case "montha5": filename="print_full_A5.css";break; 
							case "weeka4": filename="print_week_A4.css";break;
							case "weeka5": filename="print_week_A5.css";break;
							case "weeka6": filename="print_week_A6.css";break;
						}
						$('link[media="print"]').attr('href','css/'+filename+'');/*to change the print*/
						window.print();
						if (wkit == true) //sla over voor niet webkit browsers
						{
							timer = true;
							chrometimer = setTimeout(function() { timer = false; },15000);
						}
						printpop = false;						//zet de variabele op gesloten
						$('#td_print_pop').toggle();			//sluit het popvenster
						$('#agendas').css('height','93%');		//vergroot agendas terug
					}
				}
				else
				{
					if (wkit == true) 
					{
						$('#print_msgbox').toggle();
						$('#print_msgbox').prepend('<h2>Melding:</h2><p>Spijtig genoeg kan je in Google Chrome/Safari niet kort na elkaar printen. Probeer binnen een minuutje nog eens. Hiervoor onze excuses.</p><div id="print_msgbox_close" class="button"><p>Close</p></div>');
						$('#td_print_month').attr('class','');
						$('#td_print_week').attr('class','');
						$('#paperstack_month').css('display','none');
						$('#paperstack_week').css('display','none');
						$('#print_msgbox_close').click(function(){
							$('#print_msgbox').toggle();
							$('#print_msgbox').empty();
							$('#td_print_month').attr('class','printchoice');
							$('#td_print_week').attr('class','');
							$('#paperstack_month').css('display','block');
							$('#paperstack_week').css('display','none');
						});
					}
				}
				});
	$('#td_print_month').live('click',function(){
		$(this).attr('class','printchoice');
		$('#td_print_week').attr('class','');
		if($('#paperstack_month').css('display') == 'none')
		{ 
			$('#paperstack_month').toggle();
			$('#paperstack_week').toggle();
		}
	});
	$('#td_print_week').live('click',function(){
		$(this).attr('class','printchoice');
		$('#td_print_month').attr('class','');
		if($('#paperstack_week').css('display') == 'none')
		{ 
			$('#paperstack_month').toggle();
			$('#paperstack_week').toggle();
		}
	});
	/*om een papierkeuze te maken*/
	$('.paper').live('click',function(){
		$('.paper').contents(':not(p)').remove();
		$(this).append('<div class="printpaper"><p>✓</p></div>');
	});

	$('#print').live('click',printer);							//gewone print knop
	$(document).keydown(function(e){						//ctrl-p override
			if (e.ctrlKey==true && (e.which == '80'))
			{ 
				e.preventDefault();
				$(document).append(printer);
        	}
		});
	
});
