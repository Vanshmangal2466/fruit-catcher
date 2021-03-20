var gamestate=0;
var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10 ;
var form ;
function preload(){
e1=loadImage("images/easy/1.jfif");
e2=loadImage("images/easy/2.jfif");
e3=loadImage("images/easy/3.jfif");
e4=loadImage("images/easy/4.jfif");
e5=loadImage("images/easy/5.jfif");
e6=loadImage("images/easy/6.jfif");
e7=loadImage("images/easy/7.jfif");
e8=loadImage("images/easy/8.jfif");
e9=loadImage("images/easy/9.jfif");
e10=loadImage("images/easy/10.jfif");

}

function setup(){
  canvas = createCanvas(displayWidth - 20 , displayHeight-140);
  form =new FORM ();
}

 
function draw(){

background("red");


stroke(0,0,0);
textSize(40);
text("PICTURE IDENTIFICATION ",550,170);

 if(gamestate===0){
   form.display();
 }
 if(gamestate===1){
   form.displayoption();
   
 }
if(gamestate===2){
    form.easymodule();
}
}
