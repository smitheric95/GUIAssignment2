var store;
((store) => {
    'use strict';

    store.homeView = {
        load
    };

    function load() {
        bindList();
        store.viewer.change('homeView');
    };

    function bindList() {
        var results = '';
        var items = store.inventory.listAll();
        for (let i = 0; i < items.length; i++) {
            var item = items[i];
            results +=
                '<li class="list-group-item">' +
                    '<a onclick="store.itemView.load(' + item.itemId + ')">' +
                        item.name +
                        '<span class="badge pull-right">$' + item.price + '</span>' +
                    '</a>' +
                '</li>';
        }

        $('#homeView_list').html(results);
    }

})(store || (store = {}));