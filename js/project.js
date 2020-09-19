// assign click event handler
document.getElementById('click-me').onclick = calculateNumDrinks;

function calculateNumDrinks () {
	// assign variables
	let currentAge = document.getElementById('age').value;
	let maxAge = document.getElementById('max-age').value;
	let favDrink = document.getElementById('item').value;
	let numPerDay = document.getElementById('num-per-day').value;

	// calculate total
	let total = (maxAge - currentAge) * 365 * numPerDay;

	// output results
	document.getElementById('solution').innerHTML = total;
	document.getElementById('drink').innerHTML = favDrink;
}
