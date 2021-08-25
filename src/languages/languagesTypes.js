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
    {
      main: "Couture",
      dropDown: [
        { name: "Mesh", route: "/mesh-collection" },
        { name: "Silk", route: "/silk-collection" },
        { name: "Other", route: "/other-collection" },
      ],
    },

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

    {
      main: "Couture",
      dropDown: [
        { name: "Transparentne", route: "/kolekcja-transparentna" },
        { name: "Jedwabne", route: "/kolekcja-jedwabna" },
        { name: "Inne", route: "/kolekcja-inne" },
      ],
    },

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
      content: ["vermilionteam@gmail.com"],
    },
    links: {
      title: "Information",
      linksArray: [
        { name: "FAQ", route: "/frequently-asked-questions" },
        { name: "Fabrics", route: "/fabrics" },
        {
          name: "How to take measurements",
          route: "/how-to-take-measurements",
        },
        { name: "Privacy Policy", route: "/privacy-policy" },
      ],
    },
  },

  PL: {
    contact: {
      title: "Kontakt",
      content: ["vermilionteam@gmail.com"],
    },
    links: {
      title: "Informacje",
      linksArray: [
        { name: "FAQ", route: "/pytania-i-odpowiedzi" },
        { name: "Tkaniny ", route: "/tkaniny" },
        { name: "Jak pobrać wymiary", route: "/jak-pobrać-wymiary" },
        { name: "Polityka Prywatności", route: "/polityka-prywatności" },
      ],
    },
  },
};
