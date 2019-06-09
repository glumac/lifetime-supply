// assign click event handler
document.querySelector('#click-me').onclick = calculateNumDrinks;

function calculateNumDrinks () {
	// assign variables
	let currentAge = document.querySelector('#age').value;
	let maxAge = document.querySelector('#max-age').value;
	let favDrink = document.querySelector('#item').value;
	let numPerDay = document.querySelector('#num-per-day').value;

	// calculate total
	let total = (maxAge - currentAge) * 365 * numPerDay;

	// output results
	document.querySelector('#solution').innerHTML = total;
	document.querySelector('#drink').innerHTML = favDrink;
}
