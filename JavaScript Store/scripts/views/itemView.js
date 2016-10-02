var store;
((store) => {
    'use strict';

    store.itemView = {
        load,
        addToCart
    };

    var _selectedItem;

    function load(itemId) {
        var item = store.inventory.getItem(itemId);

        $('#itemView_Name').text(item.name);
        $('#itemView_Description').text(item.description);
        $('#itemView_Price').text('$' + item.price);

        _selectedItem = item;

        store.viewer.change('itemView');
    };

    function addToCart() {
        store.cart.addItem(_selectedItem);
        store.cartView.load();
    };

})(store || (store = {}));