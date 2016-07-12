//------------------------------------
//  document ready
//------------------------------------
$(document).ready(function(){
    $('.js-like').on('click', function(event) {
        event.preventDefault();

        $(this).text('Liked!')
         .closest('.news-item')
         .addClass('is-liked');
    });

    //------------------------------------
    //  add link
    //------------------------------------
    $('.js-add-link').on('click', function(event){
        event.preventDefault();

        $('.js-form').toggleClass('is-visible');
    });

    //------------------------------------
    //  modal
    //------------------------------------
    $('.js-show-modal').on('click', function(event){
        event.preventDefault();

        $('.js-modal').addClass('is-visible');
        $('.js-modal-overplay').addClass('is-visible');
    });

    $('.js-modal-overplay').on('click', function(event){
        $('.js-modal').removeClass('is-visible');
        $('.js-modal-overplay').removeClass('is-visible');
    });

});





