// 1 задание - Рекурсия
function isEven(number,n,a){
    if ((number-2)===n){
        return "True"
        
    }else if((number-1)===a){
        return "False"
        
    }
    else {
        return isEven(number,n+2,a+1)
        
    }

}

console.log(isEven(75,0,1))

// 2 задание
function CountBs(string){
    var count =0;
    var i
    for(i=0;i<string.length;i++){
        if (string.charAt(i)==='B'){
            count+=1
        }

    }
    return count;

}
console.log(CountBs("BBBBBBBBBBBB"))



function countChar(string,letter){
    var count =0;
    var i
    for(i=0;i<string.length;i++){
        if (string.charAt(i)===letter){
            count+=1
        }

    }
    return count;

}
console.log(countChar("BVVVXXAAcccc",'c'))

// 3 задание
function range(start,end){
    var i=0;
    var j=0;
    my_array=Array((end-start)+1).fill(0);
    while(start<=end){
         my_array.splice(j,1,start);
        start++
        j++
    }
    return my_array;
}
console.log(range(3,5))


function sum(array){
    var i=0;
    var sum=0; 

    while(i<array.length){
        sum=array[i]+sum;
      
        i++
    }
    return sum;
}
console.log(sum([2,3,5]))





//4 задание
 function reverseArray(array){
    var i=array.length-1
    var j=0
    while (i!=-1){
        last_el=array[array.length-1]
        array.pop();
        array.splice(j, 0, last_el);    
        
    
    i=i-1
    j++
    }return array

 }

console.log(reverseArray([1,2,3,4,5]))

function reverseArrayInPlace(array){
    var new_array=Array(array.length).fill(0);
    var i=array.length-1;
    var j=0;
    while(i!=-1){
    new_array.splice(j,1,array[i])    
    j++
    i=i-1
    }return new_array

 }console.log(reverseArrayInPlace([2,3,4,5,6,7]))


//5 задание
var list={}
 function listtoArray(array){
     var i=0
     if (array.length===0){
         return  list ;
       
     }
    
     else{
        list = { value: array[i], next: list };
        array.shift();
        return listtoArray(array);
 
    }
   
 }


 
console.log(listtoArray([0,1,2,3]))

 function prepend(list){
    list = { value: 1, next: list };
    new_list=list;

     return new_list;
 }
 





 