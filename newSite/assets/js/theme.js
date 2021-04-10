function toggleColorSetting(event_)
{
	event_.preventDefault();
	const namePreference = "dark-preference";
	const storedPreference = window.localStorage.getItem(namePreference);
	var S;
	if (storedPreference == null || storedPreference == "black")
        {
		document.documentElement.classList.add("white-color");
		S = "white";	
        }
        else
        {       
		document.documentElement.classList.remove("white-color");
		S = "black";
        }

	window.localStorage.setItem(namePreference, S);

	event_.stopPropagation();
}

function setColorSetting()
{
	const namePreference = "dark-preference";
	const storedPreference = window.localStorage.getItem(namePreference);
	var S;
	if (storedPreference == null || storedPreference == "black")
        {
		S = "black";
        }
        else
        {       
		document.documentElement.classList.add("white-color");
		S = "white";	

		window.localStorage.setItem(namePreference, S);
        }
}

document.querySelectorAll(".toggle-darkness").forEach(function(node) {
			setColorSetting(node);
		}
		);

function changeSRC(elem, src)
{
	elem.src = src;
	console.log(src);
	elem.onload="";
}
