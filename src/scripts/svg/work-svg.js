import jQuery from 'jquery';

class Work {

	constructor(el) {
		this.jQueryeyeball = jQuery('#eyeball');
		this.jQuerycoffeeDrip = jQuery('#coffee-drip > path')

		jQuery(el).mouseenter(() => {
			this.handleMouseEnter();
		})

		jQuery(el).mouseleave(() => {
			this.handleMouseLeave();
		})	
	}

	handleMouseEnter() {
		this.jQueryeyeball.addClass('moving');
		this.jQuerycoffeeDrip.addClass('dripping');
	}

	handleMouseLeave() {
		this.jQueryeyeball.removeClass('moving');
		this.jQuerycoffeeDrip.removeClass('dripping');
	}
}

module.exports = Work;
