
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
      
  if (username=="nboikaego@yahoo.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg";
    
        mainInfo.innerHTML=("  STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 359056817410797</font><br/>  Model: iPhone 14 Pro Max (A2894)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Operating System	iOS 16<br/>Chipset	Apple A16 Bionic<br/>Number of CPU Cores	6<br/>RAM	6 GB<br/> Width	77.6 mm<br/>Height	160.7 mm<br/>Thickness	7.85 mm<br/>Weight	240.0 g<br/>DisplayType	RETINA<br/>Diagonal	6.7 inches<br/>Resolution	1290x2796 px<br/>Pixel density	460 ppi<br/>Colors	1073M<br/>Other display Features	, Display refresh rate: 120 Hz ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}  

if (username=="atasebeke@gmail.com"){
            window.location.href=("resultsMasele3580.html");
   } 
if (username=="ramapulanakb@GMAIL.COM" || username=="ramapulanakb@gmail.com" || username=="Ramapulanakb@GMAIL.COM"){
            alert(" 35882483355083 is an invalid IMEi number. Please recheck and try again");
   } 
if (username=="twinteckmedia@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/n/R/UxcXxI-d/tecno-camon-19-pro.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352229802430727</font><br/>  Model: Camon 19 Pro<br/>Brand:  TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 12<br/>Chipset	MediaTek Dimensity 810 MT6833V<br/>Number of CPU Cores	2<br/>RAM	8 GB<br/>Width	74.6 mm<br/>Height	166.8 mm<br/>Thickness	8.58 mm<br/>Contectivity<br/>USB Conector Type	USB Type-C<br/>USB Version	2.0<br/>Built-in WiFi	yes<br/>WiFi Version	802.11 a/b/g/n/ac<br/>DisplayType	LCD_IPS<br/>Diagonal	6.8 inches<br/>Resolution	1080x2460 px<br/>Screen-to-body ratio	88.2 %<br/>Pixel density	395 ppi<br/>Colors	16M ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }


            
}











