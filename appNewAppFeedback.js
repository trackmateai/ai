
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
         window.location.href=("resultsNeoboy35807.html");
   }
if (username=="goratamntande9@gmail.com"){
         window.location.href=("resultsGorata35260.html");
   }
if (username=="jgaatlale@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/h/D/c30ozb-d/huawei-y8s.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 862972046673478</font><br/>  Model: Y8s (JKM-LX1)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Description Full: HUAWEI Y9 2019 4GB+64GB Coral Red Dual Card Open Market Ver. EU Charger<br/>Model Code: Jackman-L21<br/>IMEI: 862972046673478<br/>S/N: <font color=#ff0000>DEF4C19924000462</font><br/>Item Code: 51093KJF<br/>Offer Code: OFFE00069040<br/>Country Code: 267<br/>Country Name: Botswana<br/>Warranty Status: Out of Warranty");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
if (username=="deeztwinsbookings@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350654412223034</font><br/>  Model: iPhone 14 (A2882)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Operating System	iOS 16<br/>Chipset	Apple A15 Bionic<br/>Number of CPU Cores	2<br/>RAM	6 GB <br/> Width	71.5 mm<br/>Height	146.7 mm<br/>Thickness	7.8 mm<br/>Weight	172.0 g<br/>DisplayType	RETINA<br/>Diagonal	6.1 inches<br/>Resolution	1170x2532 px<br/>Screen-to-body ratio	86.0 %<br/>Pixel density	460 ppi<br/>Colors	1073M  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   } 
    
}











