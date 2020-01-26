$(document).ready(function(){
	$(".bars-click").click(function(){
	    $(".sidebar").toggleClass("sidebar-full");
	    $(".content-wrapper").toggleClass("content-wrapper-full");
	});


  $('#bar1').barfiller({ barColor: '#60CCB5' });
  $('#bar2').barfiller({ barColor: '#38A4DD' });
  $('#bar3').barfiller({ barColor: '#FFC205' });
  $('#bar4').barfiller({ barColor: '#FC6F41' });

  
});

