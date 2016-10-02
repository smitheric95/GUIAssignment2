var store;
((store) => {
    'use strict';

    store.viewer = {
        change
    };

    function change(viewId) {
        $('#storeViews .active').removeClass('active');
        $('#' + viewId).addClass('active');
    };

})(store || (store = {}));