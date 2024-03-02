
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
 if (username=="maitumeloonamile@gmail.com" ){

     window.location.href=("resultsMaitumelo.html");
}   

    if (username=="atasebeke@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/u/q/eWfmn6-d/huawei-nova-y70.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 860285061077463</font><br/>  Model: Nova Y70 (MGA-LX9)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Description Full: HUAWEI nova Y70 4GB+128GB Midnight Black Dual Card Open Market Ver. UK charger<br/>Model Code: Mega-L29B<br/>IMEI: 860285061077463<br/>S/N: <font color=#ff0000>KDSBB22610206480</font><br/>Item Code: 51096YTN<br/>Offer Code: OFFE00418304<br/>Warranty Status: Out of Warranty<br/>Warranty Start: refreshing...<br/>Warranty Expire: refreshing...  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   
    
 if (username=="onicamaphane99@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/v/Y/OLNPUH-d/xiaomi-redmi-note-11e-pro.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 860555066930647</font><br/>  Model: Redmi Note 11E Pro (2201117TG)br/>Brand: XIAOMI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model: Redmi Note 11 Graphite Gray 4GB RAM 128GB ROM<br/>IMEI: 860555066930647<br/>Brand: Redmi<br/>Model: 2201117TG<br/>Model Name: Note 11<br/>Purchase Country: South Africa<br/>Shipping date: 2022-04-27 14:40:28<br/>Activation date: 2022-09-03 18:35:31 ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   
    
            
}











