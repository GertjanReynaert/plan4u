// jQuery Document
var agendatitle = "";
$(document).ready(function() {
	$(".addnote").live('click',
		function newnote()
		{
			popup('pops',400,450);
			popcontent('<h2 id="createnoteagendatitle"></h2><input type="text" id="newnotetext" placeholder="Naam van je notitie"/><input type="button" value="confirm" id="confirm"/>');
			agendatitle = $(this).parent().parent().attr('id');
			var displaytitle = agendatitle.substr(0,1).toUpperCase() + agendatitle.substring(1,agendatitle.length);
			$("#createnoteagendatitle").replaceWith("<h2 id='createnoteagendatitle'>"+displaytitle+"</h2>");
		}
		)
	
	$("#confirm").live('click',
		function()
		{
			var title = $("#newnotetext").val();
			if(title != "")
			{
			title = title.substr(0,1).toUpperCase() + title.substring(1,title.length).toLowerCase();
			$("#newnotetext").val(""); //om het invoerveld voor de volgende notitie terug leeg te maken
			var hulp = "<div class='note'><div class='checkbox'><div class='inactive'><div class='bottomwing'></div><div class='wing'></div></div></div><div class='notetitle'><p>"+title+"</p></div><div class='plansign'><div class='notplanned'><p>N</p></div></div><div class='deletenote'><p>X</p></div></div>";

			$('#'+agendatitle+'').children('.agendanotes').prepend(hulp);
			
			popup('pops',0,0);
			popcontent('empty');
			}
		}
	)
	$(".deletenote").live('click',
		function removenote(){
			$(this).parent().remove();
			}
	)
	$(".checkbox").live('click',
          function()
              {
                if($(this).children().attr("class") == "active")
                {
                  		$(this).children().removeClass("active").addClass("inactive");
                }
                else
                {
                	$(this).children().removeClass("inactive").addClass("active");
                }
              }
  );
});
