var store;
((store) => {
    'use strict';

    store.cartView = {
         load
    };

	function load() {
	    bindList();
	    store.viewer.change('cartView');
	};

	function bindList() {
	    var results = '';
        var items = store.cart.listAll();
        for (let i = 0; i < items.length; i++) {
            var item = items[i];
            results +=
                '<tr>' +
                    '<td>' +
                        item.name +
                    '</td>' +
                    '<td>' +
                        '$' + item.price +
                    '</td>' +
                '</tr>';
        }

        $('#cartView_list').html(results);
    }

})(store || (store = {}));