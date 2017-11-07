const storage = {
  sections: [
    {
			id: "Intro",
			icon: "playArrow"
		},
    {
			id: "Studiemeriter",
			subSections: [
				{id: "Avslutade studiemeriter"},
				{id: "Pågående studiemeriter"},
			]
		},
    {
			id: "Skickligheter",
			subSections: [
				{id: "Maskininlärning"},
				{id: "Webbteknologier"},
				{id: "Hårdvara"},
				{id: "3D-printing och design"},
				{id: "Övrigt"},
			]
		},
    {id: "Arbetslivserfarenhet"},
    {id: "Github-projekt"},
    {id: "Språk"},
    // {id: "Intressen"},
  ],

  cards: [
    {
      section: "Intro",
      content: [
        {title: "Stefan Generalao"},
        {divider: "full"},
        {subtitle: "Om mig"},
        // {paragraph: "Student på Informationsarkitektprogrammet i Malmö. Jag har redan koll på flera av programmets kurser och kommer därmed ha tid över till en deltidsanställning. För titelns skull vill jag gärna avsluta utbildningen, och jag gillar att ha många bollar i luften."},
        // {paragraph: "Student på Informationsarkitektprogrammet i Malmö. Jag har lätt för kurserna jag läser och anser att ha tillräckligt mycket tid över till deltidsanställning upp till 50%. Jag studerar för att få tillgång till senaste forskningen, nätverkandet och för nöjets skull."},
				{paragraph: "Student på Informationsarkitektprogrammet i Malmö. Jag är  ambitiös och har hög arbetsmoral, och jag anser mig därför ha tillräckligt mycket tid över för en deltidsanställning upp till 50%. Jag studerar främst för att få tillgång till senaste forskningen och för att ta del av nätverket som högskolan erbjuder."},

				{paragraph: "Innan jag flyttade till Malmö avslutade jag högskolekurser inom inbyggda system och har kring 500 timmar i Arduino med hårdvaruprogrammeringen som tillkommer. Jag har även varit aktiv på Halmstad Högskolas entreprenörskapsinkubator där jag har varit involverad i två IT-projekt."},

				{paragraph: "Jag drivs av min nyfikenhet, vilket gör mig snabblärd och involverad, och trots att min förra chef beskrev mig som ansvarsfull i soloprojekt föredrar jag att jobba i team."},

				// {paragraph: "Maskininlärning är ett växande intresse. Min fritid spenderas på studier av olika fält inom maskininlärning, speciellt deep learning. Även webbteknologier som React är spännande. Nya system är det jag brinner för!"},
				{paragraph: "Maskininlärning är ett växande intresse. På min fritid håller jag mig uppdaterad med senaste studierna i olika fält inom maskininlärning, speciellt deep learning. Jag läser också en distanskurs på Udemy angående samma ämne. Webbteknologier som React (som den här hemsidan är skriven i) är också något som jag tycker är spännande. Nya system är det jag brinner för!"},

				{paragraph: "Navigera dig gärna i menyn till vänster. Hoppas att ni finner mig intressant,"},
				{paragraph: "Stefan Generalao"}
      ]
    },

    {
      section: "Intro",
      content: [
        {title: "Om denna webbapplikationen"},
        {divider: "full"},
				{paragraph: "Applikationen på domänen www.stefangeneralao.fyi är skriven av mig. Till mina verktyg valde jag React och projektet bygger på en boilerplate kallad \"create-react-app\". Förutom jQuery och React har jag inte använt något annat ramverk eller bibliotek. Servern körs på en maskin med Debian som använder Node."},
				{paragraph: "Gå gärna in och kolla på min Github. Upptäcker ni buggar, andra problem eller har synpunkter? Skicka in en issue eller pull-request!"}
      ]
    },

    {
      section: "Avslutade studiemeriter",
      content: [
        {subtitle: "Sammanfattning"},
				{paragraph: "Kurser på totalt 50,5 högskolepoäng och omfattar stora delar inom inbyggda system."}
      ]
    },

		{
			section: "Avslutade studiemeriter",
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
			section: "Avslutade studiemeriter",
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
			section: "Avslutade studiemeriter",
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
			section: "Avslutade studiemeriter",
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
			section: "Avslutade studiemeriter",
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
      section: "Avslutade studiemeriter",
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
			section: "Avslutade studiemeriter",
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
      section: "Pågående studiemeriter",
      content: [
        {subtitle: "Sammanfattning"},
				{paragraph: "Student på Informationsarkitektprogrammet, Malmö Högskola. Förväntad examen våren 2020."}
      ]
    },

		{
			section: "Pågående studiemeriter",
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
			section: "Pågående studiemeriter",
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
			section: "Pågående studiemeriter",
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
				{title: "Keras"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 40},
				{subtitle: "Detaljer"},
				{paragraph: "Jag kan skapa deep neural networks och med fiktiva kunddatabaser har jag bland annat kunnat förutspå önskade egenskaper, till exempel om en bestämd kund kommer att säga upp sitt avtal inom ett halvår."},
				{paragraph: "Med convolutional neural network (CNN) har jag konstruerat klassifierare som ser skillnad på hundar och katter. Arkitekturen kan dock appliceras på många användningsområden, bland annat cancerklassifiering."}
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
				{paragraph: "JavaScript-bibliotek för att bygga, träna och aktivera neuronnät. I Synapse testade jag att lösa XOR-problemet, även kallat neuronnätverkets motsvarighet till Hello World."}
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
				{title: "React.js"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 50},
				{subtitle: "Detaljer"},
				{paragraph: "Mitt intresse i React gör att mina kunskaper växer snabbt! Idag är jag bekväm i React-komponentens livscykel, state, props. Har även kopplat React-applikationer med Firebase."}
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
				{paragraph: "Har testat att implementera Redux i React-applikationer. Redux är ett intressant koncept som jag ser stor nytta av i stora projekt."}
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
				{paragraph: "Har testat att implementera Firebase i små projekt som kräver databashanterig i realtid."}
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
				{paragraph: "Använder npm för pakethantering i många av mina projekt. Har även lyckats att konfigurera servrar i Node."}
			]
		},

		{
			section: "Hårdvara",
			content: [
				{title: "Arduino - Mjukvara och hårdvara"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 100},
				{subtitle: "Detaljer"},
				{paragraph: "I ett av mina projekt i Arduino designade jag mitt egna smarta hem. Via en app i mobilen styr jag strömmen till mina lampor, min TV och förstärkare."}
			]
		},

		{
			section: "Hårdvara",
			content: [
				{title: "Elektroteknik"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 90},
				{subtitle: "Detaljer"},
				{paragraph: "Bra grundläggande kunskap om flertalet passiva och aktiva komponenter. Har även skickligheten att löda SMD-komponenter."}
			]
		},

		{
			section: "Hårdvara",
			content: [
				{title: "Raspberry PI"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 70},
				{subtitle: "Detaljer"},
				{paragraph: "Headless installation och navigering via SSH med Linuxbaserade operativsystem är inga problem. Kan manipulera I/O-portarna, konfigurera servrar, styra 3D-skrivare och massa annat."}
			]
		},

		{
			section: "Hårdvara",
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
				{paragraph: "Mycket bra kunskap om möjligheter, begränsningar och tekniker med 3D-printing. Jag kan felsöka och åtgärda problem med hårdvara."}
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
				{paragraph: "Har ett bra sinne för teknisk design, hållfasthet och 3D-modellering. Erfarenhet i OnShape, Solidworks och AutoCAD Inventor."}
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
				{paragraph: "Denna hemsidan (www.stefangeneralao.fyi) körs på en maskin med Debian, systemet är konfigurerat av mig. Jag navigerar bekvämt i terminalen och har bra översikt över UNIX-system."}
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
				{paragraph: "Totalt 22.5 högskolepoäng i kurser med programmering i Java. I kurserna byggde jag algoritmer, datastrukturer och GUI."}
			]
		},

		{
			section: "Övrigt",
			content: [
				{title: "Python"},
        {divider: "full"},
				{subtitle: "Kunnighet"},
				{progressbar: 20},
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
				{title: "Dresser Wayne"},
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
			section: "Github-projekt",
			content: [
				{title: "Stefan Generalao-CV"},
				{divider: "full"},
				{subtitle: "Detaljer om projektet"},
				{paragraph: "Källkoden för webbapplikationen du just nu använder hittar du i denna Github-repository. Förutom faktumet att jag ville ha en portfolio så fokuserade jag mycket på feedback från människor i detta projektet. Jag lärde mig lyssna, ställa relevanta frågor och se användares reaktioner. Projektet har varit en tydlig iterativ process som fortfarande är aktiv."},
				{subtitle: "Länk"},
				{link: "https://github.com/stefangeneralao/stefan-generalao-cv"}
			]
		},

		{
			section: "Github-projekt",
			content: [
				{title: "Genetic Path Finder"},
				{divider: "full"},
				{subtitle: "Detaljer om projektet"},
				{paragraph: "Genetisk algoritm för att hitta den snabbaste vägen från punkt A till punkt B. Algoritmen måste ta hänsyn till accelaration samt att alla hinder alltid ändras. För att uppnå samma mål med en ren matematisk algoritm skulle det kräva mycket processorkraft och avancerade matematiska modeller. I detta problemet är genetiska algoritmer ett lämpligt alternativ."},
				{subtitle: "Länk"},
				{link: "https://github.com/stefangeneralao/genetic-path-finder"}
			]
		},

		{
			section: "Github-projekt",
			content: [
				{title: "Digital Stargazing"},
				{divider: "full"},
				{subtitle: "Detaljer om projektet"},
				{paragraph: "Digital Stargazing var del av ett projekt i samarbete med en konstnär."},
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
