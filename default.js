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
    
    async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

postData('https://waterfull.netlify.app/api/checkpsw', { "checkThis": psw })
  .then(data => {
    console.log('yo')
    console.log(data)
    response['desc'] = JSON.stringify(data)
    response['loca'] = ' '
  });
    return response
    /*
    let response = []
    response['loca'] = 'noo'
    response['desc'] = ' '
    const myInit =  {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'default'
    }
    const url = 'https://waterfull.netlify.app/api/checkpsw'
    return fetch(url, myInit)
        .then(function(data) {
            return data.json().then((data) => {
                data.forEach(element => {
                    if (${{ secrets.PSW1 }} === psw) {
                        response['desc'] = ${{ secrets.ANSWER1 }}
                        response['loca'] = '[' + element.lat + ', ' + element.lng + ']'
                    }
                })
                return response
            })
        })
        .catch(function(error) {
            console.log('error: ' + error)
        });*/
}



