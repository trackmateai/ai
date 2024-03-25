
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
      

  

if (username=="atasebeke@gmail.com" ){

           alert("Invalid IMEi number 3557398816164");
}
if (username=="peloyankwetlhalefang@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/t/O/jNMWHQ-d/tecno-camon-19.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355947130760088</font><br/>  Model:  Camon 19<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Operating System	Android 12<br/>Chipset	MediaTek Helio G85 MT6769V<br/>Number of CPU Cores	2<br/>RAM	4 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	ARM Mali-G52 MC2<br/>GPU Cores	2<br/>GPU Clock	1000.0 MHz<br/>Width	74.4 mm<br/>Height	166.6 mm<br/>Thickness	8.3 mm<br/>Weight	198.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.8 inches<br/>Resolution	1080x2460 px<br/>Screen-to-body ratio	88.6 %<br/>Pixel density	395 ppi<br/>Colors	16.7M<br/>Other display Features	Capacitive, Multi-touch, Display refresh rate: 120 Hz ");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}
    
    if (username=="seizsoka5694@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 351886697213285</font><br/>  Model: Galaxy A12 (SM-A127F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A127F/DS BLUE AFA<br/>Search Term: 351886697213285<br/>IMEI 1: 351886697213285<br/>IMEI 2: 358434337213283<br/>Serial Number: <font color=#ff0000>RZ8R90F7JXE</font><br/>Model Desc: Galaxy A12<br/>Model Name: SM-A127F/DS<br/>Model Number: SM-A127FZBGAFA<br/>Warranty Status: Out of Warranty<br/>Estimated Warranty End Date: 07-09-2023<br/>Production location: Brazil SEDA<br/>Production Date: 07-09-2021<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}
      if (username=="76780358@temp.com" ){
          window.location.href=("results35088.html");
      }
    
            
}











