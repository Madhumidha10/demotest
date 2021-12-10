var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
   // a.	Get all the countries from latlng
   //data.forEach(el=>console.log(`${el.name}-${el.latlng[0]},${el.latlng[1]}`));
   data.forEach((el)=>{try
    {let name=el.name;
     let latlng=el.latlng;
        if(latlng.length===0) throw new Error("Longitude Not Found");
        wheather_data(name,...latlng);
    }
    catch(Error){ console.log("invalid coordinates"+Error.message);}
    });}
function wheather_data(name,lat,lng)
{

let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1dc0a341ebcafefe90f610c2c90bec02&units=metric`;
var req=new XMLHttpRequest();
req.open('GET',url,true);
req.send();
req.onload=function(){
   var dt=JSON.parse(req.response);
    console.log(` ${name} current temperature in Celsius ${dt.main.temp}`);
    }

}