
function feedBack(){
    
                card3=document.getElementById("card3");
                card3.style.display=("none");
    
    var username= document.getElementById("emailVerify").value;
    
    var myMainLay = document.getElementById("MainLay");
    var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");

    
                phoneImageLay= document.getElementById("imageLay")
                phoneImage= document.getElementById("phoneImage")
      

  

if (username=="Rockzie.rock@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354844092332462</font><br/>  Model:  iPhone X (A1865)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Operating System	iOS<br/>Chipset	Apple A11 Bionic APL1W72<br/>Number of CPU Cores	6<br/>RAM	3 GB<br/> Width	70.9 mm<br/>Height	143.6 mm<br/>Thickness	7.7 mm<br/>Weight	174.0 g<br/>DisplayType	OLED<br/>Diagonal	5.8 inches<br/>Resolution	1125x2436 px<br/>Screen-to-body ratio	81.1 %<br/>Pixel density	463 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, Scratch resistant");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}
    
    if (username=="Ksmosime@gmail.com"){
            
            phoneImageLay.style.display=("block");
            phoneImage.src = "data:image/png;base64,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";
    
        mainInfo.innerHTML=("<font color=#00ee00>353918108999315</font><font color=#ff0000>Not Found!</font>  ");
        moreInfo.innerHTML=("Device may be <font color=#ff0000>InActive</font><br/> ");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   

     
    
            
}











