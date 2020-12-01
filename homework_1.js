
// Линейные
//1
var a = 100;
var b = 25;
var tmp;
tmp=a; a=b; b=tmp;

console.log(a,b)
//2
catet_1=8; catet_2=6;

hype=(catet_1**2+catet_2**2)**0.5
console.log(hype)

//3
x1=4;y1=5; x2=10;y2=7;


k=(y1-y2)/(x1-x2)
b=y1-k*x1

console.log(k,b)

//Условные операторы
//1
let a_rand = Math.floor(Math.random() * (10 +10 + 1)) -10;

let b_rand = Math.floor(Math.random() * (10 +10 + 1)) -10;

let c_rand = Math.floor(Math.random() * (10 +10 + 1)) -10;


if ((a_rand*b_rand*c_rand) >(a_rand+b_rand+c_rand)){
    console.log(a_rand*b_rand*c_rand)*3
}else if ((a_rand*b_rand*c_rand) <(a_rand+b_rand+c_rand)){
    console.log(a_rand+b_rand+c_rand)*3
}



//2
let first_rand = Math.floor(Math.random() * (100 +100 + 1)) -100;

let second_rand = Math.floor(Math.random() * (100 +100 + 1)) -100;


if (first_rand % second_rand !==0){
    console.log( first_rand,second_rand)
    console.log("Частное:", (first_rand-first_rand % second_rand) / second_rand,"Остаток:",first_rand % second_rand)

}

else if (first_rand % second_rand ===0){
    console.log( first_rand,second_rand)
    console.log("Частное:", first_rand / second_rand)
}




//3
let x = Math.floor(Math.random() * (10 +10 + 1)) -10;

let y = Math.floor(Math.random() * (10 +10 + 1)) -10;
      

if (x >0 & y >0){
    console.log("Первая Четверть",x,y)
}
else if (x<0 & y<0){
    console.log('Четвертая четверть',x,y)
}
else if(x<0 & y>0){
    console.log("Вторая четверть",x,y)
}
else{
    console.log("Третья Четверть",x,y)
}


// 4
let x_coord = Math.floor(Math.random() * (15 +15 + 1)) -15;

let y_coord = Math.floor(Math.random() * (15 +15 + 1)) -15;


let r = Math.floor(Math.random() * (10 +10 + 1)) -10;

if(x_coord**2+y_coord**2<=r**2){
 console.log(true)
}

//5

var a=4;
var b=5;
var c= 3;

discriminant=b**2-4*4*3;

if (discriminant<0){
    console.log("Решения нет")
}else if(discriminant>0){
    x_1=(b+(discriminant)**.5)/2*a
    x_2=(b-(discriminant)**.5)/2*a
    console.log(x_1,x_2)
}







//3 блок
// 1 задание
let variable = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
i=1
n=1
while(i<=variable){
    n=i*n
    i++
}console.log('Факториа числа',variable,"равен", n)



//2 задание
var min=0;
var max =10;
var step= 2;

for  (min;  min<10; min=min+step){
    y=0.23*(min**2)+min
    console.log(x,y)
}

//3 задание
let rand_number = Math.floor(Math.random() * (100000000 - 10000 + 1)) + 10000;
var i=0
var n =0
var my_array=rand_number.toString().split('')
while(i<my_array.length){
   n=parseInt(my_array[i])+n
   i++
}

//4 задание
var sum=0
n=10
form_sum=(n*(n+1)/2)


for(x in ([...Array(n).keys()])){
   
    sum=parseInt(x)+sum+1  
}console.log(sum,form_sum)


if (sum ===  form_sum){
  console.log('True')
}


//5 задание
first_number=1
second_number=1
n=5
start=0
for (start;start<n;start++){
    
    next_number=first_number+second_number;

    first_number=second_number
    second_number=next_number


    console.log(next_number)

}

//6 задание
my_array=Array(10).fill(1).map(()=>Math.floor(Math.random() * (100 + 100 + 1)) - 100);

start_numb=my_array[0];

for(i=1;i<my_array.length;i++){
    if (my_array[i]>start_numb){
        start_numb=my_array[i]
    }
}console.log(start_numb)


// 7 задание
array=[...Array(10).keys()]
i=array.length-1
j=0
while (i!=-1){
    last_el=array[array.length-1]
    array.pop();
    array.splice(j, 0, last_el);    
    

i=i-1
j++
};console.log(array)

// 8 задание
var array=[...Array(11).keys()]

if ((array.length%2)===1){
    
    var i=array.length-1;
    var stop_point=((array.length-1)/2);
    var j=0
    while (i!=stop_point){
    var last_el=array[array.length-j-1]
    var first_el=array[j]
    array.splice(j, 1 );
    array.splice(i-1, 1 );
    array.unshift(last_el);    
    array.push(first_el)
 
    
    

    i=i-1
    j++
    }
}else if ((array.length%2)===0){
    var i=array.length-1;
    var stop_point=((array.length)/2)-1;
    var j=0
    while (i!=stop_point){
    var last_el=array[array.length-j-1]
    var first_el=array[j]
    array.splice(j, 1 );
    array.splice(i-1, 1 );
    array.unshift(last_el);    
    array.push(first_el)

    i=i-1
    j++
    }


}console.log(array)

//9 задание
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var array=[...Array(11).keys()]

var mean= array.reduce(reducer)/array.length
i=0
while (i<mean){
    if(i<mean){console.log(array[i])}

    i++
}
console.log(array)


var my_array=Array(10).fill(1).map(()=>Math.floor(Math.random() * (10 + 10 + 1)) - 10);
var max=0;
var min=0;
var sum=0;
var i 
var j

//10 задание

for(i=1;i<my_array.length-1;i++){  
    if (my_array[i]>my_array[max]){
        max=i
    }
    if(my_array[i]<my_array[min]){
        min=i
    }
}

for(j=min+1;j<max;j++){
    sum=my_array[j]+sum

}


console.log(sum)
