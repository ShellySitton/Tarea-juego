/*
 *
 * CINEMA EXPANDIDO WEB
 * PIXEL ARRAY 2 (13-03-18)
 * SHELLY SITTON
 * 
 *
 * URL:  https://shellysitton.github.io/CEW_pixelArray2/
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
 
 var video;
 
 /*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
 
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  
}
function preload(){
 video=createVideo("assets/videos/h.mov"); 
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  initializeVideo()
}

function draw() {
 background(0);
  //drawVideo();
 // drawVideoLuz();
  //drawVideoNose();
   drawVideoNoseUno();
   toggleVideo();
  
}


 /*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */
 
 function initializeVideo(){
  
  video.loop();
  video.hide();
   
 }
 
 function drawVideo(){
   
   var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
   
   video.loadPixels();
   
  
   
   for(var y=0; y<video.height; y++){
     for(var x=0; x<video.width; x++){
       var index= (x+(y * video.width))*4;
       
      video.pixels[index] =150; //aqui tengo los rojos.
       video.pixels[index+1]=video.pixels[index+1];
        video.pixels[index+2]=video.pixels[index+2];
         video.pixels[index+3]=video.pixels[index+3]/3;
         
     }
   }
   video.updatePixels();
   
   image(video,correctionX,correctionY);
   
   
 }
 
 
 function drawVideoLuz(){
   
   var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
   
   video.loadPixels();
   
  
   
   for(var y=0; y<video.height; y++){
     for(var x=0; x<video.width; x++){
       var index= (x+(y * video.width))*4;
       
       if(index % 120 == 0){
          video.pixels[index] =150; //aqui tengo los rojos.
       video.pixels[index+1]=video.pixels[index+1];
        video.pixels[index+2]=video.pixels[index+2];
         video.pixels[index+3]=video.pixels[index+3]/3;
       }
     }
   }
   video.updatePixels();
   
   image(video,correctionX,correctionY);
   
   
 }
 
 
 
function drawVideoNose(){
   
   var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
   
   video.loadPixels();
   
   var stepSize =20;
  
   
   for(var y=0; y<video.height; y += stepSize ){
     for(var x=0; x<video.width; x += stepSize){
       var index= (x+(y * video.width))*4;
       
       var darkness = (255 - video.pixels[index])/255;
       
       var radio= stepSize * darkness;
       
       //fill(video.pixels[index],video.pixels[index+1],video.pixels[index+2]);
       fill(255);
       ellipse(x+correctionX,y+correctionY,radio,radio);
       
     
     }
   }
 }
 
  
function drawVideoNoseUno(){
   
   var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
   
   video.loadPixels();
   
   var stepSize =round(map(mouseX,0,windowWidth, 8,60));
  
   
   for(var y=0; y<video.height; y += stepSize ){
     for(var x=0; x<video.width; x += stepSize){
       var index= (x+(y * video.width))*4;
       
       var darkness = (255 - video.pixels[index])/255;
       
       var radio= stepSize * darkness;
       
       fill(video.pixels[index],video.pixels[index+1],video.pixels[index+2]);
       
           ellipse(x+correctionX,y+correctionY,radio,radio);
       
      
     
     }
     
     }
   }
   
   
   
   function toggleVideo(){
     
     if(mouseY > windowHeight/2){
       video.loop();
       }else {
         
       video.pause();
    }
   
   }