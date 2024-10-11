const templates = [
  {
    _id: "67009f0bf9af819eb1b55c18",
    name: "Cảnh quan khu dân cư",
    price: 10,
    area: 10,
    locationType: "Residential",
    vibe: "Hiện đại",
    imageURl: "https://ibb.co/jySKXRy",
    plants: [
      {
        _id: "641e887d05f9ee1717e1348b"
      }
    ],
    createdAt: "2024-10-05T02:06:03.580Z"
    ,
    updatedAt: "2024-10-05T02:06:03.580Z"
    ,
    __v: 1,
    imageURl: "https://ibb.co/5kb5Hpn",
    sku: "string"
  },
  {
    _id: 
       "67009f0bf9af819eb1b55c19"
    ,
    name: "Khu vườn xanh mát",
    price: 1200,
    area: 80,
    locationType: "Garden",
    vibe: "Nhiệt đới",
    imageURl: "https://ibb.co/vBnPqSR",
    plants: [],
    createdAt: "2024-10-05T02:06:03.582Z"
    ,
    updatedAt: "2024-10-05T02:06:03.582Z"
    ,
    __v: 0
  },
  {
    _id: "67009f0bf9af819eb1b55c1a"
    ,
    name: "Cảnh quan công nghiệp hiện đại",
    price: 2000,
    area: 150,
    locationType: "Industrial",
    vibe: "Tối giản",
    imageURl: "https://ibb.co/xSj6BPh",
    plants: [],
    createdAt: "2024-10-05T02:06:03.582Z"
    ,
    updatedAt: "2024-10-05T02:06:03.582Z"
    ,
    __v: 0
  },
  {
    _id: "6700a7b20894a59d693dc5ec"
    ,
    name: "Cảnh quan khu dân cư 1",
    price: 1500,
    area: 100,
    locationType: "Residential",
    vibe: "Hiện đại",
    imageURl: "https://ibb.co/jySKXRy",
    plants: [],
    createdAt: "2024-10-05T02:42:58.139Z"
    ,
    updatedAt: "2024-10-05T02:42:58.140Z"
    ,
    __v: 0
  },
  {
    _id: "6700a7b20894a59d693dc5ed"
    ,
    name: "Khu vườn xanh mát",
    price: 1200,
    area: 80,
    locationType: "Garden",
    vibe: "Nhiệt đới",
    imageURl: "https://ibb.co/vBnPqSR",
    plants: [],
    createdAt:"2024-10-05T02:42:58.143Z"
    ,
    updatedAt: "2024-10-05T02:42:58.143Z"
    ,
    __v: 0
  },
  {
    _id: "6700a7b20894a59d693dc5ee"
    ,
    name: "Cảnh quan công nghiệp hiện đại",
    price: 2000,
    area: 150,
    locationType: "Công nghiệp",
    vibe: "Tối giản",
    imageURl: "https://ibb.co/xSj6BPh",
    plants: [],
    createdAt: "2024-10-05T02:42:58.143Z"
    ,
    updatedAt: "2024-10-05T02:42:58.143Z"
    ,
    __v: 0
  },
  {
    _id: "6700b7188b31c41a778f8245"
    ,
    name: "Cảnh quan khu dân cư 1",
    price: 1500,
    area: 100,
    locationType: "Khu dân cư",
    vibe: "Hiện đại",
    imageURl: "https://ibb.co/jySKXRy",
    plants: [],
    createdAt: "2024-10-05T03:48:40.401Z"
    ,
    updatedAt: "2024-10-05T03:48:40.402Z"
    ,
    __v: 0
  },
  {
    _id: "6700b7188b31c41a778f8246"
    ,
    name: "Khu vườn xanh mát",
    price: 1200,
    area: 80,
    locationType: "Khu vườn",
    vibe: "Nhiệt đới",
    imageURl: "https://ibb.co/vBnPqSR",
    plants: [],
    createdAt: "2024-10-05T03:48:40.403Z"
    ,
    updatedAt: "2024-10-05T03:48:40.403Z"
    ,
    __v: 0
  },
  {
    _id: "6700b7188b31c41a778f8247"
    ,
    name: "Cảnh quan công nghiệp hiện đại",
    price: 2000,
    area: 150,
    locationType: "Industrial",
    vibe: "Tối giản",
    imageURl: "https://ibb.co/xSj6BPh",
    plants: [],
    createdAt: "2024-10-05T03:48:40.403Z"
    ,
    updatedAt: "2024-10-05T03:48:40.403Z"
    ,
    __v: 0
  },
  {
    _id: "6700b785764b194c4ec11a6d"
    ,
    name: "Cảnh quan khu dân cư 1",
    price: 1500,
    area: 100,
    locationType: "Residential",
    vibe: "Hiện đại",
    imageURl: "https://ibb.co/jySKXRy",
    plants: [],
    createdAt: "2024-10-05T03:50:29.924Z"
    ,
    updatedAt: "2024-10-05T03:50:29.924Z"
    ,
    __v: 0
  },
  {
    _id: "6700b785764b194c4ec11a6e"
    ,
    name: "Khu vườn xanh mát",
    price: 1200,
    area: 80,
    locationType: "Garden",
    vibe: "Nhiệt đới",
    imageURl: "https://ibb.co/vBnPqSR",
    plants: [],
    createdAt: "2024-10-05T03:50:29.925Z"
    ,
    updatedAt: "2024-10-05T03:50:29.925Z"
    ,
    __v: 0
  },
  {
    _id: "6700b785764b194c4ec11a6f"
    ,
    name: "Cảnh quan công nghiệp hiện đại",
    price: 2000,
    area: 150,
    locationType: "Industrial",
    vibe: "Tối giản",
    imageURl: "https://ibb.co/xSj6BPh",
    plants: [],
    createdAt:"2024-10-05T03:50:29.926Z"
    ,
    updatedAt: "2024-10-05T03:50:29.926Z"
    ,
    __v: 0
  },
  {
    _id: "6700d50e55d2a01a1f7d0b07"
    ,
    sku: "string",
    name: "string",
    price: 200000,
    area: 0,
    locationType: "Office",
    imageURl: "https://ibb.co/5kb5Hpn",
    plants: [
      {
        _id: "641e887d05f9ee1717e1348a"
      }
    ],
    createdAt: "2024-10-05T05:56:30.928Z"
  ,
    updatedAt: "2024-10-05T05:56:30.928Z"
    ,
    __v: 0
  },
  {
    _id: "670279cc8c03b90a8879973b"
    ,
    sku: "A23",
    name: "Cảnh quan văn phòng có ban công",
    price: 80000,
    area: 100,
    locationType: "Office",
    vibe: "Mát mẻ",
    imageURl: "https://ibb.co/GxJkb6g",
    plants: [
      {
        _id: "641e887d05f9ee1717e13490"
      },
      {
        _id: "641e887d05f9ee1717e1348f"
      }
    ],
    createdAt: "2024-10-06T11:51:40.231Z"
    ,
    updatedAt: "2024-10-06T11:51:40.231Z"
    ,
    __v: 1
  },
  {
    _id: "6703ccb51f7cd55ab6842af8"
    ,
    sku: "string",
    name: "Cảnh quan khu dân cư có hồ bơi",
    price: 450000,
    area: 1200,
    locationType: "Residential",
    vibe: "Mát mẻ",
    imageURl: "https://ibb.co/xSj6BPh",
    plants: [
      {
        _id: "641e887d05f9ee1717e1348a"
      },
      {
        _id: "641e887d05f9ee1717e1348b"
      }
    ],
    createdAt: "2024-10-07T11:57:41.673Z"
    ,
    updatedAt: "2024-10-07T11:57:41.673Z"
    ,
    __v: 0
  }
    
  ];
  
  module.exports = templates;