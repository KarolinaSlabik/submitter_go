function select_circle(element)
{	
	for(let ele of document.getElementsByClassName("circle"))
	{
		ele.classList.remove("circle_clicked");
	}
	
	element.classList.add("circle_clicked");
}

function send_form()
{
	let main_window = document.getElementById("window");
	let from_one_to_five = document.getElementsByClassName("circle_clicked")[0].innerText;
	main_window.innerHTML = "";
	
	let image = document.createElement("img");
	image.src="images/illustration-thank-you.svg";
	image.id = "thanks_image";
	main_window.appendChild(image);
	
	let paragraf_one = document.createElement("p");
	paragraf_one.innerHTML = `You selected ${from_one_to_five} out of 5`;
	paragraf_one.id = "result";
	main_window.appendChild(paragraf_one);
	
	let header = document.createElement("h1");
	header.innerHTML = "Thank you!";
	header.id = "thanks";
	main_window.appendChild(header);
	
	let main_text = document.createElement("p");
	main_text.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
	main_text.id = "thanks_text";
	main_window.appendChild(main_text);
	
	return false;
}

