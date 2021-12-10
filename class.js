
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 return (c%2!=0)?c:(a%2!=0)?a+c:a

});
console.log(s);

