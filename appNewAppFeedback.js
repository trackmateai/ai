
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
            phoneImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuX-4z89FKfuoFZ8bsIQkeQUYVpZErwIHPw&usqp=CAU";
        
        mainInfo.innerHTML=("Ping <font color=#ff0000>failed! ");
        moreInfo.innerHTML=(" Device may be inactive or have poor GPS connection");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }


    
}











