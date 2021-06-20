addCircle = () => {
	for(let i=0; i<=99; i++) {
		let div = document.createElement('div');

		div.className = "circle-container"

		let childDiv = document.createElement('div');

		childDiv.className = "circle"

		div.appendChild(childDiv)

		document.getElementsByClassName('circles')[0].appendChild(div)
	}
}

