function initMap() {
    var nokia = {lat: 45.347592, lng: -75.920763}
    var bluedrop = {lat: 47.566837, lng: -52.7079406};
    var verafin = {lat: 47.6190758, lng: -52.7269624};
    var mun = {lat: 47.5742182, lng: -52.7375423};
   
    
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 11,
    	center: {lat: 47.6020995, lng: -52.7211914}
    });

    //////////////////////////////////////////////////////Nokia/////////////////////////////////////////////////////

    var infowindow = new google.maps.InfoWindow({
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/images/nokia-logo.jpg">'+
                        'First ever Hacakthon for me to attended'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#nokia"> </a> &nbsp'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:250,
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
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/bluemaps.jpg">'+
                        'Third Internship'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#bluedrop"> </a> &nbsp'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:250,
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
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/verafin.png">'+
                        'Second Internship'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#verafin"> </a> &nbsp'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:250,
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
        content:'<head>'+
                    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">'+
                '</head>'+
                '<body>'+
                   '<font color="#de7172">'+
                        '<img ALIGN="Center" style="max-width:250px;height:auto;" src="./images/engmaps.jpg">'+
                        'First Internship'+
                        '<br>'+
                        '<br>'+
                        '<ul class="contact-icons color1">'+
                            '<a class="button special circle icon fa-angle-right fa-2x"  style="background:MistyRose; float:left; color:blacks"  href="#mun"> </a> &nbsp'+
                        '</ul>'+
                    '</font>'+
                '</body>',
        maxWidth:200,
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