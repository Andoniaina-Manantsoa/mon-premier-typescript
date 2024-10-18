export interface Categorie {
    id: number;
    name: string;
};
export interface Article {
    id: number;
    codeArticle: string;
    designation: string;
    categorie: Categorie;
    unit: string;
    unitPrice: number;
    expirationDate: Date;
};

export function getExpensiveItem(articles: Article[]): Article {
    let expensiveItem = articles[0];
    for (let i = 1; i < articles.length; i++) {
        if (articles[i].unitPrice >= expensiveItem.unitPrice) {
            expensiveItem = articles[i];
        }
    }
    return expensiveItem;
}

export function getCheapItem(articles: Article[]): Article {
    var cheapItem = articles[0];
    for (let i = 1; i < articles.length; i++) {
        if (articles[i].unitPrice <= cheapItem.unitPrice) {
            cheapItem = articles[i];
        }
    }
    return cheapItem;
}

//export function sortItemsListByUnitPriceAsc(articles:Article[]): Article[] {
//let tabOrdUnitPriceAsc:Article[] = [];
// while(articles.length != 0){
// let min = getCheapItem(articles);
// tabOrdUnitPriceAsc.push(min);
// const index = articles.indexOf(min);
// articles.splice(index,1);
// }
// return tabOrdUnitPriceAsc;
//}

//export function sortItemsListByUnitPriceDeasc (articles:Article[]) : Article[]{
// let tabOrdUnitPriceDeasc:Article[] = [];
//while(articles.length != 0){
// let max = getExpensiveItem(articles);
// tabOrdUnitPriceDeasc.push(max);
// const index = articles.indexOf(max);
// articles.splice(index,1);
//}
// return tabOrdUnitPriceDeasc;
//}

export function printReceipt(articles: Article[], taxe: number, totalsPaid: number): void {

    /* début mitady different categorie*/
    let categoryList: Set<Categorie> = new Set();
    articles.forEach(article => {
        categoryList.add(article.categorie);
    });
    /*fin mitady different categorie*/

    /*groupena par categorie ny articles ao amin liste articles sad icalcul totaux par categorie*/
    let tabGroupedByCategory: Article[] = [];
    let totalsPriceByCategoryHt: number[] = [];

    //initialisation totaux global
    let totauxHt: number = 0;
    let indexCategory = 0;

    //tetezina ny tableau de category
    categoryList.forEach(category => {
        //initialisena ny totals articles par categorie
        totalsPriceByCategoryHt[indexCategory] = 0;

        //pour chaque categorie tetezina ny article rehetra
        articles.forEach(article => {
            //comparena ny element ao anaty tableau de category par rapport amin categorie de chaque articles hoe mitovy ve
            if (category == article.categorie) {
                //console.log('\t' + article.designation);
                //raha mitovy de atsofoka ao anaty tableau igroupena azy par category
                tabGroupedByCategory.push(article);
                //alana ao anaty liste d'article izay tafatsofoka ao anaty tableau vaovao
                articles.filter(x => x.id != article.id);
                //accumulena ao anaty accumulaeur ny totaux articles izay mitovy category 
                totalsPriceByCategoryHt[indexCategory] = totalsPriceByCategoryHt[indexCategory] + article.unitPrice;
            }
        });
        totauxHt = totauxHt + totalsPriceByCategoryHt[indexCategory];
        indexCategory++;

    });
    const totauxTtc = totauxHt * (1 + taxe);
    const rendered = totalsPaid - totauxTtc;
    let index = 0;
    /*categoryList.forEach(category =>{
        console.log(category.name + ' ('  + totalsPriceByCategoryHt[index] + '€ HT)')
        index++;
        tabGroupedByCategory.forEach(article =>{
            if(category == article.categorie){
                console.log('\t' + article.designation + '\t' + article.unitPrice + '€');
            }
        })
    });*/
    let indexCat = 0;

    categoryList.forEach(category => {
        console.log(category.name + ' (' + totalsPriceByCategoryHt[index] + '€ HT)')
        index++;
        while (indexCat <= tabGroupedByCategory.length) {
            if (category != tabGroupedByCategory[indexCat]?.categorie) {
                break;
            }
            console.log('\t' + tabGroupedByCategory[indexCat].designation + '\t' + tabGroupedByCategory[indexCat].unitPrice + '€');
            indexCat++;
        }
    });

    console.log('\n');
    console.log('Totaux HT :' + totauxHt + '€');
    console.log('TVA : ' + (taxe * 100) + '%');
    console.log('Totaux TTC :' + totauxTtc);
    console.log('Total payé :' + totalsPaid);
    console.log('Rendue :' + rendered);
}






