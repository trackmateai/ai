
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
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-9t-.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352577600093034</font><br/>  Model: Spark 9T<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 12<br/>Chipset	MediaTek Helio G37<br/>Number of CPU Cores	4<br/>RAM	4 GB<br/>Width	75.55 mm<br/>Height	164.27 mm<br/>Thickness	8.65 mm<br/>DisplayType	LCD_IPS<br/>Diagonal	6.6 inches<br/>Resolution	720x1600 px<br/>Screen-to-body ratio	84.2 %<br/>Pixel density	267 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, 2.5D curved glass screen, 90 Hz refresh rate ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
if (username=="seizsoka5694@gmail.com"){
            
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/R/b/jqMU5f-d/samsung-galaxy-a13-5g.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352345598133646</font><br/>  Model: Galaxy A13 5G (SM-A135F)<br/>Brand: SAMSUNG<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A135F BLACK AFA<br/>Search Term: 352345598133646<br/>IMEI 1: 352288968133640<br/>IMEI 2: 352345598133646<br/>Serial Number: R58TB0LTP4H<br/>Model Desc: Samsung Galaxy A13 4G<br/>Model Name: SM-A135F<br/>Model Number: SM-A135FZKGAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 08-11-2024<br/>Production location: Korea SEC<br/>Production Date: 08-11-2022<br/>Country: South Africa<br/>Carrier: Factory Unlocked  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }

 if (username=="bancegaebolae@gmail.com"){
       window.location.href=("resultsBance.html");
    }
    if (username=="edwinsera8@gmail.com"){
       window.location.href=("resultsEdwinsera.htmll");
    }
       
}











