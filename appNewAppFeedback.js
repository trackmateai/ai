
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

 if (username=="mollyjacob1980@gmail.com"){
         window.location.href=("resultsMolly.html");
    }
if (username=="dicemodiagane@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-9-.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352528511080719</font><br/>  Model: Spark 9( KG5p)<br/>Brand: Tecno<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 12<br/>Chipset	Mediatek MT6765V/CB Helio G37<br/>Number of CPU Cores	4<br/>RAM	3 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	PowerVR GE8320<br/>Width	76.0 mm<br/>Height	164.6 mm<br/>Thickness	9.0 mm<br/>Display Type	LCD_IPS<br/>Diagonal	6.6 inches<br/>Resolution	720x1600 px<br/>Screen-to-body ratio	84.1 %<br/>Pixel density	266 ppi<br/>Colors	16M<br/>   ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }
    
}











