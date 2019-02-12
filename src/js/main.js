"use strict";

$(document).ready(function () {
    let btnModal = $('#modal'),
        modal = $('.modal_wrapper'),
        btnSend = $('#send');

    btnModal.on('click', () => {
        // if (modal.hasClass('open')) {
        //     modal.removeClass('open');
        // }
        // else {
        //     modal.addClass('open');
        // }
        modal.addClass('open');
    });

    btnSend.on('click', (e) => {
        e.preventDefault();
        modal.removeClass('open');
    });
});
