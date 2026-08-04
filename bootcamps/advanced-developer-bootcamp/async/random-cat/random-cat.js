const url1 = 'https://aws.random.cat/meow';
const url2 = 'https://cors-anywhere.herokuapp.com/http://aws.random.cat/meow';
const url3 = 'https://dog.ceo/api/breeds/image/random';

$('.btn').click(function () {
    $.get(url3)
        .done(function (res) {
            let url = res.message;
            console.log(url);
            $('.img').css("background-image", `url(${url})`)
        })
        .fail(function (err) {
            console.log('Error', err);
        })
})