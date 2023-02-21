const PRODUCTS = [
    {
    id: "1",
    name: "Tylenol Cold+Flu Severe (24 Capsules)",
    cost:6.98,
    src: require("./productImages/TylenolSevere.jpg")
    },
    {
    id: "2",
    name: "Vicks Cold & Flu Severe",
    cost:27.49,
    src: require("./productImages/VicksDnN.jpg")
    },
    {
    id: "3",
    name: "Mucinex Fast-Max (24 Capsules)",
    cost:23.99,
    src: require("./productImages/MucinexFastMax.jpeg")
    },
    {
    id: "4",
    name: "Mucinex DM (42 Capsules)",
    cost:31.99,
    src: require("./productImages/MucinexDM.jpg")
    },
    {
    id: "5",
    name: "Mucinex Expectorant (28 Capsules)",
    cost:31.99,
    src: require("./productImages/MucinexExpectorant.jpg")
    },
    {
    id: "6",
    name: "Robitussin Maximum Strength",
    cost:8.99,
    src: require("./productImages/Robitussin.jpg")
    },
    {
    id: "7",
    name: "Advil Multi-Symptom (20 Capsules)",
    cost:9.99,
    src: require("./productImages/Advil.jpg")
    },
  ];

  export function getProducts(){
    return PRODUCTS;
  }

  export function getProduct(id){
    return PRODUCTS.find((product) => (product.id == id));
  }