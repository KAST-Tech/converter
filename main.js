const kiloMileConvertBtn = document.getElementById('convertBtn1');
kiloMileConvertBtn.addEventListener('click', function () {
	let inputValue = getInput('kiloInput');
	let mile = inputValue * 0.62137;
	showConvertedArea('kilo-mile-done');
	document.getElementById('show-result1').innerText = mile;
	refresh('kiloInput');
});

const mileKiloConvertBtn = document.getElementById('convertBtn2');
mileKiloConvertBtn.addEventListener('click', function () {
	let inputValue = getInput('mileInput');
	let kilo = inputValue / 0.62137;
	showConvertedArea('mile-kilo-done');
	document.getElementById('show-result2').innerText = kilo;
	refresh('mileInput');
});

function getInput(id) {
	const input = document.getElementById(id).value;
	const inputValue = parseFloat(input);
	return inputValue;
}
function showConvertedArea(id) {
	document.getElementById(id).style.display = 'block';
}
function refresh(id) {
	document.getElementById(id).value = '';
}
