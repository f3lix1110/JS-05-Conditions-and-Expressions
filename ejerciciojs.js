var names = ["Maria", "antony", "Joy", "Juan"];

//EXERCISE #1
//Part 1
function ownname() {
    let nombre = prompt("Escribe un nombre");
    names.push(nombre);
    console.log(names);
}
//ownname();

//Part 2
function checkname(){
    var check=false;
    let nombre = prompt("Escribe un nombre");
    for(let i=0;i<=nombre.length;i++){
    if(nombre==names[i]){
        check=true;
    }
                                    }
    console.log(names);
    console.log("Existe el nombre en la lista? ");
    console.log(check);
}
//checkname();

//Part 3
function matriz(){
    var names2 = ["Neto", "Maria", "Felix", "Juan"];
    var matriz1=[[],[]];
    var contador=0;
    for(let j=0;j<names.length;j++){
        names[j];
        for(let u=0;u<names2.length;u++){
        if(names2[u]==names[j]){
            matriz1[0][contador]=names2[u];
            matriz1[1][contador]=names2[u];
            contador++;
        }
                                        }
    }
    console.log(matriz1);
}

//Second option
// function matriz(){
//     var names2 = ["Neto", "Maria", "Karen", "Juan","Joy"];
//     var matriz1=[];
//     var contador=0;
//     for(let j=0;j<names.length;j++){
//         names[j];
//         for(let u=0;u<names2.length;u++){
//         if(names2[u]==names[j]){
//             matriz1[contador]=names2[u];
//             contador++;
//         }
//                                         }
//     }
//     console.log(matriz1);
// }

//matriz();

//Part 4
function listInt(){
    var longitud=[];
    for(let i=0;i<names.length;i++){
        longitud.push(names[i].length);
    }
    console.log(names);
    console.log(longitud);
}

//listInt();

//EXERCISE #2
// false || (true && false);
// true || (11 + 12);
// (31 + 22) || true;
// true && (1 + 7);
// false && (3 + 4);
// (1 + 2) && true;
// (32 * 4) >= 129;
// false !== !true;
// true === 4;
// false === (847 === '847');
// false === (887 == '887');
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

//EXERCISE #3
function range(){

var numberRange=90;   

if(numberRange>0&&numberRange<=25){
    console.log(numberRange+" is between 0 and 25");
}else if(numberRange>25&&numberRange<=100){
    console.log(numberRange+" is between 26 and 100");
}else if(numberRange>100){
    console.log(numberRange+" is greater than 100");
}else if(numberRange<0){
    console.log(numberRange+" is less than 0");
}

}

//range();

//Additional Exercises
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f); //muestra 4