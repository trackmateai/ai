



function openNav(){
    window.location.href=("appTracking.html");
}





function startTracking(){
    
    
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var infoDv= document.getElementById("myInfo0");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    textTrk.style.color=("#ffffff");
    textInf.style.color=("#374151");
    textHm.style.color=("#374151");
    textDisc.style.color=("#374151");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("none");
    trkDv.style.display=("block");
    homeDv.style.display=("none");
    homeDv.style.display=("none");
    diclaDiv.style.display=("none");
    feedDv.style.display=("none");
}

function home(){
    
    
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    
    textTrk.style.color=("#374151");
    textInf.style.color=("#374151");
    textHm.style.color=("#ffffff");
    textDisc.style.color=("#374151");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("none");
    trkDv.style.display=("none");
    homeDv.style.display=("block");
    diclaDiv.style.display=("none");
    feedDv.style.display=("none");
}


function info(){
    
    
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    
    textTrk.style.color=("#374151");
    textInf.style.color=("#ffffff");
    textHm.style.color=("#374151");
    textDisc.style.color=("#374151");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("block");
    trkDv.style.display=("none");
    homeDv.style.display=("none");
    homeDv.style.display=("none");
    diclaDiv.style.display=("none");
    feedDv.style.display=("none");
}


function disclaimer(){
    
    
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    textTrk.style.color=("#374151");
    textInf.style.color=("#374151");
    textHm.style.color=("#374151");
    textDisc.style.color=("#ffffff");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("none");
    trkDv.style.display=("none");
    homeDv.style.display=("none");
    homeDv.style.display=("none");
    diclaDiv.style.display=("block");
    
    var loader= document.getElementById("loader20");
    loader.style.display=("none");
    feedDv.style.display=("none");
}

function feedBack(){
    
    var username = document.getElementById("username").value;

    var myLoginLay = document.getElementById("LoginLay");
    var myMainLay = document.getElementById("MainLay");
    var myInfoLay = document.getElementById("InfoLay");

            myLoginLay.style.display=("none");
            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");

    
    if (username=="Masele"){
          var firstInfo= "my first info here";
          var secondInfo= "Model Info: MOBILE SM-A217F/DS BLACK XFA Search Term: 355177110558514 IMEI 1: 355177110558514 Serial Number: RF8N826WBSM Model Desc: Samsung Galaxy A21s Model Name: SM-A217F/DS Model Number: SM-A217FZKDXFA Warranty Status: Out of Warranty Estimated Warranty End Date: 20-08-2022 Production location: Vietnam SEV Production Date: 20-08-2020 Country: South Africa Carrier: Factory Unlocked ";
        
         mainInfo.innerHTML=(firstInfo);
         moreInfo.innerHTML=(secondInfo);
         mainInfo.style.display=("block");
         moreInfo.style.display=("block");
    }


if (username=="segotsoreuben@gmail.com"){
         mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355177110558514</font><br/>  Model: Galaxy A21s (SM-217F) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
         moreInfo.innerHTML=("Model Info: MOBILE SM-A217F/DS BLACK XFA Search Term: 355177110558514 IMEI 1: 355177110558514 Serial Number: RF8N826WBSM Model Desc: Samsung Galaxy A21s Model Name: SM-A217F/DS Model Number: SM-A217FZKDXFA Warranty Status: Out of Warranty Estimated Warranty End Date: 20-08-2022 Production location: Vietnam SEV Production Date: 20-08-2020 Country: South Africa Carrier: Factory Unlocked ");
    
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
if (username=="ashrafprofessor30@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 351999625875859</font><br/>  Model: Iphone 13 Pro Max (A2641) <br/>Brand: Apple<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Description: IPHONE 13 PRO MAX GPH 256GB-JPNIMEI: 351999625875859 Model Region: Canada, Guam, Japan, Mexico, Puerto Rico, Saudi Arabia, USVI Activation Status: Activated Warranty Status: Coverage Expired Coverage Start Date: Dec 2021 Estimated Purchase Date: Dec 2021 AppleCare Eligible: No Registered Device: YesReplaced Device: No Loaner Device: No IMEI2: 3519996250**9** Serial Number: GGVVYT6JK7 Purchase Country: Japan Demo Unit: No Carrier: This device is UNLOCKED Next Tether Policy: 10 Sim-Lock: Unlocked Find My iPhone: ON iCloud Status: Clean Blacklist Status: Clean ");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="ftando8@gmail.com"){

        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352938776602737</font><br/>  Model: Galaxy A52 4G(525F) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A525F BLUE MEA Search Term: 352938776602737 IMEI 1: 352938776602737 Serial Number: RZ8R322MZ0E Model Desc: Samsung Galaxy A52 4G Model Name: SM-A525F Model Number: SM-A525FZBHMEA Warranty Status: Out of Warranty Estimated Warranty End Date: 20-03-2023 Production location: Brazil SEDA Production Date: 20-03-2021 Country: United Arab Emirates Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
    
    
}






