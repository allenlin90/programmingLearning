let btn = document.querySelector('#btn');
let priceDis = document.querySelector('#price');
const currency = 'USD';
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//listen for clicks
btn.addEventListener('click', function () {
    //make the request 
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            let data = JSON.parse(XHR.responseText);
            let price = data.bpi[currency].rate;
            priceDis.textContent = price;
        } else {
            alert("Something went wrong")
        }
    }

    XHR.open('GET', url);
    XHR.send();
})

fetch(url).then(function (data) {
    console.log(data);
    console.log('status code was: ' + data.status);
    return data.json();
}).then(data => {
    console.log(data);
    console.log(data.bpi.USD.rate);
});