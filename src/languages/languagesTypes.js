export const navbarLanguages = {
  ENG: [
    {
      main: "Vermilion",
      isOpen: false,
      dropDown: [
        { name: "About", route: "/about-vermilion" },
        { name: "Collection", route: "/about-collection" },
      ],
    },
    {
      main: "Special",
      isOpen: false,
      dropDown: [
        { name: "Wedding", route: "/wedding-collection" },
        { name: "Evening", route: "/evening-collection" },
      ],
    },
    {
      main: "Classic",
      isOpen: false,
      dropDown: [
        { name: "Underbust", route: "/underbust-collection" },
        { name: "Overbust", route: "/overbust-collection" },
      ],
    },
    {
      main: "Couture",
      isOpen: false,
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
      main: "Vermilion",
      isOpen: false,
      dropDown: [
        { name: "O nas", route: "/o-vermilion" },
        { name: "Kolekcja", route: "/o-kolekcji" },
      ],
    },
    {
      main: "Kreacje",
      isOpen: false,
      dropDown: [
        { name: "Ślubne", route: "/kolekcja-ślubna" },
        { name: "Wieczorowe", route: "/kolekcja-wieczorowa" },
      ],
    },

    {
      main: "Classic",
      isOpen: false,
      dropDown: [
        { name: "Underbust", route: "/kolekcja-underbust" },
        { name: "Overbust", route: "/kolekcja-overbust" },
      ],
    },
    {
      main: "Couture",
      isOpen: false,

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
      content: ["contact@vermilioncouture.com", "phone: 735 412 280"],
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
      content: ["contact@vermilioncouture.com", "telefon: 735 412 280"],
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
