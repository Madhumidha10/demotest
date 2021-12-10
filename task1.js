var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(let i=0;i<data.length;i++)
    {
       console.log(data[i].flag); 
       console.log(data[i].name,data[i].region,data[i].subregion,data[i].population);  
    }  
};




