$(document).ready(function () {
	var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/14mnBhkldbhJ2oDPmfyfMPzohGVz5VBncwXwUaXaCwj8/pubhtml';
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo, 
		simpleSheet: true
	} )
	function showInfo(data, tabletop) {
		console.log(data.length);
		console.log(tabletop);
		for(var i=data.length-1; i>=0; i--){
			document.getElementById("animation_cards").innerHTML += 
				'<div class="col-lg-3 col-md-4 col-xs-6"><div class="card"><img src="img/' + data[i]['id'] + '/0.jpg'
				+ '" class="card-img-top center" alt="..."><div class="card-body"><h5 class="card-title">' + data[i]['title']
				+ '（' + data[i]['year'] + '）' + '</h5><p class="card-text">' + data[i]['brief_info']
				+ '</p><a href="./animation_work.html?id=' + data[i]['id']
				+'" class="btn btn-primary">Read More...</a></div></div></div>';
		}
	}
})