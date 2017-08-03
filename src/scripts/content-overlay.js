import jQuery from 'jquery';

const init = () => {
	console.log('init these bad boiz....');

	jQuery('.link-box').each((i, link) => {
		jQuery(link).on('click', e => {
			const type = jQuery(link).data('type');

			jQuery('#home').removeClass('active');
			setTimeout(() => {
				jQuery(`.${type}`).addClass('active');
			}, 200);
		});
	});

	jQuery('button').each((i, button) => {
		jQuery(button).on('click', e => {
			jQuery(e.target).parent().removeClass('active');
			setTimeout(() => {
				jQuery('#home').addClass('active');
			}, 200);
		});
	});
};

init();
