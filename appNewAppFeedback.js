
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
    
    if (username=="ashrafprofessor30@gmail.com"){
            
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/J/b/Cky5Wt-d/tecno-pop-7.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 358939470130623</font><br/>  Model: Pop 7br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Operating System	Android 12<br/>Chipset	Unisoc SC9863A1<br/>Number of CPU Cores	4<br/>RAM	2 GB<br/>Internal Memory	64 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	PowerVR GE832<br/> DisplayType	LCD_IPS<br/>Diagonal	6.6 inches<br/>Resolution	720x1612 px<br/>Screen-to-body ratio	84.6 %<br/>Pixel density	267 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, 2.5D curved glass screen ");        
     
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   

    
            
}











