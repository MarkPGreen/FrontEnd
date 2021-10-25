class ShoppingCart {
    addToCartProduct(product) {
        // Does this item already exist in the cart?
        let cartItem = $(".customercart .productid" + product.id);
        if (cartItem.length != 0) {
            let count = cartItem.data("count") + 1;
            cartItem.data("count", count);
            cartItem.find(".count").text(count);
            this.updateCartItemPrice(cartItem);
            this.updateCheckoutPrice();
            return;
        }

        let item = $(".shoppingcarttemplate").clone();
        cartItem = item.find(".items");
        item.find(".title").text(product.name);
        item.find(".amount").text(PriceFormatter.formatPrice(product.price));
        item.find(".picture").attr("src", product.defaultImage);
        item.find(".remove").on('click', (button) => {
            cartItem.remove();
        });
        item.find(".btn.minus").on('click', (button) => {
            let count = cartItem.data("count") - 1;
            if (count == 0) {
                cartItem.remove();
            } else {
                cartItem.data("count", count);
                cartItem.find(".count").text(count);
                this.updateCartItemPrice(cartItem);
            }
            this.updateCheckoutPrice();
        });
        item.find(".btn.plus").on('click', (button) => {
            let count = cartItem.data("count") + 1;
            cartItem.data("count", count);
            cartItem.find(".count").text(count);
            this.updateCartItemPrice(cartItem);
            this.updateCheckoutPrice();
        });

        cartItem.data("product", product);
        cartItem.data("count", 1);

        cartItem.addClass("productid" + product.id)
        cartItem.appendTo(".customercart");

        this.updateCartItemPrice(cartItem);
        this.updateCheckoutPrice();
    }

    updateCartItemPrice(cartItem) {
        let count = cartItem.data("count");
        let product = cartItem.data("product");
        let totalPrice = count * product.price;
        cartItem.find(".amount").text(PriceFormatter.formatPrice(totalPrice));
    }

    updateCheckoutPrice() {
        let cartItems = $(".customercart").find(".items");
        let totalPrice = 0.00;
        let totalCount = 0;
        cartItems.each((cartItemIdx, el) => {
            let cartItem = $(el);
            let count = cartItem.data("count");
            let product = cartItem.data("product");
            let price = product.price;
            totalPrice += count * price;
            totalCount += count;
        });

        $(".total-items").text(totalCount + " items");
        $(".total-amount").text(PriceFormatter.formatPrice(totalPrice));
    }
}