// кнопка наверх
$("body").on("click", ".btn-go-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

//плавный скролл
$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        var header = $('header').height();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - header}, 500);
    });
});
//плавный скролл end


// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click', function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// отправка заявки с формы обратной связи на почту
$(document).ready(function () {

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            //
            // // если после отправки нужно показать окно "спасибо" и скрыть его через секунду
            $('.modal__div').css('display', 'none').animate({
                opacity: 0,
                top: '45%'
            });

            $('#thanks__modal').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);

            setTimeout(function () {
                $("#thanks__modal").css('display', 'none').animate({
                    opacity: 0,
                    top: '45%'
                });
                $('.overlay').fadeOut(400);
            }, 1000);
            // если после отправки нужно показать окно "спасибо" и скрыть его через секунду
            $(".form").trigger("reset");
        });
        return false;
    });

});
// end


// menu
$('.btn-burger').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $('.sidebar-wrapper');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $('.overlay').fadeIn(600);

        content.css('right', '0');
    } else {
        $this.removeClass('trigger');
        $('.overlay').fadeOut(600);
        content.css('right', '-100%');
    }
});

$('.overlay').on('click', function () {
    if($('.btn-burger').hasClass('trigger')){
        $('.btn-burger').removeClass('trigger');
        $('.overlay').fadeOut(600);
        $('.sidebar-wrapper').css('right', '-100%');
    }
});

// проверка на докрутку до определенного элемента
$(window).scroll(function() {

    var scroll_picca = $('.home').offset().top;
    if ($(this).scrollTop() > scroll_picca) {
        $(".btn-go-top").fadeIn(600);
    } else{
        $(".btn-go-top").fadeOut(600);
    }
});


$('.my-paroller').paroller();

$('[name="phone"]').inputmask("+7(999) 999-99-99");
