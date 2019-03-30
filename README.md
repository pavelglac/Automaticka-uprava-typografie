# Automatická úprava české typografie

Jednoduchá cesta, jak zlepšit typografii na Vašem webu bez námahy. Pokud je jediná cesta, jak zlepšit jazykovou úpravu použití javascriptu v prohlížeči, tak tento script je přímo pro Vás.

## Spuštění
Script je nutné spouště až po sestavení celého DOMu, jelikož je poté procházen. Pokud chcete procházet pouze některé elementy, tak stačí je dát do třídy „typography-autocorrector“. Script poté bude brát pouze elementy v této třídě.

`<script src="autocorrector.js" defer onload="runAutoCorrector()"/>`

Metodu runAutoCorrector lze volat s parametrem, kterým se vypne opravování některých jevů. Názvy jednotlivých procedur je níže:

>   quote: false,
  units: false,
  number: true,
  space: false,
  date: false,
> elipse: true

Spuštění s parametrem může vypadat takto:

`<script src="autocorrector.js" defer onload="runAutoCorrector({space: false,elipse: false})"/>`

## Upozornění
Pro správné fungování scriptu je nutné, aby se na stránce nevyskytoval znak z unicode u035B. Pokud se na stránce tento znak vyskytuje je zapotřebí ho změnit v kódu scriptu za jiný (stačí použít najít a nahradit).
