
        function updateCurrentDate() {
            var d = new Date();
            var day = ["Воскресенье,", "Понедельник,", "Вторник,", "Среда,", "Четверг,", "Пятница,", "Суббота,"];
            var month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
            var formatted = day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
            document.getElementById("date_time").textContent = formatted;
            document.getElementById("footer-year").textContent = d.getFullYear();
        }

        function toggleSubmenu(btn) {
            var li = btn.closest('li');
            if (li) {
                li.classList.toggle('open');
            }
        }

        var currentSlideIndex = 0;
        var slides = document.querySelectorAll('#main_slider .slider-slide');
        var dots = document.querySelectorAll('#main_slider .slider-dot');

        function showSlide(index) {
            if (index >= slides.length) currentSlideIndex = 0;
            else if (index < 0) currentSlideIndex = slides.length - 1;
            else currentSlideIndex = index;

            slides.forEach(function(s, i) {
                s.classList.toggle('active', i === currentSlideIndex);
            });
            dots.forEach(function(d, i) {
                d.classList.toggle('active', i === currentSlideIndex);
            });
        }

        function changeSlide(step) {
            showSlide(currentSlideIndex + step);
        }

        function goToSlide(index) {
            showSlide(index);
        }

        setInterval(function() {
            changeSlide(1);
        }, 5000);

        function openNewsTab(tabId, linkEl) {
            document.querySelectorAll('.tab-pane').forEach(function(pane) {
                pane.classList.remove('active');
            });
            document.querySelectorAll('.nav-tabs li').forEach(function(li) {
                li.classList.remove('active');
            });

            var target = document.getElementById(tabId);
            if (target) target.classList.add('active');
            if (linkEl && linkEl.parentElement) linkEl.parentElement.classList.add('active');
        }

        var bannerOffset = 0;
        function scrollBanners(direction) {
            var track = document.getElementById('banners-track');
            var step = 170;
            var maxScroll = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
            bannerOffset += direction * step;
            if (bannerOffset < 0) bannerOffset = maxScroll;
            if (bannerOffset > maxScroll) bannerOffset = 0;
            track.style.transform = 'translateX(-' + bannerOffset + 'px)';
        }

        function toggleWepPanel() {
            document.getElementById('_wep').classList.toggle('active');
        }

        function setActiveBtn(btn) {
            if (!btn) return;
            Array.from(btn.parentElement.children).forEach(function(b) {
                b.classList.remove('active_option');
            });
            btn.classList.add('active_option');
        }

        function setFontSize(size, btn) {
            var html = document.documentElement;
            html.classList.remove('font_size_small', 'font_size_initial', 'font_size_large', 'font_size_huge');
            html.classList.add('font_size_' + size);
            setActiveBtn(btn);
        }

        function setColorTheme(theme, btn) {
            var html = document.documentElement;
            html.classList.remove('theme_bw', 'theme_wb');
            if (theme !== 'default') html.classList.add('theme_' + theme);
            setActiveBtn(btn);
        }

        function setSpacing(mode, btn) {
            var html = document.documentElement;
            html.classList.remove('spacing_large', 'spacing_huge');
            if (mode === 'large') html.classList.add('spacing_large');
            setActiveBtn(btn);
        }

        function setImagesMode(mode, btn) {
            var html = document.documentElement;
            html.classList.remove('images_bw', 'images_off');
            if (mode === 'bw') html.classList.add('images_bw');
            if (mode === 'off') html.classList.add('images_off');
            setActiveBtn(btn);
        }

        function switchLang(lang, btn) {
            document.querySelectorAll('.lang-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var minText = document.getElementById('ministry-text');
            var schTitle = document.getElementById('school-title');
            if (lang === 'be') {
                minText.innerHTML = 'Міністэрства адукацыі Рэспублікі Беларусь<br>Дзяржаўная ўстанова адукацыі';
                schTitle.textContent = '«ЗАСЛАЎСКАЯ ГІМНАЗІЯ №1»';
            } else if (lang === 'en') {
                minText.innerHTML = 'Ministry of Education of the Republic of Belarus<br>State Educational Institution';
                schTitle.textContent = '«ZASLAVL GYMNASIUM №1»';
            } else {
                minText.innerHTML = 'Министерство образования Республики Беларусь<br>Государственное учреждение образования';
                schTitle.textContent = '«ЗАСЛАВСКАЯ ГИМНАЗИЯ №1»';
            }
        }

        function handleSearch(e) {
            e.preventDefault();
            var q = document.getElementById('site-search-input').value.trim();
            if (!q) return;
            window.open('https://zasl-1.minsk-roo.gov.by/сервисы/поиск-по-сайту?text=' + encodeURIComponent(q), '_blank');
        }

        function checkScrollReveal() {
            var reveals = document.querySelectorAll('.reveal-on-scroll');
            var triggerBottom = window.innerHeight * 0.88;

            reveals.forEach(function(el) {
                var boxTop = el.getBoundingClientRect().top;
                if (boxTop < triggerBottom) {
                    el.classList.add('visible');
                }
            });

            var btn = document.getElementById('scroll_up_button');
            if (window.scrollY > 300) {
                btn.style.display = 'flex';
            } else {
                btn.style.display = 'none';
            }
        }

        window.addEventListener('scroll', checkScrollReveal);

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.onload = function() {
            updateCurrentDate();
            checkScrollReveal();
        };