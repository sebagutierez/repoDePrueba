// var primerArreglo = ["hola", 1, true, ["a", "b", "c"]]
// console.log(primerArreglo)
// // // console.log(primerArreglo.length)
// // // console.log(primerArreglo[0]) hola
// // // console.log(primerArreglo[1]) 1
// // // console.log(primerArreglo[2]) true
// // // console.log(primerArreglo[3]) ["a", "b", "c"]
// // // console.log(primerArreglo[3][0]) a
// // // console.log(primerArreglo[3][1]) b
// // // console.log(primerArreglo[3][2]) c

// // primerArreglo[0] = "adios";
// // console.log(primerArreglo)
// // primerArreglo.push("hola")
// // console.log(primerArreglo)
// // primerArreglo.pop("hola")
// // console.log(primerArreglo)
// // primerArreglo.unshift("hola")
// // console.log(primerArreglo)
// // primerArreglo.shift("hola")
// // console.log(primerArreglo)

// // var nombreVar = {
// //     nombre: "Lord",
// //     edad: 60,
// //     genero: "masculino",
// //     intereses: ["violin", "boxeo"],

// //     metodo: function () {
// //         alert('hola, soy ' + this.nombre + ".")
// //     }
// // }
// // // console.log(nombreVar)
// // console.log(nombreVar.intereses)
// // console.log(nombreVar.metodo())

// // var estoYEsto = 2 > 3 && 3 > 2
// // console.log(estoYEsto)

// // var estoOEsto = 2 > 3 || 3 > 2
// // console.log(estoOEsto)

// // var contrario = 2 > 3
// // console.log(contrario)

// // var numero = 9
// // if (numero < 10) {
// //     console.log("verdadero")
// // } else {
// //     console.log("falso")
// // }

// // function suma (a, b) {
// // if (a === 0) {
// //     return "a debe ser > 0"
// // } 
// //   return a * b
// // }
// // console.log(suma(4, 5))
// // console.log(suma(0, 5))

// // var numero2 = 11
// // if (numero2 < 10) {
// //     console.log("menor que 10")
// // } else if(numero2 > 10) {
// //     console.log("Mayor que 10")
// // } else {
// //     console.log ("igual que diez")
// // }

// // var productos = 2;
// // switch (productos) {
// //     case 1:
// //         console.log("Te")
// //         break;
// //     case 2:
// //         console.log("Cafe")
// //         break;
// //     case 3:
// //         console.log("Agua")
// //         break;
// // }

// // var contador = 0;
// // while (contador < 10) {
// //     console.log(contador)
// //     contador++
// // }

// // do {
// //     console.log("do while " + contador);
// //     contador++
// // } while (contador < 10);

// // for (var i = 0; i < 10; i++) {
// //     for (let j = 0; j < 10; j++) {
        
// //     }
// // }

// // var arreglo = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// // for (var i = 0; i < arreglo.length; i++) {
// //     console.log(arreglo[i])
// //     }
// // var mje = true;
// // if(mje) {
// //     console.log("hola")
// // }

// // var edad = 18;
// // if(edad>=18) {
// //     console.log("eres mayor de edad")
// // }
// // else {
// //     console.log("todavia eres menor de edad");
// // }

// // var nombre = "";
// // if (nombre == "") {
// //     console.log("aun no nos has dicho tu nombre");
// // }
// // else {
// //     console.log("hemos guardado tu nombre");
// // }

// // var veces = 0;
// // if(veces < 4) {
// // console.log("mensaje");
// // veces++;
// // }

// // var mje = "hola";
// // for(var i = 0; i < 5; i++) {
// // console.log(mje);
// // }

// // var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// // for(var i=0; i<7; i++) {
// //     console.log(dias[i]);
// // }

// // var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// // for(i in dias) {
// //     console.log(dias[i]);
// // }

// var i1 = "hola"
// console.log(i1.length);

// var i2 = "hola"
// var i3 = "mundo-2"
// console.log(i2 + " " + i3);

// var i4 = "hola"
// var i5 = "mundo-3"
// console.log(i4.concat(" ").concat(i5));

// var i6 = "hola"
// console.log(i6.concat(" ").concat("mundo-4"));

// var i7 = "hola "
// console.log(i7.concat("mundo-5"));

// var i8 = "hola-6"
// console.log(i8.toUpperCase());

// var i9 = "hoLA-7"
// console.log(i9.toLowerCase());

// var i10 = "Hola"
// console.log(i10.charAt(0));

// var i11 = "hola"
// console.log(i11.indexOf("h"));

// var i12 = "hola"
// console.log(i12.lastIndexOf("a"));

// var i13 = "Hola"
// console.log(i13.substring(3)); 
// console.log(i13.substring(1, 3));
// console.log(i13.substring(0, 3));

// var i14 = "Hola split";
// console.log(i14.split(" ")); 
// var i15 = "Split";
// console.log(i15.split("")); 

// var i16 = [ "H", "o", "l", "a" ];
// console.log(i16.join("")) ;
// var i17 = [ "Hola", "Join" ];
// console.log(i17.join(" "));

// var i18 = [ "Pop", "mundo" ];
// i18.pop()
// console.log(i18);

// var i19 = [ "Hola", "mundo" ];
// i19.push("push");
// console.log(i19);

// var i20 = [ "Shift", "mundo" ]
// console.log(i20.shift())

// var i21 = [ "Hola", "mundo" ]
// i21.unshift("unshift")
// console.log(i21)

// var i22 = [ "Hola", "reverse" ]
// console.log(i22.reverse())

// var i23 = 0;
// var i24 = 0;
// console.log(i23 / i24);

// var i25 = 2;
// var i26 = 0;
// if(isNaN(i25/i26)) {
//     console.log("la división no está definida para los números indicados");
// }
//     else {
//         console.log("la división es igual a => " + i25/i26);
//     }

// var i27 = 0;
// var i28 = 1;
// if( isNaN( i27 / i28 )) {
//     console.log("NaN");
// }
//     else {
//         console.log( i27 / i28 );
//     }

// var i29 = 3.1416;
// console.log(i29.toFixed(2));

// var i30 = "en un lugar de la mancha"; 
// var i31 = i30.split("");
// var i32 = "";
// for(i in i31) {
// if(i31[i] == "a") {
// break;
// }
// else {
// i32 +=i31[i];
// }
// }
// console.log(i32)

// var i33 = "en un lugar de la mancha"; 
// var i34 = i33.split("");
// var i35 = "";
// for(i in i34) {
// if(i34[i] == "a") {
// continue;
// }
// else {
// i35 +=i34[i];
// }
// }
// console.log(i35)



// var i36 = ["martin", "fernando", ["sara", "juana"]];
// console.log(i36)

// var i37 = [10, 20, 30]
// for (var i = 0; i < i37.length; i++) {
//     console.log(i37[i]);
// }

// try {
//     // codigo a evaluar
// } catch (error) {
//     // Error a capturar
// } finally {
//     // se ejecuta de todos modos
// }

// try {
//     let id38 = "z"
//     if(isNaN(id38)) {
//         throw new Error("el valor no es numero");
//     }
//     console.log(id38 * id38)
// } catch (error) {
//     console.log("se produjo un error; " + error)
// }

// var resultado1 = 1;
// var i = 5;
// while(i <= resultado1) {
//     resultado1 *=i;
// i-;
// }
// console.log(i);

// var resultado = 0;
// var numero = 5;
// var i = 0;
// while(i <= numero) {
//     resultado +=i;
// i++;
// }
// console.log(resultado);

// var resultado = 1;
// var numero = 5;
// do {
// resultado *=numero;
// numero-;
// } while(numero > 0);
// console.log(numero);

// var numero = 9;
// if (numero <10) {
// console.log("verdadero")
// } else {
//     console.log("falso")
// }

// function div (a, b) {
//     if (b <= 0) {
//         return "b = NaN";
//     }
//     return a / b;
// }
// console.log(div(4, -2))

// function potencia(base, exponente) {
//     let resultado = 1;
//     for (let i = 0; i < exponente; i++) {
//         resultado *= base;
//     }
//     return resultado;
// }
// console.log(potencia(2, 3));

// function potencia (base, exponente) {
//     var resultado = 1;
//     for (var i = 0; i < exponente; i++) {
//         resultado *= base;
//     }
//     return resultado;
// }
// console.log(potencia(3, 2));

// const num = 3;
// const cuadrado = 2;
// let resultado = 1;
// for(let i = 0; i < cuadrado; i++) {
//     resultado = resultado *  num;
// }
// console.log(resultado)

// const num = 2;
// const cuadrado = 3;
// var resultado = 1;
// for(var i = 0; i < cuadrado; i++) {
//     resultado = resultado *  num;
// }
// console.log(resultado)


// function elevarAlCuadrado(num, cuadrado) {
//     // Devuelve el valor de "num" elevado al cuadrado
//     // ojo: No es raiz cuadrada!
//     // Tu código:
//     const num = 3;
//     const cuadrado = 2;
//     let resultado = 1;
//     for(let i = 0; i < cuadrado; i++) {
//     resultado = resultado *  num;
//     }

// for ( i = 0; i <= 2; i++ ) {

// }

