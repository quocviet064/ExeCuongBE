const products = [
  {
    _id: "641e887d05f9ee1717e1348a",
    sku: "NTB7SDVX44",
    img: "https://lomonoxop.edu.vn/images/ckeditor/images/lomonoxop/cay%20luoi%20ho.png",
    title: "Cây Lưỡi Hổ",
    slug: "cay-luoi-ho",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây cảnh để bàn",
    children: "Cây lưỡi hổ",
    price: 200000,
    discount: 0,
    quantity: 15,
    brand: {},
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95",
    },
    status: "in-stock",
    reviews: ["6461c46a9154b65448da799f"],
    productType: "plants",
    description:
      "Cây lưỡi hổ có khả năng lọc không khí, cũng như rất dễ chăm sóc. Phù hợp trang trí văn phòng, nhà ở.",
    additionalInformation: [
      { key: "Chiều cao", value: "20-30cm" },
      { key: "Ánh sáng", value: "Ánh sáng gián tiếp" },
    ],
    featured: true,
    sellCount: 5,
    tags: ["Cây để bàn", "Lưỡi hổ", "Trang trí nội thất"],
  },
  {
    _id: "641e887d05f9ee1717e1348b",
    sku: "NTB7SDVX45",
    img: "https://example.com/cay-kim-tien.png",
    title: "Cây Kim Tiền",
    slug: "cay-kim-tien",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây cảnh để bàn",
    children: "Cây kim tiền",
    price: 250000,
    discount: 0,
    quantity: 10,
    brand: {},
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Cây Kim Tiền mang đến tài lộc, dễ chăm sóc, thích hợp để bàn làm việc.",
    additionalInformation: [
      { key: "Chiều cao", value: "30-40cm" },
      { key: "Ánh sáng", value: "Ánh sáng yếu" },
    ],
    featured: false,
    sellCount: 8,
    tags: ["Cây để bàn", "Kim Tiền", "Trang trí nội thất"],
  },
  {
    _id: "641e887d05f9ee1717e1348c",
    sku: "NTB7SDVX46",
    img: "https://example.com/cay-phat-tai.png",
    title: "Cây Phát Tài",
    slug: "cay-phat-tai",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây cảnh để bàn",
    children: "Cây phát tài",
    price: 220000,
    discount: 0,
    quantity: 12,
    brand: {},
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Cây Phát Tài mang lại may mắn, phù hợp với không gian sống và văn phòng.",
    additionalInformation: [
      { key: "Chiều cao", value: "40-50cm" },
      { key: "Ánh sáng", value: "Ánh sáng trung bình" },
    ],
    featured: false,
    sellCount: 3,
    tags: ["Cây để bàn", "Phát Tài", "Trang trí"],
  },
  {
    _id: "641e887d05f9ee1717e1348d",
    sku: "NTB7SDVX47",
    img: "https://example.com/cay-trau-ba.png",
    title: "Cây Trầu Bà",
    slug: "cay-trau-ba",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây thuỷ sinh",
    children: "Cây trầu bà",
    price: 180000,
    discount: 0,
    quantity: 20,
    brand: {},
    category: {
      name: "Cây thuỷ sinh",
      id: "6419723bd7dc5155c04350d4",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Cây Trầu Bà rất thích hợp trang trí trong bể cá hay thủy sinh, giúp lọc nước và tạo không gian xanh.",
    additionalInformation: [
      { key: "Chiều cao", value: "15-25cm" },
      { key: "Ánh sáng", value: "Ánh sáng tự nhiên" },
    ],
    featured: true,
    sellCount: 7,
    tags: ["Cây thuỷ sinh", "Trầu Bà", "Trang trí"],
  },
  {
    _id: "641e887d05f9ee1717e1348e",
    sku: "NTB7SDVX48",
    img: "https://example.com/reeu-thuy-sinh.png",
    title: "Rêu Thủy Sinh",
    slug: "reu-thuy-sinh",
    unit: "1 mảng",
    imageURLs: [],
    parent: "Cây thuỷ sinh",
    children: "Rêu thuỷ sinh",
    price: 120000,
    discount: 0,
    quantity: 25,
    brand: {},
    category: {
      name: "Cây thuỷ sinh",
      id: "6419723bd7dc5155c04350d4",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Rêu thủy sinh giúp tạo lớp nền xanh và trang trí bể cá một cách sinh động.",
    additionalInformation: [
      { key: "Kích thước", value: "10x10cm" },
      { key: "Ánh sáng", value: "Ánh sáng yếu" },
    ],
    featured: false,
    sellCount: 5,
    tags: ["Cây thuỷ sinh", "Rêu", "Trang trí bể cá"],
  },
  {
    _id: "641e887d05f9ee1717e1348f",
    sku: "NTB7SDVX49",
    img: "https://example.com/chau-nho.png",
    title: "Chậu đất nung nhỏ",
    slug: "chau-dat-nung-nho",
    unit: "1 chậu",
    imageURLs: [],
    parent: "Chậu đất nung",
    children: "Chậu nhỏ",
    price: 50000,
    discount: 0,
    quantity: 50,
    brand: {},
    category: {
      name: "Chậu đất nung",
      id: "6419723bd7dc5155c04350d5",
    },
    status: "in-stock",
    reviews: [],
    productType: "pots",
    description:
      "Chậu đất nung nhỏ phù hợp với cây cảnh mini và trang trí bàn làm việc.",
    additionalInformation: [
      { key: "Đường kính", value: "10cm" },
      { key: "Chất liệu", value: "Đất nung" },
    ],
    featured: false,
    sellCount: 12,
    tags: ["Chậu đất nung", "Chậu nhỏ", "Trang trí cây cảnh"],
  },
  {
    _id: "641e887d05f9ee1717e13490",
    sku: "NTB7SDVX50",
    img: "https://example.com/chau-vuong.png",
    title: "Chậu bonsai vuông",
    slug: "chau-bonsai-vuong",
    unit: "1 chậu",
    imageURLs: [],
    parent: "Chậu bonsai",
    children: "Chậu vuông",
    price: 80000,
    discount: 0,
    quantity: 30,
    brand: {},
    category: {
      name: "Chậu bonsai",
      id: "6419723bd7dc5155c04350d6",
    },
    status: "in-stock",
    reviews: [],
    productType: "pots",
    description:
      "Chậu bonsai vuông là lựa chọn lý tưởng cho việc trồng bonsai, tạo điểm nhấn nghệ thuật.",
    additionalInformation: [
      { key: "Kích thước", value: "15x15cm" },
      { key: "Chất liệu", value: "Gốm sứ" },
    ],
    featured: true,
    sellCount: 9,
    tags: ["Chậu bonsai", "Chậu vuông", "Trang trí bonsai"],
  },
  {
    _id: "641e887d05f9ee1717e13492",
    sku: "NTB7SDVX51",
    img: "https://example.com/cay-lan-y.png",
    title: "Cây Lan Ý",
    slug: "cay-lan-y",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây cảnh để bàn",
    children: "Cây Lan Ý",
    price: 230000,
    discount: 0,
    quantity: 18,
    brand: {},
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Cây Lan Ý giúp thanh lọc không khí và mang lại sự bình an, thích hợp trang trí phòng làm việc.",
    additionalInformation: [
      { key: "Chiều cao", value: "25-35cm" },
      { key: "Ánh sáng", value: "Ánh sáng gián tiếp" },
    ],
    featured: false,
    sellCount: 6,
    tags: ["Cây để bàn", "Lan Ý", "Trang trí nội thất"],
  },
  {
    _id: "641e887d05f9ee1717e13493",
    sku: "NTB7SDVX52",
    img: "https://example.com/cay-beo.png",
    title: "Cây Bèo",
    slug: "cay-beo",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây thuỷ sinh",
    children: "Cây bèo",
    price: 90000,
    discount: 0,
    quantity: 30,
    brand: {},
    category: {
      name: "Cây thuỷ sinh",
      id: "6419723bd7dc5155c04350d4",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Cây Bèo là cây thủy sinh dễ chăm sóc, có khả năng lọc nước và tạo không gian xanh cho bể cá.",
    additionalInformation: [
      { key: "Kích thước", value: "5-10cm" },
      { key: "Ánh sáng", value: "Ánh sáng yếu" },
    ],
    featured: false,
    sellCount: 15,
    tags: ["Cây thuỷ sinh", "Bèo", "Trang trí bể cá"],
  },
  {
    _id: "641e887d05f9ee1717e13494",
    sku: "NTB7SDVX53",
    img: "https://example.com/chau-trung.png",
    title: "Chậu đất nung trung",
    slug: "chau-dat-nung-trung",
    unit: "1 chậu",
    imageURLs: [],
    parent: "Chậu đất nung",
    children: "Chậu trung",
    price: 70000,
    discount: 0,
    quantity: 40,
    brand: {},
    category: {
      name: "Chậu đất nung",
      id: "6419723bd7dc5155c04350d5",
    },
    status: "in-stock",
    reviews: [],
    productType: "pots",
    description:
      "Chậu đất nung trung phù hợp với cây cảnh trung bình, tạo không gian xanh cho ngôi nhà.",
    additionalInformation: [
      { key: "Đường kính", value: "15cm" },
      { key: "Chất liệu", value: "Đất nung" },
    ],
    featured: false,
    sellCount: 8,
    tags: ["Chậu đất nung", "Chậu trung", "Trang trí cây cảnh"],
  },
  {
    _id: "641e887d05f9ee1717e13495",
    sku: "NTB7SDVX54",
    img: "https://example.com/chau-tron.png",
    title: "Chậu bonsai tròn",
    slug: "chau-bonsai-tron",
    unit: "1 chậu",
    imageURLs: [],
    parent: "Chậu bonsai",
    children: "Chậu tròn",
    price: 85000,
    discount: 0,
    quantity: 35,
    brand: {},
    category: {
      name: "Chậu bonsai",
      id: "6419723bd7dc5155c04350d6",
    },
    status: "in-stock",
    reviews: [],
    productType: "pots",
    description:
      "Chậu bonsai tròn là lựa chọn hoàn hảo cho các loại bonsai nhỏ, giúp trang trí không gian sống.",
    additionalInformation: [
      { key: "Đường kính", value: "14cm" },
      { key: "Chất liệu", value: "Gốm sứ" },
    ],
    featured: true,
    sellCount: 10,
    tags: ["Chậu bonsai", "Chậu tròn", "Trang trí bonsai"],
  },
  {
    _id: "641e887d05f9ee1717e13496",
    sku: "NTB7SDVX55",
    img: "https://example.com/cay-chanh.png",
    title: "Cây Chanh",
    slug: "cay-chanh",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây ăn trái",
    children: "Cây chanh",
    price: 300000,
    discount: 0,
    quantity: 15,
    brand: {},
    category: {
      name: "Cây ăn trái",
      id: "6419723bd7dc5155c04350d7",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Cây Chanh dễ chăm sóc, thích hợp trồng tại nhà, cung cấp trái và giúp làm đẹp không gian.",
    additionalInformation: [
      { key: "Chiều cao", value: "40-50cm" },
      { key: "Ánh sáng", value: "Ánh sáng trực tiếp" },
    ],
    featured: true,
    sellCount: 5,
    tags: ["Cây ăn trái", "Chanh", "Trang trí vườn nhà"],
  },
  {
    _id: "641e887d05f9ee1717e13497",
    sku: "NTB7SDVX56",
    img: "https://example.com/sen-da-xanh.png",
    title: "Sen Đá Xanh",
    slug: "sen-da-xanh",
    unit: "1 cây",
    imageURLs: [],
    parent: "Sen đá, xương rồng",
    children: "Sen đá xanh",
    price: 120000,
    discount: 0,
    quantity: 25,
    brand: {},
    category: {
      name: "Sen đá, xương rồng",
      id: "64200cb921162f8b15beae3e",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Sen Đá Xanh là loài cây nhỏ gọn, dễ chăm sóc, phù hợp với không gian nhỏ và bàn làm việc.",
    additionalInformation: [
      { key: "Chiều cao", value: "5-10cm" },
      { key: "Ánh sáng", value: "Ánh sáng yếu" },
    ],
    featured: false,
    sellCount: 20,
    tags: ["Sen đá", "Trang trí nội thất", "Cây mini"],
  },
  {
    _id: "641e887d05f9ee1717e13498",
    sku: "NTB7SDVX57",
    img: "https://example.com/cay-day-nhen.png",
    title: "Cây Dây Nhện",
    slug: "cay-day-nhen",
    unit: "1 cây",
    imageURLs: [],
    parent: "Cây chậu treo",
    children: "Dây nhện",
    price: 180000,
    discount: 0,
    quantity: 20,
    brand: {},
    category: {
      name: "Cây chậu treo",
      id: "64200cef21162f8b15beae40",
    },
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description:
      "Cây Dây Nhện phù hợp trồng trong chậu treo, giúp không gian thêm tươi mát và sinh động.",
    additionalInformation: [
      { key: "Chiều dài", value: "15-20cm" },
      { key: "Ánh sáng", value: "Ánh sáng gián tiếp" },
    ],
    featured: true,
    sellCount: 9,
    tags: ["Cây treo", "Dây Nhện", "Trang trí nhà cửa"],
  },

  {
    sku: "CCT-001",
    img: "https://example.com/images/cactus-main.jpg",
    title: "Cây Xương Rồng Sa Mạc",
    slug: "cay-xuong-rong-sa-mac",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cactus-1.jpg"
      },
      {
        img: "https://example.com/images/cactus-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây xương rồng",
    price: 150000,
    discount: 10000,
    quantity: 50,
    category: {
      name: "Cây trang trí trong nhà",
      id: "634c1f0a8231c7361b0f1a23" 
    },
  
    status: "in-stock",
    reviews: [],
    productType: "plants",
    description: "Cây xương rồng sa mạc có kích thước nhỏ gọn, dễ chăm sóc, phù hợp trang trí không gian trong nhà hoặc văn phòng.",
    videoId: "abcd1234",
    additionalInformation: [
      {
        sunlight: "Ánh sáng tự nhiên hoặc ánh sáng đèn điện"
      },
      {
        water: "Tưới nước 1-2 lần/tuần, đảm bảo đất khô ráo trước khi tưới"
      },
      {
        fertilizer: "Bón phân nhẹ mỗi 3 tháng"
      }
    ],
    tags: ["cay-xuong-rong", "cay-canh-trang-tri", "cay-noi-that"],
    sizes: ["Nhỏ", "Trung bình"],

    featured: true,
    sellCount: 120
  },

  {
    sku: "CCT-001",
    img: "https://example.com/images/cactus-main.jpg",
    title: "Cây Xương Rồng Sa Mạc",
    slug: "cay-xuong-rong-sa-mac",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cactus-1.jpg"
      },
      {
        img: "https://example.com/images/cactus-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây xương rồng",
    price: 150000,
    discount: 10000,
    quantity: 50,
    category: {
      name: "Cây trang trí trong nhà",
      id: "634c1f0a8231c7361b0f1a23" 
    },
   
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây xương rồng sa mạc có kích thước nhỏ gọn, dễ chăm sóc, phù hợp trang trí không gian trong nhà hoặc văn phòng.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng tự nhiên hoặc ánh sáng đèn điện"
      },
      {
        water: "Tưới nước 1-2 lần/tuần, đảm bảo đất khô ráo trước khi tưới"
      },
      {
        fertilizer: "Bón phân nhẹ mỗi 3 tháng"
      }	
    ],
    tags: ["cay-xuong-rong", "cay-canh-trang-tri", "cay-noi-that"],
    sizes: ["Nhỏ", "Trung bình"],

    featured: true,
    sellCount: 120
  },
  
  //Cây Thiết Môc Lan 
  {
    sku: "TML-001",
    img: "https://example.com/images/thiet-moc-lan-main.jpg",
    title: "Cây Thiết Mộc Lan Phát Tài",
    slug: "cay-thiet-moc-lan-phat-tai",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://mowgarden.com/wp-content/uploads/2023/07/cay-phat-tai-bo-mowgarden.jpg"
      },
      {
        img: "https://example.com/images/thiet-moc-lan-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây phong thủy",
    price: 450000,
    discount: 50000,
    quantity: 30,
    category: {
      name: "Cây trang trí trong nhà",
      id: "634c1f0a8231c7361b0f1b56" 
    },
  
    status: "in-stock",
      reviews: [ ],
      productType: "plants",
    description: "Cây Thiết Mộc Lan mang lại ý nghĩa phong thủy, đem lại tài lộc và sự phát triển, thích hợp trang trí không gian nhà ở hoặc văn phòng.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc ánh sáng nhẹ trong nhà"
      },
      {
        water: "Tưới nước 2-3 lần/tuần, giữ ẩm vừa đủ cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 2 tháng"
      }
    ],
    tags: ["cay-thiet-moc-lan", "cay-phong-thuy", "cay-trang-tri"],
    sizes: ["Nhỏ", "Trung bình", "Lớn"],

    featured: true,
    sellCount: 80
  },
  
  //Cây Kim Ngân Ba Thân Để Bàn Chậu Sứ Gấu
  
  
  {
    sku: "KNB-001",
    img: "https://example.com/images/kim-ngan-ba-than-main.jpg",
    title: "Cây Kim Ngân Ba Thân Để Bàn Chậu Sứ Gấu",
    slug: "cay-kim-ngan-ba-than-chau-su-gau",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/kim-ngan-ba-than-1.jpg"
      },
      {
        img: "https://example.com/images/kim-ngan-ba-than-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 350000,
    discount: 20000,
    quantity: 40,
    category: {
      name: "Cây trang trí trong nhà",
      id: "634c1f0a8231c7361b0f1d34"
    },
 
    status: "in-stock",
      reviews: [ ],
      productType: "plants",
    description: "Cây Kim Ngân Ba Thân với chậu sứ hình gấu dễ thương, mang ý nghĩa phong thủy tài lộc, phù hợp trang trí bàn làm việc hoặc không gian sống.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng nhẹ hoặc bóng râm"
      },
      {
        water: "Tưới nước 1-2 lần/tuần, tránh để cây bị úng nước"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 3 tháng"
      }
    ],
    tags: ["cay-kim-ngan", "cay-phong-thuy", "cay-de-ban", "chậu-sứ-gấu"],
    sizes: ["Nhỏ", "Vừa"],

    featured: true,
    sellCount: 100
  },
  
  //Cây Trầu Bà Đế Vương Xanh Chậu Mặt Cool ‘Imperial Green’ Chậu Sứ
  
  
  {
    sku: "TBDV-001",
    img: "https://example.com/images/trau-ba-de-vuong-main.jpg",
    title: "Cây Trầu Bà Đế Vương Xanh Chậu Mặt Cool 'Imperial Green' Chậu Sứ",
    slug: "cay-trau-ba-de-vuong-xanh-chau-su",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/trau-ba-de-vuong-1.jpg"
      },
      {
        img: "https://example.com/images/trau-ba-de-vuong-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 500000,
    discount: 30000,
    quantity: 25,
    category: {
      name: "Cây trang trí trong nhà",
      id: "634c1f0a8231c7361b0f1e22"
    },
   
    status: "in-stock",
        reviews: [ ],
        productType: "plants",
    description: "Cây Trầu Bà Đế Vương Xanh với lá xanh mượt, khỏe khoắn, mang lại không khí tươi mới. Chậu sứ thiết kế đẹp mắt, phù hợp trang trí bàn làm việc, phòng khách hoặc không gian sống.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp, có thể đặt trong nhà"
      },
      {
        water: "Tưới ẩm 1-2 lần/tuần, tránh để cây bị ngập úng"
      },
      {
        fertilizer: "Bón phân loãng mỗi 1-2 tháng"
      }
    ],
    tags: ["cay-trau-ba", "cay-de-vuong", "cay-trang-tri", "chậu-su"],
    sizes: ["Nhỏ", "Trung bình"],

    featured: true,
    sellCount: 75
  },
  
   //Cây Cỏ Lan Chi Để Bàn Chậu Sứ Mặt Cười
  
  {
    sku: "CLC-001",
    img: "https://example.com/images/co-lan-chi-main.jpg",
    title: "Cây Cỏ Lan Chi Để Bàn Chậu Sứ Mặt Cười",
    slug: "cay-co-lan-chi-chau-su-mat-cuoi",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/co-lan-chi-1.jpg"
      },
      {
        img: "https://example.com/images/co-lan-chi-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 200000,
    discount: 15000,
    quantity: 60,
    category: {
      name: "Cây trang trí trong nhà",
      id: "634c1f0a8231c7361b0f1f77"
    },
   
    status: "in-stock",
       reviews: [ ],
    productType: "plants",
    description: "Cây Cỏ Lan Chi nhỏ nhắn, phù hợp trang trí bàn làm việc, bàn học, giúp thanh lọc không khí. Chậu sứ mặt cười mang lại cảm giác vui tươi, dễ thương.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng nhẹ hoặc ánh sáng gián tiếp"
      },
      {
        water: "Tưới nước mỗi 3-4 ngày, giữ độ ẩm cho đất"
      },
      {
        fertilizer: "Bón phân mỗi 2 tháng để cây phát triển tốt"
      }
    ],
    tags: ["cay-co-lan-chi", "cay-de-ban", "cay-noi-that", "chậu-su"],
    sizes: ["Nhỏ"],

    featured: true,
    sellCount: 150
  },
  
  //Cây Trầu Bà Đế Vương Đỏ Để Bàn ‘Red Rojo’ Chậu Sứ
  
  {
    sku: "TBDVD-001",
    img: "https://example.com/images/trau-ba-de-vuong-do-main.jpg",
    title: "Cây Trầu Bà Đế Vương Đỏ Để Bàn 'Red Rojo' Chậu Sứ",
    slug: "cay-trau-ba-de-vuong-do-red-rojo-chau-su",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/trau-ba-de-vuong-do-1.jpg"
      },
      {
        img: "https://example.com/images/trau-ba-de-vuong-do-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 550000,
    discount: 40000,
    quantity: 20,
    category: {
      name: "Cây trang trí trong nhà",
      id: "641d424bdbfab7b02ab28b95"
    },
    
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây Trầu Bà Đế Vương Đỏ 'Red Rojo' với lá đỏ đặc trưng, nổi bật và sang trọng. Phù hợp trang trí không gian phòng khách, bàn làm việc, tạo sự quý phái và thẩm mỹ cho không gian sống.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc ánh sáng nhẹ"
      },
      {
        water: "Tưới nước 2 lần/tuần, duy trì độ ẩm cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 1-2 tháng"
      }
    ],
    tags: ["cay-trau-ba-de-vuong-do", "cay-de-ban", "cay-trang-tri-noi-that", "chậu-sứ"],
    sizes: ["Nhỏ", "Vừa"],

    featured: true,
    sellCount: 85
  },
  
  
  //Cây Lưỡi Hổ Bantel Sensation Chậu Ươm
  
  
  {
    sku: "LHB-001",
    img: "https://example.com/images/luoi-ho-bantel-sensation-main.jpg",
    title: "Cây Lưỡi Hổ Bantel Sensation Chậu Ươm",
    slug: "cay-luoi-ho-bantel-sensation-chau-uom",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/luoi-ho-bantel-sensation-1.jpg"
      },
      {
        img: "https://example.com/images/luoi-ho-bantel-sensation-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 300000,
    discount: 20000,
    quantity: 35,
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95",
    },
  
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây Lưỡi Hổ Bantel Sensation với lá vươn thẳng, mang lại cảm giác thanh lịch và sang trọng. Cây có khả năng thanh lọc không khí, phù hợp để trang trí bàn làm việc hoặc không gian sống.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp, có thể đặt nơi râm mát"
      },
      {
        water: "Tưới nước mỗi 7-10 ngày, không cần quá nhiều nước"
      },
      {
        fertilizer: "Bón phân mỗi 3 tháng"
      }
    ],
    tags: ["cay-luoi-ho", "cay-de-ban", "cay-thanh-loc-khong-khi", "chậu-uom"],
    sizes: ["Nhỏ", "Trung bình"],

    featured: true,
    sellCount: 90
  },
  
  //Cây Hạnh Phúc Để Sàn 2 Tầng Lớn Chậu Đá Mài
  
  
  {
    sku: "CHP-001",
    img: "https://example.com/images/cay-hanh-phuc-2-tang-main.jpg",
    title: "Cây Hạnh Phúc Để Sàn 2 Tầng Lớn Chậu Đá Mài",
    slug: "cay-hanh-phuc-de-san-2-tang-chau-da-mai",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hanh-phuc-2-tang-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hanh-phuc-2-tang-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sàn",
    price: 1200000,
    discount: 100000,
    quantity: 15,
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95",
    },
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây Hạnh Phúc với dáng cao, tán rộng, mang ý nghĩa may mắn và hạnh phúc cho gia chủ. Chậu đá mài chắc chắn, sang trọng, phù hợp trang trí phòng khách, sảnh văn phòng hay khu vực sân vườn.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc nắng nhẹ buổi sáng"
      },
      {
        water: "Tưới nước 2 lần/tuần, giữ ẩm cho đất nhưng tránh ngập úng"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 2 tháng"
      }
    ],
    tags: ["cay-hanh-phuc", "cay-de-san", "cay-phong-thuy", "chậu-da-mai"],
    sizes: ["Lớn"],

    featured: true,
    sellCount: 50
  },
  
  
  //Cây Cỏ Lan Chi Để Bàn Chậu Sứ Mặt Cười
  
  {
    sku: "CLC-001",
    img: "https://example.com/images/co-lan-chi-chau-su-mat-cuoi-main.jpg",
    title: "Cây Cỏ Lan Chi Để Bàn Chậu Sứ Mặt Cười",
    slug: "cay-co-lan-chi-chau-su-mat-cuoi",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/co-lan-chi-chau-su-mat-cuoi-1.jpg"
      },
      {
        img: "https://example.com/images/co-lan-chi-chau-su-mat-cuoi-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 180000,
    discount: 10000,
    quantity: 45,
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95",
    },
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây Cỏ Lan Chi nhỏ xinh, dễ chăm sóc với chậu sứ mặt cười mang lại niềm vui và sức sống cho không gian làm việc, bàn học hoặc phòng khách.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc nắng nhẹ"
      },
      {
        water: "Tưới nước mỗi 3-4 ngày, duy trì độ ẩm vừa phải cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 2 tháng để cây phát triển xanh tốt"
      }
    ],
    tags: ["cay-co-lan-chi", "cay-noi-that", "cay-de-ban", "chậu-sứ-mặt-cười"],
    sizes: ["Nhỏ"],
  
    featured: true,
    sellCount: 65
  },
  
  //Cây Hồng Môn Cỡ Nhỏ Chậu Sứ Trắng
  
  {
    sku: "HM-001",
    img: "https://example.com/images/cay-hong-mon-chau-su-trang-main.jpg",
    title: "Cây Hồng Môn Cỡ Nhỏ Chậu Sứ Trắng",
    slug: "cay-hong-mon-co-nho-chau-su-trang",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hong-mon-chau-su-trang-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hong-mon-chau-su-trang-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 250000,
    discount: 20000,
    quantity: 50,
    category: {
      name: "Sen đá, xương rồng",
      id: "64200cb921162f8b15beae3e"
    },
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây Hồng Môn với hoa đỏ rực rỡ, lá xanh bóng, mang lại sự may mắn và thịnh vượng. Chậu sứ trắng tạo nét thanh lịch và phù hợp trang trí bàn làm việc, phòng khách hay phòng ăn.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng nhẹ, đặt nơi có bóng râm"
      },
      {
        water: "Tưới nước 2-3 lần/tuần, đảm bảo đất luôn ẩm"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 2 tháng để cây phát triển tốt"
      }
    ],
    tags: ["cay-hong-mon", "cay-trang-tri", "cay-de-ban", "chậu-sứ-trắng"],
    sizes: ["Nhỏ"],
  
    featured: true,
    sellCount: 70
  },
  
  //Cây Ngũ Gia Bì Cẩm Thạch Nhỏ Chậu Ươm
  
    {
    sku: "NGB-001",
    img: "https://example.com/images/ngu-gia-bi-cam-thach-chau-uom-main.jpg",
    title: "Cây Ngũ Gia Bì Cẩm Thạch Nhỏ Chậu Ươm",
    slug: "cay-ngu-gia-bi-cam-thach-chau-uom",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/ngu-gia-bi-cam-thach-chau-uom-1.jpg"
      },
      {
        img: "https://example.com/images/ngu-gia-bi-cam-thach-chau-uom-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để bàn",
    price: 220000,
    discount: 15000,
    quantity: 30,
    category: {
      name: "Chậu đất nung",
      id: "6419723bd7dc5155c04350d5"
    },
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây Ngũ Gia Bì Cẩm Thạch với lá màu xanh trắng độc đáo, mang lại cảm giác tươi mát và thanh lịch. Chậu ươm nhỏ gọn, dễ chăm sóc và phù hợp trang trí bàn làm việc, không gian sống.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp, thích hợp nơi râm mát"
      },
      {
        water: "Tưới nước mỗi 3-5 ngày, giữ đất ẩm nhưng tránh ngập úng"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 1-2 tháng để cây xanh tốt"
      }
    ],
    tags: ["cay-ngu-gia-bi", "cay-cam-thach", "cay-de-ban", "chậu-uom"],
    sizes: ["Nhỏ"],
   
    featured: true,
    sellCount: 40
  },
  
  
  //Cây Hạnh Phúc Gốc To
  
  {
    sku: "CHPG-001",
    img: "https://example.com/images/cay-hanh-phuc-goc-to-main.jpg",
    title: "Cây Hạnh Phúc Gốc To",
    slug: "cay-hanh-phuc-goc-to",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hanh-phuc-goc-to-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hanh-phuc-goc-to-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sàn",
    price: 1800000,
    discount: 150000,
    quantity: 10,
    category: {
      name: "Chậu bonsai",
      id: "6419723bd7dc5155c04350d6"
    },
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Hạnh Phúc gốc to, dáng thẳng và tán lá rộng, mang lại sự sang trọng và xanh tươi cho không gian. Phù hợp trang trí phòng khách, sảnh văn phòng hoặc không gian sân vườn.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp, hoặc nắng nhẹ buổi sáng"
      },
      {
        water: "Tưới nước mỗi 4-5 ngày, giữ đất ẩm vừa phải"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 1-2 tháng để cây phát triển tốt"
      }
    ],
    tags: ["cay-hanh-phuc", "cay-de-san", "cay-trang-tri-noi-that", "chậu-gốm"],
    sizes: ["To"],
  
    featured: true,
    sellCount: 25
  },
  
  
  //Cây Trúc Nhật Vàng
  
  {
    sku: "TN-001",
    img: "https://example.com/images/cay-truc-nhat-vang-main.jpg",
    title: "Cây Trúc Nhật Vàng",
    slug: "cay-truc-nhat-vang",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-truc-nhat-vang-1.jpg"
      },
      {
        img: "https://example.com/images/cay-truc-nhat-vang-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sàn",
    price: 350000,
    discount: 25000,
    quantity: 20,
    category: {
      name: "Cây chậu treo",
      id: "64200cef21162f8b15beae40"
    },
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Trúc Nhật Vàng có dáng thanh mảnh, lá xanh viền vàng đẹp mắt, dễ chăm sóc. Phù hợp trang trí văn phòng, phòng khách hoặc lối đi trong nhà, mang đến không gian xanh tươi mát.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng nhẹ hoặc gián tiếp"
      },
      {
        water: "Tưới nước 1-2 lần/tuần, đảm bảo đất không bị khô hoàn toàn"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 2-3 tháng để cây phát triển"
      }
    ],
    tags: ["cay-truc-nhat", "cay-de-san", "cay-trang-tri-noi-that", "chậu-nhựa"],
    sizes: ["Nhỏ", "Trung bình"],
  
    featured: true,
    sellCount: 30
  },
  
  //Cây Hoa Dẻ Vàng
  
  {
    sku: "HDV-001",
    img: "https://example.com/images/cay-hoa-de-vang-main.jpg",
    title: "Cây Hoa Dẻ Vàng",
    slug: "cay-hoa-de-vang",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hoa-de-vang-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hoa-de-vang-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sân vườn",
    price: 450000,
    discount: 30000,
    quantity: 15,
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95"
    },
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Hoa Dẻ Vàng với hoa màu vàng tươi, hương thơm dễ chịu, là sự lựa chọn tuyệt vời để trang trí sân vườn, mang lại không gian rực rỡ và tươi mát.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng trực tiếp, thích hợp trồng nơi có nhiều nắng"
      },
      {
        water: "Tưới nước đều đặn 2-3 lần/tuần, duy trì độ ẩm cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi tháng để hoa nở đẹp"
      }
    ],
    tags: ["cay-hoa-de", "cay-san-vuon", "cay-hoa-mau-vang", "chậu-dat-nung"],
    sizes: ["Trung bình", "Lớn"],
    
    featured: true,
    sellCount: 20
  },
  
  //Cây Hoa Dẻ Vàng
  
  {
    sku: "HDV-001",
    img: "https://example.com/images/cay-hoa-de-vang-main.jpg",
    title: "Cây Hoa Dẻ Vàng",
    slug: "cay-hoa-de-vang",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hoa-de-vang-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hoa-de-vang-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sân vườn",
    price: 450000,
    discount: 30000,
    quantity: 15,
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95"
    },
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Hoa Dẻ Vàng với hoa màu vàng tươi, hương thơm dễ chịu, là sự lựa chọn tuyệt vời để trang trí sân vườn, mang lại không gian rực rỡ và tươi mát.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng trực tiếp, thích hợp trồng nơi có nhiều nắng"
      },
      {
        water: "Tưới nước đều đặn 2-3 lần/tuần, duy trì độ ẩm cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi tháng để hoa nở đẹp"
      }
    ],
    tags: ["cay-hoa-de", "cay-san-vuon", "cay-hoa-mau-vang", "chậu-dat-nung"],
    sizes: ["Trung bình", "Lớn"],
  
    featured: true,
    sellCount: 20
  },
   
  //Cây Kim Ngân Củ To
  
  {
    sku: "KNC-001",
    img: "https://example.com/images/cay-kim-ngan-cu-to-main.jpg",
    title: "Cây Kim Ngân Củ To",
    slug: "cay-kim-ngan-cu-to",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-kim-ngan-cu-to-1.jpg"
      },
      {
        img: "https://example.com/images/cay-kim-ngan-cu-to-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây phong thủy",
    price: 1200000,
    discount: 100000,
    quantity: 12,
    category: {
      name: "Cây thuỷ sinh",
      id: "6419723bd7dc5155c04350d4"
    },
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Kim Ngân củ to với thân củ đặc trưng, tượng trưng cho sự giàu có và thịnh vượng. Chậu sứ cao cấp làm nổi bật vẻ đẹp của cây, thích hợp trang trí phòng khách, văn phòng làm việc hoặc không gian sinh hoạt.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp, có thể đặt nơi râm mát"
      },
      {
        water: "Tưới nước mỗi 5-7 ngày, giữ độ ẩm vừa phải"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 1-2 tháng để cây phát triển tốt"
      }
    ],
    tags: ["cay-kim-ngan", "cay-phong-thuy", "cay-trang-tri", "chậu-sứ"],
    sizes: ["To"],
   
    featured: true,
    sellCount: 35
  },
  
  //Cây Hạnh Phúc Dáng Tree To
  
  {
    sku: "CHPT-002",
    img: "https://example.com/images/cay-hanh-phuc-dang-tree-to-main.jpg",
    title: "Cây Hạnh Phúc Dáng Tree To",
    slug: "cay-hanh-phuc-dang-tree-to",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hanh-phuc-dang-tree-to-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hanh-phuc-dang-tree-to-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây phong thủy",
    price: 2500000,
    discount: 200000,
    quantity: 8,
    category: {
      name: "Chậu bonsai",
      id: "6419723bd7dc5155c04350d6"
    },
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Hạnh Phúc dáng Tree to, với tán lá rộng và xanh tươi, tạo điểm nhấn nổi bật cho không gian nhà hoặc văn phòng. Mang đến ý nghĩa phong thủy tích cực, đem lại sự may mắn và tài lộc.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc nắng nhẹ"
      },
      {
        water: "Tưới nước 2 lần/tuần, giữ đất ẩm vừa phải"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 1-2 tháng để cây luôn xanh tốt"
      }
    ],
    tags: ["cay-hanh-phuc", "cay-phong-thuy", "cay-trang-tri", "chậu-sứ"],
    sizes: ["To"],
    
    featured: true,
    sellCount: 15
  },
  
  //Cây Hoa Tường Vi
  
  {
    sku: "HTV-001",
    img: "https://example.com/images/cay-hoa-tuong-vi-main.jpg",
    title: "Cây Hoa Tường Vi",
    slug: "cay-hoa-tuong-vi",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hoa-tuong-vi-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hoa-tuong-vi-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sân vườn",
    price: 400000,
    discount: 50000,
    quantity: 25,
    category: {
      name: "Cây chậu treo",
      id: "64200cef21162f8b15beae40"
    },

    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Hoa Tường Vi với hoa màu hồng tím rực rỡ, cánh hoa nhỏ xinh và lâu tàn, mang lại vẻ đẹp mềm mại cho khu vườn hoặc sân nhà bạn.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng trực tiếp hoặc nơi có nhiều nắng"
      },
      {
        water: "Tưới nước đều đặn 2-3 lần/tuần, đảm bảo đất luôn ẩm"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi tháng để cây ra hoa đẹp"
      }
    ],
    tags: ["cay-hoa-tuong-vi", "cay-san-vuon", "cay-hoa", "chậu-dat-nung"],
    sizes: ["Trung bình", "Lớn"],
    
    featured: true,
    sellCount: 18
  },
  
  //Cây Hoa Giấy
  
  {
    sku: "HGG-001",
    img: "https://example.com/images/cay-hoa-giay-main.jpg",
    title: "Cây Hoa Giấy",
    slug: "cay-hoa-giay",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hoa-giay-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hoa-giay-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sân vườn",
    price: 500000,
    discount: 50000,
    quantity: 30,
    category: {
      name: "Cây chậu treo",
      id: "64200cef21162f8b15beae40"
    },

    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Hoa Giấy với hoa nở rực rỡ, đa dạng màu sắc từ hồng, đỏ đến cam và trắng. Thích hợp trang trí sân vườn, ban công, hoặc làm cây leo tường, mang lại không gian sống động và tươi mới.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng trực tiếp, trồng nơi có nhiều nắng"
      },
      {
        water: "Tưới nước vừa phải, 1-2 lần/tuần, tránh tưới quá nhiều"
      },
      {
        fertilizer: "Bón phân định kỳ mỗi 2 tháng để hoa nở đều và đẹp"
      }
    ],
    tags: ["cay-hoa-giay", "cay-san-vuon", "cay-hoa", "chậu-xi-măng"],
    sizes: ["Trung bình", "Lớn"],
   
    featured: true,
    sellCount: 40
  },
  
  //Cây Huyết Dụ
  
  {
    sku: "HGG-001",
    img: "https://example.com/images/cay-hoa-giay-main.jpg",
    title: "Cây Hoa Giấy",
    slug: "cay-hoa-giay",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-hoa-giay-1.jpg"
      },
      {
        img: "https://example.com/images/cay-hoa-giay-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây để sân vườn",
    price: 500000,
    discount: 50000,
    quantity: 30,
    category: {
      name: "Cây cảnh để bàn",
      id: "641d424bdbfab7b02ab28b95"
    },

    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Hoa Giấy với hoa nở rực rỡ, đa dạng màu sắc từ hồng, đỏ đến cam và trắng. Thích hợp trang trí sân vườn, ban công, hoặc làm cây leo tường, mang lại không gian sống động và tươi mới.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng trực tiếp, trồng nơi có nhiều nắng"
      },
      {
        water: "Tưới nước vừa phải, 1-2 lần/tuần, tránh tưới quá nhiều"
      },
      {
        fertilizer: "Bón phân định kỳ mỗi 2 tháng để hoa nở đều và đẹp"
      }
    ],
    tags: ["cay-hoa-giay", "cay-san-vuon", "cay-hoa", "chậu-xi-măng"],
    sizes: ["Trung bình", "Lớn"],
   
    featured: true,
    sellCount: 40
  },
  
  
  //Cây Cau Nga Mi
  
  {
    sku: "CNM-001",
    img: "https://example.com/images/cay-cau-nga-mi-main.jpg",
    title: "Cây Cau Nga Mi",
    slug: "cay-cau-nga-mi",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-cau-nga-mi-1.jpg"
      },
      {
        img: "https://example.com/images/cay-cau-nga-mi-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây phong thủy",
    price: 800000,
    discount: 70000,
    quantity: 15,
    category: {
      name: "Chậu đất nung",
      id: "6419723bd7dc5155c04350d5"
    },

    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Cau Nga Mi với dáng lá thanh mảnh, xanh tươi, mang lại không gian xanh mát và hiện đại. Cây có khả năng lọc không khí, phù hợp trang trí văn phòng, phòng khách, hay hành lang.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc nắng nhẹ"
      },
      {
        water: "Tưới nước mỗi 5-7 ngày, duy trì độ ẩm vừa phải cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi 1-2 tháng để cây phát triển tốt"
      }
    ],
    tags: ["cay-cau-nga-mi", "cay-phong-thuy", "cay-trang-tri", "chậu-sứ"],
    sizes: ["Lớn"],
    
    featured: true,
    sellCount: 22
  },
  
  //Cây Lộc Vừng
  
  {
    sku: "LVG-001",
    img: "https://example.com/images/cay-loc-vung-main.jpg",
    title: "Cây Lộc Vừng",
    slug: "cay-loc-vung",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-loc-vung-1.jpg"
      },
      {
        img: "https://example.com/images/cay-loc-vung-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây phong thủy",
    price: 2000000,
    discount: 150000,
    quantity: 10,
    category: {
      name: "Chậu bonsai",
      id: "6419723bd7dc5155c04350d6"
    },
 
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Lộc Vừng với dáng thân uốn lượn, hoa đỏ tươi rực rỡ tượng trưng cho tài lộc và sự phú quý. Thích hợp trang trí sân vườn, trước nhà hoặc phòng khách rộng rãi, mang lại sự may mắn và thịnh vượng.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng trực tiếp, hoặc ánh sáng nhẹ trong nhà"
      },
      {
        water: "Tưới nước mỗi 3-4 ngày, duy trì độ ẩm cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ định kỳ mỗi 1-2 tháng"
      }
    ],
    tags: ["cay-loc-vung", "cay-phong-thuy", "cay-trang-tri", "chậu-xi-măng"],
    sizes: ["Lớn"],
   
    featured: true,
    sellCount: 12
  },
  
  
  //Cây Vẩy Ốc
  {
    sku: "VYC-001",
    img: "https://example.com/images/cay-vay-oc-main.jpg",
    title: "Cây Vẩy Ốc",
    slug: "cay-vay-oc",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-vay-oc-1.jpg"
      },
      {
        img: "https://example.com/images/cay-vay-oc-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây leo và bò",
    price: 150000,
    discount: 10000,
    quantity: 50,
    category: {
      name: "Cây ăn trái",
      id: "6419723bd7dc5155c04350d7"
    },
 
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Cây Vẩy Ốc với thân leo và lá nhỏ xinh, màu xanh tươi mát, dễ chăm sóc và phát triển nhanh, thích hợp để trang trí tường, ban công hoặc làm cây nền cho các tiểu cảnh.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc nắng nhẹ buổi sáng"
      },
      {
        water: "Tưới nước mỗi 2-3 ngày, giữ ẩm cho đất"
      },
      {
        fertilizer: "Bón phân hữu cơ mỗi tháng để cây phát triển tốt"
      }
    ],
    tags: ["cay-vay-oc", "cay-leo", "cay-trang-tri", "chậu-treo"],
    sizes: ["Nhỏ", "Trung bình"],
    
    featured: true,
    sellCount: 60
  },
  
  //Sen Đá Nuda
  {
    sku: "SDN-001",
    img: "https://example.com/images/sen-da-nuda-main.jpg",
    title: "Sen Đá Nuda",
    slug: "sen-da-nuda",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/sen-da-nuda-1.jpg"
      },
      {
        img: "https://example.com/images/sen-da-nuda-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Sen đá",
    price: 80000,
    discount: 5000,
    quantity: 100,
    category: {
      name: "Sen đá, xương rồng",
      id: "64200cb921162f8b15beae3e"
    },
  
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Sen Đá Nuda với lá mọng nước, màu xanh đậm, nhỏ gọn và dễ chăm sóc, rất thích hợp để trang trí bàn làm việc, kệ sách hoặc cửa sổ.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng tự nhiên gián tiếp, hoặc nắng nhẹ buổi sáng"
      },
      {
        water: "Tưới nước mỗi 5-7 ngày, tránh để cây bị ngập úng"
      },
      {
        fertilizer: "Bón phân loãng mỗi 2-3 tháng"
      }
    ],
    tags: ["sen-da-nuda", "sen-da", "cay-de-ban", "chậu-mini"],
    sizes: ["Nhỏ"],
   
    featured: true,
    sellCount: 85
  },
  
  //Sen Đá Cúc Tím
  {
    sku: "SDCT-001",
    img: "https://example.com/images/sen-da-cuc-tim-main.jpg",
    title: "Sen Đá Cúc Tím",
    slug: "sen-da-cuc-tim",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/sen-da-cuc-tim-1.jpg"
      },
      {
        img: "https://example.com/images/sen-da-cuc-tim-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Sen đá",
    price: 90000,
    discount: 7000,
    quantity: 80,
    category: {
      name: "Sen đá, xương rồng",
      id: "64200cb921162f8b15beae3e"
    },
   
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Sen Đá Cúc Tím với lá mọng nước, cánh hoa xếp đều thành hình hoa cúc, màu tím đẹp mắt, nhỏ gọn và dễ chăm sóc, thích hợp trang trí bàn làm việc, phòng ngủ hoặc kệ sách.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp, hoặc ánh sáng nhẹ buổi sáng"
      },
      {
        water: "Tưới nước mỗi 5-7 ngày, tránh tưới quá nhiều làm úng rễ"
      },
      {
        fertilizer: "Bón phân loãng mỗi 2-3 tháng"
      }
    ],
    tags: ["sen-da-cuc-tim", "sen-da", "cay-de-ban", "chậu-mini"],
    sizes: ["Nhỏ"],
    
    featured: true,
    sellCount: 70
  },
  
  //Sen Đá Bắp Cải Tím
  {
    sku: "SDBCT-001",
    img: "https://example.com/images/sen-da-bap-cai-tim-main.jpg",
    title: "Sen Đá Bắp Cải Tím",
    slug: "sen-da-bap-cai-tim",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/sen-da-bap-cai-tim-1.jpg"
      },
      {
        img: "https://example.com/images/sen-da-bap-cai-tim-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Sen đá",
    price: 100000,
    discount: 8000,
    quantity: 70,
    category: {
      name: "Sen đá, xương rồng",
      id: "64200cb921162f8b15beae3e"
    },
   
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Sen Đá Bắp Cải Tím có lá dày mọng nước, xếp lớp như bắp cải và màu tím nhạt đẹp mắt, mang lại sự tươi mới và nổi bật cho không gian làm việc, học tập hoặc trang trí kệ sách.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng nhẹ buổi sáng hoặc ánh sáng gián tiếp"
      },
      {
        water: "Tưới nước mỗi 5-7 ngày, không để cây bị ngập úng"
      },
      {
        fertilizer: "Bón phân hữu cơ loãng mỗi 2-3 tháng"
      }
    ],
    tags: ["sen-da-bap-cai-tim", "sen-da", "cay-de-ban", "chậu-mini"],
    sizes: ["Nhỏ"],
   
    featured: true,
    sellCount: 55
  },
  
  //Sen Đá Hạt Lựu
  {
    sku: "SDHL-001",
    img: "https://example.com/images/sen-da-hat-luu-main.jpg",
    title: "Sen Đá Hạt Lựu",
    slug: "sen-da-hat-luu",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/sen-da-hat-luu-1.jpg"
      },
      {
        img: "https://example.com/images/sen-da-hat-luu-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Sen đá",
    price: 85000,
    discount: 5000,
    quantity: 75,
    category: {
      name: "Sen đá, xương rồng",
      id: "64200cb921162f8b15beae3e"
    },    
    status: "in-stock",
  reviews: [ ],
    productType: "plants",
    description: "Sen Đá Hạt Lựu có lá nhỏ tròn, mọng nước, mọc sát nhau như những hạt lựu, màu xanh ngọc tinh tế. Dễ chăm sóc và thích hợp để trang trí không gian làm việc hoặc phòng ngủ.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp, tránh ánh nắng gắt"
      },
      {
        water: "Tưới nước mỗi 5-7 ngày, đảm bảo đất luôn thoát nước tốt"
      },
      {
        fertilizer: "Bón phân loãng mỗi 2 tháng"
      }
    ],
    tags: ["sen-da-hat-luu", "sen-da", "cay-de-ban", "chậu-trang-men"],
    sizes: ["Nhỏ"],    
    featured: true,
    sellCount: 65
  },
  
  //Cây Kim Ngân Xoắn 3 Thân
  {
    sku: "KNX-001",
    img: "https://example.com/images/cay-kim-ngan-xoan-3-than-main.jpg",
    title: "Cây Kim Ngân Xoắn 3 Thân",
    slug: "cay-kim-ngan-xoan-3-than",
    unit: "chậu",
    imageURLs: [
      {
        img: "https://example.com/images/cay-kim-ngan-xoan-3-than-1.jpg"
      },
      {
        img: "https://example.com/images/cay-kim-ngan-xoan-3-than-2.jpg"
      }
    ],
    parent: "Cây cảnh",
    children: "Cây phong thủy",
    price: 1500000,
    discount: 120000,
    quantity: 10,
    category: {
      name: "Cây chậu treo",
      id: "64200cef21162f8b15beae40"
    },
  
    status: "in-stock",
    reviews: [ ],
    productType: "plants",
    description: "Cây Kim Ngân Xoắn 3 Thân với hình dáng thân xoắn độc đáo, lá xanh tươi và bóng đẹp, mang lại sự may mắn và tài lộc. Phù hợp trang trí phòng khách, văn phòng làm việc hoặc sảnh công ty.",
    additionalInformation: [
      {
        sunlight: "Ánh sáng gián tiếp hoặc nắng nhẹ buổi sáng"
      },
      {
        water: "Tưới nước mỗi 5-7 ngày, duy trì độ ẩm đất vừa phải"
      },
      {
        fertilizer: "Bón phân hữu cơ loãng mỗi 2 tháng"
      }
    ],
    tags: ["cay-kim-ngan", "cay-phong-thuy", "cay-trang-tri", "chậu-sứ"],
    sizes: ["Lớn"],
    
    featured: true,
    sellCount: 25
  }
  
  
];

module.exports = products;
