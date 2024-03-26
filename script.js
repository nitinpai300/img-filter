var image = null;
var graymage = null;
var redmage = null;
var wimage = null;
var rimage = null;
var canvas;

function upload(){
  var imagefile= document.getElementById("file")
  image = new SimpleImage(imagefile);
  graymage= new SimpleImage(imagefile);
  redmage = new SimpleImage(imagefile);
  wimage = new SimpleImage(imagefile);
  rimage = new SimpleImage(imagefile);
  
  loadImage(image);
}
function loadImage(image){
  canvas = document.getElementById("imgcanvas"); 
  image.drawTo(canvas);
}
function doGray(){
  if( ImageIsLoaded(graymage)){
    for (var pixel of graymage.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
  graymage.drawTo(canvas);
}
  else{
    alert("Please Upload an Image")
  }
}

function doRed(){
 if( ImageIsLoaded(redmage)){
  for(var pixel of redmage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setBlue(0);
      pixel.setGreen(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
  }
  redmage.drawTo(canvas);
  }
  else{
    alert("Please Upload an Image");
  }
}

function ImageIsLoaded(test){
  if(test==null){
    return false;
  }
  else{
    return true;
  }
}

function clearFilter(){
  if(ImageIsLoaded(image)){
    upload();
  }
}

function Window(){
  if( ImageIsLoaded(wimage)){
  for( var pixel of wimage.values())
{
            if(pixel.getX()<=5 || pixel.getX()>=wimage.getWidth()-5 || pixel.getY()<=5 || pixel.getY()>=wimage.getHeight()-5 || pixel.getX()==wimage.getWidth()/4 || pixel.getX()==wimage.getWidth()/2 || pixel.getX()==(3*wimage.getWidth())/4 || pixel.getY()==wimage.getHeight()/4 || pixel.getY()==wimage.getHeight()/2 || pixel.getY()==3*(wimage.getHeight()/4) || pixel.getX()==(wimage.getWidth()/4)-1 || pixel.getX()==(wimage.getWidth()/2)-1 || pixel.getX()==(3*(wimage.getWidth()/4))-1 || pixel.getY()==(wimage.getHeight()/4)-1 || pixel.getY()==(wimage.getHeight()/2)-1 || pixel.getY()==(3*(wimage.getHeight()/4))-1 || pixel.getX()==(wimage.getWidth()/4)+1 || pixel.getX()==(wimage.getWidth()/2)+1 || pixel.getX()==(3*(wimage.getWidth()/4))+1 || pixel.getY()==(wimage.getHeight()/4)+1 || pixel.getY()==(wimage.getHeight()/2)+1 || pixel.getY()==(3*(wimage.getHeight()/4))+1){
                    pixel.setBlue(0);
                    pixel.setGreen(0);
                    pixel.setRed(0);
}          
}

    wimage.drawTo(canvas);
}
else{
  alert("Please Upload Image");
}
}

function Rainbow(){
   if( ImageIsLoaded(rimage)){
      for( var pixel of rimage.values())
    {
      
// Red Strip
        if(pixel.getY()<rimage.getHeight()/7){
              var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        if (avg<128){
          pixel.setRed(2*avg);
          pixel.setBlue(0);
          pixel.setGreen(0);
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
        }}
      
      
// Orange Strip
      if(pixel.getY()<2*(rimage.getHeight()/7) && (pixel.getY()>rimage.getHeight()/7)){
              var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        if (avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
          pixel.setBlue(2*avg-255);
        }} 
      
// Yellow Strip
      if( pixel.getY()<3*(rimage.getHeight()/7) && pixel.getY()>2*(rimage.getHeight()/7)) {
              var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        if (avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
          
          
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }} 
      
      
 // Green Strip     
  if( pixel.getY()<4*(rimage.getHeight()/7) && pixel.getY()>3*(rimage.getHeight()/7))  {
              var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        if (avg<128){
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }} 
      
      
      // Blue Strip
      if( pixel.getY()<5*(rimage.getHeight()/7) && pixel.getY()>4*(rimage.getHeight()/7))  {
              var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        if (avg<128){
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
        else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
        }} 
      
      // Indigo Strip
      if( pixel.getY()<6*(rimage.getHeight()/7) && pixel.getY()>5*(rimage.getHeight()/7))  {
              var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        if (avg<128){
          pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
        else{
          pixel.setRed(1.2*avg-51);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
        }}
      
      // Violet Strip
      if( pixel.getY()>6*(rimage.getHeight()/7))  {
              var avg = (pixel.getRed()+pixel.getGreen()+ pixel.getBlue())/3;
        if (avg<128){
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
        }
        else{
          pixel.setRed(0.4*avg+153);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(0.4*avg+153);
        }}
      
    }
     rimage.drawTo(canvas);   }
}