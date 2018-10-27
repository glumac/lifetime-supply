// assign click event handler
document.querySelector('#click-me').onclick = calculateNumDrinks;

function calculateNumDrinks () {
	// assign variables
	var currentAge = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var favDrink = document.querySelector('#item').value;
	var numPerDay = document.querySelector('#num-per-day').value;

	// calculate total
	var total = (maxAge - currentAge) * 365 * numPerDay;

	// output results
	document.querySelector('#solution').innerHTML = total;
	document.querySelector('#drink').innerHTML = favDrink;
}