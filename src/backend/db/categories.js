import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "brushes",
    categoryImg : "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/7F82A460-CE3D-498D-B272-961ED2AFD1A0.png?resize=600%2C600&ssl=1",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "colors",
    categoryImg : "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/3E945F6E-8480-4271-9E4B-0C5D759B3C93.png?resize=600%2C600&ssl=1",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "papers",
    categoryImg : "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/2CC1FD3C-ABA4-4468-BC92-A3EA1D8939E3.png?resize=600%2C600&ssl=1",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "sketches",
    categoryImg : "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/D606B5C7-EF1A-41E7-8BF6-6F05813701F4.png?resize=600%2C600&ssl=1",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "canvas",
    categoryImg : "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/A18A8CFA-C7E2-4F23-A7C3-BD4A174BB7DD.png?resize=600%2C600&ssl=1",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "mediums",
    categoryImg : "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/83D23AC2-41FE-4ABF-AF6F-E08BA82C8AB0.png?resize=600%2C600&ssl=1",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  }
];
