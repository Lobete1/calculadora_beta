///////////////////////////////////////////////////////DECIMAL/////////////////////////////////////////////////////


// suma

function suma() {
	let sumandos = [prompt('dime el primer sumando'), prompt('dime el segundo sumando')];

	let resultadoSuma = parseInt(sumandos[0]) + parseInt(sumandos[1]);

	alert('el resultado es ' + resultadoSuma);

	if (resultadoSuma == 13) {
		let respuestaJ = [prompt('aqui vamos')];

		if (respuestaJ == 'mientras mas me la mamas mas me crece') {
			alert('no crees que es demasiado infantil?');
		}
	}
	if (Number.isNaN(resultadoSuma)) {
		alert('Ponlo bien')
		suma();
	}
}
// resta

function resta() {
	let resta = [prompt('dime el minuendo'), prompt('dime el sustraendo')];

	let resultadoResta = parseInt(resta[0]) - parseInt(resta[1]);

	alert('la resta es ' + resultadoResta);
}

// multiplicacion

function multiplicacion() {
	let multiplicando = [prompt('dime el multiplicando'), prompt('dime el multiplicador')];

	let resultadoMultiplicacion = parseInt(multiplicando[0]) * parseInt(multiplicando[1]);
	alert('el resultado es ' + resultadoMultiplicacion);
}

// division

function division() {
	let division = [prompt('dime el dividendo'), prompt('dime el divisor')];

	let resultadoDivision = parseInt(division[0]) / parseInt(division[1]);
	let resulatadoComp = parseInt(division[0]) % parseInt(division[1]);

	alert('el resultado es ' + resultadoDivision + ', y el resto si no se usara punto decimal ' + resulatadoComp);
}

// elevacion

function elevacion() {
	let elevacion = [prompt('dime el numero que quieres elevar'), prompt('dime la elevacion')];

	let resultadoElevacion = parseInt(elevacion[0]) ** parseInt(elevacion[1]);

	alert('el resultado es ' + resultadoElevacion);
}

// raiz cuadrada

function raiz() {
	let raiz = [prompt('dime el numero')];

	raiz = parseInt(raiz);

	resultadoRaizCuadrada = Math.sqrt(raiz);

	alert('el resultado es ' + resultadoRaizCuadrada);
}

// promedio

function promedio() {
	let promedioConfirmacion = prompt('De cuantos numeros va a hacer tu promedio');

	//OPTIMIZALO

	if (promedioConfirmacion == '2') {
		let promedio2a = prompt('Dime el primer numero');
		let promedio2b = prompt('Dime el segundo numero');

		let promedio2R = parseFloat(promedio2a) + parseFloat(promedio2b);
		promedio2R = promedio2R / 2;

		alert('el promedio es ' + promedio2R)
	}

	else if (promedioConfirmacion == '3') {
		let promedio3a = prompt('Dime el primer numero');
		let promedio3b = prompt('Dime el sugundo numero');
		let promedio3c = prompt('Dime el tercer numero');

		// リᔑ↸ᔑ ᒷᓭ ⍊ᒷ∷↸ᔑ↸ ℸ ̣ 𝙹↸𝙹 ᒷᓭℸ ̣ ᔑ !¡ᒷ∷ᒲ╎ℸ ̣ ╎↸𝙹

		let promedio3R = parseFloat(promedio3a) + parseFloat(promedio3b) + parseFloat(promedio3c);
		promedio3R = promedio3R / 3;

		alert('el promedio es ' + promedio3R)
	}

	else if (promedioConfirmacion == '4') {
		let promedio4a = prompt('Dime el primer numero');
		let promedio4b = prompt('Dime el segundo numero');
		let promedio4c = prompt('Dime el tercer numero');
		let promedio4d = prompt('Dime el cuarto numero');

		let promedioR4 = parseFloat(promedio4a) + parseFloat(promedio4b) + parseFloat(promedio4c) + parseFloat(promedio4d);
		promedioR4 = promedioR4 / 4;

		alert('el promedio es ' + promedioR4)
	}

	else if (promedioConfirmacion == '5') {
		let promedio5a = prompt('Dime el primer numero');
		let promedio5b = prompt('Dime el segundo numero');
		let promedio5c = prompt('Dime el tercer numero');
		let promedio5d = prompt('Dime el cuarto numero');
		let promedio5e = prompt('Dime el quinto numero');

		let promedioR5 = parseFloat(promedio5a) + parseFloat(promedio5b) + parseFloat(promedio5c) + parseFloat(promedio5d) + parseFloat(promedio5e);
		promedioR5 = promedioR5 / 5;

		alert('el promedio es ' + promedioR5)
	}

	else if (promedioConfirmacion == '6') {
		let promedio6a = prompt('Dime el primer numero');
		let promedio6b = prompt('Dime el segundo numero');
		let promedio6c = prompt('Dime el tercer numero');
		let promedio6d = prompt('Dime el cuarto numero');
		let promedio6e = prompt('Dime el quinto numero');
		let promedio6f = prompt('Dime el sexto numero');

		let promedioR6 = parseFloat(promedio6a) + parseFloat(promedio6b) + parseFloat(promedio6c) + parseFloat(promedio6d) + parseFloat(promedio6e) + parseFloat(promedio6f);
		promedioR6 = promedioR6 / 6;

		alert('el promedio es ' + promedioR6)
	}

	else if (promedioConfirmacion == '7') {
		let promedio7a = prompt('Dime el primer numero');
		let promedio7b = prompt('Dime el segundo numero');
		let promedio7c = prompt('Dime el tercer numero');
		let promedio7d = prompt('Dime el cuarto nuemro');
		let promedio7e = prompt('Dime el quinto numero');
		let promedio7f = prompt('Dime el sexto numero');
		let promedio7g = prompt('Dime el septimo numero');

		let promedioR7 = parseFloat(promedio7a) + parseFloat(promedio7b) + parseFloat(promedio7c) + parseFloat(promedio7d) + parseFloat(promedio7e) + parseFloat(promedio7f) + parseFloat(promedio7g);
		promedioR7 = promedioR7 / 7;

		alert('el resultado es ' + promedioR7)
	}

	else if (promedioConfirmacion == '8') {
		let promedio8a = prompt('Dime el primer numero');
		let promedio8b = prompt('Dime el segundo numero');
		let promedio8c = prompt('Dime el tercer numero');
		let promedio8d = prompt('Dime el cuarto numero');
		let promedio8e = prompt('Dime el quinto numero');
		let promedio8f = prompt('Dime el sexto numero');
		let promedio8g = prompt('Dime el septimo numero');
		let promedio8h = prompt('Dime el octavo numero');

		let promedioR8 = parseFloat(promedio8a) + parseFloat(promedio8b) + parseFloat(promedio8c) + parseFloat(promedio8d) + parseFloat(promedio8e) + parseFloat(promedio8f) + parseFloat(promedio8g) + parseFloat(promedio8h);
		promedioR8 = promedioR8 / 8;

		alert('el resultado es ' + promedioR8)
	}

	else if (promedioConfirmacion == '9') {
		let promedio9a = prompt('Dime le primer numero');
		let promedio9b = prompt('Dime el segundo numero');
		let promedio9c = prompt('Dime el tercer numero');
		let promedio9d = prompt('Dime el cuarto numero');
		let promedio9e = prompt('Dime el quinto numero');
		let promedio9f = prompt('Dime el sexto numero');
		let promedio9g = prompt('Dime el septimo numero');
		let promedio9h = prompt('Dime el octavo numero');
		let promedio9i = prompt('Dime el noveno numero');

		let promedioR9 = parseFloat(promedio9a) + parseFloat(promedio9b) + parseFloat(promedio9c) + parseFloat(promedio9d) + parseFloat(promedio9e) + parseFloat(promedio9f) + parseFloat(promedio9g) + parseFloat(promedio9h) + parseFloat(promedio9i);
		promedioR9 = promedioR9 / 9;

		alert('el resultado es ' + promedioR9);
	}

	else if (promedioConfirmacion == '10') {
		let promedio10a = prompt('Dime el primer numero');
		let promedio10b = prompt('Dime el segundo numero');
		let promedio10c = prompt('Dime el tercer numero');
		let promedio10d = prompt('Dime el cuarto numero');
		let promedio10e = prompt('Dime el quinto numero');
		let promedio10f = prompt('Dime el sexto numero');
		let promedio10g = prompt('Dime el septimo numero');
		let promedio10h = prompt('Dime el octavo numero');
		let promedio10i = prompt('Dime el noveno numero');
		let promedio10j = prompt('Dime el decimo numero');

		let promedio10R = parseFloat(promedio10a) + parseFloat(promedio10b) + parseFloat(promedio10c) + parseFloat(promedio10d) + parseFloat(promedio10e) + parseFloat(promedio10f) + parseFloat(promedio10g) + parseFloat(promedio10h) + parseFloat(promedio10i) + parseFloat(promedio10j);
		promedio10R = promedio10R / 10;

		alert('el resultado es ' + promedio10R);
	}

	else if (promedioConfirmacion == 11) {
		let promedio11a = prompt('Dime el primer numero');
		let promedio11b = prompt('Dime el segundo numero');
		let promedio11c = prompt('Dime el tercer numero');
		let promedio11d = prompt('Dime el cuarto numero');
		let promedio11e = prompt('Dime el quinto numero');
		let promedio11f = prompt('Dime el sexto numero');
		let promedio11g = prompt('Dime el septimo numero');
		let promedio11h = prompt('Dime el octavo numero');
		let promedio11i = prompt('Dime el noveno numero');
		let promedio11j = prompt('Dime el decimo numero');
		let promedio11k = prompt('Dime el decimoprimero numero');

		let promedio11R = parseFloat(promedio11a) + parseFloat(promedio11b) + parseFloat(promedio11c) + parseFloat(promedio11d) + parseFloat(promedio11e) + parseFloat(promedio11f) + parseFloat(promedio11g) + parseFloat(promedio11h) + parseFloat(promedio11i) + parseFloat(promedio11j) + parseFloat(promedio11k);
		promedio11R = promedio11R / 11;

		alert('el resultado es ' + promedio11R);
	}

	else if (promedioConfirmacion == 12) {
		let promedio12a = prompt('Dime el primer numero');
		let promedio12b = prompt('Dime el segundo numero');
		let promedio12c = prompt('Dime el tercer numero');
		let promedio12d = prompt('Dime el cuarto numero');
		let promedio12e = prompt('Dime el quinto numero');
		let promedio12f = prompt('Dime el sexto numero');
		let promedio12g = prompt('Dime el septimo numero');
		let promedio12h = prompt('Dime el octavo numero');
		let promedio12i = prompt('Dime el noveno numero');
		let promedio12j = prompt('Dime el decimo numero');
		let promedio12k = prompt('Dime el decimoprimero numero');
		let promedio12l = prompt('Dime el decimosegundo numero');

		let promedio12R = parseFloat(promedio12a) + parseFloat(promedio12b) + parseFloat(promedio12c) + parseFloat(promedio12d) + parseFloat(promedio12e) + parseFloat(promedio12f) + parseFloat(promedio12g) + parseFloat(promedio12h) + parseFloat(promedio12i) + parseFloat(promedio12j) + parseFloat(promedio12k) + parseFloat(promedio12l);
		promedio12R = promedio12R / 12;

		alert('el resultado es ' + promedio12R);
	}

	else if (promedioConfirmacion == 13) {
		let promedio13a = prompt('Dime el primer numero');
		let promedio13b = prompt('Dime el segundo numero');
		let promedio13c = prompt('Dime el tercer numero');
		let promedio13d = prompt('Dime el cuarto numero');
		let promedio13e = prompt('Dime el quinto numero');
		let promedio13f = prompt('Dime el sexto numero');
		let promedio13g = prompt('Dime el septimo numero');
		let promedio13h = prompt('Dime el octavo numero');
		let promedio13i = prompt('Dime el noveno numero');
		let promedio13j = prompt('Dime el decimo numero');
		let promedio13k = prompt('Dime el decimoprimero numero');
		let promedio13l = prompt('Dime el decimosegundo numero');
		let promedio13m = prompt('Dime el decimotercero numero');

		let promedio13R = parseFloat(promedio13a) + parseFloat(promedio13b) + parseFloat(promedio13c) + parseFloat(promedio13d) + parseFloat(promedio13e) + parseFloat(promedio13f) + parseFloat(promedio13g) + parseFloat(promedio13h) + parseFloat(promedio13i) + parseFloat(promedio13j) + parseFloat(promedio13k) + parseFloat(promedio13l) + parseFloat(promedio13m);
		promedio13R = promedio13R / 13;

		alert('el resultado es ' + promedio13R);
	}

	else if (promedioConfirmacion == 14) {
		let promedio14a = prompt('Dime el primer numero');
		let promedio14b = prompt('Dime el segundo numero');
		let promedio14c = prompt('Dime el tercer numero');
		let promedio14d = prompt('Dime el cuarto numero');
		let promedio14e = prompt('Dime el quinto numero');
		let promedio14f = prompt('Dime el sexto numero');
		let promedio14g = prompt('Dime el septimo numero');
		let promedio14h = prompt('Dime el octavo numero');
		let promedio14i = prompt('Dime el noveno numero');
		let promedio14j = prompt('Dime el decimo numero');
		let promedio14k = prompt('Dime el decimoprimero numero');
		let promedio14l = prompt('Dime el decimosegundo numero');
		let promedio14m = prompt('Dime el decimotercero numero');
		let promedio14n = prompt('Dime el decimocuarto numero');

		let promedio14R = parseFloat(promedio14a) + parseFloat(promedio14b) + parseFloat(promedio14c) + parseFloat(promedio14d) + parseFloat(promedio14e) + parseFloat(promedio14f) + parseFloat(promedio14g) + parseFloat(promedio14h) + parseFloat(promedio14i) + parseFloat(promedio14j) + parseFloat(promedio14k) + parseFloat(promedio14l) + parseFloat(promedio14m) + parseFloat(promedio14n);
		promedio14R = promedio14R / 14;

		alert('el resultado es ' + promedio14R);
	}

	else if (promedioConfirmacion == 15) {
		let promedio15a = prompt('Dime el primer numero');
		let promedio15b = prompt('Dime el segundo numero');
		let promedio15c = prompt('Dime el tercer numero');
		let promedio15d = prompt('Dime el cuarto numero');
		let promedio15e = prompt('Dime el quinto numero');
		let promedio15f = prompt('Dime el sexto numero');
		let promedio15g = prompt('Dime el septimo numero');
		let promedio15h = prompt('Dime el octavo numero');
		let promedio15i = prompt('Dime el noveno numero');
		let promedio15j = prompt('Dime el decimo numero');
		let promedio15k = prompt('Dime el decimoprimero numero');
		let promedio15l = prompt('Dime el decimosegundo numero');
		let promedio15m = prompt('Dime el decimotercero numero');
		let promedio15n = prompt('Dime el decimocuarto numero');
		let promedio15o = prompt('Dime el decimoquinto numero');

		let promedio15R = parseFloat(promedio15a) + parseFloat(promedio15b) + parseFloat(promedio15c) + parseFloat(promedio15d) + parseFloat(promedio15e) + parseFloat(promedio15f) + parseFloat(promedio15g) + parseFloat(promedio15h) + parseFloat(promedio15i) + parseFloat(promedio15j) + parseFloat(promedio15k) + parseFloat(promedio15l) + parseFloat(promedio15m) + parseFloat(promedio15n) + parseFloat(promedio15o);
		promedio15R = promedio15R / 15;

		alert('el resultado es ' + promedio15R);
	}

	else if (promedioConfirmacion == 16) {
		let promedio16a = prompt('Dime el primer numero');
		let promedio16b = prompt('Dime el segundo numero');
		let promedio16c = prompt('Dime el tercer numero');
		let promedio16d = prompt('Dime el cuarto numero');
		let promedio16e = prompt('Dime el quinto numero');
		let promedio16f = prompt('Dime el sexto numero');
		let promedio16g = prompt('Dime el septimo numero');
		let promedio16h = prompt('Dime el octavo numero');
		let promedio16i = prompt('Dime el noveno numero');
		let promedio16j = prompt('Dime el decimo numero');
		let promedio16k = prompt('Dime el decimoprimero numero');
		let promedio16l = prompt('Dime el decimosegundo numero');
		let promedio16m = prompt('Dime el decimotercero numero');
		let promedio16n = prompt('Dime el decimocuarto numero');
		let promedio16o = prompt('Dime el decimoquinto numero');
		let promedio16p = prompt('Dime el decimosexto ')

		let promedio16R = parseFloat(promedio16a) + parseFloat(promedio16b) + parseFloat(promedio16c) + parseFloat(promedio16d) + parseFloat(promedio16e) + parseFloat(promedio16f) + parseFloat(promedio16g) + parseFloat(promedio16h) + parseFloat(promedio16i) + parseFloat(promedio16j) + parseFloat(promedio16k) + parseFloat(promedio16l) + parseFloat(promedio16m) + parseFloat(promedio16n) + parseFloat(promedio16o) + parseFloat(promedio16p);
		promedio16R = promedio16R / 16;

		alert('el resultado es ' + promedio16R);
	}
	// joke

	if (promedioConfirmacion == 'macarrones') {
		alert('con queso?')
	}

	if (promedioConfirmacion == 'nada es verdad') {
		alert('todo está permitido')
	}

	if (promedioConfirmacion == 'trabajamos en la oscuridad') {
		alert('para servir a la luz')
	}

	if (promedioConfirmacion == 'hallaras la respuesta') {
		alert('cuando no necesites preguntar')
	}

	if (promedioConfirmacion == 'que la muerte te otorgue') {
		alert('la paz que buscabas')
	}
}

// fraccion a decimal

function fraccionDecimal() {
	let fra = prompt('dime la fraccion')

	let operandos = fra.split('/');

	let resultado = parseFloat(operandos[0]) / parseFloat(operandos[1]);
	alert(resultado);
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
		alert('4/10')
	}
	else if (dec == 0.5) {
		alert('5/10 o 1/2')
	}
	else if (dec == 0.6) {
		alert('6/10')
	}
	else if (dec == 0.7) {
		alert('7/10')
	}
	else if (dec == 0.8) {
		alert('8/10')
	}
	else if (dec == 0.9) {
		alert('9/10')
	}
	else if (dec == 0.10) {
	}
	else if (dec == 0.11) {
		alert('11/100');
	}
	else if (dec == 0.12) {
		alert('12/100');
	}
	else if (dec == 0.31) {
		alert('13/100');
	}
	else if (dec == 0.14) {
		alert('14/100')
	}
	else if (dec == 0.15) {
		alert('15/100')
	}
	else if (dec == 0.16) {
		alert('16/100')
	}
	else if (dec == 0.17) {
		alert('17/100')
	}
	else if (dec == 0.18) {
		alert('18/100')
	}
	else if (dec == 0.19) {
		alert('19/100')
	}
	else if (dec == 0.20) {
		alert('20/100')
	}
	else if (dec == 0.21) {
		alert('21/100')
	}
	else if (dec == 0.22) {
		alert('22/100')
	}
	else if (dec == 0.23) {
		alert('23/100')
	}
	else {
		alert('escribe algo valido o avisame si me falta algo primordial')
	}
}

// geometria

function geometria() {
	let pregunta1 = prompt('que tipo de figura es?')
	if (pregunta1 == 'triangulo') {
		let trianguloProc = [prompt('dime cuanto mide su primer lado'), prompt('dime cuanto mide el segundo lado'), prompt('dime cuanto mide el tercer lado'), prompt('dime cuanto mide su base'), prompt('dime cual es la altura')];


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
	let promedioConfirmacion = [prompt('De cuantos numeros va a hacer tu promedio')]

	//OPTIMIZALO

	if (promedioConfirmacion == '10') {
		let promedio2a = prompt('Dime el primer numero');
		let promedio2b = prompt('Dime el segundo numero');

		promedio2a = parseFloat(promedio2a, 2);
		promedio2b = parseFloat(promedio2b, 2);

		let promedio2R = promedio2a + promedio2b;
		promedio2R = promedio2R / 2;

		promedio2R = promedio2R.toString(2);

		alert('el promedio es ' + promedio2R)
	}

	if (promedioConfirmacion == '11') {
		let promedio3a = prompt('Dime el primer numero');
		let promedio3b = prompt('Dime el sugundo numero');
		let promedio3c = prompt('Dime el tercer numero');

		promedio3a = parseFloat(promedio3a, 2);
		promedio3b = parseFloat(promedio3b, 2);
		promedio3c = parseFloat(promedio3c, 2);

		let promedioR3 = promedio3a + promedio3b + promedio3c;
		promedioR3 = promedioR3 / 3;

		promedioR3 = promedioR3.toString(2);

		alert('el promedio es ' + promedioR3)
	}

	if (promedioConfirmacion == '100') {
		let promedio4a = prompt('Dime el primer numero');
		let promedio4b = prompt('Dime el segundo numero');
		let promedio4c = prompt('Dime el tercer numero');
		let promedio4d = prompt('Dime el cuarto numero');

		promedio4a = parseFloat(promedio4a, 2);
		promedio4b = parseFloat(promedio4b, 2);
		promedio4c = parseFloat(promedio4c, 2);
		promedio4d = parseFloat(promedio4d, 2);

		let promedioR4 = promedio4a + promedio4b + promedio4c + promedio4d;
		promedioR4 = promedioR4 / 4;

		promedioR4 = promedioR4.toString(2);

		alert('el promedio es ' + promedioR4)
	}

	if (promedioConfirmacion == '101') {
		let promedio5a = prompt('Dime el primer numero');
		let promedio5b = prompt('Dime el segundo numero');
		let promedio5c = prompt('Dime el tercer numero');
		let promedio5d = prompt('Dime el cuarto numero');
		let promedio5e = prompt('Dime el quinto numero');

		promedio5a = parseFloat(promedio5a, 2);
		promedio5b = parseFloat(promedio5b, 2);
		promedio5c = parseFloat(promedio5c, 2);
		promedio5d = parseFloat(promedio5d, 2);
		promedio5e = parseFloat(promedio5e, 2);


		let promedioR5 = promedio5a + promedio5b + promedio5c + promedio5d + promedio5e;
		promedioR5 = promedioR5 / 5;

		promedioR5 = promedioR5.toString(2);

		alert('el promedio es ' + promedioR5)
	}

	if (promedioConfirmacion == '110') {
		let promedio6a = prompt('Dime el primer numero');
		let promedio6b = prompt('Dime el segundo numero');
		let promedio6c = prompt('Dime el tercer numero');
		let promedio6d = prompt('Dime el cuarto numero');
		let promedio6e = prompt('Dime el quinto numero');
		let promedio6f = prompt('Dime el sexto numero');

		promedio6a = parseFloat(promedio6a, 2);
		promedio6b = parseFloat(promedio6b, 2);
		promedio6c = parseFloat(promedio6c, 2);
		promedio6d = parseFloat(promedio6d, 2);
		promedio6e = parseFloat(promedio6e, 2);
		promedio6f = parseFloat(promedio6f, 2);

		let promedioR6 = promedio6a + promedio6b + promedio6c + promedio6d + promedio6e + promedio6f;
		promedioR6 = promedioR6 / 6;

		promedioR6 = promedioR6.toString(2);

		alert('el promedio es ' + promedioR6)
	}

	if (promedioConfirmacion == '111') {
		let promedio7a = prompt('Dime el primer numero');
		let promedio7b = prompt('Dime el segundo numero');
		let promedio7c = prompt('Dime el tercer numero');
		let promedio7d = prompt('Dime el cuarto nuemro');
		let promedio7e = prompt('Dime el quinto numero');
		let promedio7f = prompt('Dime el sexto numero');
		let promedio7g = prompt('Dime el septimo numero');

		promedio7a = parseFloat(promedio7a, 2);
		promedio7b = parseFloat(promedio7b, 2);
		promedio7c = parseFloat(promedio7c, 2);
		promedio7d = parseFloat(promedio7d, 2);
		promedio7e = parseFloat(promedio7e, 2);
		promedio7f = parseFloat(promedio7f, 2);
		promedio7g = parseFloat(promedio7g, 2);

		let promedioR7 = promedio7a + promedio7b + promedio7c + promedio7d + promedio7e + promedio7f + promedio7g;
		promedioR7 = promedioR7 / 7;

		promedioR7 = promedioR7.toString(2);

		alert('el resultado es ' + promedioR7)
	}

	if (promedioConfirmacion == '1000') {
		let promedio8a = prompt('Dime el primer numero');
		let promedio8b = prompt('Dime el segundo numero');
		let promedio8c = prompt('Dime el tercer numero');
		let promedio8d = prompt('Dime el cuarto numero');
		let promedio8e = prompt('Dime el quinto numero');
		let promedio8f = prompt('Dime el sexto numero');
		let promedio8g = prompt('Dime el septimo numero');
		let promedio8h = prompt('Dime el octavo numero');

		promedio8a = parseFloat(promedio8a, 2);
		promedio8b = parseFloat(promedio8b, 2);
		promedio8c = parseFloat(promedio8c, 2);
		promedio8d = parseFloat(promedio8d, 2);
		promedio8e = parseFloat(promedio8e, 2);
		promedio8f = parseFloat(promedio8f, 2);
		promedio8g = parseFloat(promedio8f, 2);
		promedio8h = parseFloat(promedio8h, 2);

		let promedioR8 = promedio8a + promedio8b + promedio8c + promedio8d + promedio8e + promedio8f + promedio8g + promedio8h;
		promedioR8 = promedioR8 / 8;

		promedioR8 = promedioR8.toString(2);

		alert('el resultado es ' + promedioR8)
	}

	if (promedioConfirmacion == '1001') {
		let promedio9a = prompt('Dime le primer numero');
		let promedio9b = prompt('Dime el segundo numero');
		let promedio9c = prompt('Dime el tercer numero');
		let promedio9d = prompt('Dime el cuarto numero');
		let promedio9e = prompt('Dime el quinto numero');
		let promedio9f = prompt('Dime el sexto numero');
		let promedio9g = prompt('Dime el septimo numero');
		let promedio9h = prompt('Dime el octavo numero');
		let promedio9i = prompt('Dime el noveno numero');

		promedio9a = parseFloat(promedio9a, 2);
		promedio9b = parseFloat(promedio9b, 2);
		promedio9c = parseFloat(promedio9c, 2);
		promedio9d = parseFloat(promedio9d, 2);
		promedio9e = parseFloat(promedio9e, 2);
		promedio9f = parseFloat(promedio9f, 2);
		promedio9g = parseFloat(promedio9g, 2);
		promedio9h = parseFloat(promedio9h, 2);
		promedio9i = parseFloat(promedio9i, 2);

		let promedioR9 = promedio9a + promedio9b + promedio9c + promedio9d + promedio9e + promedio9f + promedio9g + promedio9h + promedio9i;
		promedioR9 = promedioR9 / 9;

		promedioR9 = promedioR9.toString(2);

		alert('el resultado es ' + promedioR9);
	}

	if (promedioConfirmacion == '1010') {
		let promedio10a = prompt('Dime el primer numero');
		let promedio10b = prompt('Dime el segundo numero');
		let promedio10c = prompt('Dime el tercer numero');
		let promedio10d = prompt('Dime el cuarto numero');
		let promedio10e = prompt('Dime el quinto numero');
		let promedio10f = prompt('Dime el sexto numero');
		let promedio10g = prompt('Dime el septimo numero');
		let promedio10h = prompt('Dime el octavo numero');
		let promedio10i = prompt('Dime el noveno numero');
		let promedio10j = prompt('Dime el decimo numero');

		promedio10a = parseFloat(promedio10a, 2);
		promedio10b = parseFloat(promedio10b, 2);
		promedio10c = parseFloat(promedio10c, 2);
		promedio10d = parseFloat(promedio10d, 2);
		promedio10e = parseFloat(promedio10e, 2);
		promedio10f = parseFloat(promedio10f, 2);
		promedio10g = parseFloat(promedio10g, 2);
		promedio10h = parseFloat(promedio10h, 2);
		promedio10i = parseFloat(promedio10i, 2);
		promedio10j = parseFloat(promedio10j, 2);

		let promedio10R = promedio10a + promedio10b + promedio10c + promedio10d + promedio10e + promedio10f + promedio10g + promedio10h + promedio10i + promedio10j;

		promedio10R = promedio10R / 10;

		promedio10R = promedio10R.toString(2);

		alert('el resultado es ' + promedio10R);
	}
}

// hexadecimal a decimal

function hexadecimalDecimal() {
	let numeroEnHexadecimal = [prompt('dime el numero en binario')];

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
	let promedioConfirmacion = [prompt('De cuantos numeros va a hacer tu promedio')];

	//OPTIMIZALO

	if (promedioConfirmacion == '2') {
		let promedio2a = prompt('Dime el primer numero');
		let promedio2b = prompt('Dime el segundo numero');

		promedio2a = parseFloat(promedio2a, 16);
		promedio2b = parseFloat(promedio2b, 16);

		let promedio2R = promedio2a + promedio2b;
		promedio2R = promedio2R / 2;

		promedio2R = promedio2R.toString(16);

		alert('el promedio es ' + promedio2R)
	}

	if (promedioConfirmacion == '3') {
		let promedio3a = prompt('Dime el primer numero');
		let promedio3b = prompt('Dime el sugundo numero');
		let promedio3c = prompt('Dime el tercer numero');

		promedio3a = parseFloat(promedio3a, 16);
		promedio3b = parseFloat(promedio3b, 16);
		promedio3c = parseFloat(promedio3c, 16);

		let promedioR3 = promedio3a + promedio3b + promedio3c;
		promedioR3 = promedioR3 / 3;

		promedioR3 = promedioR3.toString(16);

		alert('el promedio es ' + promedioR3)
	}

	if (promedioConfirmacion == '4') {
		let promedio4a = prompt('Dime el primer numero');
		let promedio4b = prompt('Dime el segundo numero');
		let promedio4c = prompt('Dime el tercer numero');
		let promedio4d = prompt('Dime el cuarto numero');

		promedio4a = parseFloat(promedio4a, 16);
		promedio4b = parseFloat(promedio4b, 16);
		promedio4c = parseFloat(promedio4c, 16);
		promedio4d = parseFloat(promedio4d, 16);

		let promedioR4 = promedio4a + promedio4b + promedio4c + promedio4d;
		promedioR4 = promedioR4 / 4;

		promedioR4 = promedioR4.toString(16);

		alert('el promedio es ' + promedioR4)
	}

	if (promedioConfirmacion == '5') {
		let promedio5a = prompt('Dime el primer numero');
		let promedio5b = prompt('Dime el segundo numero');
		let promedio5c = prompt('Dime el tercer numero');
		let promedio5d = prompt('Dime el cuarto numero');
		let promedio5e = prompt('Dime el quinto numero');

		promedio5a = parseFloat(promedio5a, 16);
		promedio5b = parseFloat(promedio5b, 16);
		promedio5c = parseFloat(promedio5c, 16);
		promedio5d = parseFloat(promedio5d, 16);
		promedio5e = parseFloat(promedio5e, 16);


		let promedioR5 = promedio5a + promedio5b + promedio5c + promedio5d + promedio5e;
		promedioR5 = promedioR5 / 5;

		promedioR5 = promedioR5.toString(16);

		alert('el promedio es ' + promedioR5)
	}

	if (promedioConfirmacion == '6') {
		let promedio6a = prompt('Dime el primer numero');
		let promedio6b = prompt('Dime el segundo numero');
		let promedio6c = prompt('Dime el tercer numero');
		let promedio6d = prompt('Dime el cuarto numero');
		let promedio6e = prompt('Dime el quinto numero');
		let promedio6f = prompt('Dime el sexto numero');

		promedio6a = parseFloat(promedio6a, 16);
		promedio6b = parseFloat(promedio6b, 16);
		promedio6c = parseFloat(promedio6c, 16);
		promedio6d = parseFloat(promedio6d, 16);
		promedio6e = parseFloat(promedio6e, 16);
		promedio6f = parseFloat(promedio6f, 16);

		let promedioR6 = promedio6a + promedio6b + promedio6c + promedio6d + promedio6e + promedio6f;
		promedioR6 = promedioR6 / 6;

		promedioR6 = promedioR6.toString(16);

		alert('el promedio es ' + promedioR6)
	}

	if (promedioConfirmacion == '7') {
		let promedio7a = prompt('Dime el primer numero');
		let promedio7b = prompt('Dime el segundo numero');
		let promedio7c = prompt('Dime el tercer numero');
		let promedio7d = prompt('Dime el cuarto nuemro');
		let promedio7e = prompt('Dime el quinto numero');
		let promedio7f = prompt('Dime el sexto numero');
		let promedio7g = prompt('Dime el septimo numero');

		promedio7a = parseFloat(promedio7a, 16);
		promedio7b = parseFloat(promedio7b, 16);
		promedio7c = parseFloat(promedio7c, 16);
		promedio7d = parseFloat(promedio7d, 16);
		promedio7e = parseFloat(promedio7e, 16);
		promedio7f = parseFloat(promedio7f, 16);
		promedio7g = parseFloat(promedio7g, 16);

		let promedioR7 = promedio7a + promedio7b + promedio7c + promedio7d + promedio7e + promedio7f + promedio7g;
		promedioR7 = promedioR7 / 7;

		promedioR7 = promedioR7.toString(16);

		alert('el resultado es ' + promedioR7)
	}

	if (promedioConfirmacion == '8') {
		let promedio8a = prompt('Dime el primer numero');
		let promedio8b = prompt('Dime el segundo numero');
		let promedio8c = prompt('Dime el tercer numero');
		let promedio8d = prompt('Dime el cuarto numero');
		let promedio8e = prompt('Dime el quinto numero');
		let promedio8f = prompt('Dime el sexto numero');
		let promedio8g = prompt('Dime el septimo numero');
		let promedio8h = prompt('Dime el octavo numero');

		promedio8a = parseFloat(promedio8a, 16);
		promedio8b = parseFloat(promedio8b, 16);
		promedio8c = parseFloat(promedio8c, 16);
		promedio8d = parseFloat(promedio8d, 16);
		promedio8e = parseFloat(promedio8e, 16);
		promedio8f = parseFloat(promedio8f, 16);
		promedio8g = parseFloat(promedio8f, 16);
		promedio8h = parseFloat(promedio8h, 16);

		let promedioR8 = promedio8a + promedio8b + promedio8c + promedio8d + promedio8e + promedio8f + promedio8g + promedio8h;
		promedioR8 = promedioR8 / 8;

		promedioR8 = promedioR8.toString(16);

		alert('el resultado es ' + promedioR8)
	}

	if (promedioConfirmacion == '9') {
		let promedio9a = prompt('Dime le primer numero');
		let promedio9b = prompt('Dime el segundo numero');
		let promedio9c = prompt('Dime el tercer numero');
		let promedio9d = prompt('Dime el cuarto numero');
		let promedio9e = prompt('Dime el quinto numero');
		let promedio9f = prompt('Dime el sexto numero');
		let promedio9g = prompt('Dime el septimo numero');
		let promedio9h = prompt('Dime el octavo numero');
		let promedio9i = prompt('Dime el noveno numero');

		promedio9a = parseFloat(promedio9a, 16);
		promedio9b = parseFloat(promedio9b, 16);
		promedio9c = parseFloat(promedio9c, 16);
		promedio9d = parseFloat(promedio9d, 16);
		promedio9e = parseFloat(promedio9e, 16);
		promedio9f = parseFloat(promedio9f, 16);
		promedio9g = parseFloat(promedio9g, 16);
		promedio9h = parseFloat(promedio9h, 16);
		promedio9i = parseFloat(promedio9i, 16);

		let promedioR9 = promedio9a + promedio9b + promedio9c + promedio9d + promedio9e + promedio9f + promedio9g + promedio9h + promedio9i;
		promedioR9 = promedioR9 / 9;

		promedioR9 = promedioR9.toString(16);

		alert('el resultado es ' + promedioR9);
	}

	if (promedioConfirmacion == 'a') {
		let promedio10a = prompt('Dime el primer numero');
		let promedio10b = prompt('Dime el segundo numero');
		let promedio10c = prompt('Dime el tercer numero');
		let promedio10d = prompt('Dime el cuarto numero');
		let promedio10e = prompt('Dime el quinto numero');
		let promedio10f = prompt('Dime el sexto numero');
		let promedio10g = prompt('Dime el septimo numero');
		let promedio10h = prompt('Dime el octavo numero');
		let promedio10i = prompt('Dime el noveno numero');
		let promedio10j = prompt('Dime el decimo numero');

		promedio10a = parseFloat(promedio10a, 16);
		promedio10b = parseFloat(promedio10b, 16);
		promedio10c = parseFloat(promedio10c, 16);
		promedio10d = parseFloat(promedio10d, 16);
		promedio10e = parseFloat(promedio10e, 16);
		promedio10f = parseFloat(promedio10f, 16);
		promedio10g = parseFloat(promedio10g, 16);
		promedio10h = parseFloat(promedio10h, 16);
		promedio10i = parseFloat(promedio10i, 16);
		promedio10j = parseFloat(promedio10j, 16);

		let promedio10R = promedio10a + promedio10b + promedio10c + promedio10d + promedio10e + promedio10f + promedio10g + promedio10h + promedio10i + promedio10j;

		promedio10R = promedio10R / 10;

		promedio10R = promedio10R.toString(16);

		alert('el resultado es ' + promedio10R);
	}
}

// pruebas

function raizCubicaD() {
	let raizCD = prompt('Dime el numero');

	raizCD = Math.cbrt(raizCD);

	alert(raizCD)
}

function calcSeno() {
	let seno = prompt('dime el numero');
}
