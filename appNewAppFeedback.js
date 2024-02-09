
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
      
  if (username=="ashrafprofessor30@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352922115177148</font><br/>  Model: iPhone 11 (A2221)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Operating System	iOS<br/>Chipset	Apple A13 Bionic<br/>Number of CPU Cores	6<br/>RAM	4 GB<br/>Width	75.7 mm<br/>Height	150.9 mm<br/>Thickness	8.3 mm<br/>Weight	194.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.1 inches<br/>Resolution	828x1792 px<br/>Screen-to-body ratio	80.1 %<br/>Pixel density	324 ppi<br/>Colors	16M  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}  

if (username=="maselecybernetics@gmail.com"){
           phoneImageLay.style.display=("block");
            phoneImage.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAQL/xABIEAABAwMCAwUEBAgLCQAAAAABAgMEAAURBhIhMUEHEyJRYXGBkaEUMlKxFSMzQpKywdEkU1RicoKUs8LS4RYXNENVY3OT8P/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQFAf/EACcRAQACAgEDAgYDAAAAAAAAAAABAgMRBBIhQRNRIjFhweHxBTKh/9oADAMBAAIRAxEAPwCcaUpQKUpQKUpQKUpQKVay7jCh/wDFy2GT5OOAGsS9rPTzRIVckKP/AG21rHyBoNgpWs/7eac/lrv9ld/y19f7d6YBw5d2Wv8AzJU2PioCg2SlUIcyPOYS/DkNPsq5LaUFA+8VXoFKUoFKUoFKUoFKUoFKUoFeE0zWj9pWtUactb7MJZVcVp2o2Yy0o8jxBGfb/oQzmpdTwrC0A7+NlKGUMJOCR5k/mj/4VGV41bdLms97LWy10ZYOxI+HE+81HD2or/KdWstpcdWcqWVBSlH1OcmvgzNTODKWFgeYQn99Btvfp/NQePkK97xR5IPwrUHHNUITuc3NjzUttP3mvuUzObjJeuO59QGULSQrJPAbSOXEjlQZO73pTQLEb8p1OOVay73ryitxalKPUmsi7BeivOxpTSmpDKyh1CuaVDgQap9zjmKD705frppi4CZaZBaWfyiCModHkscj19R0rpXRWqoerLMidFHdug7JDGclpfl6jqD+3IrmRbGR61nuzvUitKakZkuuFMB8hmanps6L/qk59mfOg6dpXgIPI17QKUpQKUpQKUpQKUqwvsxUCzzJaDhbTKlJJGcKxw+dBD3aj2nyIt3ctFocU2xGO15TatpeV5ZxkJB4cOJ9nPS7VM1beGVyrNZVusgnc4yyME+3qfjWOtemZeob1bnCQ3Cuc5UZC+9SXAEAFXDn9Xqevz6JiWqdEitw4ndxozQKGUt7cNpzw4EcfCSPaAfOggmBK1jdEtKiMFSHHC1lSgnYoZyFA8R9U8cY4Y58KtdSS9T6fkts3FbY71O5tbaspVjnj2VKsxBY1jPjF8IkuR2JS2d2U7lbkrKR67EE+fD21qWumIM91k3SVuiW0rL3dDKlOL27W0+XAZPuz6aK4q2puPm4uT+SyU5/odPwRHt3+n+9mjnUN3YZjyJRSpiRuLZyOIBweHMcfOvIN0cdfeC2S7CcwHEJOCknkR5H1H7Kygi2PUSHosGA5CuCWythanlL77aMkHJ54B/fVlothK4lzcWPCAyB7S4APvqq9Onzt1MOb1NxMTEx4ll7jczfgm6PeKdu7ia5t296QD3ThA4AqSlSTjq2PtCrBSeteqkLiKucNltJEgtjKs+AhSV54f0SPYo1aqbmr5LZSPeaguXBSMVaPtAkpIylQwRXpjzv5S1+ga+FRZZ+tJb/APWf30EwdkGvHpbqNPXl7e4EfwN5R8SsAktnzwAcH0OelS2DkZHKuPW2d8hTb+FcDwAwD15V0L2Jyu+0FHZJGYz7zeB0BWVj9b5UG/UpSgUpSgUpSgVqXalJMbRc4pVtUooAPoFBSh+ik1ttR322vhGlmmFK29/ICM55A+E/rV7EbnQg7RMe422826/RomW4riV7C4Ap4clbc+manleu9NKUmbHuyZLqvC3AjtqMhasEbe75g53cwB99aWy3Kg2Z+MyiBhxpC1qwFO4X4QhJ6Ecz5Ctj7MNKxrbGdvbzaTcLioqSs/8AKaz4QP6Qwo+0CujzeHjwUiaz33r8p9eOY+Cdo81DpHW1/uF0v82wLTJk7THQ3NbC46U4A8IPi8AKfPJzisQ0RB0pZ1SIanGhIkofQoAFD24bchQPHaFV0ZDlCVDTJI7sHO4KOQggkHJ9CKintZuCbBcIlwixo0uFeG1/SY7ycoW43tAX6EpUB67RXPrOtsmelp6bUjcxO9e/aY+7UrFPjBci4iA3GYtzJWt0EY3lJSlIGOZJ6H9mLXRTYTYZSyPyshCfbjKv8Ir3XMa/MWW3uXGIxbYDriw3b46NobUMYKvtE+L2YOcE1X0yAzpaMpeB3jy3OPkkEH9YUme2oSxVtub3jUz49oj9yuLZBNwtmrpCACuEyy+D5BLiST+ihdYlKuFSV2EtRJDV++kKaX9NUhsMOYPeIRvycHmPxmDWj6zjNQNXXmHFaS0yxIwhtAwEpKQrA+NRXMcVVTWa+UuIUMg8K+XXUpAxxz0oLVR2zEq8/nU4dhUO4RLNclymC3DkPpdiuKUPxnDaogcwPCOfPjUGTE+EhXEltX3V0f2QOF7s8tZWoqKFPoyegDywB8AKDc6UpQKUpQKUpQKiztngOX6dZLEzJajqk95lx5WEJ5L3H3NL+NSkrgKg/touE9vWlnRaFETWShbWPtDJ4+mFHPoaPYjc6hp+snNRWOIzb5FzhSg5HK3XYo8aUhezCiQOuOIHEHyrotttDLaWWhhttISgeQHAfKuaby5bLzc3n7xcpT8x07VSmmwllrHAJSn7A5VNuh9UR7pDRbJshpF5hpDUhkqwXMclpzzChg8OWffU73tf+07SnjRhjtrX0ZmDbmgHS4outmQ6400r6jeVknA68cnJ8+GKivt9ubCbtYYjjLckxkuvPMOKUErCykAHaQR9RXI1I1/1TadMQ0mdIS7KWSGobKgXHlk8AB04nmcVqP4GblTH7lc47Mi4STl5xSNwHDAQnPJIAA93GsfI5NOPETbvtfx+NbkWmKzqIQ5qu5ruz8OTIifRZIipbcQgbWylP5MoST4U93s4cjz61m7q0WtG25CRja3lZ9FrT/kFUe0qyNWm7MORgUtym+DeeCCnAwM9MY4dOnCsze0patIaUMpRDSCD5kk/tFW4skZaRevylRlxzjvNJ8MZpB55rtAsjkFSu8S60hO0dFDCuXmN1ZntGwO0G/Y/jm/7lupB7OdM2mz6Vt2pHoveXPulqS8tasIClKAwk8B4SBnHn51EE66v3m4SLpN7sSZag44GgducAcOfQDrViCkphtRzjHsNEtJRyHHzPGshYrHctSXAwbS6w2tDZdWp48AAQMfP5VZTGXYEt+FJcbW+w4ptak8ASD0oLKWP1F/ca6F7Fs/7vIGf46R/fLqCrHa1X29sW5LyGUuJWXHVH6iAOOB1PQD1qe+yosMaXTAY3/wV5zJWck71Ff8AiI91BudKUoFKUoFKUoPDyqAO0RwyNbX15tWXWIThZ80+FDaiP0VfGp/VyrmbtBmS7X2lvSIuwuh1bfduEBKgpajhWeGCFjn7ajbeuyeK0VvEywbv4IMIMwo63Zq0hCPE59YnHLOM8Rw5ZHkRiTND6Gt95nzr1eIjMxmOtEaK2pRw64hASsqGcFIVw5dDUcwrw3JfWNNae+jz9il98Hlv9ykDKlITjCeGeOOFS32QSoVx7OobBcKnYLrqHm0gFW5ThWDx/mkj4+VeVmZncxpKdVr0xO9r3XWkrGu0qvTVrjwpNpWiSFst7NzSFArSQOfhHDyPvq+jr/FJVH2rbWNyVg5CgeOawXa3eoNj0lLaYkFc+7tllptQHBvcN6seW0YB8zUaXqyOWns2tstF7cLz7gMmCh9RQG3U72xtzjO0FR893pmsXM4VuTNZrbUwswcj0dxrah2h3hi/arjx4aw7HjENJcTyWonKiPTp7qv9VnamWM8FrbQB5BKUJP3GtN0yhK71HU6oJbbJcUo8gAK2S6Oqu7zMdjg7Mf8AAPslRwn5kVsxY4xUikeFN7ze02l0NaYiWtCwoxHhTBbyP6oNcyyoSWJ0iMkrSll1SEgKPDB/0rqy5M93ZJTDI+rGUhsexOBXMV3IVfJ6k9X1ffViC0gr/BU5icC86lhaVLbDhHeICgSk8eRxW2doh0ldlRJ2lnlMPHcmVH7h1oqzgpX4gBwwQcZ5itQkvdy2pYAOPXFXD8eTGXsktBKTxbdQrch0eaT1HLjQXGiyqBq63vIdVnKkeI89yFJ/bU89nDAZj3MJ5Jk7B7AP9a55hLWm5x1NDLgdTsHmegrpDQuz6Pcgnn9NVn4Cg2ilKUClKUClKUCoi7YtAKuchV9gsLe8A+mNsjLg2gAOJH53hABT5AEdal2mKDky0WqTFSuXZbw40l5pTK1paUCpCuafYcV7bbddbHIMi13z6G9jClNrLZI8iOtZvtT03K0zqZZtYW1EkKLrHd5AweJT7lZ9xFa4rUFzyFKioz/NcfR8kuAUHxLtdwnTFzZN3jyZKzuLzj+5Sj76omxPAJEm4xkoT9XLu7HIcB7h8BV0NTTcHvom72SHv8SjVRvVbrRymCc44Hvz+6gt1WBbbK3GXihkDxrdGzvPQDnW/wDYxpWRc70zfZCVfg6EdzS1Dg+7gjCfMJPEnlnA86061KXe9RWyFc3VOxJMppC0AAZBUMjhx5cK6raabaaS00hKG0AJShIwEgcgBQfTiQtCknkoYNcpz5DE25zZkVAQw/IcdbAz9VSiQePpXQnaVezY9IzHWlD6TIH0dgZx4lcCfcncr3Vzu22EoCUjAAwB5UFuW3HnUMMQ3ZbjmdrTSNxOPQVWcS82pSJTbrLzeEqad+sjqB6cD868gXh62zzJtrklmQ2naX2AfClXTI6HHWqtwkPynnJEp5x6Q6crccOVKPqaC1hd+ZbK4nF9LiVtcQPECMcTw6da6i0tA+gWpKT9dxalqPnxwPkBUP8AYdaRM1PIuJSFIt7GEqI5LXlII9cBz41O4oPaUpQKUpQKUpQKUpQYHWOnGNSWgxHcJfbV3kZ3+LcHL3EZB9DUCvsux33GJLJafbUUOIUBlKhzFdMc6j7tK0gueDeLSyVy0JAkMoHF5I4BQ/nADl1HsFBEmxJ/MT8KdyyebSfhVRDiVAFJBz1FfXA9KDHOMuw3kzre4EPR1peZTsSAFJOeJAyfea6WsF3jXyzRLpEOWZDe4D7J5FJ9QQQfZXPRCSONfLWorrZLPLsMZ/ZAmObwofWb+2kHyVwz7/OgzPaTqQakv2yKsKt0LKI6knIcJxuX8Rgegz1NadKfRGQCQVE8kp5mneADwjkOFUUyJiVhxtSGlIOU8SFAjkQRyPsoMrAvN4hW9+0JE23RleJcZaC2FbufMZ6VipDoG5ecJQDxr7lTHHVKU46txavrLWsqJ9pNbt2SaRVfboi7zWz+DILmUJUnhIdHID0ScE+uB50EodmOnlae0swzIRsmST38keSjyT7khI91bbSlApSlApSlApSlApSlApSlBour+zmJenVzba8IM5Z3L4EtunzI6H1HvBqOJ2idV29akqtS32xydjLS4lXuzu+IroGvMUHMMz6VAz9OiyYwBxl9pSB8xVi7KYlNFBWlSVciCK6tq1dtsB45egxnD5qZSf2UHJDqQ2fFtWnpuNU0OjcltoDKjhKUnJJ9BzrrX8B2j/pUH+zo/dVeNb4UVW6LDjsq5ZbaSk/IUEEaI7LLpenm5N+bct9uGFbFeF54eQHNA9Tx8h1qeIEKNbobMOEyhiMykIbbQMBIFV8V7QKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQf/2Q==  ";
    
        mainInfo.innerHTML=(" <font color=#ff0000>Not Found</font>  ");
        moreInfo.innerHTML=("Device may be offline or inactive. Please try again later ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   } 
if (username=="neoboy71@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/S/v/CJAcGC-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 863930041272380</font><br/>  Model: Y6 Prime 2019 (MRD-LX1F)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Operating System	Android 9.0 Pie<br/>Chipset	MediaTek Helio A22 (MT6761)<br/>Number of CPU Cores	4<br/>RAM	2 GB<br/>Internal Memory	32 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	PowerVR GE8300<br/>Width	73.5 mm<br/>Height	156.28 mm<br/>Thickness	8.0 mm<br/>Weight	150.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.09 inches<br/>Resolution	720x1560 px<br/>Screen-to-body ratio	79.2 %<br/>Pixel density	282 ppi<br/>Colors	16M ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   } 
if (username=="flockie2002@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a31.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356268119100983</font><br/>  Model: Galaxy A31 (SM-A315F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A315F BLACK XFA<br/>Search Term: 356268119100983<br/>IMEI 1: 356268119100983<br/>IMEI 2: 356269119100981<br/>Serial Number:<font color=#ff0000> RF8N82LMP5P</font><br/>Model Desc: Samsung Galaxy A31<br/>Model Name: SM-A315F<br/>Model Number: SM-A315FZKVXFA<br/>Warranty Status: Out of Warranty<br/>Estimated Warranty End Date: 24-08-2022<br/>Production location: Vietnam SEV<br/>Production Date: 24-08-2020<br/>Country: South Africa<br/>Carrier: Factory Unlocked   ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }


            
}











