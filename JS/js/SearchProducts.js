class SearchProducts extends ProductList {
    useId = "";

    constructor(useId) {
        super();
        this.useId = useId;
    }

    addProducts(products) {
        this.addProductsTo(this.useId, products);
    }
}