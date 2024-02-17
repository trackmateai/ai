
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
      
  if (username=="nboikaego@yahoo.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg";
    
        mainInfo.innerHTML=("  STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 359056817410797</font><br/>  Model: iPhone 14 Pro Max (A2894)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Operating System	iOS 16<br/>Chipset	Apple A16 Bionic<br/>Number of CPU Cores	6<br/>RAM	6 GB<br/> Width	77.6 mm<br/>Height	160.7 mm<br/>Thickness	7.85 mm<br/>Weight	240.0 g<br/>DisplayType	RETINA<br/>Diagonal	6.7 inches<br/>Resolution	1290x2796 px<br/>Pixel density	460 ppi<br/>Colors	1073M<br/>Other display Features	, Display refresh rate: 120 Hz ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}  

if (username=="phetsookay@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/k/O/MCpIfl-d/samsung-galaxy-a24.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354916449643922</font><br/>  Model: Galaxy A24 (SM-A245F)<br/>Brand: SAMSUNG<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A245F BLACK MEA<br/>Search Term: 354916449643922<br/>IMEI 1: 354916449643922<br/>Serial Number: <font color=#ff0000>RZ8W80DXD2Z</font><br/>Model Desc: Samsung Korea Galaxy A24<br/>Model Name: SM-A245F<br/>Model Number: SM-A245FZKUMEA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 22-08-2025<br/>Production location: Brazil SEDA<br/>Production Date: 22-08-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   } 

if (username=="thuto2018th@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/u/Z/dd2mZE-d/huawei-p40-lite.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 867594052185356</font><br/>  Model: P40 lite (JNY-LX1)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Operating System	Android 10<br/>Chipset	Huawei HiSilicon KIRIN 810<br/>Number of CPU Cores	2<br/>RAM	6 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	ARM Mali-G52 MP6<br/>GPU Cores	6<br/>GPU Clock	820.0 MHz<br/>Width	76.3 mm<br/>Height	159.2 mm<br/>Thickness	8.7 mm<br/>Weight	183.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.4 inches<br/>Resolution	1080x2310 px<br/>Screen-to-body ratio	83.5 %<br/>Pixel density	398 ppi<br/>Colors	16M ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }


            
}











