



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
    
     window.location.href=("https://trackmateai.authgearapps.com/settings");
    
    /*
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
    feedDv.style.display=("none"); */
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






           function showCard(){
                card3=document.getElementById("card3");
                card3.style.display=("block");
             }
           





function feedBack0(){


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
                

    
    if (username=="Masele"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03-core.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350655750479195</font><br/>  Model: Galaxy A03 Core (SM-A032F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A032F INS <br/>Search Term: 350655750479195 <br/>IMEI 1: 350655750479195 <br/>Serial Number: <font color=#5F264A>R9ZTB0DXXEE</font> <br/>Model Desc: Samsung Galaxy A03 Core <br/>Model Name: SM-A032F <br/>Model Number: SM-A032FLG6INS <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 16-11-2024 <br/>Production location: Korea SEC <br/>Production Date: 16-11-2022 <br/>Country: India <br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }


if (username=="segotsoreuben@gmail.com"){
        window.location.href=("resultsBen86714.html");
    }
    
if (username=="ashrafprofessor30@gmail.com"){
        mainInfo.innerHTML=("<font color=#00ee00>356324221162426 </font>is an <font color=#ff0000>INVAILD</font> IMEi. Please check and input the correct IMEi ");
        moreInfo.innerHTML=(" ");
        
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

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357026893153928</font><br/>  Model: Galaxy A12 (SM-A127F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A127F BLUE THL <br/>Search Term: 357026893153928 <br/>IMEI 1: 357026893153928 <br/>Serial Number:<font color=#00ee00> R58R93JC1NJ</font> <br/>Model Desc: Samsung Galaxy A12 <br/>Model Name: SM-A127F <br/>Model Number: SM-A127FZBHTHL <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 27-09-2023 <br/>Production location: Korea SEC <br/>Production Date: 27-09-2021 <br/>Country: Thailand <br/>Carrier: Factory Unlocked ");
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
      window.location.href=("resultsBame353855.html");
    }
if (username=="sengwekelediyakgotla@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00>355235621011199</font><br/>  Model: Galaxy A12 (SM-A125F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  -19.9892349,23.3975764</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A125F BLUE XXV <br/>Search Term:<font color=#00ee00> 355235621011199</font> <br/>IMEI 1: 354312131011190 <br/>Serial Number: <font color=#00ee00>R58R93BFVWE</font> <br/>Model Desc: Samsung Galaxy A12 <br/>Model Name: SM-A125F <br/>Model Number: SM-A125FZBHXXV <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 25-09-2023 <br/>Production location: Korea SEC <br/>Production Date: 25-09-2021 <br/>Country: Vietnam <br/>Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="gideon2203@gmail.com"){

        window.location.href=("resultsGideon.html");
    
    }
if (username=="phlpkhaya@gmail.com"){

        window.location.href=("resultsPhlp.html");
    
    }
if (username=="emmahdt@gmail.com"){

        window.location.href=("resultsEmmah.html");
    
    }
if (username=="sirserwalo@gmail.com"){

        window.location.href=("resultsSirserwalo.html");
    
    }
if (username=="thabangthutogidion@gmail.com"){

        window.location.href=("resultsThabang.html");
    
    }

if (username=="Ompsmooki@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 359015631110090</font><br/>  Model: iPhone 12 Pro Max (A2342)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Search Term: 359015631110090 <br/>Brand: Apple <br/>Model: iPhone 12 Pro Max (A2342) <br/>Model Name: iPhone 12 Pro Max <br/>Carrier/SimLock Info: <a href=('#')>HERE</a> (FREE) <br/>Activation/Coverage Check: <a href=('#')>HERE</a> <br/>Find My iPhone: <font color=#ff0000>ON</font> <br/>iCloud Status: Clean");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="mmasole92@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350888748416496</font><br/>  Model: iPhone 12 Pro Max (A2411)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Last Seen: <font color=#ff0000>  -24.6262300663882, 25.934047286017062 </font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Search Term: 350888748416496 <br/>Brand: Apple <br/>Model: iPhone 12 Pro Max (A2411) <br/>Model Name: iPhone 12 Pro Max <br/>Carrier/SimLock Info: <a href=('#')>HERE</a> <br/>Activation/Coverage Check: <a href=('#')>HERE</a> <br/>Find My iPhone: ON <br/>iCloud Status: <font color#ff0000>Lost Mode</font>");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="Lebogangmds@gmail.com"){

        mainInfo.innerHTML=("Proper <font color=#00ee00>identification</font> required to reveal your device location and information");
        moreInfo.innerHTML=("Please complete your account information on Settings");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="tshephangks@gmail.com"){

        window.location.href=("resultsTshephang.html");
    }
if (username=="ogaatlale@gmail.com"){
     window.location.href=("resultsGabriel.html");
}                      
if (username=="kgomotsofelizbapalami@gmail.com"){
        alert('Dear User,you have exhausted your usage limit.Please consider payment to proceed ');
        window.location.href=("resultsKgomotso.html");
    }   
if (username=="onalethatamooketsi@gmail.com"){

        alert("A different email address was used to request information of the same device. Please resort to the previous email or confirm your identity.Please note that you risk your IMEi being blocked on the system ");
    }  
     
if (username=="thabochizwe81@gmail.com"){

       window.location.href=("resultsThabo35257.html");        
   }  
if (username=="muzadziwillarda@gmail.com"){

        window.location.href=("resultsMuzadzi.html");
    }   

    
if (username=="boimatome2@gmail.com"){

        mainInfo.innerHTML=(" Argumented parameters [<font color=#ff0000>37798/R1ZW10034</font>] do not exist");
        moreInfo.innerHTML=("");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }

if (username=="nthagame@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/J/b/Cky5Wt-d/tecno-pop-7.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357777960206284</font><br/>  Model: POP 7<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Brand: Tecno <br/>Model: BF6 <br/>Model Name: Pop 7 perating System	Android 12 <br/>Chipset	Unisoc SC9863A1 <br/>Number of CPU Cores	4 <br/>RAM	2 GB <br/>Internal Memory	64 GB <br/>Memory Card Type	microSDXC <br/>GPU Name	PowerVR GE832  Width	75.5 mm<br/>Height	163.9 mm <br/>Thickness	8.9 mmDisplay<br/>Type	LCD_IPS <br/>Diagonal	6.6 inches <br/>Resolution	720x1612 px <br/>Screen-to-body ratio	84.6 % <br/>Pixel density	267 ppi <br/>Colors	16M <br/>Other display Features	Capacitive, Multi-touch, 2.5D curved glass screen "  );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }           

if (username=="moxbont@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/5/Y/rPlNlt-d/huawei-p-smart-pro.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 867679045318246</font><br/>  Model:  P smart Pro (STK-L21)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Description Full: HUAWEI Y9s 6GB+128GB Breathing Crystal Dual Card Open Market Ver. EU Charger <br/>Model Code: <br/>IMEI: 867679045318246 <br/>S/N: <font color=#ff0000>78KVB19C25021623 </font><br/>Item Code: 51094UMW <br/>Offer Code: OFFE00121221 <br/>Country Code: NA <br/>Country Name: Botswana <br/>Warranty Status: Out of Warranty <br/> Operating System	Android 9.0 Pie <br/>Chipset	Huawei HiSilicon KIRIN 710F <br/>Number of CPU Cores	4 <br/>RAM	6 GB <br/>Internal Memory	128 GB <br/>Memory Card Type	microSDXC <br/>GPU Name	ARM Mali-G51 MP4 <br/>GPU Cores	4 Width	77.2 mm <br/>Height	163.1 mm <br/>Thickness	8.8 mm <br/>Weight	206.0 g");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }       

if (username=="dicemodiagane@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/C/k/hIfMrI-d.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 860295043834246</font><br/>  Model: Note 9 Pro (M2003J6B2G) <br/>Brand: REDMI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Description: Redmi Note 9 Pro Tropical Green 6G RAM 64G ROM <br/>IMEI: 860295043834246 <br/>Brand: Redmi <br/>Model: M2003J6B2G <br/>Name: Note 9 Pro <br/>Purchase Country: Nigeria <br/>Operating System	Android 10<br/>Chipset	Qualcomm Snapdragon 720G <br/>Number of CPU Cores	2 <br/>RAM	4 GB<br/> Memory Card Type	microSDXC <br/>GPU Name	Qualcomm Adreno 618 <br/>GPU Clock	750.0 MHz <br/>Width	76.68 mm <br/>Height	165.75 mm <br/>Thickness	8.8 mm <br/>Weight	209.0 g <br/>  USB Conector Type	USB Type-C <br/>USB Version	2.0 <br/>Built-in WiFi	yes <br/>WiFi Version	802.11 a/b/g/n/ac " );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }
    
if (username=="tumedigilbert@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353233104687785</font><br/>  Model:  iPhone 11 Pro (A2160)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Code name	A2160 <br/>Release Year	2019 <br/> Operating System	iOS <br/>Chipset	Apple A13 Bionic <br/>Number of CPU Cores	6 <br/>RAM	6 GB <br/> GPU Cores	4 <br/> Width	71.4 mm<br/>Height	144.0 mm <br/>Thickness	8.1 mm <br/>Weight	188.0 g <br/>   Type	OLED<br/>Diagonal	5.8 inches <br/>Resolution	1125x2436 px <br/>Screen-to-body ratio	80.4 % <br/>Pixel density	463 ppi <br/>Colors	16M"  );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }

if (username=="deeztwinsbookings@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a01core-sm-a013.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353993239702128</font><br/>  Model:  Galaxy A01 Core (SM-A013G)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana
 ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A013G/DS BLUE XFA <br/>Search Term: 353993239702128 <br/>IMEI 1: 353993239702128 <br/>Serial Number: R58R54TAGSY <br/>Model Desc: Samsung Galaxy A01 Core <br/>Model Name: SM-A013G/DS <br/>Model Number: SM-A013GZBDXFA <br/>Warranty Status: Out of Warranty <br/>Estimated Warranty End Date: 27-05-2023 <br/>Production location: Korea SEC <br/>Production Date: 27-05-2021 <br/>Country: South Africa <br/>Carrier: Factory Unlocked "  );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }


    
    
}




/*************************/



function logInfo(){
   
    card3=document.getElementById("card3");
                card3.style.display=("none");
    
    var username= document.getElementById("emailVerify").value;
    
    var myMainLay = document.getElementById("MainLay");
    var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");


    if(username=="Masele"){
       mainInfo.innerHTML=("NextLay Nav test");
        moreInfo.innerHTML=("Succeeded");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }

    
}





