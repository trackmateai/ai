
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
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353503966872174</font><br/>  Model: Galaxy A04 (SM-A045F)br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A045F/DS BLACK AFA<br/>Search Term: 353503966872174<br/>IMEI 1: 353503966872174<br/>Serial Number:<font color=#ff0000> R9DW803YL2N</font><br/>Model Desc: Samsung / SM-A045F/DS / Galaxy A04<br/>Model Name: SM-A045F/DS<br/>Model Number: SM-A045FZKDAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 30-08-2025<br/>Production location: Korea SEC<br/>Production Date: 30-08-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked  ");        

    mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   

if (username=="pascootsile@gmail.com" ){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04s.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350753201756657</font><br/>  Model: Galaxy A04S (SM-A047F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A047F/DS GREEN MYM<br/>Search Term: 350753201756657<br/>IMEI 1: 350753201756657<br/>IMEI 2: 352044981756655<br/>Serial Number:<font color=#ff0000> R58T90PX8AN</font><br/>Model Desc: Samsung / SM-A047F/DS / Galaxy A04s<br/>Model Name: SM-A047F/DS<br/>Model Number: SM-A047FZGGMYM<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 13-09-2024<br/>Production location: Korea SEC<br/>Production Date: 13-09-2022<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");        
     
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











