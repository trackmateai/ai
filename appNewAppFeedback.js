
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
                

    
 if (username=="Masele"){
       window.location.href=("resultsProfessor35027.html");
    }

if (username=="ogaatlale@gmail.com"){
  
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop6go.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350788718462787</font><br/>  Model: POP 6 Go<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 11 Go Edition<br/>Chipset	Mediatek MT6739WA<br/>Number of CPU Cores	4<br/>RAM	2 GB<br/>Internal Memory	32 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	PowerVR GE8300<br/>Width	78.8 mm<br/>Height	160.33 mm<br/>Thickness	10.85 mm<br/> Display Type	LCD_IPSDiagonal	6.0 inches<br/>Resolution	480x960 px<br/>Screen-to-body ratio	74.5 %<br/>Pixel density	179 ppi   ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }

if (username=="ashrafprofessor30@gmail.com"){
  
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/r/c/324qM6-d/apple-iphone-se-2020.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356486101144021</font><br/>  Model: iPhone SE 2020 (A2296)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Operating System	iOS<br/>Chipset	Apple A13 Bionic APL1W85<br/>Number of CPU Cores	6<br/>RAM	3 GB<br/>Width	67.3 mm<br/>Height	138.4 mm<br/>Thickness	7.3 mm<br/><br/>Weight	148.0 g<br/>DisplayType LCD_IPS<br/>Diagonal	4.7 inches<br/>Resolution	750x1334 px<br/>Screen-to-body ratio	65.3 %<br/>Pixel density	326 ppi<br/>Colors	16M    ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
   
 
    
if (username=="calvinatordoc@gmail.com"){
       
            phoneImageLay.style.display=("none");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop6go.jpg";
        
        mainInfo.innerHTML=(" Requested device <font color=#ff0000>inActive</font>");
        moreInfo.innerHTML=("  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    } 

if (username=="neoboy71@gmail.com"){
       alert("Suspicious spam detected! Contact support");
    }









    
    
}











