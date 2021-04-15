# Automatická úprava české typografie

Jednoduchá cesta, jak zlepšit typografii na Vašem webu bez námahy. Pokud je jediná cesta, jak zlepšit jazykovou úpravu použití javascriptu na frontendu, tak tento script je přímo pro Vás.

## [Web na vyzkoušení](https://www.pavelglac.com/typo/)

## Spuštění
Script vložte na konec stránky před ukončovací tag body a zavolejte metodu `runAutoCorrector()` z objektu **typo** nebo vložte do hlavičky s atributem defer (viz. níže). Pokud chcete procházet pouze některé elementy, tak stačí je dát do třídy „typography-autocorrector“. Script poté bude brát pouze elementy v této třídě.

`<script src="autocorrector.js" defer onload="typo.runAutoCorrector()"></script>`

Metodu runAutoCorrector lze volat s parametrem, kterým se vypne opravování některých jevů. Zápis je vždy jméno parametru, dvojtečka a hodnota false. Pokud chceme vypnout další procedury, zapíšeme čárku a postup opakujeme. Názvy jednotlivých procedur jsou níže:

| Jméno parametru|Popis|
| ------------- |-------------|
| quote|české uvozovky a apostrof|
| units|pevná mezera mezi číslem a jednotkou|
| number|rozdělení čísla po třech desetinných míst|
| space|pevná mezera za jednoslabičné předložky a spojky|
| date|den a měsíc jsou spojeny nedělitelnou mezerou|
| ellipsis|místo tří teček je použita výpustka|
| year|čísla v rozmezí 1000 až 2100 nebudou rozděleny po tisících|

Spuštění s parametrem může vypadat takto:

`<script src="autocorrector.js" defer onload="runAutoCorrector({space: false,elipse: false})"></script>`

Pokud chcete provést procházení od určitých uzlů, tak tyto uzly můžete předat v druhém parametru funkce.

`<script src="autocorrector.js" defer
onload="runAutoCorrector({space: false,elipse: false}, document.getElementsByClassName("example");)"></script>`

Podrobný manuál ke knihovně je popsaný v bakalářské práci „Automatické vylepšení webové typografie“ vedené na Vysoká škola ekonomická v Praze

## Definice textového řetězce
Pro definování textového bloku byla vymyšlena definice, kdy se za text považuje veškerý text v blokovém elementu a jeho inline elementech. Tedy pokud v jednom blokovém elementu je text a zároveň další blokový element, tak obsah zanořeného blokového elementu není spojován s aktuálně procházeným uzlem. Naopak texty v inline elementech jsou spojovány s procházeným uzlem, a to jakékoliv hloubky zanoření. Příklad níže uvedený je opraven podle českých pravidel.

`<li>9<span><span/><span></span><span>000<span></li>`

## Upozornění
Pro správné fungování scriptu je nutné, aby se na stránce nevyskytoval znak z unicode uE000 nebo alespoň jeden z pole definovaném v konstantně uselessCharsCollection. Pokud se na stránce všechny ze čtyř znaků je zapotřebí změnit proměnou uselessChar na znak, který se na stránce nevyskytuje.
