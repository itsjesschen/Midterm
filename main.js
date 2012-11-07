function Main(){
	//Center in Tulsa
	var initLatitude = 36.1539;
	var initLongitude =260.9923;
	this.map = new Map(initLatitude,initLongitude);
};

Main.prototype.LoadTweets = function(){
	var userID = 'muse';
	var xhr = new XMLHttpRequest();
	var url = 'load_tweets.php?id=' + userID;
	xhr.open('GET', url, true);
	document.getElementById('tweets').innerHTML = '<img src = "ajax-loader.gif">';
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			document.getElementById('tweets').innerHTML = xhr.responseText;
		}else if (xhr.status >= 400 ) {
			console.log('There was an error!');
		}

	}
	xhr.send(null);
}
Main.prototype.loadEventData  = function(data){
	var events = data.events.event;
	var insertHTML = "<h1 style=\"text-align:center; color = white\">Muse Concert Data</h1>";
	var templateString;
	var template;
	var html;
	for ( var i = 0; i < events.length; i++){
		console.log(events[i]);
		templateString = document.getElementById('twitter-data').innerHTML;
		template = Handlebars.compile(templateString);
		html = template(events[i]);
		insertHTML+= html;
	}
	document.getElementById('tweetdataview').innerHTML = insertHTML;
}

Main.prototype.addPointToMap = function(lat, longi, n) {
	this.map.addPoint(lat, longi, n);
};

function Map(latitude, longitude){
	this.image = "http://www.rentonlive.com/blue_dot_circle.png";
	this.center = new google.maps.LatLng( latitude, longitude);	
	var myOptions = {
			zoom: 3,
			center : this.center,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};
	this.map = new google.maps.Map(document.getElementById('map'), myOptions)
	// this.marker = new google.maps.Marker({
	// 		map:this.map,
	//     	draggable:true,
	//     	animation: google.maps.Animation.DROP,
	// 		position: this.center,
	// 		title: 'Current Location',
	// 		icon: this.image
	// });			
};

Map.prototype.addPoint = function(latitude, longitude, name) {
	this.center = new google.maps.LatLng( latitude, longitude);	
	this.marker = new google.maps.Marker({
			map:this.map,
	    	draggable:true,
	    	animation: google.maps.Animation.DROP,
			position: this.center,
			title: name,
			icon: this.image
	});
}

