
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


    
if (username=="maxmoilwa@gmail.com"){

    alert("You have exploited your allowed check limit. Please consider payment to continue");
          
    }
if (username=="raseatlak@gmail.com"){
      alert("You have exploited your allowed check limit. Please consider payment to continue");
      
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
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/5/Y/rPlNlt-d/huawei-p-smart-pro.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 867679042593536</font><br/>  Model: P smart Pro (STK-L21)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Description Full: HUAWEI Y9s 6GB+128GB Midnight Black Dual Card Open Market Ver. EU Charger<br/>Model Code: Stark-L21MEDV5<br/>IMEI: 867679042593536<br/>S/N: <font color=#ff0000>78KVB19C17005981 </font><br/>Item Code: 51094UMY<br/>Offer Code: OFFE00121221<br/>Country Code: 267<br/>Country Name: Botswana<br/>Warranty Status: Out of Warranty<br/>Warranty Expired: true");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
}











