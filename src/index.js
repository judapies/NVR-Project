const express = require('express');
const app	=	express();
const path	= require('path');


//settings
app.set('port',3000);
app.set('view engine',	'ejs');
app.engine('html',require('ejs').renderFile);// para configurar motor ejs con extension html
app.set('views', path.join(__dirname, 'views'));

//RTSP
Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  //streamUrl: 'rtsp://192.168.100.22:554/Streaming/Channels/101?transportmode=unicast&profile=Profile_1',
  streamUrl: 'rtsp://admin:admin123456@192.168.100.22/',
  wsPort: 9000,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})



//ONVIF DISCOVER
/*const onvif = require('node-onvif');

console.log('Start the discovery process.');
// Find the ONVIF network cameras.
// It will take about 3 seconds.
onvif.startProbe().then((device_info_list) => {
  console.log(device_info_list.length + ' devices were found.');
  // Show the device name and the URL of the end point.
  device_info_list.forEach((info) => {
    console.log('- ' + info.urn);
    console.log('  - ' + info.name);
    console.log('  - ' + info.xaddrs[0]);
  });
}).catch((error) => {
  console.error(error);
});

// GET Stream URL
const onvif = require('node-onvif');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://192.168.100.22/onvif/device_service',
  user : 'admin',
  pass : 'admin123456'
});

// Initialize the OnvifDevice object
device.init().then(() => {
  // Get the UDP stream URL
  let url = device.getUdpStreamUrl();
  console.log(url);
}).catch((error) => {
  console.error(error);
});
*/

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Escuchando el servidor
app.listen(app.get('port'), ()=>{
	console.log('server on port',app.get('port'));
});