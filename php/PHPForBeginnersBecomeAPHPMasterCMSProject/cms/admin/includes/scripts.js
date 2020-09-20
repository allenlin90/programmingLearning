$(document).ready(function () {
    // EDITOR CKEDITOR
    if (document.querySelector('#body')) {
        ClassicEditor
            .create(document.querySelector('#body'))
            .catch(error => {
                console.error(error);
            });
    }

    $('#selectAllBoxes').change(function () {
        if (this.checked) {
            $('.checkBoxes').prop('checked', true);
        } else {
            $('.checkBoxes').prop('checked', false);
        }
    });
})