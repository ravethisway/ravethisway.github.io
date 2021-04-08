function mapsSelector(e,l) {
    e.preventDefault()
    lat = l[0]
    long = l[1]
    if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1) ||
        (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");

    else /* else use Google */
        window.open("https://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
}

function isset (accessor) {
    try {
        // Note we're seeing if the returned value of our function is not
        // undefined
        return typeof accessor() !== 'undefined'
    } catch (e) {
        // And we're able to catch the Error it would normally throw for
        // referencing a property of undefined
        return false
    }
}

//RAVETHIWAY
function getLocation(psw) {
    let response = []
    response['loca'] = 'noo'
    response['desc'] = ' '
    const myInit =  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'default'
    }
    const url = 'https://api-platform-admin.herokuapp.com/api/events.json'
    return fetch(url, myInit)
        .then(function(data) {
            return data.json().then((data) => {
                data.forEach(element => {
                    if (element.password === psw) {
                        response['desc'] = element.description
                        response['loca'] = '[' + element.lat + ', ' + element.lng + ']'
                    }
                })
                return response
            })
        })
        .catch(function(error) {
            console.log('error: ' + error)
        });
}



