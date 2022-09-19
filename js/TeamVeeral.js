let http = new XMLHttpRequest();
http.open('get', './js/teamVeeral.json', true);
http.send();
http.onload = function () {
	if (this.readyState == 4 && this.status == 200) {
		let team = JSON.parse(this.responseText);
		let output = "";
		for (let item of team) {
			output += `



        <div class="card-container">
          <!-- <span class="pro">PRO</span> -->
          <img src="${item.image}" alt="" />
          <div class="name">${item.fname} <div class="nameLast">${item.lname}</div>
          </div>
          <div class="position">${item.Desig}</div>

          <div class="about">
            <p> ${item.info}</p>
						<p> ${item.email}
          </div>
        </div>



	         `;
		}
		document.querySelector(".teamCards").innerHTML = output;
	}
}