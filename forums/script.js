var peopleOnline = 0
function someoneJoined(){
	peopleOnline += 1
	$("#peopleonlineshow").empty();
	$("#peopleonlineshow").append("People Online: " + peopleOnline);
}