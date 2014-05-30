function fileRequestCsv(fileURL){

	var fileRequest = new XMLHttpRequest();
				
	fileRequest.open("GET", fileURL, false);			
	fileRequest.send();

	return fileRequest.responseText;
}


		    // This will parse a delimited string into an array of
		    // arrays. The default delimiter is the comma, but this
		    // can be overriden in the second argument.
		    function CSVToArray( strData, strDelimiter ){
		        // Check to see if the delimiter is defined. If not,
		        // then default to comma.
		        strDelimiter = (strDelimiter || ",");

		        // Create a regular expression to parse the CSV values.
		        var objPattern = new RegExp(
		                (
		                        // Delimiters.
		                        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

		                        // Quoted fields.
		                        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

		                        // Standard fields.
		                        "([^\"\\" + strDelimiter + "\\r\\n]*))"
		                ),
		                "gi"
		                );


		        // Create an array to hold our data. Give the array
		        // a default empty first row.
		        var arrData = [[]];

		        // Create an array to hold our individual pattern
		        // matching groups.
		        var arrMatches = null;


		        // Keep looping over the regular expression matches
		        // until we can no longer find a match.
		        while (arrMatches = objPattern.exec( strData )){

		                // Get the delimiter that was found.
		                var strMatchedDelimiter = arrMatches[ 1 ];

		                // Check to see if the given delimiter has a length
		                // (is not the start of string) and if it matches
		                // field delimiter. If id does not, then we know
		                // that this delimiter is a row delimiter.
		                if (
		                        strMatchedDelimiter.length &&
		                        (strMatchedDelimiter != strDelimiter)
		                        ){

		                        // Since we have reached a new row of data,
		                        // add an empty row to our data array.
		                        arrData.push( [] );

		                }


		                // Now that we have our delimiter out of the way,
		                // let's check to see which kind of value we
		                // captured (quoted or unquoted).
		                if (arrMatches[ 2 ]){

		                        // We found a quoted value. When we capture
		                        // this value, unescape any double quotes.
		                        var strMatchedValue = arrMatches[ 2 ].replace(
		                                new RegExp( "\"\"", "g" ),
		                                "\""
		                                );

		                } else {

		                        // We found a non-quoted value.
		                        var strMatchedValue = arrMatches[ 3 ];

		                }


		                // Now that we have our value string, let's add
		                // it to the data array.
		                arrData[ arrData.length - 1 ].push( strMatchedValue );
		        }

		        // Return the parsed data.
		        return( arrData );
		    }
			
			



function ozoneColorScale(ppbv) {

			var color = "";

			if (ppbv >= 0 && ppbv <= 5)
			{
				color='ff000000';
			}
			
			if (ppbv > 5 && ppbv <= 10) 
			{
				color='ffaf0000';
			}

			if (ppbv > 10 && ppbv <= 15)
			{
				color='ffff2700';
			}

			if (ppbv > 15 && ppbv <= 20)
			{
				color='ffffaf00';
			}

			if (ppbv > 20 && ppbv <=25)
			{
				color='ffc3ff3b';
			}

			if (ppbv > 25 && ppbv <= 30)
			{
				color='ff3fffbf';
			}

			if (ppbv > 30 && ppbv <= 35)
			{
				color='ff00c3ff';
			}

			if (ppbv > 35 && ppbv <=40)
			{
				color='ff0047ff';
			}

			if (ppbv > 40 && ppbv <= 45)
			{
				color='ff0000c5';
			}

			if (ppbv > 45 && ppbv <=50)
			{
				color='ff838383';
			}

			if (ppbv > 50)
			{
				color='ffd3d3d3';
			}

			
			return color;

		}
		
function ozoneAddLinestyle(lat, lon, alt, ozone)	{


	//Add Linestring points
	//for (i=0; i<=length; i++)
	//{
	lineString.getCoordinates().pushLatLngAlt(lat,lon,alt);
	//}
				
	//lineStringPlacemark.setStyleSelector(ge.createStyle(''));
	lineStringPlacemark.setStyleSelector(ge.createStyle(''));
	var lineStyle = lineStringPlacemark.getStyleSelector().getLineStyle();
	lineStyle.setWidth(5);
	lineStyle.getColor().set('9900ffff'); //returns RGB

				
	//Add linstyles to Earth
	ge.getFeatures().appendChild(lineStringPlacemark);
alert('Done');
}