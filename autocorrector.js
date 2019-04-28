const typo = {

inLineElements : ["B", "BIG", "I", "SMALL", "TT", "ABBR", "ACRONYM", "CITE", "DFN", "EM", "KDB", "STRONG", "SAMP", "VAR", "A", "BDO", "MAP", "OBJECT", "Q", "SPAN", "SUB", "SUP", "BUTTON", "INPUT", "LABEL", "SELECT", "TEXTAREA"],
ignoredElemenents : ["SCRIPT", "NOSCRIPT", "STYLE", "TITLE", "IFRAME", "HEAD", "META", "HTML", "BR", "IMG", ""],
uselessChar : "\uE000",
uselessCharsCollection : ["\u001A", "\uE001", "\uE990"],

options : {
  
  quote: true,
  units: true,
  number: true,
  space: true,
  date: true,
  ellipsis: true

},

Rules : {

    // rules for czech quotes

    quote: [

      [/(“|")(\w)/g, "„$2"],

      [/(“|")\uE000(\w)/g, "„\uE000$2"],

      [/(”|")( |,|\n*|$)/g, "“$2"],

      [/(”|")\uE000( |,|\n*|$)/g, "“\uE000$2"],

      [/(!|\?|\.)(”|")/g, "$1“"],

      [/(!|\?|\.)\uE000(”|")/g, "$1\uE000“"],

      [/(\w)(')(\w)/g, "$1’$3"]

    ],


    // rules for units

    // there must be a space between numbers and the unit

    units: [

      [/(\d+)(| )(|m)s/g, "$1"+"\u00a0"+"$3s"],

      [/(\d+)(| )\uE000(| )(|m)s/g, "$1"+"\u00a0\uE000"+"$4s"],

      [/(\d+)(| )(min|h|d)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(min|h|d)/g, "$1"+"\u00a0\uE000"+"$4"],

      [/(\d+)(| )(|n|m|c|d|k)m/g, "$1"+"\u00a0"+"$3m"],

      [/(\d+)(| )\uE000(| )(|n|m|c|d|k)m/g, "$1"+"\u00a0\uE000"+"$3m"],

      [/(\d+)(| )(|m|h|d|c|b)l/g, "$1"+"\u00a0"+"$3l"],

      [/(\d+)(| )\uE000(| )(|m|h|d|c|b)l/g, "$1"+"\u00a0\uE000"+"$3l"],

      [/(\d+)(| )(ccm|gal)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(ccm|gal)/g, "$1"+"\u00a0\uE000"+"$3"],

      [/(\d+)(| )(|m|c|d|k)m(\d)/g, "$1"+"\u00a0"+"$3m$4"],

      [/(\d+)(| )\uE000(| )(|m|c|d|k)m(\d)/g, "$1"+"\u00a0\uE000"+"$3m$4"],

      [/(\d+)(| )(ccm|gal)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(ccm|gal)/g, "$1"+"\u00a0\uE000"+"$4"],

      [/(\d+)(| )(ha|a)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(ha|a)/g, "$1"+"\u00a0\uE000"+"$4"],

      [/(\d+)(| )(|k|M)J/g, "$1"+"\u00a0"+"$3J"],

      [/(\d+)(| )\uE000(| )(|k|M)J/g, "$1"+"\u00a0\uE000"+"$4J"],

      [/(\d+)(| )(|k)cal/g, "$1"+"\u00a0"+"$3cal"],

      [/(\d+)(| )\uE000(| )(|k)cal/g, "$1"+"\u00a0"+"$4cal"],

      [/(\d+)(| )(|kWh|M)Wh/g, "$1"+"\u00a0"+"$3Wh"],

      [/(\d+)(| )\uE000(| )(|kWh|M)Wh/g, "$1"+"\u00a0\uE000"+"$4Wh"],

      [/(\d+)(| )(|k)m\/(s|min|h)/g, "$1"+"\u00a0"+"$3m/$4"],

      [/(\d+)(| )\uE000(| )(|k)m\/(s|min|h)/g, "$1"+"\u00a0\uE000"+"$4m/$5"],

      [/(\d+)(| )(K|°C|°F)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(K|°C|°F)/g, "$1"+"\u00a0\uE000"+"$4"],

      [/(\d+)(| )(|h|k|M)Pa/g, "$1"+"\u00a0"+"$3Pa"],

      [/(\d+)(| )\uE000(| )(|h|k|M)Pa/g, "$1"+"\u00a0\uE000"+"$4Pa"],

      [/(\d+)(| )(bar|atm)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(bar|atm)/g, "$1"+"\u00a0\uE000"+"$4"],

      [/(\d+)(| )(|k)W/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(|k)W/g, "$1"+"\u00a0\uE000"+"$4"],

      [/(\d+)(| )(%)/g, "$1"+"\u00a0"+"$3"],

      [/(\d+)(| )\uE000(| )(%)/g, "$1"+"\u00a0\uE000"+"$3"],

    ],

    // rule for number formatting

    number: [

      [/(\d)( |\u00a0)(\d)/g, "$1$3"],

      [/(\d)\uE000( |\u00a0)(\d)/g, "$1\uE000$3"],

      [/(\d)( |\u00a0)\uE000(\d)/g, "$1\uE000$3"],

      //all position how number can be decomposed into different elements
      [/(\d|\uE000)(?=(\d{3}|\d{3}\uE000|\d\uE000\d{2}|\d{2}\uE000\d|\uE000\d{3}|\d\uE000\d\uE000\d|\uE000\d\uE000r\d\uE000\d|\d\uE000\d\uE000\d\uE000)+(?!(\d|\uE000\d|\d\uE000)))/g, "$1"+"\u202F"]


    ],

    // rules for hard spaces

    space: [

      [/  /g, " "],

      [/ (a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V) /g, " $1\u00a0"],

      [/ (a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V)\uE000 /g, " $1\u00a0\uE000"],

      [/ \uE000(a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V)\uE000 /g, " \uE000$1\u00a0\uE000"],

      [/ \uE000(a|i|o|u|s|z|k|v|A|I|O|U|S|Z|K|V) /g, " \uE000$1\u00a0"],

      [/([§|#])( )(\d)/g, "$1"+"\u00a0"+"$3"],

      [/([§|#])(| )\uE000(| )(\d)/g, "$1"+"\u00a0\uE000"+"$4"],

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

    ellipsis: [

      [/\.{3}/g, "…"],
      [/\.{2}\uE000\./g, "…\uE000"],
      [/\.\uE000\.\./g, "\uE000…"],
      [/\.\uE000\.\uE000\./g, "\uE000…\uE000"]

    ],


},

/**
 * init function of whole script
 * 
 * @param  {object} settings [set parameters of the object options]
 * @param  {HTML collection} node [collection for iteration]
 * @return 
 */
runAutoCorrector : function runAutoCorrector(settings, node)
{

if (typo.checkUselessChar()) {console.log("neco");typo.setUselessChar();}

  options = Object.assign(typo.options, settings);
  const elementsWithClass = document.getElementsByClassName("typography-autocorrector");

  if (node !== undefined)
  {

    typo.elementsDescendants(node);
    return;

  }
  if (elementsWithClass.length > 0)
  {

    typo.elementsDescendants(elementsWithClass);
    return;

  }

  /**
   *   If there is none node in the parameter
   *                   or
   *   no class with the name typography-autocorrector
   */
  const all = document.getElementsByTagName("*");
  typo.elementIteration(all);


},

elementsDescendants : function elementsDescendants(nodes)
{
    
    /**
     * get all nodes of node with class typography-autocorrector
     * 
     * @type {Number} max [number of elements with class]
     */
    for (let node of nodes)
    {

      const descendants = node.getElementsByTagName("*");
      typo.elementIteration(node);
      if (descendants > 0) {typo.elementIteration(descendants);}

    }


},

setUselessChar : function setUselessChar()
{

    if (typo.uselessCharsCollection.length > 0)
    {

      for (let rule in typo.Rules)
      {
        rule.replace(typo.uselessChar, typo.uselessCharsCollection[0])
      }
      typo.uselessChar = typo.uselessCharsCollection[0];
      typo.uselessCharsCollection.shift();
      return;

    }else{
      console.log("Prosím změňte proměnou uselessChar ve scriptu na znak, který se nevyskystuje na stránce.")}


},

checkUselessChar : function checkUselessChar()
{

  const str = document.getElementsByTagName("BODY")[0].textContent;
  const patt = new RegExp(typo.uselessChar);
  const result = patt.test(str);
  return result;


},

elementIteration : function elementIteration(all)
{
  if (all.length > 0)
  {
    for (let element of all)
    {
      if (typo.shouldSkip(element)){continue;}
      typo.textJoining(element);
    }
  }else{
    if (typo.shouldSkip(all)){return;}
    typo.textJoining(all);
  }

},

shouldSkip : function shouldSkip(node)
{

  if (typo.ignoredElemenents.includes(node.tagName) || node.textContent === "" || typo.inLineElements.includes(node.tagName)) {return true;}

  return false;

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

  const nodes = typo.getText(node);
  let text = "";
  for (let node of nodes) {

    text = text.concat(node.textContent);
    text = text.concat(typo.uselessChar);

  }

  text = typo.improveTypography(text);
  const textField = text.split(typo.uselessChar, nodes.length);
  for (let i = 0; i < textField.length; i++)
  {

    nodes[i].textContent = textField[i];

  }

  return;

 },


getText : function getText(node)
 {

    let sibsWithText = [];
    if (node.textContent === "") {return sibsWithText}
    const sibs = typo.getSiblings(node.childNodes[0]);
    for (let sib of sibs)
    {

      if (sib.nodeValue !== null && sib.nodeType === 3){sibsWithText.push(sib);}
      if (sib.hasChildNodes && sib.textContent !== "" && typo.inLineElements.includes(sib.tagName) && sib.nodeType === 1)
      { 

        /*
          iteration of the DOM in depth
         */
        const sibsOfChild = typo.getText(sib);
        for (let sibWithText of sibsOfChild)
        {
          sibsWithText.push(sibWithText);
        }


      }
  
    }

    return sibsWithText;
 
 },

improveTypography : function improveTypography(string)
{

  if (typo.options.quote)
  {
      for(let rule of typo.Rules.quote)
      {
        string = string.replace(rule[0], rule[1]);
      } 
  }

  if (typo.options.units)
  {
    for(let rule of typo.Rules.units)
    {
      string = string.replace(rule[0], rule[1]);
    } 
  }

  if (typo.options.number)
  {
    for(let rule of typo.Rules.number)
    {
      string = string.replace(rule[0], rule[1]);
    } 
  } 

  if (typo.options.space)
  {
    for(let rule of typo.Rules.space)
    {
      string = string.replace(rule[0], rule[1]);
    } 
  }

  if (typo.options.date)
  {
    for(let rule of typo.Rules.date)
    {
      string = string.replace(rule[0], rule[1]);
    } 
  }

  if (typo.options.ellipsis)
  {
    for(let rule of typo.Rules.ellipsis)
    {
      string = string.replace(rule[0], rule[1]);
    } 
  } 
  
  return string;

}

}
