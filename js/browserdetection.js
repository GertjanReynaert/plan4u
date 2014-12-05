var wkit = false;
var ffo = false;
	if($.browser.webkit)
	{
		wkit = true;
		//alert('webkit enabled');
		// dit werkt voor chrome en safari
		//check als de browser mobiel is of niet (chrome voor android/ios, safari voor ios)
		$('document').ready(function(){
			var scwidth = screen.width;
			var scheight = screen.height;
			/*alert(scwidth);
			alert(scheight);*/
			if ((scwidth == 1024 && scheight == 768) || (scwidth==768 && scheight ==1024)) {
				addJavascript("note.js");
				addJavascript("agenda.js");
				addJavascript("popup.js");
				addJavascript("accountdropfeedback.js");
				addJavascript("datums.js");
				addCss('style.css','screen');
				addCss('ipad.css','screen');
				addCss('print_full_a4.css','print');
				/*$('title').append('<style>body{background-color:red;}</style>'); dit werkt, ook met een csslink*/
			}
			else if((scwidth == 480 && scheight == 320)/*||(-webkit-min-device-pixel-ratio == 1.5)*/)
			{
				//iphone landscape	or iphone retina landscape
			}
			else if((scwidth == 320 && scheight == 480)/*||(-webkit-min-device-pixel-ratio == 1.5)*/)
			{
				//iphone portrait or iphone retina portrait
			}
			else
			{
				addJavascript("note.js");
				addJavascript("agenda.js");
				addJavascript("popup.js");
				addJavascript("accountdropfeedback.js");
				addJavascript("print.js");
				addJavascript("datums.js");
				addCss('style.css','screen');
				addCss('print_full_a4.css','print');
			}
			});
		
	}
	else if($.browser.mozilla || $.browser.opera)
	{
		ffo = true;
		$('document').ready(function(){
				addCss('style.css','screen');
				addCss('print.css','print');
				addJavascript("note.js");
				addJavascript("agenda.js");
				addJavascript("popup.js");
				addJavascript("accountdropfeedback.js");
				addJavascript("print_full_a4.js");
				addJavascript("datums.js");
		});
	}
	else if($.browser.msie)
	{
		alert('Please use another browser');
		//give error screen
	}

function addCss(delink, media)
{
	$('head').append('<link rel="stylesheet" href="css/'+delink+'" type="text/css" media="'+media+'"/>');
}
function addJavascript(link)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "js/"+link+"";
	document.body.appendChild(script);
}