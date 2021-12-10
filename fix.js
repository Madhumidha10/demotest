
let min=Number.MAX_VALUE;
let arr="10 4 3 9 5".split(' ').map(Number);
arr.forEach((el,index,arr)=>{
    for(let i=1;i<5-1;i++)
    {
     if(el<arr[i])
        diff= arr[i]-el;
     else
        diff=(el-arr[i]);
    }
    if(min>diff)
     min=diff;
console.log(min);
});
