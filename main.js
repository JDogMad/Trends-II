window.addEventListener("load", () => {
    var qrc = new QRCode(document.getElementById("qrcode"), {
        text: "https://www.tfestival.be/",
        width: 100,
        height: 100
    });
});