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
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/uottahackmap.jpeg">'+
                        'First ever Hacakthon for me to attended'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#uottahack"> </a> &nbsp'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:250,
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
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/steelmap.jpg">'+
                        'Hacakthon at the University of Pittsburgh'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#steelhacks"> </a> &nbsp'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:250,
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
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/startersmap.png">'+
                        'Hacakthon at the University of Waterloo'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#starterhacks"> </a>'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:250,
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
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/sfHacksFlyer-1_0.jpg">'+
                        'Hacakthon at SanFrancisco State University (Silicon Valley)'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#sfhacks"> </a> &nbsp'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:250,
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