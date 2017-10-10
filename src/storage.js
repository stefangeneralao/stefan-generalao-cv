const storage = {
  sections: [
    {id: "Intro"},
    {id: "Högskolekurser"},
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
    {id: "Intressen"},
  ],

  cards: [
    {
      section: "Intro",
      content: [
        {title: "Stefan Generalao"},
        {divider: "full"},
        {subtitle: "Om mig"},
        {paragraph: "baababdab"},
        {paragraph: "anananmana"},
      ]
    },

    {
      section: "Intro",
      content: [
        {title: "Om denna webbapplikationen"},
        {divider: "full"},
        {paragraph: "baababdab"},
        {paragraph: "anananmana"},
      ]
    },

    {
      section: "Högskolekurser",
      content: [
        {title: "Om denna webbapplikationen"},
        {divider: "full"},
        {subtitle: "Om mig"},
        {paragraph: "baababdab"},
        {paragraph: "anananmana"},
      ]
    },

  ]
}

const getStorage = () => {
  return storage;
}

export default getStorage;
