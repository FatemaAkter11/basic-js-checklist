//pageRequirements.js (calculation pageRequirements==> book1=100,book2=200;book3=300.

function pageRequirments(book1, book2, book3) {
    let book1Page = 100;
    let book2Page = 200;
    let book3Page = 300;
    let book1PageCalculation = book1 * book1Page;
    let book2PageCalculation = book2 * book2Page;
    let book3PageCalculation = book3 * book3Page;

    let totalPage = book1PageCalculation + book2PageCalculation + book3PageCalculation;
    return totalPage;
}
const finalPage = pageRequirments(3, 2, 2);
console.log(finalPage);