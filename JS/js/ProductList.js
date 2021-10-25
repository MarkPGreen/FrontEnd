class ProductList {
    constructor() {

    }

    addProductsTo(listproductsid, products) {
        $(listproductsid).empty();
        let descriptionList1 = $('<dl></dl>');
        let descriptionList2 = $('<dl></dl>');
        let descriptionList3 = $('<dl></dl>');
        for (let idx = 0; idx < products.length; idx += 3) {
            this.addProductToDL(products[idx], descriptionList1);
            this.addProductToDL(products[idx + 1], descriptionList2);
            this.addProductToDL(products[idx + 2], descriptionList3);
        }

        $(listproductsid).append(descriptionList1);
        $(listproductsid).append(descriptionList2);
        $(listproductsid).append(descriptionList3);
    }

    addProductToDL(product, descriptionList) {
        if (product == null) {
            return;
        }
        let descriptionTerm = $('<dt></dt>');
        descriptionTerm.html(product.name);
        let descriptionDefinition = $('<dd></dd>');
        descriptionDefinition.html(product.description + "<br/>");

        let priceSpan = $('<span></span>');
        priceSpan.addClass("itemprice");
        priceSpan.text(PriceFormatter.formatPrice(product.price));
        descriptionDefinition.append(priceSpan);

        let addtoCartButton = $('<button></button>');
        addtoCartButton.text("Add to cart");
        addtoCartButton.addClass("button addToCartButton");
        addtoCartButton.on('click', (button) => {
            mainApp.cart.addToCartProduct(product);
        });

        descriptionDefinition.append(addtoCartButton);
        descriptionList.append(descriptionTerm);
        descriptionList.append(descriptionDefinition);
    }
}