$(document).ready(function () {
    // EDITOR CKEDITOR
    if (document.querySelector('#body')) {
        ClassicEditor
            .create(document.querySelector('#body'))
            .catch(error => {
                console.error(error);
            });
    }
})