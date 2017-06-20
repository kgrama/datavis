var csvFolder = "csv";
var csvYear = "2015";
var separator = "/";
var filenamePostfx = "greater-manchester-street.csv";
for (var i = 1; i < 3; i++){
 var genFile = csvYear +"-" + pad(i);
 var dataFileName = csvFolder+ separator + genFile + separator+ genFile + "-"+filenamePostfx;
 var monthFieldName = "month"+pad(i);
 d3.csv(dataFileName, function(data) {
	var currentMonth = {};
	currentMonth.count = 0;
	currentMonth.locations= [];
	
	data.forEach(function (d){
		currentMonth.count++;
		var currentObj = {}; 
		currentObj.lat = d.Latitude;
		currentObj.log = d.Longitude;
		currentMonth.locations.push(currentObj);
  	});
  	arrayOfMonths[monthFieldName] = currentMonth;
 });
}

function pad(d) {
 return (d < 10) ? '0' + d.toString() : d.toString();
}