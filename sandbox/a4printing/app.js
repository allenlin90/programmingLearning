var typeNumber = 0;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('https://app.makesend.asia/');
qr.make();
document.getElementById('qr_code_img').innerHTML = qr.createImgTag(8, 0, 'qr_code');