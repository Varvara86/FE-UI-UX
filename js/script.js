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


new Image().src = "http://counter.yadro.ru/hit?r"+
			escape(document.referrer)+((typeof(screen)=="undefined")?"":
				";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
                screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+";"+Math.random();
                
