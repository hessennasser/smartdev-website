!(function () {
	const domainName = 'example.com';
	function e() {
		const e = [
			{
				question: 'ما هي طريقة تفعيل على اجهزة الايفون والايباد؟',
				answer:
					'أولاً/ اطلب الاشتراك <br> ثانياً؟ حمّل تطبيق LEO TV PLUS من خلال ابل ستور <br> ثالثاً: فعل الاشتراك <br> بعد الدخول على التطبيق ادخل اليوزر والباسورد الخاص باشتراكك',
			},
			{
				question: 'ما هي طريقة تفعيل الاشتراك على اجهزة الاندرويد شاشات وجوالات وتابلت؟',
				answer:
					'',
			},
		];
		function n() {
			if (document.querySelector('.faq-section')) return;
			const n = document.createElement('style');
			(n.id = 'faq-styles'),
				(n.textContent =
					'\n                .faq-item {\n                    background: #ffffff10;\n                    border-radius: 10px;\n                    color: #eee;  \n                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                    border: 1px solid var(--primary-transparent, rgba(255,255,255,0.1));\n                    padding: 1.5rem;\n                    margin-bottom: 1.5rem;\n                    cursor: pointer;\n                }\n                .faq-item:hover {\n                    transform: translateY(-2px);\n                    box-shadow: 0 8px 25px rgba(35, 35, 35, 0.15);\n                }\n                .faq-content {\n                    max-height: 0;\n                    overflow: hidden;\n                    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                    margin-top: 1rem;\n                }\n                .faq-content.active {\n                    max-height: 200px;\n                }\n                .faq-icon {\n                    transition: transform 0.3s ease;\n                    color: var(--second-color, #edb751);\n                    font-weight: bold;\n                    font-size: 1.5rem;\n                }\n                .faq-icon.rotated {\n                    transform: rotate(45deg);\n                }\n                .faq-question {\n                    color: white;\n                    font-weight: 500;\n                    text-align: right;\n                    margin: 0;\n                    flex: 1;\n                    margin-left: 1rem;\n                }\n                .faq-answer {\n                    color: #d1d5db;\n                    text-align: right;\n                    line-height: 1.6;\n                    margin: 0;\n                }\n                .faq-header {\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                }\n            '),
				document.querySelector('#faq-styles') || document.head.appendChild(n);
			const t = document.createElement('section');
			(t.className = 'faq-section section'),
				(t.innerHTML =
					'\n                <div class="container">\n                    <div class="row">\n                        <div class="col-12 text-center">\n                            <h3 class="section-title text-center">الأسئلة الشائعة</h3>\n                        </div>\n                    </div>\n                    <div class="row" id="faq-container"></div>\n                </div>\n            ');
			const o = t.querySelector('#faq-container');
			return (
				e.forEach((e, n) => {
					const t = document.createElement('div');
					t.className = 'col-lg-6 col-md-12';
					const i = document.createElement('div');
					(i.className = 'faq-item'),
						(i.innerHTML = `\n                    <div class="faq-header">\n                        <h3 class="faq-question">${e.question}</h3>\n                        <div class="faq-icon">+</div>\n                    </div>\n                    <div class="faq-content">\n                        <p class="faq-answer">${e.answer}</p>\n                    </div>\n                `);
					const a = i.querySelector('.faq-icon'),
						r = i.querySelector('.faq-content');
					i.addEventListener('click', () => {
						const e = r.classList.contains('active');
						document.querySelectorAll('.faq-content.active').forEach(e => {
							e.classList.remove('active');
						}),
							document.querySelectorAll('.faq-icon.rotated').forEach(e => {
								e.classList.remove('rotated');
							}),
							e || (r.classList.add('active'), a.classList.add('rotated'));
					}),
						t.appendChild(i),
						o.appendChild(t);
				}),
				t
			);
		}
		!(function () {
			const e = document.querySelector('.home');
			if (e) {
				const t = n();
				t && e.appendChild(t);
			} else {
				const e = ['footer', '.footer', 'body'];
				let t = null;
				for (const n of e) if (((t = document.querySelector(n)), t)) break;
				if (t) {
					const e = n();
					e &&
						('BODY' === t.tagName
							? t.appendChild(e)
							: t.parentNode.insertBefore(e, t));
				}
			}
		})();
	}
	function n() {
		function e() {
			const e = document.createElement('style');
			(e.id = 'video-styles'),
				(e.textContent =
					'\n                .video-container {\n                    position: relative;\n                    width: 100%;\n                    max-width: 1200px;\n                    margin: 0 auto;\n                    border-radius: 1rem;\n                    overflow: hidden;\n                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n                }\n                .video-container video {\n                    width: 100%;\n                    height: auto;\n                    display: block;\n                    border-radius: 1rem;\n                }\n                @media (max-width: 768px) {\n                    .video-section {\n                        padding: 2rem 0;\n                    }\n                    .video-container {\n                        margin: 0 1rem;\n                    }\n                }\n            '),
				document.querySelector('#video-styles') || document.head.appendChild(e);
			const n = document.createElement('section');
			return (
				(n.className = 'video-section'),
				(n.innerHTML =
					'\n                <div class="container">\n                    <div class="row">\n                        <div class="col-12">\n                            <div class="video-container">\n                                <video width="100%" height="100%" loop autoplay muted playsinline preload="metadata" poster="">\n                                    <source src="https://nussuq-dev.com/leo/1.mp4" type="video/mp4">\n                                    Your browser does not support the video tag.\n                                </video>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            '),
				n
			);
		}
		document.querySelector('.video-section') ||
			(function () {
				const n = document.querySelector(
					'section[section-id="7d9cd4fe-7910-480b-9838-b1c4253b5f9d"]',
				);
				if (n) {
					const t = e();
					n.parentNode.insertBefore(t, n.nextSibling);
				} else {
					const n =
						document.querySelector('section') ||
						document.querySelector('main') ||
						document.body;
					if (n) {
						const t = e();
						'SECTION' === n.tagName
							? n.parentNode.insertBefore(t, n.nextSibling)
							: n.insertBefore(t, n.firstChild);
					}
				}
			})();
	}
	function t() {
		let e,
			n,
			t = new Set();
		function o(e) {
			try {
				localStorage.setItem('global_timer_end', e.toString());
			} catch (e) {
				console.warn('Could not store timer end time');
			}
		}
		function i() {
			const e = Math.max(0, n - Date.now());
			e <= 0 && ((n = Date.now() + 432e5), o(n));
			const i = (function (e) {
				const n = Math.floor(e / 1e3),
					t = Math.floor(n / 86400),
					o = Math.floor((n % 86400) / 3600),
					i = Math.floor((n % 3600) / 60),
					a = n % 60;
				return {
					days: String(t).padStart(2, '0'),
					hours: String(o).padStart(2, '0'),
					minutes: String(i).padStart(2, '0'),
					seconds: String(a).padStart(2, '0'),
				};
			})(e);
			t.forEach(e => {
				if (e && e.parentNode) {
					const n = e.querySelectorAll('.timer-item');
					n.length >= 4 &&
						((n[0].textContent = i.days),
						(n[1].textContent = i.hours),
						(n[2].textContent = i.minutes),
						(n[3].textContent = i.seconds));
				} else t.delete(e);
			});
		}
		function a() {
			document.querySelectorAll('.product-box').forEach(e => {
				const n = e.querySelector('.discount-box'),
					o = e.querySelector('.price-discount'),
					i = e.querySelector('.product-timer');
				if ((n || o) && !i) {
					const n = e.querySelector('.thumb');
					if (n) {
						const e = (function () {
							const e = document.createElement('div');
							return (
								(e.className = 'product-timer'),
								(e.innerHTML =
									'\n                <span class="timer-item">00</span>\n                <span class="timer-separator">:</span>\n                <span class="timer-item">00</span>\n                <span class="timer-separator">:</span>\n                <span class="timer-item">00</span>\n                <span class="timer-separator">:</span>\n                <span class="timer-item">00</span>\n            '),
								e
							);
						})();
						n.parentNode.insertBefore(e, n.nextSibling), t.add(e);
					}
				}
			});
		}
		!(function () {
			!(function () {
				if (document.querySelector('#timer-styles')) return;
				const e = document.createElement('style');
				(e.id = 'timer-styles'),
					(e.textContent =
						'\n                .product-timer {\n                    color: white;\n                    font-size: 12px;\n                    font-weight: bold;\n                    backdrop-filter: blur(10px);\n                    border: 1px solid rgba(255, 255, 255, 0.1);\n                    margin: 10px 0;\n                    text-align: center;\n                    width: 100%;\n                    direction: ltr;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n                .timer-item {\n                    width: 100%;\n                    height: 40px;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    margin: 0 2px;\n                    padding: 2px 4px;\n                    background: rgba(237, 183, 81, 0.9);\n                    border-radius: 4px;\n                    min-width: 20px;\n                    text-align: center;\n                }\n                .timer-separator {\n                    margin: 0 2px;\n                    opacity: 0.7;\n                    font-weight: bold;\n                }\n            '),
					document.head.appendChild(e);
			})(),
				(n = (function () {
					try {
						const e = localStorage.getItem('global_timer_end'),
							n = Date.now(),
							t = 432e5;
						if (e) {
							const t = parseInt(e);
							if (t > n) return t;
						}
						return n + t;
					} catch (e) {
						return Date.now() + 432e5;
					}
				})()),
				e && clearInterval(e),
				(e = setInterval(i, 1e3));
			const t = (function (e, n) {
				let t;
				return function (...o) {
					clearTimeout(t),
						(t = setTimeout(() => {
							clearTimeout(t), e(...o);
						}, n));
				};
			})(() => {
				a(), i();
			}, 100);
			a(),
				i(),
				new MutationObserver(() => {
					t();
				}).observe(document.body, { childList: !0, subtree: !0 }),
				window.addEventListener('beforeunload', () => {
					o(n), e && clearInterval(e);
				});
		})();
	}
	function o() {
		try {
			e(), n(), t();
		} catch (e) {
			console.error('Error initializing custom JS:', e);
		}
	}
	function i() {
		function e() {
			const e = document.querySelectorAll(
				[
					'.main-slider-section',
					'.section-logos',
					'.products-grid-section',
					'.bg-testimonials',
					'.faq-section',
					'.video-section',
					'.footer',
					'section',
				].join(', '),
			);
			if (0 === e.length) return;
			const n = new IntersectionObserver(
				(e, n) => {
					e.forEach(e => {
						if (e.isIntersecting) {
							const t = e.target;
							if (t.classList.contains('animated')) return;
							t.classList.add('animated');
							const o = [
									'.item-slider',
									'.block-logos-section',
									'.product-item-slide',
									'.product-box',
									'.single_review',
									'.faq-item',
									'.video-container',
								],
								i = t.querySelectorAll(o.join(', '));
							t.classList.add('animate-section'),
								setTimeout(() => {
									t.classList.add('visible');
								}, 100),
								i.forEach((e, n) => {
									const t =
											e.classList.contains('product-item-slide') ||
											e.classList.contains('product-box'),
										o = e.classList.contains('single_review');
									e.classList.add('animate-item'),
										t
											? e.classList.add('product')
											: o
											? e.classList.add('review')
											: e.classList.add('default'),
										setTimeout(() => {
											e.classList.add('visible');
										}, 200 + 100 * n);
								}),
								n.unobserve(t);
						}
					});
				},
				{ threshold: 0.15, rootMargin: '50px' },
			);
			e.forEach(e => {
				e.classList.contains('animated') || n.observe(e);
			});
		}
		window.scrollAnimationsInitialized ||
			((window.scrollAnimationsInitialized = !0),
			(function () {
				!(function () {
					if (document.querySelector('#scroll-animation-styles')) return;
					const e = document.createElement('style');
					(e.id = 'scroll-animation-styles'),
						(e.textContent =
							'\n                .animate-section {\n                    opacity: 0;\n                    transform: translateY(30px);\n                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;\n                }\n                .animate-section.visible {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n                .animate-item {\n                    opacity: 0;\n                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n                }\n                .animate-item.visible {\n                    opacity: 1;\n                    transform: translateX(0) translateY(0) scale(1);\n                }\n                .animate-item.product {\n                    transform: scale(0.9);\n                }\n                .animate-item.review {\n                    transform: translateX(-20px);\n                }\n                .animate-item.default {\n                    transform: translateY(20px);\n                }\n            '),
						document.head.appendChild(e);
				})();
				const n = (function (e, n) {
					let t;
					return function (...o) {
						clearTimeout(t),
							(t = setTimeout(() => {
								clearTimeout(t), e(...o);
							}, n));
					};
				})(e, 100);
				n(),
					new MutationObserver(n).observe(document.body, {
						childList: !0,
						subtree: !0,
					});
			})());
	}
	function o() {
		try {
			e(), n(), t(), i();
		} catch (e) {
			console.error('Error initializing custom JS:', e);
		}
	}
	(function () {
		const e = window.location.pathname,
			n = window.location.hostname;
		return !(
			(domainName !== n && `www.${domainName}` !== n) ||
			('/' !== e && '' !== e && '/index.html' !== e && '/home' !== e)
		);
	})() &&
		(window.storeCustomJSLoaded ||
			((window.storeCustomJSLoaded = !0),
			'loading' === document.readyState
				? document.addEventListener('DOMContentLoaded', o)
				: o(),
			setTimeout(o, 500),
			'complete' !== document.readyState &&
				window.addEventListener('load', o)));
})();
