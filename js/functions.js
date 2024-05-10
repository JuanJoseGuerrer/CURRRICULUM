
//4 formas de impresion
//alert("hola desde un archivo externo");
//console.log("hola desde la consola");
//document.write("hola desde la interfaz");
//Swal.fire("Hola desde Swettalert");


//variables y tipos de datos

const pi = 3.1415; //decimal
const pul = 2.54;
var name = "Juan Jose"; //string
let edad = 32; // entero
var ver = true; //boolean
let fal = false; //boolean

//operadores basicos
var suma = 5+2;
console.log(suma);
var var_uno = 10;
var var_dos = 5;
console.log(var_uno - var_dos);
console.log(var_uno * var_dos);
console.log(var_uno / var_dos);
console.log(var_uno % var_dos);

console.log("mi edad es: " + edad);

//operadores de comparacion
// = asignacion
// == comparacion
// === estrictamente comparado (valor y el tipo de dato)
// >, >=, <, <=, <>



function send_form(){
    
    let name      = document.getElementById("name").value; 
    let last_name = document.getElementById("last_name").value;
    if(console.log == 0 || last_name.length == 0){
        Swal.fire({
            icon: "error",
            title: "Cajas de texto vacias",
            text: "Alguna de las cajas se encuentra vacia",
            
          });

        if(name.length == 0){

            document.getElementById("name").style.border = "2px solid red"
        
        }else{
            document.getElementById("name").style.border = "2px solid green"
        }

        
        if(last_name.length == 0){

            document.getElementById("last_name").style.border = "2px solid red"
        }else{
            document.getElementById("name").style.border = "2px solid green"
        }

    }else{
        document.getElementById("print").innerText = "Su nombre es " + name + " " + last_name;
    }


}


 //arrays
 var array_semana = ["Lunes", "martes", "miercoles", "jueves", "viernes"];
 var array_gral = [1,2,2.5, "ABC","SOY WILDER"];
 var array_num = [1,2,3,4,5,6,7,8,9,];

 var array_multi = [
     {name:"Wilder", age:32, color:"verde"},
     {name:"anyi", age:33, color:"rosa"},
     {name:"celeste" , age:3, color:"rosa"},
     {name:"antonella", age:2, color:"blanco"}
 ];

 var json_ejm ={
     name: "wilder",
     lastname: "duarte",
     phone: 3158667751,
     email:"waduarten@ufpso.edu.co"
 }
 
 console.log(array_semana);
 console.log(array_gral);
 console.log(array_num);
 console.log(array_multi);
 console.log(json_ejm);

 function action(){
     //alert(array_num);
     swal.fire("" + array_num);
     console.log(array_num.lengt);

     //var result = 0;
     //for(let i = 0; i<array_num.length; i++){
     //   result = result + array_num[i];
     //}


     //con for
     var total = 0;
     for(var j = 0; j < array_multi.length; j++){
        console.log(total = (array_multi[j].age) + total);
        
     }
     alert(total);


     //con while
     var total_dos = 0;
     var w = 0;
     while(w<array_multi.length){
        total_dos = array_multi[w].age + total_dos;
        w++;
     }

     alert(total_dos);

     document.getElementById("result").innerHTML = "<strong> El resultado es: " + result + "</strong>";
     document.getElementById("result").style.color = "green";

 }

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        //imageHeight: 1500,
        imageAlt: "A tall image",
      showConfirmButton: false,
      timer: 2000
      });

        document.getElementById("text").innerText = "el array a calcular es" + array_num;
        document.getElementById("impresion").value = array_num;
        
}

//var array_numerico = []

function eliminar(){
    let array_delete = array_num.pop();
    console.log(array_delete);
    console.log(array_num);
    document.getElementById("impresion").value = array_num;

}

function agregar(){
    let num = document.getElementById("num").value
    let array_add = array_num.push(num);
    console.log(array_add);
    document.getElementById("impresion").value = array_num;
    console.log(array_num)
}

function reves(){
    document.getElementById("impresion").value = array_num.reverse();
}

function limpiar(){
    document.getElementById("num").value = "";
    document.getElementById("name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("result").value = "";
}

function primNum(){
    let array_primNum = array_num.push(array_num[0]);
    console.log(array_primNum);
    console.log(array_num);
    document.getElementById("impresion").value = array_num;
    
    
}

function ultNum(){
    let valor = array_num.reverse()
    let array_ultNum = array_num.push(array_num[0]);
    console.log(array_ultNum);
    console.log(array_num);
    document.getElementById("impresion").value = array_num;
    
    
}