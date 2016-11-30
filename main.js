function run() {
    function makeAjaxRequest() {
        var newPlace = document.querySelector('#address').value;
        var newURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + newPlace + "&key=AIzaSyBriI1xNkU-3Q2wMfMmMOIFgi_6-bCo1sI";

        return $.ajax({
            url: newURL,
            dataType: 'json',
        });
    }
    var promise = makeAjaxRequest()

    promise.then(function(response) {
        var lat = response.results[0].geometry.location.lat
        var lng = response.results[0].geometry.location.lng
        $("#lat").html('');
        $("#lng").html('');
        $("#lat").append(' Your latitude is ', lat);
        $("#lng").append(' Your longitude is ', lng);
        console.log(lat)
        console.log(lng)
    })
}
$(".fun").click(function(){
        $("span").slideToggle(500);
    });
