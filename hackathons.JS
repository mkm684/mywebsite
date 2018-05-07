function initMap() {
    var uottahack = {lat: 45.4231101, lng: -75.6853216}
    var steelhacks = {lat: 40.4424597, lng: -79.9602577};
    var starterhacks = {lat: 43.4731332, lng: -80.5438757};
    var sfhacks = {lat: 37.7765183, lng: -122.45283};
   
    
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 4,
    	center: {lat: 41.1866849, lng: -93.6061572}
    });

    //////////////////////////////////////////////////////Nokia/////////////////////////////////////////////////////

    var infowindow = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h2 style="color:black;">UOttaHack</h2>'+
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
    		position: uottahack,
    		title: 'UOttahack',
    		animation: google.maps.Animation.DROP,
    		label: 'UO',
    		map: map
    });
    

    ////////////////////////////////////////////////////Bluedrop//////////////////////////////////////////////////////

    var infowindow2 = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h2 style="color:black;">SteelHacks</h2>'+
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
    	position: steelhacks,
    	title: 'SteelHacks',
    	animation: google.maps.Animation.DROP,
    	label: 'ST',
    	map: map
    });

    ////////////////////////////////////////////////////Verafin//////////////////////////////////////////////////////

    var infowindow3 = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h2 style="color:black;">Starterhacks</h2>'+
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
    	position: starterhacks,
    	animation: google.maps.Animation.DROP,
    	title: 'Starterhacks',
    	label: 'SH',
    	map: map
    });

    //////////////////////////////////////////////////////////////////////////////MUN//////////////////////////////////////////////////////////////////////////////

    var infowindow4 = new google.maps.InfoWindow({
        content:'<font color="black">'+
                    '<h3 style="color:black;">SFHacks</h3>'+
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
    	position: sfhacks,
    	animation: google.maps.Animation.DROP,
    	title: 'SFHacks',
    	label: 'SF',
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