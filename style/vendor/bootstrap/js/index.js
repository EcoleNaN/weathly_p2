console.clear()
var pageSize=8;
var nombrePage = $(".page").length;
var pageCount=Math.ceil(nombrePage/pageSize);
for (var i=0; i< pageCount; i++)
{
	if(i==0)
	
	$("#pagin").append('<li class="page-item"><a class="active page-link" href="#">'+(i+1)+'</a></li>');
	else
	
			$("#pagin").append('<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li>');
	
}

showPage = function(pagination) {
  $(".page").hide();
  $(".page").each(function(n){
	 if(n > pageSize * (pagination -1) && n < pageSize *pagination)
$(this).show();		 
  });
}
showPage(1);

  $("#pagin li a").click(function(){
  $("#pagin li a").removeClass("active");
$(this).addClass("active");
showPage(parseInt($(this).text()))
  });


