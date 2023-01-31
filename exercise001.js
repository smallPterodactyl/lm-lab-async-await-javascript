const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9
	const randomInt = Math.floor(Math.random() * 10);

	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});

//Try to generate an even integer
promise

  //Success: even integer
  .then((response) => {
	console.log (`Yay! Promise resolved with response: ${response}`)
  })

  //Failure: odd integer, or some other error
  .catch((response) => {
	console.log (`Boo. Promise rejected with response: ${response}`)

  });

//Handle if outcome is unsuccessful (odd integer, or another event)

 




