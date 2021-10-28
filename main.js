// Kilometer to mile conversion
const kiloMileConvertBtn = document.getElementById('convertBtn1');
kiloMileConvertBtn.addEventListener('click', function () {
	let inputValue = getInput('kiloInput');
	let mile = inputValue * 0.62137;
	showConvertedArea('kilo-mile-done');
	document.getElementById('show-result1').innerText = mile;
	refresh('kiloInput');
});

// Mile to kilometer conversion
const mileKiloConvertBtn = document.getElementById('convertBtn2');
mileKiloConvertBtn.addEventListener('click', function () {
	let inputValue = getInput('mileInput');
	let kilo = inputValue / 0.62137;
	showConvertedArea('mile-kilo-done');
	document.getElementById('show-result2').innerText = kilo;
	refresh('mileInput');
});

// Inch to centimeter conversion
const inchCentimeterConvertBtn = document.getElementById('convertBtn3');
inchCentimeterConvertBtn.addEventListener('click', function () {
	let inputValue = getInput('inchInput');
	let centimeter = inputValue * 2.54;
	showConvertedArea('inch-cent-done');
	document.getElementById('show-result3').innerText = centimeter;
	refresh('inchInput');
});

// Centimeter to inch conversion
const centimeterInchConvertBtn = document.getElementById('convertBtn4');
centimeterInchConvertBtn.addEventListener('click', function () {
	let inputValue = getInput('centInput');
	let centimeter = inputValue * 0.393701;
	showConvertedArea('cent-inch-done');
	document.getElementById('show-result4').innerText = centimeter;
	refresh('centInput');
});

// Input function
function getInput(id) {
	const input = document.getElementById(id).value;
	const inputValue = parseFloat(input);
	return inputValue;
}
// display:block output div
function showConvertedArea(id) {
	document.getElementById(id).style.display = 'block';
}
// Refresh the input section
function refresh(id) {
	document.getElementById(id).value = '';
}
