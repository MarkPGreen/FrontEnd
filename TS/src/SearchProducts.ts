class SearchProducts extends ProductList {
    useId: string = "";

    constructor(useId: string) {
        super();
        this.useId = useId;
    }

    addProducts(products: Product[]) {
        this.addProductsTo(this.useId, products);
    }
}