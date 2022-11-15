const fs = require("fs");
const qrcode = require("qrcode");

const urlCv = "https://www.rtp.cdmx.gob.mx/";

const run = async() => {
  const QR = await qrcode.toDataURL(urlCv)
  const htmlContent =  `
  <div style="display: flex; justify-content: center; align-items: center;">
  <h2>Mario RTP</h2>
  <img src="${QR}">
  </div>
  `;
  fs.writeFileSync('./index.html', htmlContent)
}

run()