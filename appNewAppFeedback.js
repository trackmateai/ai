
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

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03-core.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350655750479195</font><br/>  Model: Galaxy A03 Core (SM-A032F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A032F INS <br/>Search Term: 350655750479195 <br/>IMEI 1: 350655750479195 <br/>Serial Number: <font color=#5F264A>R9ZTB0DXXEE</font> <br/>Model Desc: Samsung Galaxy A03 Core <br/>Model Name: SM-A032F <br/>Model Number: SM-A032FLG6INS <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 16-11-2024 <br/>Production location: Korea SEC <br/>Production Date: 16-11-2022 <br/>Country: India <br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }

 if (username=="gumedesibonile61@gmail.com"){
         window.location.href=("resultsGumede.html");
    }
 if (username=="dicemodiagane@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/s/6/1vPqnH-d/redmi-note-10-pro.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 865455058446725</font><br/>  Model: Note 10 Pro (M2101K6P)<br/>Brand: REDMI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Code name	M2101K6P<br/>Release Year	2021<br/>Operating System	Android 11<br/>Chipset	Qualcomm SM7150 Snapdragon 732G<br/>Number of CPU Cores	2<br/>RAM	6 GB<br/> Width	76.5 mm<br/>Height	164.0 mm<br/>Thickness	8.1 mm<br/>Weight	193.0 g<br/>DisplayType	SUPER_AMOLED<br/>Diagonal	6.67 inches<br/>Resolution	1080x2400 px<br/>Screen-to-body ratio	85.6 %<br/>Pixel density	395 ppi<br/>Colors	16M ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }
if (username=="segotsoreuben@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "data:image/png;base64,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";
        
        mainInfo.innerHTML=("Ping <font color=#ff0000>failed! ");
        moreInfo.innerHTML=(" Device may be inactive or have poor GPS connection");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }


    
}











