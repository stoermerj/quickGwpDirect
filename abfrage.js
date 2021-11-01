//copy and paste into console for quick check
(function abfragePreis() {
	let p = [];
	let count = 0
	let items = parseInt(document.querySelector("#ReportParameters_Page_Size > option:nth-child(1)").value) + 1
	for (let i = 1; i < items; i++) {
		let x = document.querySelector("#reportResultsTable > table > tbody > tr:nth-child("+String(i)+") > td:nth-child(12)").innerText;
		if (document.querySelector("#reportResultsTable > table > tbody > tr:nth-child(1) > td:nth-child(4)").innerText == document.querySelector("#reportResultsTable > table > tbody > tr:nth-child("+String(i)+") > td:nth-child(4)").innerText) 
			{
				xcleaned = parseInt(x.replace(".",""));
				console.log(xcleaned)
				p.push(parseInt(xcleaned))
				count++
			}
		
	}
	let addition = p.reduce((a,b) => a + b, 0)
	console.log("Es gibt heute "+ count + " Abschlüsse")
	return addition;
})(); 
