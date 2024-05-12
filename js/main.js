//JavaScript Document

$(function() {
	

	// fade
	$(window).scroll(function() {
		$('.fade').each(function() {
			let scroll = $(window).scrollTop(); //スクロール位置（ページの一番上からディスプレイ上端）
			let target = $(this).offset().top; //ターゲット要素の高さ
			let windowHeight = $(window).height(); //ウィンドウの高さ

			//要素をふわっと表示させたい位置を計算
			if (scroll > target - windowHeight + 200) {
				$(this).css('opacity','1'); //cssで設定しているopacityの0を1に
				$(this).css('transform','translateY(0)'); //x軸方向の移動距離,y軸方向の移動距離を指定
			}
		});
	});
	
	
	// 写真切り替え
	$('.minImage').on('click',function() {
		let path = $(this).attr('src');
		
		
		$('#bigImage').attr('src',path);
	});
	
	
	//topボタン
	let pagetop = $('#to-top');
	pagetop.hide();
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 700) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
		
	});
	
	pagetop.click(function() {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});
	
});

// ナビゲーションメニュー
let naviFixed = $('#navi');

$(window).scroll(function() {
	if ($(this).scrollTop() > 300 ) {

		naviFixed.css('bottom',0);
	}
})
