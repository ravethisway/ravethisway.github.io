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

function socialLogin() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            this.$router.replace('home');
        }).catch((err) => {
            alert(err)
        });
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


