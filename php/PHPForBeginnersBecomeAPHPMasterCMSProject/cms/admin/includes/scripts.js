$(document).ready(function () {
    // EDITOR CKEDITOR
    if (document.querySelector('#body')) {
        ClassicEditor
            .create(document.querySelector('#body'))
            .catch(error => {
                console.error(error);
            });
    }

    // select all checkboxes on posts
    $('#selectAllBoxes').change(function () {
        if (this.checked) {
            $('.checkBoxes').prop('checked', true);
        } else {
            $('.checkBoxes').prop('checked', false);
        }
    });

    // run page transfer animation
    const div_box = "<div id='load-screen'><div id='loading'></div></div>";
    $('body').prepend(div_box);
    $('#load-screen').delay(700).fadeOut(600, function () {
        $(this).remove();
    });

    function loadUsersOnline() {
        $.get('functions.php?onlineusers=result', function (data) {
            $('.usersonline').text(data);
        });

    }
    setInterval(function () {
        loadUsersOnline();
    }, 500);
});
