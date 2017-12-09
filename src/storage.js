const storage = {
  sections: [
    {
			id: "Intro",
			icon: "playArrow"
		},
    {
			id: "Utbildning",
			subSections: [
				{id: "Avslutade"},
				{id: "Pågående"},
			]
		},
    {
			id: "Färdigheter",
			subSections: [
				{id: "Maskininlärning"},
				{id: "Webbteknologier"},
				{id: "IoT"},
				{id: "3D-printing och design"},
				{id: "Övrigt"},
			]
		},
		{id: "Projekt"},
    {id: "Arbetslivserfarenhet"},
    {id: "Språk"},
  ],

  cards: [
    {
      section: "Intro",
      content: [
        {title: "Stefan Generalao"},
        {divider: "full"},
        {subtitle: "Om mig"},
				{paragraph: "Jag studerar just nu på Informationsarkitektprogrammet i Malmö. Jag är ambitiös, har en hög arbetsmoral och anser mig ha tillräckligt med tid över för en deltidsanställning. Studierna just nu ger mig en stor inblick i den senaste forskningen och nätverket som studierna erbjuder är ovärderligt."},

				{paragraph: "Innan jag påbörjade studierna i Malmö hade jag avslutat flera högskolekurser inom inbyggda system samt genomfört omkring 500 timmar hårdvaruprogrammering i Arduino. Jag har även varit aktiv i Halmstad Högskolas entreprenörskapsinkubator där jag var involverad i två större IT-projekt."},

				{paragraph: "Jag drivs av min nyfikenhet, vilket gör mig snabblärd och involverad och trots att min förra chef beskrev mig som ansvarsfull i soloprojekt är det i team jag föredrar att arbeta."},

				{paragraph: "Maskininlärning är ett stort intresse. På min fritid håller jag mig uppdaterad med de senaste studierna inom olika fält kring maskininlärning och då speciellt Deep Learning. Parallellt med detta läser jag också en distanskurs på Udemy i samma ämne. Webbteknologier som React, vilket den här sidan är skriven i, är också något som jag tycker är spännande. Jag brinner för nya system!"},

				{paragraph: "Navigationen finner ni till vänster. Välkommen hit!"},
				{paragraph: "Stefan Generalao"}
      ]
    },

    {
      section: "Intro",
      content: [
        {title: "Om denna webbapplikationen"},
        {divider: "full"},
				{paragraph: "Applikationen på domänen www.stefangeneralao.fyi är skriven av mig. Som verktyg valde jag ReactJS för frontend och servern är på en Raspberry PI med Debian."},
				{paragraph: "Gå gärna in och kolla på min Github. Upptäcker ni buggar, andra problem eller har synpunkter? Skicka gärna in en issue eller pull-request!"},
        {link: "https://github.com/stefangeneralao/stefan-generalao-cv"}
      ]
    },

    {
      section: "Avslutade",
      content: [
        {title: "Sammanfattning"},
				{divider: "full"},
				{paragraph: "Kurser på totalt 50,5 högskolepoäng som omfattar stora delar inom inbyggda system."}
      ]
    },

		{
			section: "Avslutade",
			content: [
				{title: "Programmering med Java, del II"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Malmö högskola"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"},
				{subtitle: "Godkänt datum"},
				{paragraph: "160611"}
			]
		},

		{
			section: "Avslutade",
			content: [
				{title: "Algoritmer och datastrukturer"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Högskolan i Halmstad"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"},
				{subtitle: "Godkänt datum"},
				{paragraph: "151008"}
			]
		},

		{
			section: "Avslutade",
			content: [
				{title: "Datorteknik"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Högskolan i Halmstad"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"},
				{subtitle: "Godkänt datum"},
				{paragraph: "150616"}
			]
		},

		{
			section: "Avslutade",
			content: [
				{title: "Digitalteknik"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Högskolan i Halmstad"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"},
				{subtitle: "Godkänt datum"},
				{paragraph: "150422"}
			]
		},

		{
			section: "Avslutade",
			content: [
				{title: "Perspektiv på elektroteknik"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Högskolan i Halmstad"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"},
				{subtitle: "Godkänt datum"},
				{paragraph: "150130"}
			]
		},

		{
			section: "Avslutade",
			content: [
				{title: "Envariabelanalys"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Högskolan i Halmstad"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "6.0"},
				{subtitle: "Godkänt datum"},
				{paragraph: "150117"}
			]
		},

    {
      section: "Avslutade",
			content: [
				{title: "Programmering med Java"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Högskolan i Halmstad"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"},
				{subtitle: "Godkänt datum"},
				{paragraph: "141119"}
			]
    },

    {
      section: "Pågående",
      content: [
        {title: "Sammanfattning"},
				{divider: "full"},
				{paragraph: "Student på Informationsarkitektprogrammet, Malmö Högskola. Förväntad examen våren 2020."}
      ]
    },

		{
			section: "Pågående",
			content: [
				{title: "Introduktion till webbutveckling"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Malmö högskola"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"}
			]
		},

		{
			section: "Pågående",
			content: [
				{title: "Introduktion till datavetenskap"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Malmö högskola"},
				{subtitle: "Högskolepoäng"},
				{paragraph: "7.5"}
			]
		},

		{
			section: "Pågående",
			content: [
				{title: "Deep Learning A-Z™: Hands-On Artificial Neural Networks"},
        {divider: "full"},
				{subtitle: "Lärosäte"},
				{paragraph: "Udemy"}
			]
		},

		{
			section: "Maskininlärning",
			content: [
				{title: "Sammanfattning"},
        {divider: "full"},
				{paragraph: "Deep learning förutspås att stå för den fjärde industriella revolutionen och har redan bidragit till stora delar av samhället. Mina favoritarkitekturer att implementera är ANN, CNN och RNN. Jag har även kunskap om avancerade arkitekturer som Boltzmann Machine, Autoencoders och Self Organizing Maps."},
			]
		},

		{
			section: "Maskininlärning",
			content: [
				{title: "Keras"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 40},
				{subtitle: "Detaljer"},
				{paragraph: "Jag kan skapa Deep Neural Networks. Med fiktiva kunddatabaser har jag bland annat kunnat förutspå önskade egenskaper, till exempel sannolikheten att en bestämd kund kommer att säga upp sitt avtal inom ett halvår."},
				{paragraph: "Med Convolutional Neural Network har jag konstruerat ett klassificeringssystem som ser skillnad på hundar och katter. Arkitekturen kan appliceras och användas inom många användningsområden, bland annat inom cancerklassificering."}
			]
		},

		{
			section: "Maskininlärning",
			content: [
				{title: "TensorFlow"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 20},
				{subtitle: "Detaljer"},
				{paragraph: "TensorFlow är back-end till Keras. För att använda Keras bör viss baskunskap i TensorFlow innehas."}
			]
		},

		{
			section: "Maskininlärning",
			content: [
				{title: "Synapse.js"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 10},
				{subtitle: "Detaljer"},
				{paragraph: "JavaScript-bibliotek för att bygga, träna och aktivera neurala nätverk. I Synapse testade jag att lösa det så kallade XOR-problemet som ofta anses vara det neurala nätverkets motsvarighet till Hello World."}
			]
		},

		{
			section: "Webbteknologier",
			content: [
				{title: "HTML, CSS, Vanilla JavaScript"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 70},
				{subtitle: "Detaljer"},
				{paragraph: "Grundläggande kunskaper för att bygga snygga hemsidor. Hanterar CSS-grids med nöje, responsivitet likaså."}
			]
		},

		{
			section: "Webbteknologier",
			content: [
				{title: "React.js"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 70},
				{subtitle: "Detaljer"},
				{paragraph: "Mitt intresse i React gör att mina kunskaper växer snabbt! Idag är jag bekväm i React-komponentens livscykel, state och props. Har även anslutit React-applikationer med Firebase."}
			]
		},

		{
			section: "Webbteknologier",
			content: [
				{title: "P5.js"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 60},
				{subtitle: "Detaljer"},
				{paragraph: "P5 är ett JavaScript-bibliotek för att snabbt rendera 2D-grafik. I en genetisk algoritm som jag utvecklade valde jag P5 för att visualisera projektet, se \"genetic-path-finder\" under Github-projekt."}
			]
		},

		{
			section: "Webbteknologier",
			content: [
				{title: "Redux"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 30},
				{subtitle: "Detaljer"},
				{paragraph: "Har testat att implementera Redux i React-applikationer. Redux är ett intressant koncept som jag ser stor nytta i vid större projekt."}
			]
		},

		{
			section: "Webbteknologier",
			content: [
				{title: "Firebase"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 20},
				{subtitle: "Detaljer"},
				{paragraph: "I en personlig todo-applikation som jag utvecklade valde jag Firebase som databas."}
			]
		},

		{
			section: "Webbteknologier",
			content: [
				{title: "Node"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 10},
				{subtitle: "Detaljer"},
				{paragraph: "Använder npm för pakethantering i många av mina projekt. Har även gjort motsvarande Hello World i att starta en server."}
			]
		},

		{
			section: "IoT",
			content: [
				{title: "Arduino - Mjukvara och hårdvara"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 100},
				{subtitle: "Detaljer"},
				{paragraph: "I ett av mina Arduinoprojekt designade jag mitt egna smarta hem. Via en app i mobilen styr jag strömmen till mina lampor, min TV och förstärkare."}
			]
		},

		{
			section: "IoT",
			content: [
				{title: "Hårdvaruhacking, felsökning, buggtestning"},
				{divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 80},
				{subtitle: "Detaljer"},
				{paragraph: "Min nyfikenhet är för stark för att låta chassit vara stängt."},
				{paragraph: "I ett projekt (se WhatRemote under sektionen Projekt) byggde jag mitt egna smarta hem. Bland annat hackades Apple Remote för att styra Luxorparts fjärrströmbrytare. Jag lyckades även översätta Bluetoothsignaler till IR för att styra min TV med mobilen. Projektet krävde grundlig kunskap i elektronik samt tillräcklig kunskap för att tillverka prototyper."},
			]
		},

		{
			section: "IoT",
			content: [
				{title: "Raspberry PI"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 70},
				{subtitle: "Detaljer"},
				{paragraph: "Headless Installation och navigering via SSH med Linuxbaserade operativsystem är inga problem. Kan manipulera I/O-portarna, konfigurera servrar, styra 3D-skrivare och massa annat."}
			]
		},

		{
			section: "IoT",
			content: [
				{title: "Elektroteknik"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 60},
				{subtitle: "Detaljer"},
				{paragraph: "Bra grundläggande kunskap om flertalet passiva och aktiva komponenter. Klarar även av att löda SMD-komponenter för hand."}
			]
		},

		{
			section: "IoT",
			content: [
				{title: "C/C++ (Inbyggda system)"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 30},
				{subtitle: "Detaljer"},
				{paragraph: "I kursen Datorteknik (7.5 hp) studerade vi processorn ARM Cortex-M3. Att tolka tillhörande datablad på cirka 1500 sidor var också ett krav för att klara av kursen."}
			]
		},

		{
			section: "3D-printing och design",
			content: [
				{title: "3D-printing"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 100},
				{subtitle: "Detaljer"},
				{paragraph: "Jag har mycket bra kunskap om möjligheter, begränsningar och tekniker med 3D-printing. Jag kan också felsöka och åtgärda problem med hårdvara."}
			]
		},

		{
			section: "3D-printing och design",
			content: [
				{title: "Simplify3D"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 90},
				{subtitle: "Detaljer"},
				{paragraph: "Avancerat styrprogram för 3D-skrivare med oändligt många inställningar för att optimera resultatet."}
			]
		},

		{
			section: "3D-printing och design",
			content: [
				{title: "CAD"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 50},
				{subtitle: "Detaljer"},
				{paragraph: "Jag har ett bra sinne för teknisk design, hållfasthet och 3D-modellering. Erfarenhet i OnShape, Solidworks och AutoCAD Inventor."}
			]
		},

		{
			section: "Övrigt",
			content: [
				{title: "Adobe Photoshop"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 70},
				{subtitle: "Detaljer"},
				{paragraph: "Fotografering med tillhörande efterbehandling i Photoshop är ett intresse som ligger nära hjärtat."}
			]
		},

		{
			section: "Övrigt",
			content: [
				{title: "UNIX-system, BASH etc."},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 60},
				{subtitle: "Detaljer"},
				{paragraph: "Denna applikationen (www.stefangeneralao.fyi) körs på en maskin med Debian. Jag navigerar bekvämt i terminalen och har bra översikt över UNIX."}
			]
		},

		{
			section: "Övrigt",
			content: [
				{title: "Java"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 50},
				{subtitle: "Detaljer"},
				{paragraph: "Jag har totalt 22.5 högskolepoäng i kurser med javaprogrammering. I kurserna byggde jag algoritmer, datastrukturer och GUI."}
			]
		},

		{
			section: "Övrigt",
			content: [
				{title: "Python"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 30},
				{subtitle: "Detaljer"},
				{paragraph: "Läser för tillfället en högskolekurs i Python."}
			]
		},

		{
			section: "Arbetslivserfarenhet",
			content: [
				{title: "Sammanfattning"},
        {divider: "full"},
				{paragraph: "Åtskilliga timmar i servicebranchen varav mitt första jobb i mina föräldrars restaurang när jag var 11 år. Det gav mig ett utmärkt helhetsperspektiv av livet som entreprenör och värdet av bra lagarbete. Vikten av förstklassig service i alla branscher är jag väl medveten om sedan lång tid tillbaka."}
			]
		},

		{
			section: "Arbetslivserfarenhet",
			content: [
				{title: "XTZ AB"},
        {divider: "full"},
				{subtitle: "Position"},
				{paragraph: "Tekniker"},
				{subtitle: "Plats"},
				{paragraph: "Halmstad"},
				{subtitle: "Period"},
				{paragraph: "2015 till 2016"}
			]
		},

		{
			section: "Arbetslivserfarenhet",
			content: [
				{title: "Cherry Casino AB"},
        {divider: "full"},
				{subtitle: "Position"},
				{paragraph: "Croupier"},
				{subtitle: "Plats"},
				{paragraph: "Malmö, Lund, Trelleborg"},
				{subtitle: "Period"},
				{paragraph: "2013 till 2014"}
			]
		},

		{
			section: "Arbetslivserfarenhet",
			content: [
				{title: "Espresso House AB"},
        {divider: "full"},
				{subtitle: "Position"},
				{paragraph: "Barista"},
				{subtitle: "Plats"},
				{paragraph: "Malmö, Ystad, Trelleborg"},
				{subtitle: "Period"},
				{paragraph: "2012 till 2014"}
			]
		},

		{
			section: "Arbetslivserfarenhet",
			content: [
				{title: "Mossbystrands kiosk"},
        {divider: "full"},
				{subtitle: "Position"},
				{paragraph: "Kassabiträde"},
				{subtitle: "Plats"},
				{paragraph: "Mossby"},
				{subtitle: "Period"},
				{paragraph: "2005 till 2014"}
			]
		},

		{
			section: "Arbetslivserfarenhet",
			content: [
				{title: "Dresser Wayne AB"},
        {divider: "full"},
				{subtitle: "Position"},
				{paragraph: "Praktikant"},
				{subtitle: "Plats"},
				{paragraph: "Malmö"},
				{subtitle: "Period"},
				{paragraph: "2011"}
			]
		},

		{
			section: "Projekt",
			content: [
				{title: "WhatRemote"},
				{divider: "full"},
				{subtitle: "Detaljer om projektet"},
				{paragraph: "Mitt egna smarta hem kallar jag WhatRemote. Med systemet styr jag TV, förstärkare och vägguttag med en applikation i Android. Alla fjärrkontroller i vardagsrummet har blivit ersatta av WhatRemote."},
				{paragraph: "Microprocessorn är Atmel ATMega328 och koden är skriven av mig i C++."},
				{paragraph: "Demovisning erbjuds för alla gäster. Välkommen!"}
			]
		},

		{
			section: "Projekt",
			content: [
				{title: "Stefan Generalao-CV"},
				{divider: "full"},
				{subtitle: "Detaljer om projektet"},
				{paragraph: "Källkoden för webbapplikationen du just nu använder hittar du i denna Github-repository. Förutom att jag ville ha en portfolio så fokuserade jag mycket på feedback från människor i detta projektet. Jag lärde mig lyssna, ställa relevanta frågor och tolka användares reaktioner. Projektet har varit en tydligt iterativ process som fortfarande är aktiv."},
				{subtitle: "Länk"},
				{link: "https://github.com/stefangeneralao/stefan-generalao-cv"}
			]
		},

		{
			section: "Projekt",
			content: [
				{title: "Genetic Path Finder"},
				{divider: "full"},
				{subtitle: "Detaljer om projektet"},
				{paragraph: "Genetisk algoritm för att hitta den snabbaste vägen från punkt A till punkt B. Algoritmen måste ta hänsyn till accelaration samt att alla hinder alltid ändras. För att uppnå samma mål med en ren matematisk algoritm skulle det krävas mycket processorkraft och avancerade matematiska modeller. För detta problem är genetiska algoritmer ett lämpligt alternativ."},
				{subtitle: "Länk"},
				{link: "https://github.com/stefangeneralao/genetic-path-finder"}
			]
		},

		{
			section: "Projekt",
			content: [
				{title: "Digital Stargazing"},
				{divider: "full"},
				{subtitle: "Detaljer om projektet"},
				{paragraph: "Digital Stargazing var en del av ett projekt i samarbete med en konstnär."},
				{subtitle: "Länk"},
				{link: "https://github.com/stefangeneralao/digital-stargazing"}
			]
		},

		{
			section: "Språk",
			content: [
				{title: "Svenska"},
				{divider: "full"},
				{subtitle: "Nivå"},
				{paragraph: "Modersmål"}
			]
		},

		{
			section: "Språk",
			content: [
				{title: "Engelska"},
				{divider: "full"},
				{subtitle: "Nivå"},
				{paragraph: "Flytande"}
			]
		},

		{
			section: "Språk",
			content: [
				{title: "Tyska"},
				{divider: "full"},
				{subtitle: "Nivå"},
				{paragraph: "Goda kunskaper"}
			]
		},

		{
			section: "Språk",
			content: [
				{title: "Cebuano"},
				{divider: "full"},
				{subtitle: "Nivå"},
				{paragraph: "Vissa kunskaper"}
			]
		}
  ]
}

const getStorage = () => {
  return storage;
}

export default getStorage;
