
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


    
if (username=="thabochizwe81@gmail.com"){
      window.location.href=("resultsThabo35161.html");          
    }
    
if (username=="segotsoreuben@gmail.com"){
  
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/t/O/jNMWHQ-d/tecno-camon-19.jpg";
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357464315536711</font><br/>  Model: Camon 19<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Operating System	Android 12<br/>Chipset	Mediatek MT6781 Helio G96<br/>Number of CPU Cores	2<br/>RAM	4 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	Mali-G52 MC2<br/>GPU Cores	2<br/>GPU Clock	1000.0 MHz<br/>Width	74.4 mm<br/>Height	166.6 mm<br/>Thickness	8.3 mm<br/>Type	LCD_IPS<br/>Diagonal	6.8 inches<br/>Resolution	1080x2460 px<br/>Screen-to-body ratio	88.6 %<br/>Pixel density	395 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, Display refresh rate: 120 Hz ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
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
      window.location.href=("resultsNeoboy86639.html");
    }
    
    
}











