let main = document.getElementById("container");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b92264515bmshf20a7878077f528p19f59ajsn0f71c9f03da0',
		'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
	}
};

fetch('https://burgers-hub.p.rapidapi.com/burgers', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response);
        // main.append(getDta(image, name, des, price))
        appendDta(response);
    })
    .catch(err => console.error(err));

function appendDta(data)
{
    data.forEach(ele => {
        console.log(ele["images"][1]["lg"]);
        main.append(getDta(ele["images"][1]["lg"], ele.name, ele.desc, ele.price))
        
    });
}
 function getDta(image, name, des, price)
 {
    let dataDiv = document.createElement("div");
    dataDiv.setAttribute("class", "dataDiv");

    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "imageDiv");

    let img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("class", "images");
    imageDiv.append(img);

    let h3 = document.createElement("h3");
    h3.innerText = name;

    let departmentp = document.createElement("p");
    departmentp.innerText = des;

    let genderp = document.createElement("p");
    genderp.innerText = price;

    dataDiv.append(imageDiv, h3, departmentp, genderp);

    return dataDiv


 }

