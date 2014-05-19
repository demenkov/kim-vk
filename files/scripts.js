jQuery(function($){
	$(".fancybox").fancybox();
});

$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

jQuery(function($){
	$('#send-comment').click(function() {
		alert("Ваш комментарий отправлен на проверку. Как только администратор проверит ваше сообщение, оно будет опубликовано на стене. Спасибо.");
	})
});