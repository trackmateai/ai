
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

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356720119340712</font><br/>  Model: iPhone 12 Pro Max (A2410)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Operating System	iOS<br/>Chipset	Apple A14 Bionic<br/>RAM	6 GB<br/>Width	78.09 mm<br/>Height	160.84 mm<br/>Thickness	7.39 mm<br/>Weight	228.0 g<br/>DisplayType	OLED<br/>Diagonal	6.7 inches<br/>Resolution	1824x2778 px<br/>Pixel density	496 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, Scratch resistant ");        
     
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











