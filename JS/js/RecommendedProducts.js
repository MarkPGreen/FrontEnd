class RecommendedProducts extends ProductList {
    useId = "";

    constructor(useId) {
        super();
        this.useId = useId;
    }

    addProducts(products) {
        $(this.useId).empty();
        let descriptionList1 = $('<dl></dl>');
        let descriptionList2 = $('<dl></dl>');
        let descriptionList3 = $('<dl></dl>');
        this.addProductToDL(products[0], descriptionList1);
        this.addProductToDL(products[1], descriptionList2);
        this.addProductToDL(products[2], descriptionList3);
        $(this.useId).append(descriptionList1);
        $(this.useId).append(descriptionList2);
        $(this.useId).append(descriptionList3);
    }
}