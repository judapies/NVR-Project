const express = require('express');
const router = express.Router();
//process.camera = [];
const path	= require('path');

//routes
router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, 'views/jsmpeg.min.js'));
	res.render('index.html',{tittle: "First Website" });
	/*console.log( process.camera)
    res.write(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <style>
          canvas {
            display: block;
            float: left;
            transform: scale(1);
           transform-origin: 0% 0% 0px;
          }
          .camera{
            display: block;
            margin-left: 10px;
            margin-top: 10px;
            padding: 0px;
            width: 400px;
          }
        </style>
        <title>RTSP STREAMING NODE JS IP CAMERA </title>
       <h1>RTSP STREAMING NODE JS IP CAMERA </h1>
       ${ process.camera.map((can,i)=>{
            return ` <div><canvas class="camera" id="videoCanvas" width="640" height="360"></canvas></div>`
       }).join("") }
       
    
        <script type="text/javascript" src="jsmpeg.min.js"></script>
        <script type="text/javascript">
    
        ${ process.camera.map((can,i)=>{
            return ` player = new JSMpeg.Player('ws://localhost:9000', {
      	canvas: document.getElementById('canvas'),loop: true, autoplay: true,poster:true // Canvas should be a canvas DOM element
    	}) 
            ` 
       }).join("") } 

        </script>
    
    <body>
          
    </body>
    </html>` );
	res.end();*/
});

router.get('/contact', (req,res) => {
	res.render('contact',{tittle: "Contact Page" });
});

module.exports = router;