const printButton = document.getElementById('printButton')
printButton.addEventListener('click', () => {
    printButton.style.display = 'none';
    window.print();
    printButton.style.display = 'block';
});