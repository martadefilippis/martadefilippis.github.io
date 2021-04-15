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
		if (document.documentElement.classList.contains("white-color"))
			document.documentElement.classList.remove("white-color");
        }
        else
        {       
		document.documentElement.classList.add("white-color");

		window.localStorage.setItem(namePreference, "white");
        }
}

setColorSetting();
document.addEventListener("visibilitychange", setColorSetting);
