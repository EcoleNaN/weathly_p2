console.clear()
var pageSize=4;
var nombrePage = $(".page").size();
var pageCount=Math.ceil(nombrePage/pageSize);
for (var i=0; i< pageCount; i++)
{
	if(i==0)
	{
	$("#pagin").append('<li><a class="active" href="#">'+(i+1)+'</a></li>');}
	else
	{
			$("#pagin").append('<li><a  href="#">'+(i+1)+'</a></li>');}
	}
}
showPage(1);
$("#pagin li a").click(function(){
	
	$("#pagin li a").removeClass("active");
	$(this).addClass("active");
	showPage(parseInt($(this).text()))
});
showPage = function(pagination) {
$(".page").hide();
$(".page").each(function(n){
	if(n >= pageSize*(pagination-1) && n < (pageSize*pagination))
		$(this).show();
});

  
