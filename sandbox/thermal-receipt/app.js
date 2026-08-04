makeQRCode(`Invoice ID: INV2011102018985`);
function makeQRCode(content = '') {
    const typeNumber = 0;
    const errorCorrectionLevel = 'M';
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(content);
    qr.make();
    document.getElementById('qr_code').innerHTML = qr.createImgTag(4, 0, 'qr_code');
}

const printButton = document.getElementById('printButton')
printButton.addEventListener('click', () => {
    let now = new Date();
    let today = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
    printButton.style.display = 'none';
    document.getElementById('printedTime').innerText = today;
    window.print();
    printButton.style.display = 'block';
    document.getElementById('printedTime').innerText = '';
});