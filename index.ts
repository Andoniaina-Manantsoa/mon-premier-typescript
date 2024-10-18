import { Categorie, Article, getExpensiveItem, getCheapItem, printReceipt } from "./lib/article"; 

var firstcategorie:Categorie = {
    id: 1,
    name: "elseve"
}
var secondCategorie:Categorie ={
    id:2,
    name:"marseil"
}
var thirdCategorie:Categorie ={
    id:3,
    name:"ultra-doux"
}

const expirationDate1: Date = new Date(2026,1,2);
const expirationDate2: Date = new Date(2027,6,8);
const expirationDate3: Date = new Date(2030,15,7);
const expirationDate4: Date = new Date(2035,10,7);
const expirationDate5: Date = new Date(2035,10,7);

var shampoing:Article = {
    id:1,
    codeArticle:"ABC789",
    designation: "shampoing 200ml",
    categorie:firstcategorie,
    unit:"1pc",
    unitPrice:2,
    expirationDate:expirationDate1,
};

var savon: Article={
    id:2,
    codeArticle:"AZE456",
    designation: "savon solide",
    categorie:secondCategorie,
    unit:"1pc",
    unitPrice:4,
    expirationDate:expirationDate2,
};

var deo: Article={
    id:3,
    codeArticle:"WXC159",
    designation: "deodorant",
    categorie:thirdCategorie,
    unit:"1pc",
    unitPrice:7,
    expirationDate:expirationDate5,
};

var parfum: Article={
    id:4,
    codeArticle:"WXC1575",
    designation: "dior",
    categorie:firstcategorie,
    unit:"1pc",
    unitPrice:8,
    expirationDate:expirationDate3,
};

var masque: Article={
    id:5,
    codeArticle:"TRC2560",
    designation: "masque coco",
    categorie:thirdCategorie,
    unit:"1pc",
    unitPrice:8,
    expirationDate:expirationDate4,
};

var listItem = [shampoing, savon, deo, parfum, masque];
//var articles= getExpensiveItem (listItem);
//console.log(articles);

//var item = getCheapItem (listItem);
//console.log(item);

//var newList = sortItemsListByUnitPriceAsc(listItem);
//console.log(newList);

//var newListDeasc = sortItemsListByUnitPriceDeasc(listItem);
//console.log(newListDeasc);

printReceipt (listItem, 0.2, 50);


















