
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
      

    if (username=="ashrafprofessor30@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/0/i/OjHiaD-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355134571999026</font><br/>  Model: Camon 20<br/>Brand:  TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Width	74.4 mm<br/>Height	166.6 mm<br/>Thickness	8.3 mm<br/>DisplayType	LCD_IPS<br/>Diagonal	6.8 inches<br/>Resolution	1080x2460 px<br/>Pixel density	395 ppi<br/>Other display Features	Capacitive, Multi-touch, 2.5D curved glass screen<br/>  ");        

    mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   
 if (username=="maitumeloonamile@gmail.com" ){

     window.location.href=("resultsMaitumelo.html");
}   
if (username=="atasebeke@gmail.com" ){

            alert("Please check the IMEI number(355207113621572) you entered,it has not passed our validation check");
}
if (username=="thuto2018th@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/C/B/EphI4Q-d/huawei-y5p.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 868470040223428</font><br/>  Model:  Y5p (DRA-LX9)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 10<br/>Chipset	MediaTek Helio P22 (MT6762R)<br/>Number of CPU Cores	4<br/>RAM	2 GB<br/>Internal Memory	32 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	PowerVR GE8320<br/>Width	70.94 mm<br/>Height	146.5 mm<br/>Thickness	8.35 mm<br/>Weight	144.0 g<br/> DisplayType	LCD_IPS<br/>Diagonal	5.45 inches<br/>Resolution	720x1440 px<br/>Screen-to-body ratio	73.8 %<br/>Pixel density	276 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, 2.5D curved glass screen");        
     
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
    
 if (username=="laefmo15@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355786376148800</font><br/>  Model: iPhone 13 Pro (A2638)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" IMEI: 355786376148800<br/>Model Region: Global<br/>Activation Status: <font color=#00ee00>Activated</font><br/>Warranty Status: Coverage Expired<br/>Coverage Start Date: Dec 2021<br/>Estimated Purchase Date: Dec 2021<br/>AppleCare Eligible: No<br/>Valid Purchase Date: Yes<br/>Registered Device: Yes<br/>Replaced Device: No<br/>Loaner Device: No<br/>IMEI2: 3557863762**309<br/>Serial Number:<font color=#ff0000> W44RYLXW64</font><br/>Estimated Purchase Date: 20 Dec 2021<br/>Carrier: This device is <font color=#00ee00>UNLOCKED</font><br/>Next Tether Policy: 10<br/>Sim-Lock: Unlocked<br/>Find My iPhone: ON");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   
     if (username=="Ramapulanakb@GMAIL.COM" || username=="ramapulanakb@gmail.Ccom" ){
     
          alert("770098105471230 is an invalid IMEi number");
     }   

    
            
}











