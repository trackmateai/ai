



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

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354242786621219</font><br/>  Model: Camon 16 <br/>Brand: Tecno<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Pay)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Device type: Smartphone Design:
                            Classic DualSIM: yes SIM card size: Nano Sim, Nano Sim GSM:
        YES850 900 1800 1900 HSDPA: YES icon 850 900 2100 HSPA+ LTE: YES icon LTE-FDD: 800, 850, 900, 1800, 2100, 2600 YES icon 
            LTE-TDD: 2300, 2500, 2600 Other: WCDMA Dimensions (H/L/W): 170.9 x 77.2 x 9.2
                mm, vol. 121.4 cm³ Display: LCD IPS Color (16M) 720x1640px (6.8") 263ppi Tou
                    ch screen: YES Weight: 207 g Battery: Li-Ion 5000 mAh Non-removable battery: YES icon Built-in memory: YES icon128 GB Memory card: YES iconmicroSDXC RAM Memory: 4 GBore) GPU Type: Mali-G52 2EEMC2 ");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }


if (username=="segotsoreuben@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Active(Found)</font><br/>IMEI: <font color=#00ee00> 862213048367524 </font><br/>  Model: Galaxy A31(SM-A315F)<br/>Brand: SAMSUNG<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00  Hidden(Pay)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model: MOBILE SM-A315F BLACK XFASearch Term: 356268115511167IMEI 1: 356268115511167Serial Number: RF8N71KCXXAModel Desc: Samsung Galaxy A31ModeName: SM-A315FModel Number: SM-A315FZKVXFAWarranty Status: Out of WarrantyEstimated Warranty End Date: 15-07-2022Production location: Vietnam SEVProduction Date: 15-07-2020Country: South AfricaCarrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
if (username=="ashrafprofessor30@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI:<font color=#00ee00> 3582619114645561 </font><br/>  Model: Galaxy A04S (SM-A047F)<br/>Brand: SAMSUNG<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A047F/DS BLACK AFASearch Term: 358261911464556IMEI 1: 358261911464556Serial Number: RZ8W206VQRAModel Desc: Samsung Galaxy A04s Model Name: SM-A047F/DS Model Number: SM-A047FZKDAFA Warranty Status: Warranty Active Estimated Warranty End Date: 11-02-2025 Production location: Brazil SEDA Production Date: 11-02-2023 Country: South Africa Carrier: Factory Unlocked ");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="ftando8@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354242786621219</font><br/>  Model: Camon 16 <br/>Brand: Tecno<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Pay)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Device type: Smartphone Design: Classic DualSIM: yes SIM card size: Nano Sim, Nano Sim GSM:YES850 900 1800 1900 HSDPA: YES icon 850 900 2100 HSPA+ LTE: YES icon LTE-FDD: 800, 850, 900, 1800, 2100, 2600 YES icon LTE-TDD: 2300, 2500, 2600 Other: WCDMA Dimensions (H/L/W): 170.9 x 77.2 x 9.2 mm, vol. 121.4 cm³ Display: LCD IPS Color (16M) 720x1640px (6.8") 263ppi Touch screen: YES Weight: 207 g Battery: Li-Ion 5000 mAh Non-removable battery: YES icon Built-in memory: YES icon128 GB Memory card: YES iconmicroSDXC RAM Memory: 4 GBore) GPU Type: Mali-G52 2EEMC2 ");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
    
    
}






