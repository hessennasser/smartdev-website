/**
 * Leva10 Store Custom Scripts - Enhanced Version
 * With Advanced Logging System and Configurable Selectors
 */

(function () {
    'use strict';

    // ============================================
    // LOGGING SYSTEM
    // ============================================

    const Logger = {
        enabled: true, // Set to false to disable all logs
        prefix: '[Leva10 Store]',

        styles: {
            info: 'color: #3498db; font-weight: bold;',
            success: 'color: #27ae60; font-weight: bold;',
            warning: 'color: #f39c12; font-weight: bold;',
            error: 'color: #e74c3c; font-weight: bold;',
            debug: 'color: #95a5a6; font-weight: normal;'
        },

        log(level, message, data = null) {
            if (!this.enabled) return;

            const timestamp = new Date().toLocaleTimeString('ar-SA');
            const style = this.styles[level] || this.styles.info;

            console.log(
                `%c${this.prefix} [${level.toUpperCase()}] [${timestamp}]`,
                style,
                message
            );

            if (data) {
                console.log('📊 Data:', data);
            }
        },

        info(message, data) {
            this.log('info', message, data);
        },

        success(message, data) {
            this.log('success', message, data);
        },

        warning(message, data) {
            this.log('warning', message, data);
        },

        error(message, data) {
            this.log('error', message, data);
        },

        debug(message, data) {
            this.log('debug', message, data);
        },

        group(title) {
            if (!this.enabled) return;
            console.group(`%c${this.prefix} ${title}`, this.styles.info);
        },

        groupEnd() {
            if (!this.enabled) return;
            console.groupEnd();
        }
    };

    // ============================================
    // CONFIGURATION
    // ============================================

    const CONFIG = {
        // FAQ Section Content
        faqData: [
            {
                question: 'وين الجودة والمصدر اللي يدعم الاشتراك؟',
                answer: 'نحن نقدم منتجات عالية الجودة من مصادر موثوقة مع ضمان الجودة والأصالة.'
            },
            {
                question: 'هل يوجد ضمان على الاشتراك؟',
                answer: 'نعم، نوفر ضمان شامل على جميع اشتراكاتنا مع إمكانية الاستبدال أو الاسترداد.'
            },
            {
                question: 'اقدر اطلب من جهاز ثاني واعطيه بحسابي؟',
                answer: 'يمكنك استخدام حسابك من أي جهاز، ولكن يجب مراعاة شروط الاستخدام المتعددة.'
            },
            {
                question: 'هل يتم تحديث التطبيقات بشكل مستمر؟',
                answer: 'نعم، نقوم بتحديث التطبيقات بانتظام لضمان أفضل أداء وأحدث المميزات.'
            },
            {
                question: 'هل متجر leva10 موثق؟',
                answer: 'متجرنا مرخص ومعتمد رسمياً مع سجل تجاري ساري المفعول.'
            },
            {
                question: 'كم مدة تسليم الطلب وكيف أستلم طلبي؟',
                answer: 'مدة التسليم من 1-3 أيام عمل، ويتم التسليم عبر شركات الشحن المعتمدة.'
            },
            {
                question: 'هل يوجد الاشتراك في حال سويت فورمات؟',
                answer: 'الاشتراك محفوظ في حسابك ويمكن استرداده حتى بعد الفورمات.'
            },
            {
                question: 'كم مدة الاشتراك؟',
                answer: 'تتراوح مدة الاشتراك حسب الباقة المختارة من شهر إلى سنة كاملة.'
            },
            {
                question: 'هل يوجد دعم فني؟',
                answer: 'نوفر دعم فني متاح 24/7 عبر الواتساب والبريد الإلكتروني.'
            }
        ],

        // Video Section Content
        videoData: {
            videoUrl: 'https://nussuq-dev.com/leo/1.mp4',
            posterUrl: '',
            title: 'شاهد عرض المنتج',
            description: 'تعرف على مميزات اشتراكاتنا'
        },

        // Timer Settings
        timerSettings: {
            durationHours: 120, // 5 days
            storageKey: 'leva10_timer_end'
        },

        // Section Order
        sectionOrder: {
            video: 1,
            faq: 2,
            timer: 3,
            animations: 4
        },

        // Page Detection
        targetPages: {
            hostnames: ['leva10.com', 'www.leva10.com'],
            paths: ['/']
        },

        // SECTION INSERTION SELECTORS - Configure where each section should be inserted
        sectionSelectors: {
            video: {
                // Insert after this selector
                insertAfter: '.inside-page-container.container',
                // Alternative options (will be tried in order if insertAfter fails):
                // insertBefore: '.product-reviews',
                // appendTo: '.main-content',
            },
            faq: {
                // Insert before footer
                insertBefore: '.footer, footer',
                // Alternative options:
                // insertAfter: '.product-reviews',
                // appendTo: '.home',
            }
        },

        // Selectors
        selectors: {
            productBox: '.product-box',
            productThumb: '.thumb',
            discountBox: '.discount-box',
            priceDiscount: '.price-discount',
            productTimer: '.product-timer',
            home: '.home',
            footer: '.footer, footer',
            sections: [
                '.main-slider-section',
                '.section-logos',
                '.products-grid-section',
                '.bg-testimonials',
                '.faq-section',
                '.video-section',
                '.footer',
                'section'
            ],
            animateItems: [
                '.item-slider',
                '.block-logos-section',
                '.product-item-slide',
                '.product-box',
                '.single_review',
                '.faq-item',
                '.video-container'
            ]
        }
    };

    // ============================================
    // HTML TEMPLATES
    // ============================================

    const TEMPLATES = {
        faqSection: () => `
            <section class="faq-section section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h3 class="section-title text-center">الأسئلة الشائعة</h3>
                        </div>
                    </div>
                    <div class="row" id="faq-container"></div>
                </div>
            </section>
        `,

        faqItem: (question, answer) => `
            <div class="faq-item">
                <div class="faq-header">
                    <h3 class="faq-question">${question}</h3>
                    <div class="faq-icon">+</div>
                </div>
                <div class="faq-content">
                    <p class="faq-answer">${answer}</p>
                </div>
            </div>
        `,

        videoSection: () => `
            <section class="video-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-4">
                            <h3 class="section-title">${CONFIG.videoData.title}</h3>
                            <p class="section-description">${CONFIG.videoData.description}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="video-container">
                                <video 
                                    width="100%" 
                                    height="100%" 
                                    loop 
                                    autoplay 
                                    muted 
                                    playsinline 
                                    preload="metadata" 
                                    poster="${CONFIG.videoData.posterUrl}">
                                    <source src="${CONFIG.videoData.videoUrl}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `,

        timerHTML: () => `
            <div class="product-timer">
                <div class="timer-wrapper">
                    <div class="timer-unit">
                        <span class="timer-item">00</span>
                        <span class="timer-label">يوم</span>
                    </div>
                    <span class="timer-separator">:</span>
                    <div class="timer-unit">
                        <span class="timer-item">00</span>
                        <span class="timer-label">ساعة</span>
                    </div>
                    <span class="timer-separator">:</span>
                    <div class="timer-unit">
                        <span class="timer-item">00</span>
                        <span class="timer-label">دقيقة</span>
                    </div>
                    <span class="timer-separator">:</span>
                    <div class="timer-unit">
                        <span class="timer-item">00</span>
                        <span class="timer-label">ثانية</span>
                    </div>
                </div>
                <div class="timer-message">⚡ العرض ينتهي قريباً</div>
            </div>
        `
    };

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    const Utils = {
        createElementFromHTML(html) {
            const temp = document.createElement('div');
            temp.innerHTML = html.trim();
            return temp.firstElementChild;
        },

        debounce(func, wait) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    clearTimeout(timeout);
                    func(...args);
                }, wait);
            };
        },

        isTargetPage() {
            const { hostnames, paths } = CONFIG.targetPages;
            const currentHost = window.location.hostname;
            const currentPath = window.location.pathname;

            const isValid = hostnames.includes(currentHost) && currentPath.includes(paths[0]);

            Logger.debug('Page validation', {
                currentHost,
                currentPath,
                isValid,
                allowedHosts: hostnames,
                allowedPaths: paths
            });

            return isValid;
        }
    };

    // ============================================
    // SECTION MODULES
    // ============================================

    const FAQSection = {
        init() {
            Logger.group('FAQ Section Initialization');

            if (document.querySelector('.faq-section')) {
                Logger.warning('FAQ section already exists, skipping');
                Logger.groupEnd();
                return;
            }

            Logger.info('Creating FAQ section');
            const section = this.createSection();
            this.insertSection(section);

            Logger.success(`FAQ section created with ${CONFIG.faqData.length} items`);
            Logger.groupEnd();
        },

        createSection() {
            const section = Utils.createElementFromHTML(TEMPLATES.faqSection());
            const container = section.querySelector('#faq-container');

            CONFIG.faqData.forEach((item, index) => {
                Logger.debug(`Adding FAQ item ${index + 1}: ${item.question}`);

                const col = document.createElement('div');
                col.className = 'col-lg-6 col-md-12';

                const faqItem = Utils.createElementFromHTML(
                    TEMPLATES.faqItem(item.question, item.answer)
                );

                this.attachClickHandler(faqItem, index);
                col.appendChild(faqItem);
                container.appendChild(col);
            });

            return section;
        },

        attachClickHandler(item, index) {
            const icon = item.querySelector('.faq-icon');
            const content = item.querySelector('.faq-content');

            item.addEventListener('click', () => {
                const isActive = content.classList.contains('active');

                Logger.debug(`FAQ item ${index + 1} clicked`, { isActive });

                // Close all other items
                document.querySelectorAll('.faq-content.active').forEach(el => {
                    el.classList.remove('active');
                });
                document.querySelectorAll('.faq-icon.rotated').forEach(el => {
                    el.classList.remove('rotated');
                });

                // Toggle current item
                if (!isActive) {
                    content.classList.add('active');
                    icon.classList.add('rotated');
                    Logger.info(`FAQ item ${index + 1} opened`);
                } else {
                    Logger.info(`FAQ item ${index + 1} closed`);
                }
            });
        },

        insertSection(section) {
            Logger.debug('Inserting FAQ section into DOM');

            const selectorConfig = CONFIG.sectionSelectors.faq;

            // Try insertAfter if configured
            if (selectorConfig.insertAfter) {
                const targetElement = document.querySelector(selectorConfig.insertAfter);
                if (targetElement) {
                    targetElement.parentNode.insertBefore(section, targetElement.nextSibling);
                    Logger.success(`FAQ section inserted after ${selectorConfig.insertAfter}`);
                    return;
                } else {
                    Logger.warning(`Target element not found: ${selectorConfig.insertAfter}`);
                }
            }

            // Try insertBefore if configured
            if (selectorConfig.insertBefore) {
                const selectors = selectorConfig.insertBefore.split(',').map(s => s.trim());
                for (const selector of selectors) {
                    const element = document.querySelector(selector);
                    if (element) {
                        element.parentNode.insertBefore(section, element);
                        Logger.success(`FAQ section inserted before ${selector}`);
                        return;
                    }
                }
                Logger.warning(`No target elements found: ${selectorConfig.insertBefore}`);
            }

            // Try appendTo if configured
            if (selectorConfig.appendTo) {
                const targetElement = document.querySelector(selectorConfig.appendTo);
                if (targetElement) {
                    targetElement.appendChild(section);
                    Logger.success(`FAQ section appended to ${selectorConfig.appendTo}`);
                    return;
                } else {
                    Logger.warning(`Target element not found: ${selectorConfig.appendTo}`);
                }
            }

            // Fallback to .home
            const home = document.querySelector(CONFIG.selectors.home);
            if (home) {
                home.appendChild(section);
                Logger.success('FAQ section inserted into .home (fallback)');
                return;
            }

            Logger.error('Could not find suitable location for FAQ section');
        }
    };

    const VideoSection = {
        init() {
            Logger.group('Video Section Initialization');

            if (document.querySelector('.video-section')) {
                Logger.warning('Video section already exists, skipping');
                Logger.groupEnd();
                return;
            }

            Logger.info('Creating video section');
            const section = this.createSection();
            this.insertSection(section);

            Logger.success('Video section created successfully');
            Logger.groupEnd();
        },

        createSection() {
            Logger.debug('Creating video element', {
                videoUrl: CONFIG.videoData.videoUrl,
                posterUrl: CONFIG.videoData.posterUrl
            });

            return Utils.createElementFromHTML(TEMPLATES.videoSection());
        },

        insertSection(section) {
            Logger.debug('Inserting video section into DOM');

            const selectorConfig = CONFIG.sectionSelectors.video;

            // Try insertAfter if configured
            if (selectorConfig.insertAfter) {
                const targetElement = document.querySelector(selectorConfig.insertAfter);
                if (targetElement) {
                    // Insert after the target element
                    targetElement.parentNode.insertBefore(section, targetElement.nextSibling);
                    Logger.success(`Video section inserted after ${selectorConfig.insertAfter}`);
                    return;
                } else {
                    Logger.warning(`Target element not found: ${selectorConfig.insertAfter}`);
                }
            }

            // Try insertBefore if configured
            if (selectorConfig.insertBefore) {
                const targetElement = document.querySelector(selectorConfig.insertBefore);
                if (targetElement) {
                    targetElement.parentNode.insertBefore(section, targetElement);
                    Logger.success(`Video section inserted before ${selectorConfig.insertBefore}`);
                    return;
                } else {
                    Logger.warning(`Target element not found: ${selectorConfig.insertBefore}`);
                }
            }

            // Try appendTo if configured
            if (selectorConfig.appendTo) {
                const targetElement = document.querySelector(selectorConfig.appendTo);
                if (targetElement) {
                    targetElement.appendChild(section);
                    Logger.success(`Video section appended to ${selectorConfig.appendTo}`);
                    return;
                } else {
                    Logger.warning(`Target element not found: ${selectorConfig.appendTo}`);
                }
            }

            // Fallback logic
            Logger.warning('No valid selector found, using fallback');
            const fallback = document.querySelector('section') ||
                document.querySelector('main') ||
                document.body;

            if (fallback) {
                if (fallback.tagName === 'SECTION') {
                    fallback.parentNode.insertBefore(section, fallback.nextSibling);
                } else {
                    fallback.insertBefore(section, fallback.firstChild);
                }
                Logger.success(`Video section inserted into ${fallback.tagName} (fallback)`);
            } else {
                Logger.error('Could not find suitable location for video section');
            }
        }
    };

    const TimerModule = {
        intervalId: null,
        timerElements: new Set(),
        endTime: null,

        init() {
            Logger.group('Timer Module Initialization');

            this.endTime = this.getEndTime();

            Logger.info('Timer end time set', {
                endTime: new Date(this.endTime).toLocaleString('ar-SA'),
                duration: `${CONFIG.timerSettings.durationHours} hours`
            });

            this.startTimer();
            this.observeDOM();
            this.setupBeforeUnload();

            Logger.success('Timer module initialized successfully');
            Logger.groupEnd();
        },

        getEndTime() {
            try {
                const stored = localStorage.getItem(CONFIG.timerSettings.storageKey);
                const now = Date.now();
                const duration = CONFIG.timerSettings.durationHours * 60 * 60 * 1000;

                if (stored) {
                    const storedTime = parseInt(stored);
                    if (storedTime > now) {
                        Logger.debug('Using stored timer end time', {
                            storedTime: new Date(storedTime).toLocaleString('ar-SA')
                        });
                        return storedTime;
                    }
                }

                const newEndTime = now + duration;
                Logger.debug('Creating new timer end time', {
                    newEndTime: new Date(newEndTime).toLocaleString('ar-SA')
                });
                return newEndTime;
            } catch (error) {
                Logger.error('Error reading timer from storage', error);
                return Date.now() + (CONFIG.timerSettings.durationHours * 60 * 60 * 1000);
            }
        },

        saveEndTime(time) {
            try {
                localStorage.setItem(CONFIG.timerSettings.storageKey, time.toString());
                Logger.debug('Timer end time saved to storage');
            } catch (error) {
                Logger.error('Could not store timer end time', error);
            }
        },

        calculateTimeRemaining() {
            const remaining = Math.max(0, this.endTime - Date.now());

            if (remaining <= 0) {
                Logger.warning('Timer expired, resetting');
                const duration = CONFIG.timerSettings.durationHours * 60 * 60 * 1000;
                this.endTime = Date.now() + duration;
                this.saveEndTime(this.endTime);
            }

            const seconds = Math.floor(remaining / 1000);
            return {
                days: String(Math.floor(seconds / 86400)).padStart(2, '0'),
                hours: String(Math.floor((seconds % 86400) / 3600)).padStart(2, '0'),
                minutes: String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'),
                seconds: String(seconds % 60).padStart(2, '0')
            };
        },

        updateTimers() {
            const time = this.calculateTimeRemaining();
            let updatedCount = 0;

            this.timerElements.forEach(element => {
                if (!element || !element.parentNode) {
                    this.timerElements.delete(element);
                    return;
                }

                const items = element.querySelectorAll('.timer-item');
                if (items.length >= 4) {
                    items[0].textContent = time.days;
                    items[1].textContent = time.hours;
                    items[2].textContent = time.minutes;
                    items[3].textContent = time.seconds;
                    updatedCount++;
                }
            });

            if (updatedCount > 0) {
                Logger.debug(`Updated ${updatedCount} timers`);
            }
        },

        addTimersToProducts() {
            const products = document.querySelectorAll(CONFIG.selectors.productBox);
            let addedCount = 0;

            Logger.debug(`Scanning ${products.length} products for timers`);

            products.forEach((product, index) => {
                const hasDiscount = product.querySelector(CONFIG.selectors.discountBox) ||
                    product.querySelector(CONFIG.selectors.priceDiscount);
                const hasTimer = product.querySelector(CONFIG.selectors.productTimer);

                if (hasDiscount && !hasTimer) {
                    const thumb = product.querySelector(CONFIG.selectors.productThumb);
                    if (thumb) {
                        const timer = Utils.createElementFromHTML(TEMPLATES.timerHTML());
                        thumb.parentNode.insertBefore(timer, thumb.nextSibling);
                        this.timerElements.add(timer);
                        addedCount++;
                        Logger.debug(`Timer added to product ${index + 1}`);
                    }
                }
            });

            if (addedCount > 0) {
                Logger.success(`Added ${addedCount} new timers to products`);
            }
        },

        startTimer() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                Logger.debug('Cleared existing timer interval');
            }

            this.intervalId = setInterval(() => this.updateTimers(), 1000);
            this.addTimersToProducts();
            this.updateTimers();

            Logger.info('Timer started', {
                totalTimers: this.timerElements.size
            });
        },

        observeDOM() {
            const debouncedUpdate = Utils.debounce(() => {
                Logger.debug('DOM changed, checking for new products');
                this.addTimersToProducts();
                this.updateTimers();
            }, 100);

            const observer = new MutationObserver(debouncedUpdate);
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            Logger.debug('DOM observer started');
        },

        setupBeforeUnload() {
            window.addEventListener('beforeunload', () => {
                Logger.info('Saving timer state before page unload');
                this.saveEndTime(this.endTime);
                if (this.intervalId) {
                    clearInterval(this.intervalId);
                }
            });
        }
    };

    const AnimationModule = {
        initialized: false,

        init() {
            if (this.initialized) {
                Logger.warning('Animation module already initialized');
                return;
            }

            Logger.group('Animation Module Initialization');
            this.initialized = true;

            const debouncedObserve = Utils.debounce(() => this.observeElements(), 100);
            debouncedObserve();

            const observer = new MutationObserver(debouncedObserve);
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            Logger.success('Animation module initialized successfully');
            Logger.groupEnd();
        },

        observeElements() {
            const sections = document.querySelectorAll(CONFIG.selectors.sections.join(', '));

            if (sections.length === 0) {
                Logger.debug('No sections found for animation');
                return;
            }

            Logger.debug(`Found ${sections.length} sections to animate`);

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.animateSection(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.15,
                    rootMargin: '50px'
                }
            );

            let observedCount = 0;
            sections.forEach(section => {
                if (!section.classList.contains('animated')) {
                    observer.observe(section);
                    observedCount++;
                }
            });

            Logger.debug(`Observing ${observedCount} sections for scroll animations`);
        },

        animateSection(section) {
            if (section.classList.contains('animated')) return;

            Logger.debug('Animating section', {
                tagName: section.tagName,
                className: section.className
            });

            section.classList.add('animated', 'animate-section');

            setTimeout(() => {
                section.classList.add('visible');
            }, 100);

            const items = section.querySelectorAll(CONFIG.selectors.animateItems.join(', '));

            Logger.debug(`Animating ${items.length} items in section`);

            items.forEach((item, index) => {
                const isProduct = item.classList.contains('product-item-slide') ||
                    item.classList.contains('product-box');
                const isReview = item.classList.contains('single_review');

                item.classList.add('animate-item');

                if (isProduct) {
                    item.classList.add('product');
                } else if (isReview) {
                    item.classList.add('review');
                } else {
                    item.classList.add('default');
                }

                setTimeout(() => {
                    item.classList.add('visible');
                }, 200 + (index * 100));
            });
        }
    };

    // ============================================
    // MAIN INITIALIZATION
    // ============================================

    function initializeAll() {
        Logger.group('🚀 Leva10 Store Custom Scripts Starting');
        Logger.info('Version: 2.1 with Configurable Selectors');

        try {
            if (!Utils.isTargetPage()) {
                Logger.warning('Current page is not a target page, skipping initialization');
                Logger.groupEnd();
                return;
            }

            Logger.success('Target page validated, proceeding with initialization');

            // Get ordered sections
            const sections = Object.entries(CONFIG.sectionOrder)
                .sort(([, a], [, b]) => a - b)
                .map(([name]) => name);

            Logger.info('Section initialization order:', sections);

            // Initialize sections in order
            sections.forEach(sectionName => {
                switch (sectionName) {
                    case 'video':
                        VideoSection.init();
                        break;
                    case 'faq':
                        FAQSection.init();
                        break;
                    case 'timer':
                        TimerModule.init();
                        break;
                    case 'animations':
                        AnimationModule.init();
                        break;
                }
            });

            Logger.success('✅ All modules initialized successfully');

        } catch (error) {
            Logger.error('❌ Error during initialization', error);
            console.error('Full error details:', error);
        }

        Logger.groupEnd();
    }

    // ============================================
    // START APPLICATION
    // ============================================

    if (window.leva10CustomJSLoaded) {
        Logger.warning('Scripts already loaded, skipping');
        return;
    }

    Logger.info('🔧 Loading Leva10 Store Custom Scripts...');
    window.leva10CustomJSLoaded = true;

    if (document.readyState === 'loading') {
        Logger.debug('Document still loading, waiting for DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
        Logger.debug('Document already loaded, initializing immediately');
        initializeAll();
    }

    // Fallback initialization
    setTimeout(() => {
        Logger.debug('Fallback initialization triggered');
        initializeAll();
    }, 500);

    if (document.readyState !== 'complete') {
        Logger.debug('Waiting for window load event');
        window.addEventListener('load', initializeAll);
    }

    Logger.info('📝 Script setup complete, waiting for initialization triggers');


})();
