var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function () {
    console.log('Service worker registered!');
  });
}

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

var promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // resolve('This is executed once timer is done');
    // console.log('This is executed once timer is done');
    reject({ code: 500, message: 'An error occurred!' });
  }, 3000);
});

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.responseType = 'json';

xhr.onload = function () {
  console.log(xhr.response);
};

xhr.onerror = function () {
  console.log('error');
};

xhr.send();

fetch(`https://httpbin.org/ip`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch(`https://httpbin.org/post`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  mode: 'cors',
  body: JSON.stringify({
    message: 'Does this work',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

promise
  .then((text) => {
    console.log(text);
    return text;
  })
  .then((newText) => {
    console.log(newText);
  })
  .catch((err) => {
    console.log(err.code, err.message);
  });

console.log('This is executed after setTimeout()');
