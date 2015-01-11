function startGame(string){
	var showingData = $(".content").data("showing"); 
	if(showingData == true){
		$(".content").empty();
		$(".content").append('<object width="800" height="600"> <param name="movie" value="' + string + '"> <embed class="game" src="' + string + '" width="700" height="500"> </embed> </object>');
		$(".content").data("showing", false);
	}else if(showingData == false){
		$(".content").empty();
		$(".content").data("showing", true);
		$(".content").append('<object width="800" height="600"> <param name="movie" value="' + string + '"> <embed class="game" src="' + string + '" width="700" height="500"> </embed> </object>');
	}
}

//Im too hot