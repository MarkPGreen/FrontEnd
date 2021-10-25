class DataBase {
    constructor() {
    }

    getAllProducts() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/products')
                .then(response => response.json())
                .then(data => resolve(data))
                .catch((reason) => {
                    reject(null);
                });
        });
    }

    getRecentProducts() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/recommendeds')
                .then(response => response.json())
                .then(data => resolve(data))
                .catch((reason) => {
                    reject(reason);
                });
        });
    }

    performQuery(url, method, product) {
        return new Promise((resolve, reject) => {
            let body = product != null ? JSON.stringify(product) : null;
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then(response => {
                    if (!response.ok) {
                        reject(response.statusText);
                    }
                })
                .then(data => resolve(data))
                .catch((reason) => {
                    reject(reason);
                });
        });
    }

    addProduct(product) {
        return this.performQuery('http://localhost:8080/products', "POST", product);
    }

    editProduct(product) {
        return this.performQuery('http://localhost:8080/products/' + product.id, "PUT", product);
    }

    deleteProduct(product) {
        return this.performQuery('http://localhost:8080/products/' + product.id, "DELETE", product);
    }

    searchProducts(query) {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/products?q=' + query)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch((reason) => {
                    reject(reason);
                });
        });
    }
}
