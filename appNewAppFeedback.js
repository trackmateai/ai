
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
                
if (username=="segotsoreuben@gmail.com"){
    window.location.href=("resultsBen35648.html");
}
    
if (username=="jgaatlale@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/h/D/c30ozb-d/huawei-y8s.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 862972046673478</font><br/>  Model: Y8s (JKM-LX1)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Description Full: HUAWEI Y9 2019 4GB+64GB Coral Red Dual Card Open Market Ver. EU Charger<br/>Model Code: Jackman-L21<br/>IMEI: 862972046673478<br/>S/N: <font color=#ff0000>DEF4C19924000462</font><br/>Item Code: 51093KJF<br/>Offer Code: OFFE00069040<br/>Country Code: 267<br/>Country Name: Botswana<br/>Warranty Status: Out of Warranty");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
if (username=="maselecybernetics@gmail.com"){
            window.location.href=("resultsMasele35676.html");
   } 
if (username=="sophaniamadish@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/i/g/nmxjgV-d/huawei-nova-9.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 860160059284878</font><br/>  Model: Nova 9 (NAM-LX9)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Operating System HarmonyOS 2.0<br/>Chipset	Qualcomm SM7325 Snapdragon 778G 4G<br/>Number of CPU Cores	1<br/>RAM	8 GB<br/> Width	73.7 mm<br/>Height	160.0 mm<br/>Thickness	7.8 mm<br/>Weight	175.0 g<br/>Display<br/>Type	OLED<br/>Diagonal	6.57 inches<br/>Resolution	1080x2340 px<br/>Screen-to-body ratio	89.9 %<br/>Pixel density	392 ppi<br/>Colors	1073M");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   } 
if (username=="lesegolamelegolo@gmail.com"){
            phoneImageLay.style.display=("none");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/R/b/jqMU5f-d/samsung-galaxy-a13-5g.jpg";
    
        mainInfo.innerHTML=("35253936486674 is an InValid IMEi number ");
        moreInfo.innerHTML=("Please recheck and try again  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

    
}











