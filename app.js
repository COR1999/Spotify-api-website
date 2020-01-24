


$(document).ready(function () {

    $("#search").on("click", searchApi);
    // Get the input field
    document.getElementById("myInput").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("search").click();
        }
    });

});
function refreshToken(token) {

}




function searchApi() {
    var token = 'BQDVW29UVjySr9_XvUk_dh07K3tquAily4LEI2H8Z__IVmlp9pOdTa_bC2kZXzeVcyC2DkTKAmCgTG_WDwjnim6ZEBabPe7KNo_7oc9k57Uz2a6Inhm2UXyflcRS32Ji5TqEWXVilgjUnEf49N67Lu8U-iFJJ7mDaRg'

    $.ajax({
        url: 'https://api.spotify.com/v1/search?type=artist&query=' + $("#myInput").val(),
        headers: {
            Authorization: 'Bearer ' + token
        },
    })
        .then(function (oData) {
            var artistId = oData.artists.items[0].id;
            $.ajax({
                url: 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=IE',
                headers: {
                    Authorization: 'Bearer ' + token
                },
            }).then(function (response) {
                let songName = []
                let playNow = []
                response.tracks.forEach(function (album) {
                    songName.push("<li>" + album.name + '<a href="' + album.external_urls.spotify + '" target="_blank"> Play Now</a></li>');
                    // playNow.push('<a href="' + album.external_urls.spotify + '">Play Now</a>');
                    console.log(album.external_urls.spotify);
                })
                $('#artist-songs').html(songName);
                // $('#artist-playNow').html(playNow);

            });
            let artistName = oData.artists.items[0].name;
            $('#artist-name').html(`<h2>${artistName}</h2>`)

            let artistImage = oData.artists.items[0].images[1].url;
            $('#artist-image').html(`<img src="${artistImage}">`)
        })
}

