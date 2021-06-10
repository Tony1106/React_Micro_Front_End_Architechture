'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = (function (props) {
    return (React__default['default'].createElement("button", { className: "button-primary", onClick: props.onClick }, props.children));
});

var ProductCard = function (props) {
    var product = props.product, onAddToCart = props.onAddToCart;
    var ProductName = (React__default['default'].createElement("div", { className: "productName" },
        React__default['default'].createElement("div", null,
            React__default['default'].createElement("h1", { className: "big" }, product.name),
            React__default['default'].createElement("div", { className: "small" }, product.id))));
    var Description = (React__default['default'].createElement("div", { className: "description" },
        React__default['default'].createElement("h3", { className: "title" }, "Product Info"),
        React__default['default'].createElement("p", { className: "text" }, product.description)));
    var BuySection = (React__default['default'].createElement("div", { className: "buy-price" },
        React__default['default'].createElement(Button, { onClick: function () { return onAddToCart(product.id); } }, "Add to cart"),
        React__default['default'].createElement("div", { className: "price" },
            React__default['default'].createElement("i", { className: "fas fa-dollar-sign" }),
            React__default['default'].createElement("h1", { className: "" + (!!product.discount && "cross") }, product.price),
            product.discount && React__default['default'].createElement("h1", null, product.priceAfterDiscount))));
    return (React__default['default'].createElement("div", { className: "info" },
        ProductName,
        Description,
        BuySection,
        React__default['default'].createElement(Button, { onClick: function () { return props.history.push("/cart"); } }, "Go to Cart Page")));
};

var Cart = (function (props) {
    var products = props.products, onRemove = props.onRemove;
    return (React__default['default'].createElement("div", { className: "cart-wrapper" },
        React__default['default'].createElement("div", { className: "cart-total" },
            "Number of product: ",
            products.length),
        React__default['default'].createElement("ul", null, products.map(function (product) { return (React__default['default'].createElement("li", { className: "cart-product" },
            React__default['default'].createElement("div", { className: "productName" },
                " ",
                product.name),
            React__default['default'].createElement("div", { className: "productQuantity" },
                "Quantity: ",
                product.quantity),
            React__default['default'].createElement("div", { className: "productPrice" },
                "Price: ",
                product.price),
            React__default['default'].createElement("div", { className: "productTotal" },
                "Total: ",
                product.total),
            React__default['default'].createElement(Button, { onClick: function () { return onRemove(product.id); } }, "Remove Item"))); }))));
});

var Product = /** @class */ (function () {
    function Product(payload) {
        this.id = null;
        this.name = null;
        this.description = null;
        this.price = 0;
        this.quantity = 0;
        this.discount = null;
        this.id = payload.id;
        this.name = payload.name;
        this.price = payload.price;
        this.description = payload.description;
        this.discount = payload.discount || null;
        this.quantity = payload.quantity || 0;
    }
    Product.prototype.addQuantity = function (number) {
        this.quantity = this.quantity + number;
    };
    Object.defineProperty(Product.prototype, "total", {
        get: function () {
            return this.quantity * this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "priceAfterDiscount", {
        get: function () {
            var discount = this.discount;
            console.log(discount, "ass");
            if (!discount)
                return this.price;
            var type = discount.type, value = discount.value;
            switch (type) {
                case "percentage":
                    return this.price * (1 - value / 100);
                case "fixed":
                    return this.price - value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());

exports.Button = Button;
exports.Cart = Cart;
exports.MProduct = Product;
exports.ProductCard = ProductCard;
