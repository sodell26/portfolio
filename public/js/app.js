addCircle() => {
	for(let i=0; i<=10; i++) {
		let div = document.createElement('div');

		div.className = "circle-container"

		let childDiv = document.createElement('div');

		childDiv.className = "circle"

		div.appendChild(childDiv)

		document.getElementByTagName('body')[0].appendChild(div)
	}
}

