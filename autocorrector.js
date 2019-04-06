const typo = {

inLineElements : ["B", "BIG", "I", "SMALL", "TT", "ABBR", "ACRONYM", "CITE", "CODE", "DFN", "EM", "KDB", "STRONG", "SAMP", "VAR", "A", "BDO", "BR", "MAP", "OBJECT", "Q", "SPAN", "SUB", "SUP", "BUTTON", "INPUT", "LABEL", "SELECT", "TEXTAREA"],
ignoredElemenents : ["SCRIPT", "NOSCRIPT", "STYLE", "TITLE", "IFRAME", "HEAD", "META", "HTML", ""],
usellesChar : "\uE000",

options : {
  
  quote: true,
  units: false,
  number: true,
  space: true,
  date: true,
  elipse: true

},

Rules : {

    // rules for czech quotes

    quote: [

      [/(“|"|“)(\w)/g, "„$2"],

      [/(”|")( |,|\n*|$)/g, "“$2"],

      [/(!|\?|\.)(”|")/g, "$1“"],

      [/(\w)(')(\w)/g, "$1’$3"]

    ],


    // rules for units

    // there must be a space between numbers and the unit

    units: [

      [/(\d+)(| )(|m)s /g, "$1"+"\u00a0"+"$3s "],

      [/(\d+)(| )(min|h|d) /g, "$1"+"\u00a0"+"$3 "],

      [/(\d+)(| )(|n|m|c|d|k)m /g, "$1"+"\u00a0"+"$3m "],

      [/(\d+)(| )(|m|h|d|c|b)l /g, "$1"+"\u00a0"+"$3l "],

      [/(\d+)(| )(ccm|gal) /g, "$1"+"\u00a0"+"$3 "],

      [/(\d+)(| )(|m|c|d|k)m(\d) /g, "$1"+"\u00a0"+"$3m$4 "],

      [/(\d+)(| )(ccm|gal) /g, "$1"+"\u00a0"+"$3 "],

      [/(\d+)(| )(ha|a) /g, "$1"+"\u00a0"+"$3 "],

      [/(\d+)(| )(|k|M)J /g, "$1"+"\u00a0"+"$3J "],

      [/(\d+)(| )(|k)cal /g, "$1"+"\u00a0"+"$3cal "],

      [/(\d+)(| )(|kWh|M)Wh /g, "$1"+"\u00a0"+"$3Wh "],

      [/(\d+)(| )(|k)m\/(s|min|h) /g, "$1"+"\u00a0"+"$3m/$4 "],

      [/(\d+)(| )(K|°C|°F) /g, "$1"+"\u00a0"+"$3 "],

      [/(\d+)(| )(|h|k|M)Pa /g, "$1"+"\u00a0"+"$3Pa "],

      [/(\d+)(| )(bar|atm) /g, "$1"+"\u00a0"+"$3 "],

      [/(\d+)(| )(|k)W /g, "$1"+"\u00a0"+"$3 "],

      [/(\d+)(| )(%) /g, "$1"+"\u00a0"+"$3 "],

      [/(|m|c|d|k)m(\d) /g, "$1m<sup>$2</sup> "]

    ],

    // rule for number formatting

    number: [

      [/(\d|\uE000)(?=(\d{3}|\d{3}\uE000|\d\uE000\d{2}|\d{2}\uE000\d|\uE000\d{3}|\d\uE000\d\uE000\d|\uE000\d\uE000r\d\uE000\d|\d\uE000\d\uE000\d\uE000)+(?!(\d|\uE000\d|\d\uE000)))/g, "$1"+"\u202F"]


    ],

    // rules for hard spaces

    space: [

      [/  /g, " "],

      [/ (a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V) /g, " $1\u00a0"],

      [/ (a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V)\uE000 /g, " $1\u00a0\uE000"],

      [/ \uE000(a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V)\uE000 /g, " \uE000$1\u00a0\uE000"],

      [/ \uE000(a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V) /g, " \uE000$1\u00a0"],


      [/(\d+)( )(%)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(\uE000)(%)/g, "$1"+"\u00a0\uE000"+"$3"],

      [/([§|#])( )(\d)/g, "$1"+"\u00a0"+"$3"],

      [/([§|#])(\uE000)(\d)/g, "$1"+"\u00a0\uE000"+"$3"],

      [/(tj|tzv|tzn)\. /g, "$1.\u00a0"]

    ],

    // rules for dates

    date: [

      [/(\d{1,2}\.)(| )(\d{1,2}\.)(| )(\d{4})/g, "$1"+"\u00a0"+"$3"+" "+"$5"],
      [/(\d{1,2}\.)(| )(\d{1,2}\.)(| )(\d)\u202F(\d{3})/g, "$1"+"\u00a0"+"$3"+" "+"$5"+"$6"],
      [/(\d{1,2}\.)(| )(\d{1,2}\.)(| )(\d)\u202F(\d{2}\uE000\d)/g, "$1"+"\u00a0"+"$3"+" "+"$5$6"],
      [/(\d{1,2}\.)(| )(\d{1,2}\.)(| )(\d)\u202F\d\uE000(\d{2})/g, "$1"+"\u00a0"+"$3"+" "+"$5$6"],
      [/(\d{1,2}\.)(| )(\d{1,2}\.)(| )(\d)\u202F(\uE000\d{3})/g, "$1"+"\u00a0"+"$3"+" "+"$5$6"]

    ],

    // rule for ellipsis instead of 3 dots

    elipse: [

      [/\.{3}/g, "…"],
      [/\.{2}\uE000\./g, "…\uE000"],
      [/\.\uE000\.\./g, "\uE000…"],
      [/\.\uE000\.\uE000\./g, "\uE000…\uE000"]

    ],


},

runAutoCorrector : function runAutoCorrector(settings)
{

  options = Object.assign(typo.options, settings);
  if (document.getElementsByTagName("typography-autocorrector").length === 0)
  {
    const all = document.getElementsByTagName("*");
    typo.elementIteration(all);
  }
  else
  {
   const all = document.getElementsByTagName("typography-autocorrector");
   typo.elementIteration(all);
  }

},

elementIteration : function elementIteration(all) {

  for (let i=0, max=all.length; i < max; i++)
  {
    let element =  all[i];
    if (typo.shouldSkip(element)){continue;}
    typo.textJoining(all[i]);
  }

},

shouldSkip : function shouldSkip(node)
{

  if (typo.ignoredElemenents.includes(node.tagName) || node.textContent === "" || typo.inLineElements.includes(node.tagName)) {return true;}
  let sibs = typo.getSiblings(node.childNodes[0]);

  for (let i=0, max=sibs.length;   i < max; i++)
  {

    if (sibs[i].nodeType === 3 && sibs[i].nodeValue !== null && sibs[i].textContent.trim() !== "") {return false;}
  }

  return true;

},

getSiblings : function getSiblings(element)
{

  let sibs = [];
  sibs.push(element);
  if (element.nextSibling === null) {return sibs;}
  while (element = element.nextSibling)
  {

      sibs.push(element);

  } 
  return sibs;

},

textJoining : function textJoining(node)
 {

  if (!node.hasChildNodes || node.childNodes[0].nextSibling === null ){typo.setImprovedTypografy(node); return;}

  const elements = typo.getText(node);
  let text = "";

  for (let i = 0; i < elements.length; i++) {

    text = text.concat(elements[i].textContent);
    text = text.concat(typo.usellesChar);

  }

  text = typo.improveTypography(text);
  const textField = text.split(typo.usellesChar, elements.length);

  for (let i = 0; i < textField.length; i++) {

    elements[i].textContent = textField[i];

  }


  return;

 },


getText : function getText(node)
 {

    const sibs = typo.getSiblings(node.childNodes[0]);
    let sibsWithText = [];

    for (let i=0, maxi=sibs.length; i < maxi; i++)
    {

      if (sibs[i].nodeValue !== null && sibs[i].nodeType === 3){sibsWithText.push(sibs[i]);}
      if (sibs[i].hasChildNodes && typo.inLineElements.includes(sibs[i].tagName) && sibs[i].tagName !== "BR" && sibs[i].nodeType === 1)
      { 

        const sibsOfTheChild = typo.getText(sibs[i]);
        for (let x=0, max=sibsOfTheChild.length; x < max; x++)
        {
          sibsWithText.push(sibsOfTheChild[x]);
        }


      }
  
    }

    return sibsWithText;
 
 },


setImprovedTypografy : function setImprovedTypografy(element)
{
	element.textContent = typo.improveTypography(element.textContent);
	return;
},


improveTypography : function improveTypography(string){


  if (typo.options.quote === true){
    for(let rule of typo.Rules.quote)
    {

      string = string.replace(rule[0], rule[1]);

    } 
  }

  if (typo.options.units === true){
    for(let rule of typo.Rules.units)
    {

      string = string.replace(rule[0], rule[1]);

    } 
  }

  if (typo.options.number === true){
    for(let rule of typo.Rules.number)
    {

      string = string.replace(rule[0], rule[1]);

    } 
  }      

  if (typo.options.space === true){
    for(let rule of typo.Rules.space)
    {

      string = string.replace(rule[0], rule[1]);

    } 
  }  

  if (typo.options.date === true){
    for(let rule of typo.Rules.date)
    {

      string = string.replace(rule[0], rule[1]);

    } 
  }

  if (typo.options.elipse === true){
    for(let rule of typo.Rules.elipse)
    {

      string = string.replace(rule[0], rule[1]);

    } 
  }      


  return string;

}

}