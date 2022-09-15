// Well this is a change xd but well it's not much I just optimized a few hundred lines of code and maybe the next thing is to enlarge the numbers you can add example 1+1+1= 3 something like that with the same principle of the average and change the language.

///////////////////////////////////////////////////////DECIMAL/////////////////////////////////////////////////////

// suma

function suma() {
	let numerosS = 0;

	let sumandos = prompt('Cuantos sumandos seran');

	for (let i = 1; i <= sumandos; i++) {
		let pregunta = prompt('Dime el sumando ' + i);

		numerosS = parseFloat(numerosS);
		pregunta = parseFloat(pregunta);

		pregunta = pregunta + numerosS;

		numerosS = pregunta;
		
	}

	alert('El resultado es ' + numerosS);
}
// resta

function resta() {
	let resta = [prompt('dime el minuendo'), prompt('dime el sustraendo')];

	let resultadoResta = parseFloat(resta[0]) - parseFloat(resta[1]);

	alert('la resta es ' + resultadoResta);
}

// multiplicacion

function multiplicacion() {
	let multiplicando = [prompt('dime el multiplicando'), prompt('dime el multiplicador')];

	let resultadoMultiplicacion = parseFloat(multiplicando[0]) * parseFloat(multiplicando[1]);
	alert('el resultado es ' + resultadoMultiplicacion);
}

// division

function division() {
	let division = [prompt('dime el dividendo'), prompt('dime el divisor')];

	let resultadoDivision = parseFloat(division[0]) / parseFloat(division[1]);
	let resulatadoComp = parseFloat(division[0]) % parseFloat(division[1]);

	alert('el resultado es ' + resultadoDivision + ', y el resto si no se usara punto decimal ' + resulatadoComp);
}

// elevacion

function elevacion() {
	let elevacion = [prompt('dime el numero que quieres elevar'), prompt('dime la elevacion')];

	let resultadoElevacion = parseFloat(elevacion[0]) ** parseFloat(elevacion[1]);

	alert('el resultado es ' + resultadoElevacion);
}

// raiz cuadrada

function raiz() {
	let raiz = [prompt('dime el numero')];

	raiz = parseFloat(raiz);

	resultadoRaizCuadrada = Math.sqrt(raiz);

	alert('el resultado es ' + resultadoRaizCuadrada);
}

// promedio

function promedio() {
	let numerosP = 0;

	let confirmacionPromedio = prompt('Cuantos numeros seran');

	for (let i = 1; i <= confirmacionPromedio; i++) {
		let pregunta = prompt('Dime el numero ' + i);

		numerosP = parseFloat(numerosP);
		pregunta = parseFloat(pregunta);

		pregunta = pregunta + numerosP;

		numerosP = pregunta;
		
	}

	numerosP = numerosP / confirmacionPromedio;

	alert('Tu promedio es ' + numerosP);
}

// fraccion a decimal

function fraccionDecimal() {
	let fra = prompt('dime la fraccion')

	let operandos = fra.split('/');

	let resultado = parseFloat(operandos[0]) / parseFloat(operandos[1]);
	alert(resultado);
}

// suma de fracciones

function sumaFraccionesD() {
	let fraS1 = prompt('dime la fraccion')
	let fraS2 = prompt('dime la segunda fracccion')

	let operandos1 = fraS1.split('/');
	let operandos2 = fraS2.split('/');

	let proc1 = parseFloat(operandos1[0]) * parseFloat(operandos2[1]);
	let proc2 = parseFloat(operandos1[1]) * parseFloat(operandos2[0]);

	let fracP1 = parseFloat(proc1) + parseFloat(proc2);
	let fracP2 = parseFloat(operandos1[1]) * parseFloat(operandos2[1]);

	alert('el resultado es ' + fracP1 + '/' + fracP2);
}

// resta de fracciones

function restaFraccionesD() {
	let fraR1 = prompt('dime la fraccion')
	let fraR2 = prompt('dime la segunda fracccion')

	let operandos1 = fraR1.split('/');
	let operandos2 = fraR2.split('/');

	let proc1 = parseFloat(operandos1[0]) * parseFloat(operandos2[1]);
	let proc2 = parseFloat(operandos1[1]) * parseFloat(operandos2[0]);

	let fracP1 = parseFloat(proc1) - parseFloat(proc2);
	let fracP2 = parseFloat(operandos1[1]) * parseFloat(operandos2[1]);

	alert('el resultado es ' + fracP1 + '/' + fracP2);
}

// multiplicacion de fracciones 

function mulltiFraccionesD() {
	let fraR1 = prompt('dime la fraccion')
	let fraR2 = prompt('dime la segunda fracccion')

	let operandos1 = fraR1.split('/');
	let operandos2 = fraR2.split('/');

	let proc1 = parseFloat(operandos1[0]) * parseFloat(operandos2[0]);
	let proc2 = parseFloat(operandos1[1]) * parseFloat(operandos2[1]);

	alert('el resultado es ' + proc1 + '/' + proc2);
}

// decimal a fraccion

function decimalFraccion() {

	let dec = prompt('dime ');

	if (dec == 0.1) {
		alert('1/10');
	}
	else if (dec == 0.2) {
		alert('2/10 o 1/5');
	}
	else if (dec == 0.3) {
		alert('3/10');
	}
	else if (dec == 0.4) {
		alert('4/10');
	}
	else if (dec == 0.5) {
		alert('5/10 o 1/2');
	}
	else if (dec == 0.6) {
		alert('6/10');
	}
	else if (dec == 0.7) {
		alert('7/10');
	}
	else if (dec == 0.8) {
		alert('8/10');
	}
	else if (dec == 0.9) {
		alert('9/10');
	}
	else if (dec == 0.10) {
	}
	else if (dec == 0.11) {
		alert('11/100');
	}
	else if (dec == 0.12) {
		alert('12/100');
	}
	else if (dec == 0.13) {
		alert('13/100');
	}
	else if (dec == 0.14) {
		alert('14/100');
	}
	else if (dec == 0.15) {
		alert('15/100');
	}
	else if (dec == 0.16) {
		alert('16/100');
	}
	else if (dec == 0.17) {
		alert('17/100');
	}
	else if (dec == 0.18) {
		alert('18/100');
	}
	else if (dec == 0.19) {
		alert('19/100');
	}
	else if (dec == 0.20) {
		alert('20/100');
	}
	else if (dec == 0.21) {
		alert('21/100');
	}
	else if (dec == 0.22) {
		alert('22/100');
	}
	else if (dec == 0.23) {
		alert('23/100');
	}
	else {
		alert('escribe algo valido o avisame si me falta algo primordial o si tines alguna idea de como automatizar esto contactate conmigo')
	}
}

// geometria

function geometria() {
	let pregunta1 = prompt('que tipo de figura es?')
	if (pregunta1 == 'triangulo') {
		let preguntaT1 = prompt('que quieres calcular *hipotenusa, forumulas generales');	
		if (preguntaT1 == 'hipotenusa') {
			let hipotenusaP1 = [prompt('dime el primer cateto'), prompt('dime el sugundo cateto')];

			let hipotenusaPr0 = parseFloat(hipotenusaP1[0]) ** 2;
			let hipotenusaPr1 = parseFloat(hipotenusaP1[1]) ** 2;

			let hipotenusaPrS = hipotenusaPr0 + hipotenusaPr1;

			let hipotenusaRF = Math.sqrt(hipotenusaPrS);

			alert(hipotenusaRF);
		}
		else {
			let trianguloProc = [prompt('dime cuanto mide su primer lado'), prompt('dime cuanto mide el segundo lado'), prompt('dime cuanto mide el tercer lado'), prompt('dime cuanto mide su base'), prompt('dime cual es la altura')];
			let trianguloPer = parseFloat(trianguloProc[0]) + parseFloat(trianguloProc[1]) + parseFloat(trianguloProc[2]);
			let trianguloArea = parseFloat(trianguloProc[3]) * parseFloat(trianguloProc[4]) / 2;

			alert('su perimetro es ' + trianguloPer + ', y la area es ' + trianguloArea);
		}

	}
}

///////////////////////////////////////////////BINARIO/////////////////////////////////////////////////////

// binario a decimal

function binarioDecimal() {
	let numeroEnBinario = [prompt('dime el numero en binario')];

	numeroEnBinario = parseInt(numeroEnBinario, 2);

	alert('el numero es ' + numeroEnBinario);
}

// decimal a binario

function decimalBinario() {
	let numeroEnDecimal = [prompt('dime el numero en decimal')];

	numeroEnDecimal = parseInt(numeroEnDecimal)

	let numeroEnDecimalConvertido = numeroEnDecimal.toString(2);

	alert('el numero es ' + numeroEnDecimalConvertido)
}

// suma binario

function sumaBinaria() {
	let sumaBinaria = [prompt('dime el primer sumando'), prompt('dime el segundo sumando')];

	let sumaBinariaProcedimiento = parseInt(sumaBinaria[0], 2) + parseInt(sumaBinaria[1], 2);

	let sumaBinariaEnDecimal = sumaBinariaProcedimiento.toString(2);

	alert('el resultado es ' + sumaBinariaEnDecimal);
}

// resta binaria

function restaBinaria() {
	let restaBinaria = [prompt('dime el minuendo'), prompt('dime el sustraendo')]

	let restaBinariaProcedimiento = parseInt(restaBinaria[0], 2) - parseInt(restaBinaria[1], 2);

	let restaBinariaEnDecimal = restaBinariaProcedimiento.toString(2);

	alert('el resultado es ' + restaBinariaEnDecimal);
}

// multiplicacion binaria

function multiplicacionBinaria() {
	let multiplicacionBinaria = [prompt('dime el multiplicando'), prompt('dime el multiplicador')];

	let multiplacionBinariaProcedimiento = parseInt(multiplicacionBinaria[0], 2) * parseInt(multiplicacionBinaria[1], 2);

	let multiplicacionBinariaEnDecimal = multiplacionBinariaProcedimiento.toString(2);

	alert('el resultado es ' + multiplicacionBinariaEnDecimal);
}

// division binaria

function divisionBinaria() {
	let divisionBinaria = [prompt('dime el dividendo'), prompt('dime el divisor')];

	let divisionBinariaProcedimiento = parseInt(divisionBinaria[0], 2) / parseInt(divisionBinaria[1], 2);

	let divisionBinariaEnDecimal = divisionBinariaProcedimiento.toString(2);

	alert('el resultado es ' + divisionBinariaEnDecimal);
}

// resto de la division binaria

function restoDivisionBinaria() {
	let restoDeDivisionBinaria = [prompt('dime el dividendo'), prompt('dime el divisor')];

	let restoDeDivisionBinariaProcedimiento = parseInt(restoDeDivisionBinaria[1], 2) % parseInt(restoDeDivisionBinaria[1], 2);

	let restoDeDivisionBinariaEnBinario = restoDeDivisionBinariaProcedimiento.toString(2);

	alert('el resultado es ' + restoDeDivisionBinariaEnBinario);
}

// elevacion binaria

function elevacionBinaria() {
	let elevacionBinaria = [prompt('dime el numero que quieres elevar'), prompt('dime la elevacion')]

	let elevacionBinariaProcedimiento = parseInt(elevacionBinaria[0], 2) ** parseInt(elevacionBinaria[1], 2);

	let elevacionCompletaEnBinario = elevacionBinariaProcedimiento.toString(2);

	alert('el resultado es ' + elevacionCompletaEnBinario);
}

// raiz cuadrada binaria

function raizBinaria() {
	let raizBinaria = [prompt('dime el numero')];

	raizBinaria = parseInt(raizBinaria, 2);

	raizBinaria = Math.sqrt(raizBinaria);

	raizBinaria = raizBinaria.toString(2);

	alert('el resultado es ' + raizBinaria);
}

// promedio binario

function promedioBinario() {
	let numerosPB = 0;

	let confirmacionPromedioB = prompt('Cuantos numeros seran');

	confirmacionPromedioB = parseInt(confirmacionPromedioB, 2)

	for (let i = 1; i <= confirmacionPromedioB; i++) {
		let preguntaB = prompt('Dime el numero ');

		preguntaB = parseInt(preguntaB, 2);

		preguntaB = preguntaB + numerosPB;

		numerosPB = preguntaB;
		
	}

	numerosPB = numerosPB / confirmacionPromedioB;

	numerosPB = numerosPB.toString(2)

	alert('Tu promedio es ' + numerosPB);
}

// hexadecimal a decimal

function hexadecimalDecimal() {
	let numeroEnHexadecimal = prompt('dime el numero en hexadecimal');

	numeroEnHexadecimal = parseInt(numeroEnHexadecimal, 16);

	alert('el numero es ' + numeroEnHexadecimal);
}

// decimal a hexadecimal

function decimalHexadecimal() {
	let numeroEnDecimal = [prompt('dime el numero en decimal')];

	numeroEnDecimal = parseInt(numeroEnDecimal)

	let numeroEnDecimalConvertido = numeroEnDecimal.toString(16);

	alert('el numero es ' + numeroEnDecimalConvertido)
}

// suma hexadecimal

function sumaHexadecimal() {
	let sumaHexadecimal = [prompt('dime el primer sumando'), prompt('dime el segundo sumando')];

	let sumaHexadecimalProcedimiento = parseInt(sumaHexadecimal[1], 16) + parseInt(sumaHexadecimal[1], 16);

	let sumaDecimalEnHexadecimal = sumaHexadecimalProcedimiento.toString(16);

	alert('el resultado es ' + sumaDecimalEnHexadecimal);
}

// resta hexadecimal

function restaHexadecimal() {
	let restaHexadecimal = [prompt('dime el minuendo'), prompt('dime el sustraendo')];

	let restaHexadecimalProcedimiento = parseInt(restaHexadecimal[0], 16) - parseInt(restaHexadecimal[1], 16);

	let restaDecimalEnHexadecimal = restaHexadecimalProcedimiento.toString(16);

	alert('el resultado es ' + restaDecimalEnHexadecimal);
}

// multiplicacion hexadecimal

function multiplicacionHexadecimal() {
	let multiplicacionHexadecimal = [prompt('dime el multiplicando'), prompt('dime el multiplicador')];

	let multiplicacionHexadecimalProcedimiento = parseInt(multiplicacionHexadecimal[0], 16) * parseInt(multiplicacionHexadecimal[1], 16);

	let multiplicacionDecimalEnHexadecimal = multiplicacionHexadecimalProcedimiento.toString(16);

	alert('el resultado es ' + multiplicacionDecimalEnHexadecimal);
}

// division hexadecimal

function divisionHexadecimal() {
	let divisionHexadecimal = [prompt('dime el dividendo'), prompt('dime el divisor')];

	let divisionHexadecimalProcedimiento = parseInt(divisionHexadecimal[0], 16) / parseInt(divisionHexadecimal[1], 16);

	let divisionDecimalEnHexadecimal = divisionHexadecimalProcedimiento.toString(16);

	alert('el resultado es ' + divisionDecimalEnHexadecimal);
}

// resto de division hexadecimal

function restoDivisionHexadecimal() {
	let restaDivisionHexadecimal = [prompt('dime el dividendo'), prompt('dime el divisor')];

	let restaDivisionHexadecimalProcedimiento = parseInt(restaDivisionHexadecimal[0], 16) / parseInt(restaDivisionHexadecimal[1], 16);

	let restaDivisionDecimalEnHexadecimal = restaDivisionHexadecimalProcedimiento.toString(16);

	alert('el resultado es ' + restaDivisionDecimalEnHexadecimal);
}

// elevacion hexadecimal

function elevacionHexadecimal() {
	let elevacionHexadecimal = [prompt('dime el numero que quieres elevar'), prompt('dime la elevacion')];

	let elevacionHexadecimalProcedimiento = parseInt(elevacionHexadecimal[0], 16) / parseInt(elevacionHexadecimal[1], 16);

	let elevacionDecimalEnHexadecimal = elevacionHexadecimalProcedimiento.toString(16);

	alert('el resultado es ' + elevacionDecimalEnHexadecimal);
}

// raiz cuadrada hexadecimal

function raizHexadecimal() {
	let raizHexadecimal = prompt('dime el numero');

	raizHexadecimal = parseInt(raizHexadecimal, 16);

	raizHexadecimal = Math.sqrt(raizHexadecimal);

	raizHexadecimal = raizHexadecimal.toString(16)

	alert('el resultado es ' + raizHexadecimal)
}

// promedio hexadecimal

function promedioHexadecimal() {
	let numerosPH = 0;

	let confirmacionPromedioH = prompt('Cuantos numeros seran');

	confirmacionPromedioH = parseInt(confirmacionPromedioH, 16)

	for (let i = 1; i <= confirmacionPromedioH; i++) {
		let preguntaH = prompt('Dime el numero ');

		preguntaH = parseInt(preguntaH, 16);

		preguntaH = preguntaH + numerosPH;

		numerosPH = preguntaH;
		
	}

	numerosPH = numerosPH / confirmacionPromedioH;

	numerosPH = numerosPH.toString(16);

	alert('Tu promedio es ' + numerosPH);
}

// pruebas

function raizCubicaD() {
	let raizCD = prompt('Dime el numero');

	raizCD = Math.cbrt(raizCD);

	alert(raizCD);
}

function calcSeno() {
	let seno = prompt('dime el numero');
}
