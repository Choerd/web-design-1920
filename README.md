# Web Design @cmda-minor-web 1920

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
    * Dit was de laatste testronde om mijn tool te testen die bijna af was. Ik had de dummy-data vervangen voor echte data en een datavisualisatie gemaakt met een custom screen reader, ready to test dus! 

<hr>

## Leerdoelen

**Leren hoe je (design) principles in een ontwerp kan toepassen.**  
Voor mijn tool heb ik niet heel veel naar de principles hoeven kijken, het bestaat namelijk uit een introductie en een datavisualisatie. Ik heb hier natuurlijk wel over na moeten denken maar dit heb ik voornamelijk samen met Roger gedaan door middel van de user tests en de sparsessies met Koop. 

**User needs begrijpen en gebruiken in je ontwerp.**  
Samen met Roger heb ik tijdens de user tests zoveel mogelijk informatie verzameld om voor hem een tool te ontwerpen die hij in zijn dagelijks leven kan gebruiken. De tool maakt een technische analyse van elke website die hij maar wilt. Deze wordt weergeven in een datavisualisatie die groot is zodat hij hem zelfs met zijn beperkte zicht nog goed kan zien. Ook heb ik een custom screen reader toegevoegd omdat ik merkte dat hij zijn eigen screen reader niet heel fijn vond.

**Leren hoe je moet testen en de resultaten gebruiken voor het verbeteren van je ontwerp.**  
Tijdens het testen van mijn tool ben achter heel veel dingen gekomen om mijn user tests te verbeteren. Het is vooral belangrijk dat de testpersoon hard op praat en dat er structuur is in een gesprek, vooral wanneer je met een groep gaat testen. Ook is het belangrijk om notities te maken van van de test zodat je de belangrijke dingen weer kan verwerken in het design. Ook is het erg belangrijk om de gebruiker niet te leiden door de app maar hem het te laten ontdekken. Zo kom je veel er veel beter achter of de structuur van je applicatie klopt.

<hr>

## Conclusie
Ik vond dit een heel leerzaam en leuk vak omdat dit weer eens iets anders was dan normaal, ontwerpen voor één persoon. Dit vond ik zelf heel lastig omdat ik het vet vind om een product te maken voor meerdere mensen. Uiteindelijk vind ik dat ik na 1 kennismakingsgesprek en 2 user tests er goed in ben geslaagd om een mooie, handige en vooral persoonlijke tool te maken voor mijn 'mens'. 

Ik heb mijzelf ook ontwikkeld als tester omdat ik eerder altijd mijn gebruiker door mijn app heen leidde en ik dit echt geprobeerd heb minder te doen. Dit is mij niet elke keer gelukt maar ik ben mijzelf er nu wel bewust van. Door de user tests is mijn ontwerp zekerweten een stuk beter geworden dan wanneer ik deze tests niet zou hebben gedaan. Ik zou heel veel dingen over het hoofd hebben gezien zoals extra contrast, groter lettertype en het echt persoonlijk maken.

Ik ben trots op mijn project omdat ik vind dat ik in 3 weken een handige tool voor Roger heb gemaakt die ik zelf ook fijn zou vinden om te gebruiken, het is een hele toegankelijke manier om een website te controleren op toengankelijkheid. Ik heb ook veel nieuwe dingen geleerd tijdens het maken van deze tool die ik niet had verwacht te leren.