function initMap() {
    var nokia = {lat: 45.347592, lng: -75.920763}
    var bluedrop = {lat: 47.566837, lng: -52.7079406};
    var verafin = {lat: 47.6190758, lng: -52.7269624};
    var mun = {lat: 47.5742182, lng: -52.7375423};
   
    
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 5,
    	center: {lat: 49.247260, lng: -60.897703}
    });

    //////////////////////////////////////////////////////Nokia/////////////////////////////////////////////////////

    var infowindow = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h2 style="color:black;">Nokia Networks</h2>'+
                    '<img ALIGN="Center" style="max-width:400px;height:auto;" src="images/images/verafin.jpg">'+
                    '<p>During my time at Nalcor I worked here when I was not in the field.</p>'+
                    '<div>'+
                        '<a href="#nokia" style = "color:#0000ff;" class="button special circle color1 icon fa-angle-right">click for details</a>'+
                        '<p>click for details</p>'+
                    '</div>'+
                '</font>',
        maxWidth:400,
        backgroundColour:'rgb(57,57,57)',  
    });
    var marker = new google.maps.Marker({
    		position: nokia,
    		title: 'Nokia Networks',
    		animation: google.maps.Animation.DROP,
    		label: 'N',
    		map: map
    });
    

    ////////////////////////////////////////////////////Bluedrop//////////////////////////////////////////////////////

    var infowindow2 = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h2 style="color:black;">Bluedrop Perfromance learning</h2>'+
                    '<img ALIGN="Center" style="max-width:400px;height:auto;" src="images/images/verafin.jpg">'+
                    '<p>During my time at Nalcor I worked here when I was not in the field.</p>'+
                    '<div>'+
                        '<a href="#nokia" style = "color:#0000ff;" class="button special circle color1 icon fa-angle-right">click for details</a>'+
                        '<p>click for details</p>'+
                    '</div>'+
                '</font>',
        maxWidth:400,
    });
    var marker2 = new google.maps.Marker(
    {
    	position: bluedrop,
    	title: 'Bluedrop Perfromance learning',
    	animation: google.maps.Animation.DROP,
    	label: 'B',
    	map: map
    });

    ////////////////////////////////////////////////////Verafin//////////////////////////////////////////////////////

    var infowindow3 = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h2 style="color:black;">Verafin</h2>'+
                    '<img ALIGN="Center" style="max-width:400px;height:auto;" src="images/images/verafin.jpg">'+
                    '<p>During my time at Nalcor I worked here when I was not in the field.</p>'+
                    '<div>'+
                        '<a href="#nokia" style = "color:#0000ff;" class="button special circle color1 icon fa-angle-right">click for details</a>'+
                        '<p>click for details</p>'+
                    '</div>'+
                    '<h4> click for details </h4>'+
                '</font>',
        maxWidth:400,
    });
    var marker3 = new google.maps.Marker({
    	position: verafin,
    	animation: google.maps.Animation.DROP,
    	title: 'Verafin',
    	label: 'V',
    	map: map
    });

    //////////////////////////////////////////////////////////////////////////////MUN//////////////////////////////////////////////////////////////////////////////

    var infowindow4 = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h3 style="color:black;">Memorial University, Engineering Faculty</h3>'+
                    '<img ALIGN="Center" style="max-width:400px;height:auto;" src="images/images/verafin.jpg">'+
                    '<p>During my time at Nalcor I worked here when I was not in the field.</p>'+
                    '<div>'+
                        '<a href="#nokia" style = "color:#0000ff;" class="button special circle color1 icon fa-angle-right">click for details</a>'+
                        '<p>click for details</p>'+
                    '</div>'+
                '</font>',
        maxWidth:400,
    });
    var marker4 = new google.maps.Marker({
    	position: mun,
    	animation: google.maps.Animation.DROP,
    	title: 'MUN',
    	label: 'M',
    	map: map
    });

    ////////////////////////////////////////////////////////////////////Event Listeners//////////////////////////////////////////////////////////////////////////////

    map.addListener('click', function(){
        infowindow.close();
        infowindow2.close();
        infowindow3.close();
        infowindow4.close();
    });

    //marker 1
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    marker.addListener('click', function() {
        infowindow2.close();
    });
    marker.addListener('click', function() {
        infowindow4.close();
    });
    marker.addListener('click', function() {
        infowindow3.close();
    });

    //marker2
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });

    marker2.addListener('click', function() {
        infowindow.close();
    });

    marker2.addListener('click', function() {
        infowindow4.close();
    });

    marker2.addListener('click', function() {
        infowindow3.close();
    });

    //marker3
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
    });

    marker3.addListener('click', function() {
        infowindow4.close();
    });

    marker3.addListener('click', function() {
        infowindow2.close();
    });

    marker3.addListener('click', function() {
        infowindow.close();
    });

    //marker4
    marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
    });

    marker4.addListener('click', function() {
        infowindow2.close();
    });


    marker4.addListener('click', function() {
        infowindow.close();
    });


    marker4.addListener('click', function() {
        infowindow3.close();
    });


}	