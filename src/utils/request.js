function request(url, callback=console.log) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState < 4) {
            return; 
        }
        if (request.status < 200 || request.status >= 300) {
        console.error('request error', request);
        return;
        }
        callback(JSON.parse(request.responseText));
    };

    request.open('GET', url);
    request.setRequestHeader('accept', 'application/json');
    request.send();
};

export default request;