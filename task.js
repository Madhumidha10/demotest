var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var flag=true;//set flag is true default 
if(obj1.length!==obj2.length)// if both object length are not same set flag is false
 flag=false;
else
 for(let i in obj1)//for loop return key and value of object1
 {  
    if(obj1[i]!==obj2[i])//if key or value not same in both object
    {
       flag=false;//set flag is false
    }
 }
if(flag==true)//true means Equal and false means Not Equal
   console.log('Equal');
else
   console.log('Not Equal');
