
$(function()
{

	/* open submenu -----------------------------------------------------------------------------------------------------------------------*/

	$(".header .menu li").mouseover(function()
	{
		$(this).children("ul").show();
	});

	$(".header .menu li").mouseout(function()
	{
		$(this).children("ul").hide();
	});






	/* go to top -----------------------------------------------------------------------------------------------------------------------*/

	$(".gototop").click(function()
	{
		//console.log("click goto top!");
		$('html,body').animate({scrollTop: 0}, 750);
		nowstep = 0;
		//console.log("nowstep = " + nowstep);
	});


});