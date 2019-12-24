var dataSets;
var page_id = 0;
$(document).ready(function () {
	var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/14mnBhkldbhJ2oDPmfyfMPzohGVz5VBncwXwUaXaCwj8/pubhtml';
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo, 
		simpleSheet: true
	} )
	function showInfo(data, tabletop) {
		dataSets = data;
		page_id = decodeURIComponent(GetUrlVar('id')) - 1;
		nextPage(0);
	}
})

// 取得網址裡的參數 
function GetUrlVar(VarName) 
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + VarName + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null)
	 return "";
  else
	 return results[1];
}

function nextPage(i){
	page_id = (page_id+i)%11;
	if(page_id<0) page_id+=11;
	console.log(page_id);
	document.getElementById("animation_works").innerHTML =
		"<h2 class='col text-center'>" + dataSets[page_id]['title'] + " (" + dataSets[page_id]['year'] + ")</h2>" +
		"<div class='info_content'>&emsp;&emsp;" + dataSets[page_id]['info'] + "</div>";
	document.getElementById("animation_imgs").innerHTML = "";
	for(var i=0; i<4; i++){
		document.getElementById("animation_imgs").innerHTML += 
			'<img class="img-fluid img-thumbnail" id="illu_1" src="./img/' +
			(page_id+1) + '/' + [i] + '.jpg" alt="">';
			// '<div class="col-lg-3 col-md-6 col-xs-6"></div>';
	}
}