
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
                

    
 if (username=="Masele"){
       window.location.href=("resultsMasele.html");
    }


if (username=="ashrafprofessor30@gmail.com"){
  
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356663762685811</font><br/>  Model: Galaxy S23 Ultra (SM-S918B)<br/>Brand: SAMSUNG<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model Info: MOBILE SM-S918B BLACK AFA<br/>Search Term: 356663762685811<br/>IMEI 1: 356663762685811<br/>IMEI 2: 357273442685816<br/>Serial Number: <font color=#ff0000>R5CW21Z4NGH</font><br/>Model Desc: Samsung Korea Galaxy S23 ULTRA<br/>Model Name: SM-S918B<br/>Model Number: SM-S918BZKCAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 15-02-2025<br/>Production location: Korea SEC<br/>Production Date: 15-02-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }

if (username=="neoboy71@gmail.com"){
            
            phoneImageLay.style.display=("BLOCK");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/4/8/ew9Ykl-d/tecno-camon-18.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356943545815053</font><br/>  Model: Camon 18<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Operating System	Android 11<br/>Chipset	MediaTek Helio G88<br/>Number of CPU Cores	2<br/>RAM	4 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	ARM Mali-G52 2EEMC2<br/>GPU Cores	2<br/>GPU Clock	1000.0 MHz<br/>Width	76.67 mm<br/>Height	168.9 mm<br/>Thickness	8.8 mm<br/>Display Type	LCD_IPS<br/>Diagonal	6.8 inches<br/>Resolution	1080x2460 px<br/>Screen-to-body ratio	84.7 %<br/>Pixel density	395 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, 2.5D curved glass screen  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
if (username=="seizsoka5694@gmail.com"){
  
            phoneImageLay.style.display=("none");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg";
    
        mainInfo.innerHTML=("Invalid IMEi (3552345598133646) ");
        moreInfo.innerHTML=(" ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
}











