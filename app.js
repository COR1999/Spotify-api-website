$(document).ready(function () {
    $('#search').click(function () {

        var token = 'BQDwMEpdy8VHd-m0uAiaPni_-v2i3G7sY1c1ErvIq5d4LCTff5obN6admcBupZ0FdkxXJAZwJoTcHFwGlKgVfYqr1ttqTLcmK12bdEpmv6ffmYk7bPLQq-CC-cXPuUzbf0nOS8m7iRkBhC6DC7_hq-F-RBv14WxfzrY'

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

    })
})


function refreshToken(token) {

}



