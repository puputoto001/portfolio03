$(function () {

    $('.pop_detail').on('click', function () {
        let img = $(this).find('img').wrap('<div class="pop"></div>').parent().clone();

        img.append('<button>close</button>').appendTo('body');

    });


    console.log($('.pop'));


    $('body').on('click', '.pop button', function () {
        console.log($(this))
        $(this).parent().hide();
    })
})