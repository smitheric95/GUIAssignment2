var store;
((store) => {
    'use strict';

    store.cart = {
        addItem,
        listAll,
        removeItem,
        clear
    };

    var _cart = [];

    function addItem(item) {
        _cart.push(item);
        $('#cartCount').text(_cart.length);
    };

    function listAll() {
        return _cart;
    };

    function removeItem() {
        // TODO: Remove item from cart
    };

    function clear() {
        // TODO: Clear all items from cart
    }

})(store || (store = {}));