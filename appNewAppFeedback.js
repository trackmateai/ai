
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
      

    if (username=="	seizsoka5694@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 351886697213285</font><br/>  Model: Galaxy A12 (SM-A127F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A127F/DS BLUE AFA<br/>Search Term: 351886697213285<br/>IMEI 1: 351886697213285<br/>IMEI 2: 358434337213283<br/>Serial Number:<font color=#ff0000> RZ8R90F7JXE</font><br/>Model Desc: Samsung / SM-A127F/DS / Galaxy A12<br/>Model Name: SM-A127F/DS<br/>Model Number: SM-A127FZBGAFA<br/>Warranty Status: Out of Warranty<br/>Estimated Warranty End Date: 07-09-2023<br/>Production location: Brazil SEDA<br/>Production Date: 07-09-2021<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");        

    mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   
 if (username=="maitumeloonamile@gmail.com" ){

     window.location.href=("resultsMaitumelo.html");
}   

if (username=="atasebeke@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a7-lite.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353415702433288</font><br/>  Model: Galaxy Tab A7 Lite (SM-T225N)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-T225N GRAY AFA<br/>Search Term: 353415702433288<br/>IMEI 1: 353415702433288<br/>Serial Number:<font color=#ff0000> R9PRA04G3KK</font><br/>Model Desc: Samsung / SM-T225N / Galaxy Tab A7 Lite<br/>Model Name: SM-T225N<br/>Model Number: SM-T225NZALAFA<br/>Warranty Status: Out of Warranty<br/>Estimated Warranty End Date: 15-10-2023<br/>Production location: Korea SEC<br/>Production Date: 15-10-2021<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}
    
    if (username=="Tshepogars@gmail.com" || username=="tshepogars@gmail.com" ){
            
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/o/O/UVBYwx-d/huawei-nova-y71.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 864903057471484</font><br/>  Model: Nova Y71 (MGA-LX9N)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Chipset	HiSilicon Kirin 710<br/>Number of CPU Cores	8<br/>RAM	8 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>Width	77.7 mm<br/>Height	168.3 mm<br/>Thickness	8.98 mm<br/>Weight	199.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.75 inches<br/>Resolution	720x1600 px<br/>Screen-to-body ratio	83.6 %<br/>Pixel density	260 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch  ");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   

    
            
}











