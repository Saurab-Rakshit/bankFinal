document.getElementById('submit').addEventListener('click', () => {
	var transType = document.getElementById('transType').value;
	var amount = parseInt(document.getElementById('amount').value);
	var avalBal = parseInt(document.getElementById('avlbal').value);

	if (transType === 'deposit') {
		document.getElementById('avlbal').value = avalBal + amount; //putting the value of amount+available balance in Available balance text box
		document.getElementById('deposit').value = amount; //putting the value of amount in deposit text box
	} else {
		if (amount > avalBal) {
			//when value in amount is > avalbalnc
			alert('amount unvailable');
		} else {
			document.getElementById('withdraw').value = amount; //value of amount in withdraw box
			document.getElementById('avlbal').value = avalBal - amount; //value after operation in Available Balnce box
		}
	}
});
