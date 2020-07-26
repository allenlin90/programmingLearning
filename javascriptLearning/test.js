let btn = document.querySelector('#btn');
let priceDis = document.querySelector('#price');
const currency = 'USD';
// const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const url = 'https://randomuser.me/api/';

/*
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
*/

const selectors = {
    fullname: '#fullname',
    username: '#username',
    email: '#email',
    city: '#city',
    img: '#avatar',
}

document.querySelector('#btn').addEventListener('click', () => {
    fetch(url)
        .then(errorHandler)
        .then(data => {
            const result = data.results[0];
            const firstName = result.name.first;
            const lastName = result.name.last;
            const username = result.login.username
            const email = result.email;
            const city = result.location.city;
            const img = result.picture.medium;
            console.log(result)
            // fullname
            document.querySelector(selectors.fullname).textContent = `${firstName} ${lastName}`;
            // username
            document.querySelector(selectors.username).textContent = `${username}`;
            // email
            document.querySelector(selectors.email).textContent = `${email}`;
            // city
            document.querySelector(selectors.city).textContent = `${city}`;
            // image
            document.querySelector(selectors.img).src = `${img}`;

        })
        .catch(error => {
            console.log(error);
        })
});

function errorHandler(request) {
    if (!request.status) {
        throw Error('Something went wrong');
    }
    return request.json();
}