// let header = document.getElementsByClassName('news-list');
// let news = document.getElementsByClassName('news');
// for (let i = 0; i < news.length; i++) {
// 	news[i].addEventListener('click', function () {
// 		let current = document.getElementsByClassName('news-active');
// 		if (current.length > 0) {
// 			current[0].className = current[0].className.replace(" news-active", "");
// 		}
// 		this.className += " news-active";
// 	});

// }

$(document).ready(function () {
	$('.news').click(function () {
		$('.news.news-active').removeClass("news-active");
		$(this).addClass("news-active")
		$('.news-description h2').text($('.news.news-active').text());
	});

	$('.news').hover(function () {
		$(this).animate({ fontSize: '22px' }, 300)
	}, function () {
		$(this).animate({ fontSize: '18px' }, 200)
	}
	);
});