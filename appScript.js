



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

        window.location.href="resultsVusa.html"
    }
if (username=="bamerakolanyane@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355705440786155</font><br/>  Model: Galaxy S22+ 5G (SM-S906E) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-S906E WHITE AFA <br/Search Term: 355705440786155 <br/>IMEI 1: 355705440786155 <br/>Serial Number:<font color=#00ee00> RFCT30JNPCZ </font><br/>Model Desc: Samsung Galaxy S22+ 5G <br/>Model Name: SM-S906E <br/>Model Number: SM-S906EZWGAFA <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 08-03-2024 <br/>Production location: Vietnam SEV <br/>Production Date: 08-03-2022 <br/>Country: South Africa <br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    
    }
if (username=="sengwekelediyakgotla@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00>355235621011199</font><br/>  Model: Galaxy A12 (SM-A125F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  -19.9892349,23.3975764</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A125F BLUE XXV <br/>Search Term:<font color=#00ee00> 355235621011199</font> <br/>IMEI 1: 354312131011190 <br/>Serial Number: <font color=#00ee00>R58R93BFVWE</font> <br/>Model Desc: Samsung Galaxy A12 <br/>Model Name: SM-A125F <br/>Model Number: SM-A125FZBHXXV <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 25-09-2023 <br/>Production location: Korea SEC <br/>Production Date: 25-09-2021 <br/>Country: Vietnam <br/>Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
    
    
    
    
}






