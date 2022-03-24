import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
 
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/5BDBD22D-1E9D-4426-A3F1-7751C1331E97.jpeg?fit=586%2C879&ssl=1",
    title: "BRUSTRO Miniature Brush Set of – 12",
    rating: "4.5",
    curr_price: "1299",
    orig_price: "1400",
    categoryName: "brushes",
    isLike : false,
    inStock : false,
    qty : 1
  },
 
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/05/1A3B627D-C304-4070-992B-CA499237F962-scaled.jpeg?resize=600%2C600&ssl=1",
    title: "BRUSTRO Artists ’ White Bristle Set",
    rating: "4.5",
    curr_price: "349",
    orig_price: "647",
    categoryName: "brushes",
    isLike : false,
    inStock : true,
    qty : 1
  },
  
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/8D3F88DE-91BD-4B35-BAA7-38705F1DD23C.jpeg?fit=600%2C400&ssl=1",
    title: "BRUSTRO brush Rigger Series – Size – 2",
    rating: "3.5",
    curr_price: "199",
    orig_price: "399",
    categoryName: "brushes",
    isLike : false,
    inStock : true,
    qty : 1
  }, 
  {
    _id: uuid(),
    product_img : "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/05/79B1093B-5164-400D-88AE-49261D883785-scaled.jpeg?fit=2560%2C2560&ssl=1",
    title: "BRUSTRO Artists Gold TAKLON Brushes",
    rating: "4.0",
    curr_price: "349",
    orig_price: "647",
    categoryName: "brushes",
    isLike : false,
    inStock : true,
    qty : 1
  },
   
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/A59584AE-4F9E-4BA7-BAEA-75629AE0D07C.jpeg?fit=640%2C427&ssl=1",
    title: "BRUSTRO brush Set of 4 (0, 2, 4, 8)",
    rating: "3",
    curr_price: "1059",
    orig_price: "1200",
    categoryName: "brushes",
    isLike : false,
    inStock : false,
    qty : 1
  },
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/9214B331-1E50-408A-96B5-8E3F88FDEB1F.jpeg?resize=600%2C600&ssl=1",
    title: "Liquitex Heavy Body Acrylic Set 12x59ml",
    rating: "4.5",
    curr_price: "3200",
    orig_price: "3299",
    categoryName: "colors",
    isLike : false,
    inStock : false,
    qty : 1
  },
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/F199C696-C94E-48E2-A6A8-2E8BC865A5C8.jpeg?resize=600%2C444&ssl=1",
    title: "Liquitex Basics Acrylic Paint Tubes – 36x22ml",
    rating: "4",
    curr_price: "4600",
    orig_price: "4999",
    categoryName: "colors",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/51lXZMJan4L.jpg?resize=405%2C500&ssl=1",
    title: "BRUSTRO Acrylic 24 Colours 12ML Set",
    rating: "4",
    curr_price: "897",
    orig_price: "957",
    categoryName: "colors",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/8D0ECC38-A463-41F6-899E-7F8B3CF24B44-scaled.jpeg?resize=600%2C600&ssl=1",
    title: "Liquitex acrylic gouache 6x59ml Set",
    rating: "4",
    curr_price: "4650",
    orig_price: "4999",
    categoryName: "colors",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/3522F8AC-5B9F-49C2-9508-5049E2B6A708.jpeg?resize=600%2C600&ssl=1",
    title: "White nights water color set of 24",
    rating: "3",
    curr_price: "4295",
    orig_price: "4999",
    categoryName: "colors",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2022/02/51NhCzS9NOL.jpg?resize=352%2C500&ssl=1",
    title: "Fabriano Sketching Pad 120 GSM A3",
    rating: "3.5",
    curr_price: "897",
    orig_price: "899",
    categoryName: "papers",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/03/A6BBDFA8-9810-4851-9BF7-E1698A935886-scaled.jpeg?resize=600%2C600&ssl=1",
    title: "Stationerie Mega Combo 7",
    rating: "3.5",
    curr_price: "2999",
    orig_price: "3599",
    categoryName: "papers",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/07/3E77BA81-C330-4B0E-985B-7A8D126CDA70-scaled.jpeg?resize=600%2C600&ssl=1",
    title: "Stationerie Black A4 300gsm 20 Sheets",
    rating: "3",
    curr_price: "199",
    orig_price: "250",
    categoryName: "papers",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/03/C2367E76-BAE2-4821-B718-91FCEE66790F-scaled.jpeg?resize=600%2C600&ssl=1",
    title: "Stationerie Heavy A5 240gsm 20 Sheets",
    rating: "3.5",
    curr_price: "129",
    orig_price: "199",
    categoryName: "papers",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/9C190E44-70EA-4710-990A-983E9F8D7B6C.jpeg?resize=586%2C600&ssl=1",
    title: "Brustro Grey, Size A5 120GSM 60 Sheets",
    rating: "3",
    curr_price: "297",
    orig_price: "329",
    categoryName: "papers",
    isLike : false,
    inStock : false,
    qty : 1
  }  ,
  // Canvas

   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/s381327954938398761_p794_i1_w513-7.jpeg?resize=513%2C513&ssl=1",
    title: "Stretched Canvas 10 X 12",
    rating: "3",
    curr_price: "179",
    orig_price: "229",
    categoryName: "canvas",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/ATDSC__54435.1349874752.1280.1280-1.jpg?resize=600%2C600&ssl=1",
    title: "Stationerie Box Canvas 12 X 16",
    rating: "3",
    curr_price: "220",
    orig_price: "250",
    categoryName: "canvas",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/E9AAF51C-6341-415E-ABDC-15CDA9EFE37A.jpeg?resize=425%2C391&ssl=1",
    title: "Artist Circle Canvas 10 Inch",
    rating: "4",
    curr_price: "179",
    orig_price: "219",
    categoryName: "canvas",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/D1D23DAC-C149-478A-BD20-EC175172D39E.jpeg?resize=554%2C554&ssl=1",
    title: "Artist Triangular Canvas Medium",
    rating: "4.5",
    curr_price: "200",
    orig_price: "225",
    categoryName: "canvas",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/41wNSp7GFlL.jpg?resize=500%2C412&ssl=1",
    title: "CAMEL cotton canvas 91CMx5 MTR",
    rating: "4",
    curr_price: "2100",
    orig_price: "2900",
    categoryName: "canvas",
    isLike : false,
    inStock : false,
    qty : 1
  },

  // Sketches
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/F3D20A1E-54E1-459C-9103-D9CE2F564275.png?resize=600%2C460&ssl=1",
    title: "Lyra Rembrandt Sketch Set of 11",
    rating: "3.5",
    curr_price: "1300",
    orig_price: "1999",
    categoryName: "sketches",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/YUT.jpg?resize=600%2C600&ssl=1",
    title: "Sakura Pigma Brush Pens Set of 8 Colors",
    rating: "4",
    curr_price: "880",
    orig_price: "999",
    categoryName: "sketches",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2022/02/811VYAlXcgL._SL1500_.jpg?resize=600%2C600&ssl=1",
    title: "Brustro Coloured Pencil Set of 24",
    rating: "4",
    curr_price: "798",
    orig_price: "899",
    categoryName: "sketches",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2021/02/3C025384-E986-4FA0-8283-3C427189D562.jpeg?resize=600%2C600&ssl=1",
    title: "Prisma Premier Color Pencil Set of 72",
    rating: "4",
    curr_price: "3200",
    orig_price: "3499",
    categoryName: "sketches",
    isLike : false,
    inStock : false,
    qty : 1
  },
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/t-1.jpg?resize=600%2C600&ssl=1",
    title: "Mungyo Gallery Soft Oil Pastels 24 Colors",
    rating: "4.5",
    curr_price: "850",
    orig_price: "999",
    categoryName: "sketches",
    isLike : false,
    inStock : false,
    qty : 1
  },

  // Mediums
   {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/12/817FF3D6-569E-4F06-891E-2AEB70B1E65E.jpeg?resize=600%2C600&ssl=1",
    title: "Winsor & Newton Gum Arabic 75ML",
    rating: "4.5",
    curr_price: "610",
    orig_price: "659",
    categoryName: "mediums",
    isLike : false,
    inStock : false,
    qty : 1
  },
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/10/07525D16-4BCE-4AE6-A6A7-EDECB063B3B2-scaled.jpeg?resize=600%2C600&ssl=1",
    title: "Brustro Artists Varnish Matte 400 ml",
    rating: "4",
    curr_price: "765",
    orig_price: "799",
    categoryName: "mediums",
    isLike : false,
    inStock : false,
    qty : 1
  },
  {
    _id: uuid(),
    product_img: "https://i0.wp.com/stationerie.co.in/wp-content/uploads/2020/12/4416DE23-F1B6-41F8-95C0-64E7A27EC4B4-scaled.jpeg?resize=600%2C600&ssl=1",
    title: "Winsor & Newton White Spirits, 75ml",
    rating: "4.5",
    curr_price: "610",
    orig_price: "659",
    categoryName: "mediums",
    isLike : false,
    inStock : false,
    qty : 1
  }
];
