//xml http request are used to interact with servers via api
//4 steps

//step 01: create a XHR object(XMLHTTPREQUEST) new 
//whole pgm should have same name'
var request=new XMLHttpRequest();
//step 02:open a connection

//first parameter:'GET'
//SECOND PARAMTER:'api URL',
//optional 3rd parameter:true
//(parameter1,parameter2,parameter3)=>(method,API link,optional(unexcepted situation don't affect a program means set true)
//request.open('GET','https://restcountries.com/v3.1/all',true);//https://restcountries.com/v2/all 
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
//3.sending a connection path
request.send();
//once data successfully loaded from server(200)
request.onload=function(){
    //data travelling from server will be of string
    //need to convert from string to object
    //request.response:server response
    var data=JSON.parse(request.response);
    //print 250 country data
    console.log(data);
    for(let i=0;i<data.length;i++)
    {
    //    console.log(data[i].name,data[i].capital,data[i].flag);  
        //console.log(data[i].continents)
    }
    
};


var res=()=> "hello world";