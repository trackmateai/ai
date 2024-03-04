
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
      

    if (username=="thuto2018th@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04s.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350026555862276</font><br/>  Model: Galaxy A04S (SM-A047F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A047F/DS BLACK MEA<br/>Search Term: 350026555862276<br/>IMEI 1: 350026555862276<br/>Serial Number:<font color=#ff0000> R58W90Z6NNZ</font><br/>Model Desc: Samsung Galaxy A04s<br/>Model Name: SM-A047F/DS<br/>Model Number: SM-A047FZKDMEA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 20-09-2025<br/>Production location: Korea SEC<br/>Production Date: 20-09-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   
 if (username=="maitumeloonamile@gmail.com" ){

     window.location.href=("resultsMaitumelo.html");
}   

    if (username=="seizsoka5694@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/Q/9/B5fkgh-d/samsung-galaxy-a04e.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350128817244093</font><br/>  Model: Galaxy A04e (SM-A042F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A042F/DS LIGHT BLUE AFA<br/>Search Term: 350128817244093<br/>IMEI 1: 350128817244093<br/>Serial Number:<font color=#ff0000> R83W709ER9X</font><br/>Model Desc: Samsung A04e<br/>Model Name: SM-A042F/DS<br/>Model Number: SM-A042FLBDAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 11-07-2025<br/>Production location: Korea SEC<br/>Production Date: 11-07-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked  ");
        
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











