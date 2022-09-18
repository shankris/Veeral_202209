let http = new XMLHttpRequest();
http.open('get', './js/products.json', true);
http.send();
http.onload = function () {
	if (this.readyState == 4 && this.status == 200) {
		let products = JSON.parse(this.responseText);
		let output = "";
		for (let item of products) {
			output += `
	            <div class="product">
	               <img src="${item.image}" alt="${item.description}" class="productListImg">
	               <p class="title">${item.title}</p>
	               <p class="description">${item.description}</p>
	               <p class="more"><a href="productDetail.htm">Find out more</a></p>
	            </div>
	         `;
		}
		document.querySelector(".products").innerHTML = output;
	}
}