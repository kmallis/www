// fetch functions for all the .json files


fetch("paints.json") // connect with the specific .json file 
.then(function(response){ 
	return response.json(); //read all the info from the json file
})
.then(function(products){
	let placeholder = document.querySelector("#draw"); // match the right id
	let out = "";
	for(let product of products){ //for all the elements that exists
		//put every data in a table
		//when we write in `...` in a .js file we can write html command
		out += ` 
			<tr> 
				<td>${product.painting}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out; //get the result and print it
})


fetch("religious.json") // connect with the specific .json file 
.then(function(response){ 
	return response.json(); //read all the info from the json file
})
.then(function(products){
	let placeholder = document.querySelector("#rel"); // match the right id
	let out = "";
	for(let product of products){ //for all the elements that exists
		//put every data in a table
		//when we write in `...` in a .js file we can write html command
		out += ` 
			<tr> 
				<td>${product.religion}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out; //get the result and print it
})


fetch("bio.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#url");
	let out = "";
	for(let product of products){
		out += `
			<tr>
			<td>
			<a href= ${product.url1}> Click here! </a>
			</td>
				
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})


fetch("PaintLinks.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#url2");
	let out = "";
	for(let product of products){
		out += `
			<tr>
			<td>
			<a href= ${product.url2}> Click here! </a>
			</td>
				
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})