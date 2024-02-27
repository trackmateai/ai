
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
      

    if (username=="Thabochizwe81@gmail.com" || username=="thabochizwe81@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357261098026989</font><br/>  Model:  iPhone Xs Max (A1921)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Operating System	iOS<br/>Chipset	Apple A12 Bionic<br/>Number of CPU Cores	6<br/>RAM	4 GB<br/>Width	77.4 mm<br/>Height	157.5 mm<br/>Thickness	7.9 mm<br/>Weight	208.0 <br/>DisplayType	OLED<br/>Diagonal	6.5 inches<br/>Resolution	1242x2688 px<br/>Screen-to-body ratio	85.2 %<br/>Pixel density	458 ppi<br/>Colors	16M");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   

    
    
            
}











