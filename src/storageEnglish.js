const storage = {
  sections: [
    {
      id: "Intro",
      icon: "playArrow"
    },
    {
      id: "Education",
      subSections: [
        {id: "Completed"},
        {id: "Ongoing"},
      ]
    },
    {
      id: "Skills",
      subSections: [
        {id: "Web Technologies"},
        {id: "Machine Learning"},
        {id: "IoT"},
        {id: "3D-printing and Design"},
        {id: "System Engineering"},
        {id: "Other"},
      ]
    },
    {id: "Projects"},
    {id: "Experience"},
    {id: "Language"},
  ],

  cards: [
    {
      section: "Intro",
      content: [
        {title: "Stefan Generalao"},
        {divider: "full"},
        {subtitle: "About me"},
        {paragraph: "Jag studerar just nu på Informationsarkitektprogrammet i Malmö. Jag är ambitiös och har en hög arbetsmoral. Studierna ger mig en inblick i den senaste forskningen och nätverket som studierna erbjuder är ovärderligt."},

        {paragraph: "Innan jag påbörjade studierna i Malmö hade jag avslutat flera högskolekurser inom inbyggda system samt genomfört omkring 500 timmar hårdvaruprogrammering i Arduino. Jag har även varit aktiv i Halmstad Högskolas entreprenörskapsinkubator där jag var involverad i två större IT-projekt."},

        {paragraph: "Jag drivs av min nyfikenhet, vilket gör mig snabblärd och involverad och trots att en tidigare chef beskrev mig som ansvarsfull i soloprojekt är det i team jag föredrar att arbeta."},

        {paragraph: "Min hemmaplan är i webbteknologier som ReactJS, NodeJS och allt som tillhör.Maskininlärning ligger mig också nära hjärtat. På min fritid håller jag mig uppdaterad med de senaste studierna inom olika fält kring maskininlärning och då speciellt Deep Learning. Parallellt med studier och arbete läser jag också en distanskurs på Udemy i samma ämne. Jag brinner för nya teknologier!"},

        {paragraph: "Navigationen finner ni till vänster. Välkommen hit!"},
        {paragraph: "Stefan Generalao"}
      ]
    },

    {
      section: "Intro",
      content: [
        {title: "Om denna webbapplikationen"},
        {divider: "full"},
        {paragraph: "Applikationen på domänen www.stefangeneralao.com är skriven av mig. Som verktyg valde jag ReactJS och servern är på en Raspberry PI med Debian."},
        {paragraph: "Gå gärna in och kolla på min Github. Upptäcker ni buggar, andra problem eller har synpunkter? Skicka gärna in en issue eller pull-request!"},
        {link: "https://github.com/stefangeneralao/stefan-generalao-cv"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Sammanfattning"},
        {divider: "full"},
        {paragraph: "Kurser på totalt 111,0 högskolepoäng som omfattar delar inom inbyggda system, datavetenskap och informationsvetenskap."}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Informationsarkitektur I"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "System Engineering och Projekt I"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "15,0"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Databasteknik"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Introduktion till programmering (Python)"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Introduktion till interaktionsdesign"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Introduktion till webbutveckling"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Introduktion till datavetenskap"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Programmering med Java, del II"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"},
        // {subtitle: "Godkänt datum"},
        // {paragraph: "160611"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Algoritmer och datastrukturer"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Högskolan i Halmstad"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"},
        // {subtitle: "Godkänt datum"},
        // {paragraph: "151008"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Datorteknik"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Högskolan i Halmstad"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"},
        // {subtitle: "Godkänt datum"},
        // {paragraph: "150616"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Digitalteknik"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Högskolan i Halmstad"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"},
        // {subtitle: "Godkänt datum"},
        // {paragraph: "150422"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Perspektiv på elektroteknik"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Högskolan i Halmstad"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"},
        // {subtitle: "Godkänt datum"},
        // {paragraph: "150130"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Envariabelanalys"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Högskolan i Halmstad"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "6,0"},
        // {subtitle: "Godkänt datum"},
        // {paragraph: "150117"}
      ]
    },

    {
      section: "Completed",
      content: [
        {title: "Programmering med Java"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Högskolan i Halmstad"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"},
        // {subtitle: "Godkänt datum"},
        // {paragraph: "141119"}
      ]
    },

    {
      section: "Ongoing",
      content: [
        {title: "Sammanfattning"},
        {divider: "full"},
        {paragraph: "Student på Informationsarkitektprogrammet, Malmö Universitet. Förväntad examen våren 2020."}
      ]
    },

    {
      section: "Ongoing",
      content: [
        {title: "Informationsarkitektur II"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Ongoing",
      content: [
        {title: "Objektorienterad programmering med Python"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Ongoing",
      content: [
        {title: "Webbtjänster"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Malmö Universitet"},
        {subtitle: "Högskolepoäng"},
        {paragraph: "7,5"}
      ]
    },

    {
      section: "Ongoing",
      content: [
        {title: "Deep Learning A-Z™: Hands-On Artificial Neural Networks"},
        {divider: "full"},
        {subtitle: "Lärosäte"},
        {paragraph: "Udemy"}
      ]
    },

    {
      section: "Web Technologies",
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
      section: "Web Technologies",
      content: [
        {title: "ReactJS"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 70},
        {subtitle: "Detaljer"},
        {paragraph: "Mitt intresse i ReactJS gör att mina kunskaper växer snabbt! Idag är jag bekväm i React-komponentens livscykel, state och props. Tillverkar snabbt både stateless och stateful komponenter. Skriver min kod i ES6 samt enligt Airbnbs kodriktlinjer för ReactJS och JavaScript."}
      ]
    },

    {
      section: "Web Technologies",
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
      section: "Web Technologies",
      content: [
        {title: "NodeJS"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 50},
        {subtitle: "Detaljer"},
        {paragraph: "NodeJS är mitt förstahandsval till alla projekt som kräver en serversida."}
      ]
    },

    {
      section: "Web Technologies",
      content: [
        {title: "socket.io"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 40},
        {subtitle: "Detaljer"},
        {paragraph: "Bibliotek för att använda websockets till både server- och klientsida. Tillsammans med ReactJS och NodeJS använder jag biblioteket i utvecklingsstacken till mitt smarta hem. Se Whatremote 2 under projekt."}
      ]
    },

    {
      section: "Web Technologies",
      content: [
        {title: "React Redux DOM"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 30},
        {subtitle: "Detaljer"},
        {paragraph: "Har testat att implementera Redux i React-applikationer. Redux är ett intressant koncept som jag ser stor nytta i vid större projekt."}
      ]
    },

    {
      section: "Web Technologies",
      content: [
        {title: "Axios"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 30},
        {subtitle: "Detaljer"},
        {paragraph: "Bibliotek för att förenkla HTTP-request på klientsida. Använde Axios i slutprojektet i kursen Databasteknik. Genom att utnyttja React-komponentens livscykel är Axios väldigt effektivt."}
      ]
    },

    {
      section: "Web Technologies",
      content: [
        {title: "ExpressJS"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 20},
        {subtitle: "Detaljer"},
        {paragraph: "Har kunskap att start server och hantera vanliga HTTP-request."}
      ]
    },

    {
      section: "Web Technologies",
      content: [
        {title: "Firebase"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 10},
        {subtitle: "Detaljer"},
        {paragraph: "I en personlig todo-applikation som jag utvecklade valde jag Firebase som databas."}
      ]
    },

    {
      section: "Web Technologies",
      content: [
        {title: "GraphQL"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 10},
        {subtitle: "Detaljer"},
        {paragraph: "Har gjort motsvarande Hello World och förstått hur man använder tekniken."}
      ]
    },

    // {
    // 	section: "Machine Learning",
    // 	content: [
    // 		{title: "Sammanfattning"},
    //     {divider: "full"},
    // 		{paragraph: "Deep learning förutspås att stå för den fjärde industriella revolutionen och har redan bidragit till stora delar av samhället. Mina favoritarkitekturer att implementera är ANN, CNN och RNN. Jag har även kunskap om avancerade arkitekturer som Boltzmann Machine, Autoencoders och Self Organizing Maps."},
    // 	]
    // },

    {
      section: "Machine Learning",
      content: [
        {title: "Keras"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 80},
        {subtitle: "Detaljer"},
        {paragraph: "Keras är ett högnivå-API till TensorFlow som kräver grundläggande kunskap i maskininlärning, deep learning och neurala nätverk. Kunskaper inom envariabelanalys och linjär algebra kan underlätta i utvecklingen."},
        {paragraph: "Mitt nuvarande huvudprojektprojekt är en RNN-modell för att förutspå priset för Bitcoin. Se Bitburnn under sektionen projekt."},
        {paragraph: "Jag kan skapa Deep Neural Networks. Med fiktiva kunddatabaser har jag bland annat kunnat förutspå önskade egenskaper, till exempel sannolikheten att en bestämd kund kommer att säga upp sitt avtal inom ett halvår."},
        {paragraph: "Med Convolutional Neural Network har jag konstruerat ett klassificeringssystem som ser skillnad på hundar och katter. Arkitekturen appliceras i industrin, bland annat inom cancerklassificering och självkörande bilar."},
      ]
    },

    {
      section: "Machine Learning",
      content: [
        {title: "TensorFlow"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 20},
        {subtitle: "Detaljer"},
        {paragraph: "TensorFlow är backend till Keras. För att använda Keras bör viss baskunskap i TensorFlow innehas."}
      ]
    },

    {
      section: "Machine Learning",
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
      section: "3D-printing and Design",
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
      section: "3D-printing and Design",
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
      section: "3D-printing and Design",
      content: [
        {title: "CAD"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 50},
        {subtitle: "Detaljer"},
        {paragraph: "Jag har ett bra sinne för teknisk design, hållfasthet och 3D-modellering. Erfarenhet i OnShape, Solidworks och AutoCAD Inventor."}
      ]
    },

    // {
    // 	section: "System Engineering",
    // 	content: [
    // 		{title: "Sammanfattning"},
    // 		{divider: "full"},
    // 		{paragraph: "Här nämner jag diverse system Engineeringsverktyg som jag använt. Jag räknar med att denna listan kommer växa i en stadig takt."}
    // 	]
    // },

    {
      section: "System Engineering",
      content: [
        {title: "Git/Github"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 70},
        {subtitle: "Detaljer"},
        {paragraph: "Använder Git i majoriteten av mina projekt, stora som små. Har även bidragit med hjälp i projekt på Github."}
      ]
    },

    {
      section: "System Engineering",
      content: [
        {title: "JetBrain YouTrack"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 50},
        {subtitle: "Detaljer"},
        {paragraph: "I kursen \"System Engineering och projekt\" använde vi YouTrack för att logga issues, tidsestimering och etc."}
      ]
    },

    {
      section: "System Engineering",
      content: [
        {title: "Agila processer"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 30},
        {subtitle: "Detaljer"},
        {paragraph: "Har läst in mig på vanliga agila processer bland annat XP, Kanban och Scrum. I de vanligaste utvecklingsprojekten ser jag Scrum vara det uppenbara valet."}
      ]
    },

    {
      section: "Other",
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
      section: "Other",
      content: [
        {title: "UNIX-system, BASH etc."},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 60},
        {subtitle: "Detaljer"},
        {paragraph: "Denna applikationen (www.stefangeneralao.com) körs på en maskin med Debian. Jag navigerar bekvämt i terminalen och har bra översikt över UNIX."}
      ]
    },

    {
      section: "Other",
      content: [
        {title: "Python"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 60},
        {subtitle: "Detaljer"},
        {paragraph: "För maskininlärning är Python det uppenbara valet för mig. Många välutvecklade bibliotek är utvecklade för Python, bland annat TensorFlow, Keras och Scikit Learn. Förutom maskininlärning, big data och kringliggande ämnen har jag även skapat webbservrar med ramverket Bottle."}
      ]
    },

    {
      section: "Other",
      content: [
        {title: "PostgreSQL"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 50},
        {subtitle: "Detaljer"},
        {paragraph: "I kursen \"Databasteknik\" användes PostgreSQL. I kursen ingick även lärandemoment om normalisering, indexer, transaktioner och givetvis diverse SQL-syntax."}
      ]
    },

    {
      section: "Other",
      content: [
        {title: "Java"},
        {divider: "full"},
        {subtitle: "Kunnighet"},
        {progressbar: 30},
        {subtitle: "Detaljer"},
        {paragraph: "Jag har totalt 22.5 högskolepoäng i kurser med javaprogrammering. I kurserna byggde jag algoritmer, datastrukturer och GUI."}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Sammanfattning"},
        {divider: "full"},
        {paragraph: "Åtskilliga timmar i servicebranchen varav mitt första jobb i mina föräldrars restaurang när jag var 11 år. Det gav mig ett utmärkt helhetsperspektiv av livet som entreprenör och värdet av bra lagarbete. Vikten av förstklassig service i alla branscher är jag väl medveten om sedan lång tid tillbaka."},
        {paragraph: "Just nu testar jag livet som utvecklare hos Trialbee. Inom akademin har jag även en position som mentor och anteckningsstöd för studenter."}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "HiQ Skåne AB"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Fullstack developer"},
        {subtitle: "Arbetsuppgifter"},
        {paragraph: "Främst frontend-utveckling med bland annat TypeScript, ReactJS och Redux. Även en del backend med .NET."},
        {subtitle: "Plats"},
        {paragraph: "Malmö"},
        {subtitle: "Period"},
        {paragraph: "Ongoing från juli 2018"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Trialbee AB"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Software developer intern"},
        {subtitle: "Arbetsuppgifter"},
        {paragraph: "Mjukvaruutveckling huvudsakligen i klientsidan med bland annat ReactJS. Designsyntax enligt BEM i SCSS. Utveckling sker agilt."},
        {subtitle: "Plats"},
        {paragraph: "Malmö"},
        {subtitle: "Period"},
        {paragraph: "December 2017 till mars 2018"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Malmö Universitet"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Anteckningsstöd"},
        {subtitle: "Arbetsuppgifter"},
        {paragraph: "Anteckningsstöd för student på Informationsarkitektprogrammet."},
        {subtitle: "Plats"},
        {paragraph: "Malmö"},
        {subtitle: "Period"},
        {paragraph: "Februari 2018 till juni 2018"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Malmö Universitet"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Mentor"},
        {subtitle: "Arbetsuppgifter"},
        {paragraph: "Mentor för student på Informationsarkitektprogrammet i främst webbutveckling, databasteknik och programmering."},
        {subtitle: "Plats"},
        {paragraph: "Malmö"},
        {subtitle: "Period"},
        {paragraph: "Februari 2018 till juni 2018"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "XTZ AB"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Tekniker"},
        {subtitle: "Arbetsuppgifter"},
        {paragraph: "Reperation av hifi-produkter."},
        {subtitle: "Plats"},
        {paragraph: "Halmstad"},
        {subtitle: "Period"},
        {paragraph: "Juli 2015 till augusti 2016"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Cherry Casino AB"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Croupier"},
        {subtitle: "Plats"},
        {paragraph: "Malmö, Lund, Trelleborg"},
        {subtitle: "Period"},
        {paragraph: "September 2013 till april 2014"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Espresso House AB"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Barista"},
        {subtitle: "Plats"},
        {paragraph: "Malmö, Ystad, Trelleborg"},
        {subtitle: "Period"},
        {paragraph: "Maj 2012 till februari 2014"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Mossbystrands kiosk"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Kassabiträde"},
        {subtitle: "Plats"},
        {paragraph: "Mossby"},
        {subtitle: "Period"},
        {paragraph: "Maj 2005 till augusti 2014"}
      ]
    },

    {
      section: "Experience",
      content: [
        {title: "Dresser Wayne AB"},
        {divider: "full"},
        {subtitle: "Position"},
        {paragraph: "Praktikant"},
        {subtitle: "Plats"},
        {paragraph: "Malmö"},
        {subtitle: "Period"},
        {paragraph: "Februari 2011 till mars 2011"}
      ]
    },

    {
      section: "Projects",
      content: [
        {title: "Bitburnn"},
        {divider: "full"},
        {subtitle: "Detaljer om projektet"},
        {paragraph: "Bitburnn är en maskininlärningsalgoritm som förutspår priset för Bitcoin om två minuter. Prediktioner baseras bland annat på OHLC-historik från flera olika valutor."},
        {paragraph: "Historik med kvalitetsdata är svår att få tag på utan att betala. Därför utvecklades en separat applikation som hämtar data från API och lagrar datan i en tidsserie databas. Bitburnn-algoritmen hämtar i sin tur data från databasen med högt förtroende om att datan är av hög kvalitet."}
      ]
    },

    {
      section: "Projects",
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
      section: "Projects",
      content: [
        {title: "WhatRemote 2 (Ongoing)"},
        {divider: "full"},
        {subtitle: "Detaljer om projektet"},
        {paragraph: "I den uppdaterade versionen av mitt smarta hem är koden inte längre skriven i C++, hela utvecklingsstacken har ersatts av JavaScript. Anledningen är kraftfulla nätverksteknologier, grafiska gränssnitt och för att jag älskar JavaScript. Hårdvaran får också en uppgradering från ATMega328 till Raspberry Pi."},
        {paragraph: "Serversidan körs i NodeJS och klientsidan med ReactJS. Kommunikation mellan server och klient sker uteslutande med websockets för att uppdatera alla anslutna klienter i realtid. Med biblioteket onoff på serversidan kontrolleras hårdvaran för att bland annat starta kaffekokaren, tända lampor och mäta jordfuktigheten i alla blomkrukor."},
        {paragraph: "Koden till projektet är färdig. Det enda som saknas innan nästa nivå av vardagslyx är bara att hetta upp lödkolven och börja löda."}
      ]
    },

    {
      section: "Projects",
      content: [
        {title: "Stefan Generalao-CV"},
        {divider: "full"},
        {subtitle: "Detaljer om projektet"},
        {paragraph: "Källkoden för denna webbapplikationen hittar du i följande Github-repository. Förutom att jag ville ha en portfolio så fokuserade jag mycket på feedback från människor i detta projektet. Jag lärde mig att lyssna, ställa relevanta frågor och utföra användbarhetstester reaktioner. Projektet har varit en iterativ process som fortfarande är aktiv och kommer sannolikt att vara det flera år framöver."},
        {subtitle: "Länk"},
        {link: "https://github.com/stefangeneralao/stefan-generalao-cv"}
      ]
    },

    {
      section: "Projects",
      content: [
        {title: "Eventizer (Ongoing)"},
        {divider: "full"},
        {subtitle: "Detaljer om projektet"},
        {paragraph: "Projektarbete till kursen \"System Engineering och projekt\". Projektets mål är att under utställningsdagen presentera andra studenters projekt med vår webbapplikation. Webbapplikationens klientsida är skriven i ReactJS och serversida i NodeJS. I projektet prioriteras scrum och dokumentation."},
        {subtitle: "Länk"},
        {link: "https://github.com/stefangeneralao/eventizer"}
      ]
    },

    {
      section: "Projects",
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
      section: "Projects",
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
      section: "Language",
      content: [
        {title: "Svenska"},
        {divider: "full"},
        {subtitle: "Level"},
        {paragraph: "Native"}
      ]
    },

    {
      section: "Language",
      content: [
        {title: "Engelska"},
        {divider: "full"},
        {subtitle: "Level"},
        {paragraph: "Fluent"}
      ]
    },

    {
      section: "Language",
      content: [
        {title: "Tyska"},
        {divider: "full"},
        {subtitle: "Level"},
        {paragraph: "Novice"}
      ]
    },

    {
      section: "Language",
      content: [
        {title: "Cebuano"},
        {divider: "full"},
        {subtitle: "Level"},
        {paragraph: "Novice"}
      ]
    }
  ]
}

const getStorage = () => {
  return storage;
}

export default getStorage;
