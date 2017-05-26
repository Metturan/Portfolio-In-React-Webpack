	
export function scrollIframe() {
	function debounce(func, wait = 20, immediate = true) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if(callNow) func.apply(context.args);
		};
	};

	const iframes = document.querySelectorAll('iframe');

	function checkIframe() {
	
		iframes.forEach(e => {
			const player = new Vimeo.Player(e);
			const slideInAt = (window.scrollY + window.innerHeight) - e.height/10;
			const iframeBottom = e.offsetTop + (e.height/2)*2;
			const isHalfShown = slideInAt > e.offsetTop;
			const isNotScrolledPast = window.scrollY < iframeBottom;
			if(isHalfShown && isNotScrolledPast) {
				player.play();
			
			} else {
			
			}
		});
	}

	window.addEventListener('scroll', debounce(checkIframe));
}