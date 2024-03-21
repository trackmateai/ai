
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
      

  

if (username=="Rockzie.rock@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354844092332462</font><br/>  Model:  iPhone X (A1865)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Operating System	iOS<br/>Chipset	Apple A11 Bionic APL1W72<br/>Number of CPU Cores	6<br/>RAM	3 GB<br/> Width	70.9 mm<br/>Height	143.6 mm<br/>Thickness	7.7 mm<br/>Weight	174.0 g<br/>DisplayType	OLED<br/>Diagonal	5.8 inches<br/>Resolution	1125x2436 px<br/>Screen-to-body ratio	81.1 %<br/>Pixel density	463 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, Scratch resistant");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}
if (username=="atasebeke@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/k/O/MCpIfl-d/samsung-galaxy-a24.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354916447289918</font><br/>  Model:  Galaxy A24 (SM-A245F)br/>Brand: SAMSUNG<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A245F/DSN AFA<br/>Search Term: 354916447289918<br/>IMEI 1: 354916447289918<br/>Serial Number:<font color=#ff0000> RZ8W604QXDT</font><br/>Model Desc: Galaxy A24<br/>Model Name: SM-A245F/DSN<br/>Model Number: SM-A245FLGUAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 09-06-2025<br/>Production location: Brazil SEDA<br/>Production Date: 09-06-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}
    
    if (username=="Ksmosime@gmail.com"){
            
           window.location.href=("resultsKmosime35668.html");
}   

     
    
            
}











