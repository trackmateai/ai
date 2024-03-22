
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
if (username=="peloyankwetlhalefang@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/t/O/jNMWHQ-d/tecno-camon-19.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355947130760088</font><br/>  Model:  Camon 19<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Operating System	Android 12<br/>Chipset	MediaTek Helio G85 MT6769V<br/>Number of CPU Cores	2<br/>RAM	4 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	ARM Mali-G52 MC2<br/>GPU Cores	2<br/>GPU Clock	1000.0 MHz<br/>Width	74.4 mm<br/>Height	166.6 mm<br/>Thickness	8.3 mm<br/>Weight	198.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.8 inches<br/>Resolution	1080x2460 px<br/>Screen-to-body ratio	88.6 %<br/>Pixel density	395 ppi<br/>Colors	16.7M<br/>Other display Features	Capacitive, Multi-touch, Display refresh rate: 120 Hz ");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}
    
    if (username=="Ksmosime@gmail.com"){
            
           window.location.href=("resultsKmosime35668.html");
}   

     
    
            
}











