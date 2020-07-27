const p = document.querySelector('#quote');
const url = `http://ron-swanson-quotes.herokuapp.com/v2/quotes`;
document.querySelector('#xhr').addEventListener('click', XHR);
document.querySelector('#fetch').addEventListener('click', fetchData);
$('#jquery').on('click', jqueryData);
document.querySelector('#axios').addEventListener('click', axiosData);

function XHR() {
    let XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4) {
            if (XHR.status == 200) {
                const quote = JSON.parse(XHR.responseText)[0];
                p.innerText = quote;
            } else {
                console.log('There was a problem!');
            }
        }
    };
    XHR.open("GET", url);
    XHR.send();
}

function fetchData() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            p.innerText = data[0];
        })
        .catch(err => {
            console.log('Error', err);
        })
}

function jqueryData() {
    $.getJSON(url)
        .done(data => {
            p.innerText = data[0];
        })
        .fail(err => {
            console.log(err)
        });
}

function axiosData() {
    axios.get(url)
        .then(res => {
            p.innerText = res.data[0];
        })
        .catch(err => {
            console.log('Error', err);
        })
}