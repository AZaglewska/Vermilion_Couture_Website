export const navbarLanguages = {
  ENG: [
    {
      main: "About Vermilion",
      dropDown: [
        { name: "About", route: "/about-vermilion" },
        { name: "Publications", route: "/publications" },
      ],
    },
    {
      main: " Ready collections",
      dropDown: [
        { name: "Wedding", route: "/wedding-collection" },
        { name: "Evening", route: "/evening-collection" },
      ],
    },
    {
      main: "Basic",
      dropDown: [
        { name: "Underbust", route: "/underbust-collection" },
        { name: "Overbust", route: "/overbust-collection" },
      ],
    },
    { main: "Couture", route: "/couture", dropDown: [] },

    {
      main: "Contact",
      route: "/contact",
      dropDown: [],
    },
  ],

  PL: [
    {
      main: "O Vermilion",
      dropDown: [
        { name: "O nas", route: "/o-vermilion" },
        { name: "Publikacje", route: "/publikacje" },
      ],
    },
    {
      main: "Gotowe kreacje",
      dropDown: [
        { name: "Ślubne", route: "/kolekcja-ślubna" },
        { name: "Wieczorowe", route: "/kolekcja-wieczorowa" },
      ],
    },

    {
      main: "Kolekcja podstawowa",
      dropDown: [
        { name: "Underbust", route: "/kolekcja-underbust" },
        { name: "Overbust", route: "/kolekcja-overbust" },
      ],
    },

    { main: "Couture", route: "/couture", dropDown: [] },

    {
      main: "Kontakt",
      route: "/kontakt",
      dropDown: [],
    },
  ],
};

export const footerLanguages = {
  ENG: {
    contact: {
      title: "Contact",
      content: [
        "email: vermilionteam@gmail.com",
        "phone:(+48) 22 619 23 49",
        "Thu.- Fri. 11:00-19:00 Sat. 12:00 – 17:00",
      ],
    },
    links: {
      title: "Information",
      linksArray: [
        { name: "FAQ", route: "/frequently-asked-questions" },
        { name: "Fabrics", route: "/" },
        { name: "How to Measure", route: "/" },
        { name: "Tailored Sewing", route: "/" },
      ],
    },
  },

  PL: {
    contact: {
      title: "Kontakt",
      content: [
        "email: vermilionteam@gmail.com",
        "telefon:(+48) 22 619 23 49",
        "wt.- pt. 11:00-19:00 sob. 12:00 – 17:00",
      ],
    },
    links: {
      title: "Informacje",
      linksArray: [
        { name: "FAQ", route: "/pytania-i-odpowiedzi" },
        { name: "Tkaniny ", route: "/" },
        { name: "Jak się zmierzyć ", route: "/" },
        { name: "Szycie na miarę ", route: "/" },
      ],
    },
  },
};
