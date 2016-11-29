// Adds a button for user to scroll to top immediately

const $ = require('jquery');

import elrUtilities from 'elr-utility-lib';
// let elr = require('elr-utility-lib');

let elr = elrUtilities();

const elrBackToTop = function() {
    // const self = {};
    const $backToTop = elr.createElement('button', {
        'class': 'back-to-top fa fa-caret-up'
    }).appendTo('body').hide();

    elr.scrollToView($backToTop);

    $backToTop.on('click', function() {
        elr.toTop($('body, html'), 900);
    });

    // return self;
};

export default elrBackToTop;