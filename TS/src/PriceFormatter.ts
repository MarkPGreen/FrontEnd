class PriceFormatter {
    static formatPrice(price: number) {
        var formatter = new Intl.NumberFormat('en-gb', {
            style: 'currency',
            currency: 'GBP',
        });
        return formatter.format(price);
    }
}