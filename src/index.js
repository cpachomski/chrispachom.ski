import $ from 'jquery';

//import styles
import './styles/lib/normalize.scss';
import './styles/svg/web-svg.scss';
import './styles/svg/music-svg.scss';
import './styles/svg/work-svg.scss';
import './styles/content-overlay.scss';
import './styles/home.scss';
import './styles/title.scss';
import './styles/links.scss';

//import svg scripts
import WebSvg from './scripts/svg/web-svg';
import MusicSvg from './scripts/svg/music-svg';
import Work from './scripts/svg/work-svg';
import ContentOverlay from './scripts/content-overlay';

//runner
let $webBox = $('#web');
let $musicBox = $('#music');
let $workBox = $('#work');
let $contentOverlays = $('.content-overlay');

let web = new WebSvg($webBox);
let music = new MusicSvg($musicBox);
let work = new Work($workBox);

$(document).ready(() => {
	//oo thats nice

	setTimeout(() => {
		$('body').fadeIn(500);

		if (window.innerWidth > 580) {
			setTimeout(() => {
				$('#home').addClass('active');
			}, 500);
		}
	}, 1000);

	//trigger animations when scrolled into view on mobile
	if (window.innerWidth < 580) {
		web.handleMouseEnter();
		$(window).scroll(() => {
			isScrolledIntoView($musicBox)
				? music.handleMouseEnter()
				: music.handleMouseLeave();
			isScrolledIntoView($workBox)
				? work.handleMouseEnter()
				: work.handleMouseLeave();
		});
	}

	$(window).resize(() => {
		if (window.innerWidth < 580) {
			$('#home').removeClass('active');
		} else {
			$('#home').addClass('active');
		}
	});
});

function isScrolledIntoView($el) {
	const windowTop = $(window).scrollTop() - 25;
	const windowBottom = windowTop + $(window).height();

	const elTop = $el.offset().top;
	const elBottom = elTop + $el.height();

	return elBottom <= windowBottom && elTop >= windowTop;
}
