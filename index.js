// alert('this is javascript fundamental class');

// console.log('logging output in console');
// document.write('writing data on webpage');


// var a;
// var a=100;
// console.log(a);

// var a=100, b='100', c=false, d=null, e;

// console.log(a,b,c,d,e);

// console.log(typeof(b));

// Arithmetic opertors;
// +, -, *, /,%

// var a=20;
// var b=10;
// var c=a%b;
// console.log(c);

// Assigment operator
// =, +=, -=, *=, /=, %=
// var a=20, b=10, c=10, d=10, e=10;
// a+=10;
// b-=10;
// c*=10;
// d/=10;
// e%=10;
// console.log(a,b,c,d,e);

//comparison operators
// <, >, <=, >=, !=, ==, ===

// var a=10, b=10;
// console.log(a<=b);

// logical operators
// &&, ||, !

// var a=10, b=20;
// // console.log(a<b || a<5);
// console.log(!(a==b));

// Array

var arr=[10,'abc', true, null, undefined];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);
// console.log(arr[10]);

 //how to store data outside array
// var newArr=[];
// newArr[0]=10;
// newArr[2]='hello';
// console.log(newArr);

//Object


// var obj={
//     a:10,
//     b:'hello',
//     c:true,
//     d:null,
//     e:undefined,
//     f:[10,'100',true, null, undefined]
// }

// console.log(obj);
// [] .
// console.log(obj['c']);
// console.log(obj.d);
// console.log(obj.f[2]);
// obj.g='new property';
// console.log(obj);

//how to store data outside object

// var newObj={};
// newObj.a=10;
// newObj.b='hello';
// console.log(newObj);

// function
//syntax
//function functionname(parameter-list) {
//     statements
// }

// function add(){
//     var a=10;
//     var b=20;
//     var c=a+b;
//     console.log(c);

// }

// add();

// function sumTwoNumb(a,b){
//     // a=10, b=20;
//     var c=a+b;
//     console.log(c);

// }
//sumTwoNumb();
// sumTwoNumb(20,30);


// function calculator(a,b,operator){

//     switch(operator){
//         case '+' : console.log(a+b);
//         break;
//         case '-': console.log(a-b);
//         break;
//         case '*': console.log(a*b);
//         break;
//         case '/': console.log(a/b);
//         break;
//         default:console.log("nothing");
//     }
// }

// calculator(20,10,'/');

// if (3>9) {
//     console.log("yes");
//     }    
// else{
//     console.log("no");
// }
// var numb=100;
// switch (numb) {
//     case 100:
//         console.log("1000");
//         break;

//     default:
//         console.log("2000");
//         break;
// }

// for (var i =10; i >=0 ;i--) {
//    console.log(i);
// }

// var a=10;
// var b=a++;
// var c=++a;

// console.log(a,b,c);
// console.log(a++);
// console.log(++a);

var j=10;
// while (j<20) {
//     console.log(j);
//     j++;
    
// }

// do{
//     ++j;
//     console.log(j);
   
// }while (j<15); 

var arr=[10,'20',30, true];
// for (let index = 0; index < arr.length; index++) {
//    console.log(arr[index]); 
    
// }

// for (var k of arr) {
//     if (typeof(k)=='number') {
//         console.log("number");
//     }
//     if (typeof(k)=='string') {
//         console.log("string");
//     }
//     if (typeof(k)=='boolean') {
//         console.log("boolean");
//     }
    
// }

// var h= function (a,b){
//     var c=a+b;
//     return c;
 
// }

// console.log(h(10,20));

// (function add(a,b) {
//     console.log(a+b);
    
// })(70,20);

//Array helper methods
 var array1=[10,20,'30',true,null, undefined];
// array1.push('hello');
// array1.unshift('world');
// array1.pop();
// array1.shift();
// console.log(array1);

//slice

// var array2 = ['a','b','c','d','e','f']
// console.log(array2.slice(0,3));
// console.log(array2.slice(-1));
// console.log(array2.slice(-3,-1));
// console.log(array2.slice());
// console.log(array2.slice(1,-1));
// console.log(array2);

//splice

// var array3= ['a','b','c','d','e','f']
// array3.splice(1,1);
// console.log(array3);
// array3.splice(2,0,'g','h');
// console.log(array3);
// array3.splice(3,1,'i','j');
// console.log(array3);
// array3.splice(-1,1,'k','l');
// console.log(array3);
// array3.splice(2);
// console.log(array3);



//Array objects

var arrayNew = [
    {
        a: 10,
        b: 20,
        c: 0
    },
    {
        a: 10,
        b: 20,
        c: 1
    },
    {
        a: 10,
        b: 20,
        c: 2
    },
    {
        a: 10,
        b: 20,
        c: 3
    },
    {
        a: 10,
        b: 20,
        c: 4
    },
    {
        a: 10,
        b: 20,
        c: 5
    },
    {
        a: 10,
        b: 20,
        c: 6
    },
    {
        a: 10,
        b: 20,
        c: 7
    },
    {
        a: 10,
        b: 20,
        c: 8
    },
    {
        a: 10,
        b: 20,
        c: 9
    },
    {
        a: 10,
        b: 20,
        c: 10
    },
    {
        a: 10,
        b: 20,
        c: 11
    },
    {
        a: 10,
        b: 20,
        c: 12
    },
    {
        a: 10,
        b: 20,
        c: 13
    },
    {
        a: 10,
        b: 20,
        c: 14
    },
    {
        a: 10,
        b: 20,
        c: 15
    },
    {
        a: 10,
        b: 20,
        c: 16
    }, {
        a: 10,
        b: 20,
        c: 17
    }
]
var length=arrayNew.length;
console.log(length);
console.log(arrayNew);
//logic for accessing object property at the prime index
for(var i=2;i<length;i++){
    if(((i/2==1)&&(i%2==0))||((i/3==1)&&(i%3==0))||((i%2==1)&&(i%3!=0))){
        console.log(arrayNew[i].c);
    }
}
