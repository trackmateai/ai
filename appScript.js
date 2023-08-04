



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
    window.location.href=("results.html");      
    }


if (username=="segotsoreuben@gmail.com"){

       var firstInfo= "<font color=#ff0000>Awaiting query </font>";
       var secondInfo= "" ;
        


         mainInfo.innerHTML=(firstInfo);
         moreInfo.innerHTML=(secondInfo);    
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
if (username=="ashrafprofessor30@gmail.com"){
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355528102166924</font><br/>  Model: Galaxy J4 Core (SM-J410F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-J410F/DS BLACK XFA <br/><br/>Search Term: 355528102166924 <br/>IMEI 1:<font color=#00ee00> 355528102166924</font> <br/>Serial Number: <font color=00ee00>RZ8M80ZRB8Z</font> <br/Model Desc: Samsung Galaxy J4 Core <br/>Model Name: SM-J410F/DS <br/Model Number: SM-J410FZKDXFA <br/>Warranty Status: Out of Warranty <br/>Estimated Warranty End Date: 07-08-2021 <br/>Production location: Brazil SEDA <br/>Production Date: 07-08-2019 <br/Country: South Africa <br/>Carrier: Factory Unlocked");
        
    mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="ftando8@gmail.com"){

        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352938776602737</font><br/>  Model: Galaxy A52 4G(525F) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A525F BLUE MEA Search Term: 352938776602737 IMEI 1: 352938776602737 Serial Number: RZ8R322MZ0E Model Desc: Samsung Galaxy A52 4G Model Name: SM-A525F Model Number: SM-A525FZBHMEA Warranty Status: Out of Warranty Estimated Warranty End Date: 20-03-2023 Production location: Brazil SEDA Production Date: 20-03-2021 Country: United Arab Emirates Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="vincent.madome7@gmail.com"){

        window.location.href=("results.html");
    }

if (username=="neosystems.follow@gmail.com"){

        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350867773079361</font><br/>  Model: Galaxy A23 (SM-A235F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A235F BLACK MEA <br/>Search Term: 350867773079361 <br/> IMEI 1: 350867773079361 <br/>Serial Number:<font color=#00ee00> R58TB0AYMDP </font><br/>Model Desc: Samsung Galaxy A23<br/>Model Name: SM-A235F<br/> Model Number: SM-A235FZKUMEA <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 03-11-2024 <br/>Production location: Korea SEC <br/>Production Date: 03-11-2022 <br/>Country: United Arab Emirates <br/>Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="frankburu77@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350839824777822</font><br/>  Model: Galaxy A32 4G (SM-A325F) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A325F BLUE AFA <br/>Search Term: 350839824777822 <br/>IMEI 1: 350839824777822 <br/>Serial Number: <font color=yellow>RZ8T21K1WLY</font> <br/>Model Desc: Samsung Galaxy A32 <br/>Model Name: SM-A325F <br/>Model Number: SM-A325FZBGAFA <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 21-02-2024 <br/>Production location: Brazil SEDA <br/>Production Date: 21-02-2022 <br/>Country: South Africa <br/> Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="vusatshegofatso@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 863706058814458</font><br/>  Model: Note 11 Pro 4G (2201116TI) <br/>Brand: REDMI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Description: Redmi Note 11 Pro Stealth Black 6GB RAM 128GB ROM <br/>IMEI: 863706058814458 <br/>Brand: Redmi <br/>Model: 2201116TI <br/>Name: Note 11 Pro 4G <br/>Purchase Country: India <br/>MI Activation Lock: OFF");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="bamerakolanyane@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 869998050311989</font><br/>  Model: Note 10 Pro (M2101K6G)<br/>Brand: REDMI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Description: Redmi Note 10 Pro Onyx Gray 6G RAM 128G ROM <br/>Search Term:<font color=#00ee00> 869998050311989</font> <br/>Brand: Redmi<br/>Model: M2101K6G <br/>Name: Note 10 Pro <br/>Purchase Country: South African <br/>MI Activation Lock: ON <br/><font color=#00ee00>Email Id Hint:</font><font color=#ff0000> mph***@gmail.com</font> ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    
    }
if (username=="sengwekelediyakgotla@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00>355235621011199</font><br/>  Model: Galaxy A12 (SM-A125F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  -19.9892349,23.3975764</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A125F BLUE XXV <br/>Search Term:<font color=#00ee00> 355235621011199</font> <br/>IMEI 1: 354312131011190 <br/>Serial Number: <font color=#00ee00>R58R93BFVWE</font> <br/>Model Desc: Samsung Galaxy A12 <br/>Model Name: SM-A125F <br/>Model Number: SM-A125FZBHXXV <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 25-09-2023 <br/>Production location: Korea SEC <br/>Production Date: 25-09-2021 <br/>Country: Vietnam <br/>Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="gideon2203@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354401114371430</font><br/>  Model: S42 <br/>Brand: CAT<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("IMEI: 354401114371430 <br/>Brand: Cat <br/>Model: S42 <br/>Model Name: S42 <br/> Design:Classic *Released: July2020 r. *DualSIM: YES  *SIM card size: Nano Sim, Nano Sim *GSM: YES 850 900 1800 1900 *HSDPA: YES 850 900 1700 1900 HSPA+ *LTE: YES *LTE-FDD: 700, 800, 850, 900, 1800, 1900, 2100, 2600 YES *LTE-TDD: 1700 *Dimensions (H/L/W): 161.3 x 77.2 x 12.7 mm, vol. 158.1 cm³ *Display: LCD IPS Color (16M) 720x1440px (5.5inch) 293ppi *Protection LCD: Corning Gorilla Glass 5 * Touch screen: YES  * Weight: 220 g * Battery: Li-Ion 4200 mAh * Built-in memory: YES  32 GB *Memory card: YES microSDXC max. 128 GB * RAM Memory: 3 GB * OS: Android 10 * Chipset: MediaTek Helio A20 MT6761D * CPU #1 Type: ARM Cortex-A53 *CPU #1 freq.: 1800.0MHz (4-core) *GPU Type: PowerVR GE8300 * GPU freq.: 550.0 MHz");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
    
    
}






