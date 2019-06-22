var url="https://api.quotable.io/random";
var quote=document.querySelector(".quote");
var author=document.querySelector(".author");

$("button").click(function(){
	

	$(".main").slideDown("slow");
	$.getJSON(url).done(function(res){
		$(".item").animate(
		    { opacity: 0 },
		    500,
		    function() {
		      $(this).animate({ opacity: 1}, 500);
		      quote.innerHTML=res.content;
		      author.textContent="-"+res.author;
		    }
		  );

		
	    
	   

	  }).fail(function(err){
	    console.log(err);
	  })

	

})