var all = document.getElementsByTagName("*");
var ignoredElemenents = ["SCRIPT", "NOSCRIPT", "STYLE", "TITLE"];


for (var i=0, max=all.length; i < max; i++)
{
	element =  all[i]
	if (element.hasChildNodes())
	{

		element =  all[i].childNodes[0];

	}
	if (ignoredElemenents.includes(all[i].tagName) || element.textContent.trim() === ""|| element.tagName === "HEAD" ){continue;}
	//element.textContent = "Ahoj";
	//console.log(element.textContent);


}