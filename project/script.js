let NAMESPACE = {};

(function () {

    const promise = new Promise((ressove, reject) => {

        const http = new XMLHttpRequest();
        http.overrideMimeType("application/json");
        http.open("GET", "./data.json");

        http.onreadystatechange = () => {
            console.log(http.readyState + ' - ' + http.status);

            if (http.readyState === XMLHttpRequest.DONE) {
                if (http.status === 200) {
                    ressove(JSON.parse(http.responseText));
                } else if (http.status !== 200) {
                    reject("Error=" + http.readyState + ' - ' + http.status);
                }
            }
        }
        http.send();
    });

    promise.then(result => {
        document.getElementById('json').innerHTML = JSON.stringify(result);
        console.log(result.hobbies);
    }).catch(error => console.log(error));

})();