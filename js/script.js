$(document).ready(function(){
    $('.openwnd').click(function(){
        $('.poup').fadeIn();
    });
    $('.poup .close').click(function(){
        $('.poup').fadeOut();
    });
    $('.poup .submit').click(function(){
        alert("Нажата кнопка ''Действие ")
    });
});