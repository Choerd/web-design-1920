# Web Design @cmda-minor-web 1920

Introductie van het vak..

<hr>

## Inhoudsopgave

* [Roger Ravelli](#Roger-Ravelli)
    * [Introductie](#Introductie)
    * [User Scenario](#User-Scenario)
* [Mijn Exclusive Design](#Mijn-Exclusive-Design)
* [User Testing](#User-Testing)
* [Leerdoelen](#Leerdoelen)
* [Conclusie](#Conclusie)

<hr>

## Roger Ravelli

### Introductie 
`Roger Ravelli` heeft, naast dat hij adviseur duurzame energie bij de Rijksoverheid was, zijn passie voor beeldhouwen opgepakt. Door zijn teruglopende zichtvermogen wordt hij gedwongen om afscheid te nemen van een aantal van zijn passies, dit houdt hem echter niet tegen om op zoek te gaan naar nieuwe mogelijkheden. 

Om om te gaan met zijn zichtelijke beperking gebruikt hij verschillende tools op zijn apparaten. Voor het lezen van teksten gebruikt hij voornamelijk een screenreader omdat grote stukken tekst niet prettig zijn om te lezen. Ook heeft hij verschillende sneltoetsen ingesteld om makeklijker te kunnen navigeren. Op zijn iPhone en iPad doet hij dit voornamelijk door middel van spraak. Toen hij achter het concept 'Dark-Mode' kwam was dat heel positief aangezien hij hierdoor een beter contrast had tijdens bijvoorbeeld het (mee)lezen van zijn emails.

### User Scenario
**Introductie**  
Dit `user scenario` is onderverdeeld in 2 onderdelen: 
* Welk probleem gaat mijn product oplossen
* Hoe, wanneer en op welk moment gaat Roger het product gebruiken

**Het scenario**  
Roger is een man die zich tegenwoordig heel erg richt op de toegankelijkheid en beschibaarheid van digitale producten, voornamelijk websites. Aangezien heel veel websites niet aan de standaarden van toegankelijkheid voldoen en deze dus heel moeilijk te gebruiken zijn voor mensen zoals Roger ga ik een tool voor hem maken waarbij hij op technisch vlak inzicht kan krijgen in elke website die hij wilt.

Het `probleem` is echter dat Roger ervan houdt om data tot zich te nemen maar hij dit eigelijk heel moeilijk kan. Een tabel lezen gaat nog wel maar belangrijke inzichten eruit halen kost hem nog best wat moeite. Mijn oplossing hiervoor is om een een datavisualisatie te maken met een custom screenreader. Dit voorkomt dat hij alles zelf moet lezen en geen gebruik hoeft te maken van zijn eigen screenreader die oneindig door blijft praten.

De `context` wanneer Roger dit product gebruikt is ook heel belangrijk omdat een datavisualisatie heel vaak goed te zien is op een desktop maar op een mobiel wordt het vaak al wat lastiger. De tool is nogsteeds het fijnst om te gebruiken op zijn desktop omdat het allemaal wat groter is maar is ook zeker te gebruiken op zijn telefoon omdat hij, wanneer hij naar klanten toegaat, hij misschien niet altijd bij zijn laptop kan en toch de tool wil kunnen gebruiken.

<hr>

## Mijn Exclusive Design

De `Exclusive Design Principles`:
* **Study Situation**
    * Bestudeer de persoon en probeer erachter te komen hoe zij hun apparaten gebruiken en wat voor tools hem/haar helpt om deze zo makkelijk mogelijk te gebruiken.
* **Ignore Conventions**
    * Normaal gesproken probeer je elementen te gebruiken zodat ze herkenbaar zijn voor mensen en herkennen wat je ermee kunt, bijvoorbeeld een menubalk altijd bovenaan. Dit kan misschien totaal anders zijn voor een persoon met een beperking, kijk of je hier een betere oplossing voor kunt verzinnen en test dit natuurlijk.
* **Prioritise Identity**
    * Probeer samen met de persoon te ontwerpen, hierdoor kom je tot inzichten waar je zelf waarschijnlijk nooit op komt. Door jouw kennis te combineren met de persoon zijn inzichten krijg je een mooi gebalanceerd product.
* **Add Nonsense**
    * Wanneer de functionaliteit af is kun je het product ook leuk maken om te gebruiken. Het is natuurlijk altijd leuker wanneer je een product gebruikt dat het een fijne en leuke ervaring is.

<br>

**1. Study Situation**  
Roger is niet volledig blind maar slechtziend dat betekende voor mij dat ik zowel een goed design als goede interactie moest leveren binnen mijn product. 

Na de eerste testronde merkte ik eigelijk al meteen dat Roger geen mega fan is van de screenreaders. Daarom heb ik mijn eigen screenreader gemaakt die beter te controleren is. 

Voor het design heb ik voor kleuren gekozen met een hoog contrast en waarvan Roger heeft gezegt dat ze fijn zijn en hij dit goed kan zien/onderscheiden.

**2. Ignore Conventions**  
Voor mijn gevoel heb ik niet echt 'conventions' gebruikt en ze ook niet echt genegeerd. Mijn tool is vrij simpel, een invulveld die opgevolgt wordt door een datavisualisatie. 

De datavisualisatie was echter wel een uitdaging, deze zijn namelijk normaal gezien totaal niet geschikt voor mensen met een zichtelijke beperking omdat deze niet toegankelijk genoeg zijn. Hier is mijn focus juist wel heel erg naar toe gegaan omdat ik wilde dat Roger een datavisualisatie kon zien/horen.

**3. Prioritise Identity** 
De tool is best wel simpel en bevat niet heel veel identiteit. Tijdens de user tests heb ik wel geprobeerd om erachter te komen welke kleuren fijn zijn voor Roger zodat hij goed de datavisualisatie af kan lezen.

**4. Add Nonsense**  
In de tool moet je een website in de balk invullen. Hierna gaat hij een Lighthouse Audit doen op deze url, dit duurt best wel lang, ongeveer 5-10 seconden. In de tussentijd is er een laadbalk te zien maar vond ik het leuk om hier juist 'nonsense' toe te voegen. 

Ik heb hier een liftmuziekje toegevoegd om het wachten wat leuker te maken, niemand houdt immers van wachten. 

<hr>

## User Testing

Tijdens het bouwen van deze tool heb ik meerdere tests met Roger gedaan. Deze kun je hieronder vinden met een link naar de volledige documentatie.

* [User Testing - Ronde 1 - Woensdag 9 april (link)](https://github.com/Choerd/web-design-1920/wiki/User-Testing-%7C-Ronde-1-%7C-Woensdag-9-april)
    * Deze testronde was meer een introductie en om te kijken wat voor tools Roger zelf al gebruikt. Hierdoor kreeg ik een goed beeld van zijn context en kon ik een goed concept uitwerken voor de volgende testronde.

* [User Testing - Ronde 2 - Woensdag 15 april (link)](https://github.com/Choerd/web-design-1920/wiki/User-Testing-%7C-Ronde-2-%7C-Woensdag-15-april)
    * Dit was de eerste test dat ik daadwerkelijk iets ging testen wat ik had gemaakt, dit vond ik eigelijk best wel spanennd. Ik had besloten om een tabel te maken omdat datavisualisaties heel lastig zijn om interactief te maken. Hij vond vooral de custom screenreader heel fijn maar wilde toch liever een datavisualisatie. Hele interessante inzichten gekregen uit deze test om door te programmeren voor de volgende test.

* [User Testing - Ronde 3 - Woensdag 22 april (link)](https://github.com/Choerd/web-design-1920/wiki/User-Testing-%7C-Ronde-3-%7C-Woensdag-22-april)
    * ..

<hr>

## Leerdoelen

<hr>

## Conclusie