
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
      

    if (username=="atasebeke@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353045111065023</font><br/>  Model: iPhone 12 (A2402)<br/>Brand: APPLE <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=("Operating System	iOS<br/>Chipset	Apple A14 Bionic<br/>Number of CPU Cores	6<br/>RAM	4 GB<br/>Width	71.5 mm<br/>Height	146.7 mm<br/>Thickness	7.4 mm<br/>Weight	164.0 g<br/> DisplayType	OLED<br/>Diagonal	6.1 inches<br/>Resolution	1170x2532 px<br/>Pixel density	457 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch<br/>BatteryCapacity	2775.0 mah<br/>Type	Li-Ion<br/>Removable battery	no<br/>Features	Qi wireless charging, Wireless reverse charging, USB PD 3.0 ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   

    
    
            
}











