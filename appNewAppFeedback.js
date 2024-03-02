
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
      

    if (username=="pascootsile@gmail.com" ){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/w/I/rjY9kh-d/huawei-y6s.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 868023046677699</font><br/>  Model: Y6s (JAT-L29)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Description Full: HUAWEI Y6s 3GB+64GB Orchid Blue Dual Card Open Market Ver. EU Charger<br/>Model Code: Jakarta-L29CHW<br/>IMEI: 868023046677699<br/>S/N:<font color=#ff0000> 9EHVB20307011986</font><br/>Item Code: 51095BEA-002<br/>Offer Code: OFFE00118607<br/>Warranty Status: Out of Warranty<br/>Warranty Start: refresh<br/>Warranty Expire: refresh ");
        
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











