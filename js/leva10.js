/**
 * Leva10 Store - Home Page Custom Sections
 * Video & FAQ Sections with Simple Configuration
 */

(function () {
    'use strict';

    // ============================================
    // SIMPLE LOGGING
    // ============================================
    const log = {
        info: (msg) => console.log(`[Leva10] ${msg}`),
        error: (msg) => console.error(`[Leva10] ${msg}`)
    };

    // ============================================
    // EDIT HERE
    // ============================================
    const CONFIG = {
        // Video Section - Edit this data
        video: {
            enabled: true,
            title: 'شاهد عرض المنتج',
            description: 'تعرف على مميزات اشتراكاتنا',
            videoUrl: 'https://nussuq-dev.com/leo/1.mp4',
            posterUrl: '', // Optional: poster image URL

            // Position: Choose ONE option (delete or comment out the others)
            // insertAfter: '.main-slider-section',  // Insert after this element
            insertBefore: '.main-slider-section',  // OR insert before the last .main-slider-section
            // appendTo: '.home',  // OR append inside this element
        },

        // FAQ Section - Edit this data
        faq: {
            enabled: true,
            title: 'الأسئلة الشائعة',
            items: [
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

            // Position: Choose ONE option (delete or comment out the others)
            insertBefore: '.footer, footer',  // Insert before this element
            // insertAfter: '.bg-testimonials',  // OR insert after this element
            // appendTo: '.home',  // OR append inside this element
        },

        // Page Detection
        homepageSelector: '.home'
    };

    // ============================================
    // HTML TEMPLATES
    // ============================================
    const createVideoSection = () => `
        <section class="video-section custom-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-4">
                        <h3 class="section-title">${CONFIG.video.title}</h3>
                        <p class="section-description">${CONFIG.video.description}</p>
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
                                ${CONFIG.video.posterUrl ? `poster="${CONFIG.video.posterUrl}"` : ''}>
                                <source src="${CONFIG.video.videoUrl}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const createFAQSection = () => {
        const faqItems = CONFIG.faq.items.map(item => `
            <div class="col-lg-6 col-md-12">
                <div class="faq-item">
                    <div class="faq-header">
                        <h3 class="faq-question">${item.question}</h3>
                        <div class="faq-icon">+</div>
                    </div>
                    <div class="faq-content">
                        <p class="faq-answer">${item.answer}</p>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <section class="faq-section custom-section section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h3 class="section-title text-center">${CONFIG.faq.title}</h3>
                        </div>
                    </div>
                    <div class="row faq-container">
                        ${faqItems}
                    </div>
                </div>
            </section>
        `;
    };

    // ============================================
    // STYLES
    // ============================================
    const addStyles = () => {
        const styles = `
            /* Video Section */
            .video-section {
                padding: 2rem 0;
            }
            .video-section .section-title {
                color: white !important;
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }
            .video-section .section-description {
                color: rgba(255, 255, 255, 0.9);
                font-size: 1.2rem;
                margin-bottom: 2rem;
            }
            .video-container {
                position: relative;
                width: 100%;
                margin: 0 auto;
                border-radius: 1rem;
                overflow: hidden;
            }
            .video-container video {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 1rem;
            }

            /* FAQ Section */
            .faq-section .section-title {
                color: white !important;
            }
            .faq-item {
                border-radius: 10px;
                color: #eee !important;
                transition: all 0.3s ease;
                padding: 1.5rem;
                margin-bottom: 1.5rem;
                cursor: pointer;
            }
            .faq-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .faq-question {
                color: white !important;
                font-weight: 500;
                text-align: right;
                margin: 0;
                flex: 1;
                margin-left: 1rem;
            }
            .faq-icon {
                transition: transform 0.3s ease;
                color: var(--second-color, #edb751);
                font-weight: bold;
                font-size: 1.5rem;
            }
            .faq-icon.rotated {
                transform: rotate(45deg);
            }
            .faq-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
                margin-top: 1rem;
            }
            .faq-content.active {
                max-height: 200px;
            }
            .faq-answer {
                color: #d1d5db;
                text-align: right;
                line-height: 1.6;
                margin: 0;
            }

            /* Mobile Responsive */
            @media (max-width: 768px) {
                .video-section {
                    padding: 2rem 0;
                }
                .video-section .section-title {
                    font-size: 1.8rem;
                }
                .video-section .section-description {
                    font-size: 1rem;
                }
                .video-container {
                    margin: 0 1rem;
                }
            }
        `;

        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    };

    // ============================================
    // UTILITIES
    // ============================================
    const createElementFromHTML = (html) => {
        const temp = document.createElement('div');
        temp.innerHTML = html.trim();
        return temp.firstElementChild;
    };

    const isHomePage = () => {
        return document.querySelector(CONFIG.homepageSelector) !== null;
    };

    // ============================================
    // INSERT SECTIONS
    // ============================================
    const insertSection = (section, config, sectionName) => {
        let inserted = false;

        // Try insertAfter
        if (config.insertAfter && !inserted) {
            const target = document.querySelector(config.insertAfter);
            if (target) {
                target.parentNode.insertBefore(section, target.nextSibling);
                log.info(`${sectionName} inserted after: ${config.insertAfter}`);
                inserted = true;
            } else {
                log.error(`insertAfter target not found: ${config.insertAfter}`);
            }
        }

        // Try insertBefore
        if (config.insertBefore && !inserted) {
            const selectors = config.insertBefore.split(',').map(s => s.trim());
            for (const selector of selectors) {
                const target = document.querySelector(selector);
                if (target) {
                    target.parentNode.insertBefore(section, target);
                    log.info(`${sectionName} inserted before: ${selector}`);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                log.error(`insertBefore target not found: ${config.insertBefore}`);
            }
        }

        // Try appendTo
        if (config.appendTo && !inserted) {
            const target = document.querySelector(config.appendTo);
            if (target) {
                target.appendChild(section);
                log.info(`${sectionName} appended to: ${config.appendTo}`);
                inserted = true;
            } else {
                log.error(`appendTo target not found: ${config.appendTo}`);
            }
        }

        // Fallback
        if (!inserted) {
            const fallback = document.querySelector('.home') || document.body;
            fallback.appendChild(section);
            log.info(`${sectionName} inserted using fallback`);
        }

        return inserted;
    };

    const insertSections = () => {
        if (!isHomePage()) {
            log.info('Not on home page, skipping');
            return;
        }

        if (document.querySelector('.custom-section')) {
            log.info('Sections already exist');
            return;
        }

        // Insert Video Section
        if (CONFIG.video.enabled) {
            const videoSection = createElementFromHTML(createVideoSection());
            insertSection(videoSection, CONFIG.video, 'Video section');
        }

        // Insert FAQ Section
        if (CONFIG.faq.enabled) {
            const faqSection = createElementFromHTML(createFAQSection());
            insertSection(faqSection, CONFIG.faq, 'FAQ section');

            // Attach FAQ click handlers
            attachFAQHandlers();
        }
    };

    // ============================================
    // FAQ INTERACTION
    // ============================================
    const attachFAQHandlers = () => {
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                const icon = item.querySelector('.faq-icon');
                const content = item.querySelector('.faq-content');
                const isActive = content.classList.contains('active');

                // Close all
                document.querySelectorAll('.faq-content').forEach(el => el.classList.remove('active'));
                document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotated'));

                // Toggle current
                if (!isActive) {
                    content.classList.add('active');
                    icon.classList.add('rotated');
                }
            });
        });
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    const init = () => {
        if (window.leva10Loaded) return;
        window.leva10Loaded = true;

        log.info('Initializing...');
        addStyles();
        insertSections();
        log.info('Ready');
    };

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

