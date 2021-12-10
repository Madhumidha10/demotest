var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
   // a.	Get all the countries from Asia continent /region using Filter function
    console.log(data.filter((el)=>el.region=="Asia"));
    //b.	Get all the countries with a population of less than 2 lakhs using Filter function
    console.log(data.filter((el)=>el.population<200000));
    //c.	Print the following details name, capital, flag using forEach function
    data.forEach(el=>console.log(el.name,el.capital,el.flag));
    //d.	Print the total population of countries using reduce function
    console.log(data.reduce((acc,el)=>acc+el.population,0));
    //e.	Print the country which uses US Dollars as currency.
    console.log(data.filter((el)=>{for(let cur in el.currencies){if(el.currencies[cur].code==="USD") return true;}}));
       
};