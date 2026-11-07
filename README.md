# School-web
Fullstack web portal for an educational institution featuring an accessibility module, custom UI, and upcoming Java Spring Boot backend (REST/SOAP API, SQL).
# Заславская Школа №1 — Web Portal | Educational Institution Portal

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

**[Live Demo (GitHub Pages)](file:///C:/Users/glari/Desktop/zaslavl/school.html)**

---

## English Description

**Zaslavl School No. 1 Web Portal** is a fullstack web application project for an educational institution. Currently featuring a complete, responsive frontend with a dedicated accessibility module (WCAG-inspired), the project is actively expanding to integrate an enterprise-grade **Java (Spring Boot)** backend supporting **RESTful APIs**, **SOAP web services**, and a relational **SQL database**.

### Key Features (Frontend)
* **Accessibility Module (Visually Impaired Mode):** Dynamic font scaling, color scheme switching (Standard, Black & White, Dark), letter-spacing adjustments, and image display controls.
* **Interactive UI Components:** Custom autoplay hero slider, multi-level accordion sidebar menu, dynamic news category tabs, and an infinite partner banner carousel.
* **Multi-language Header:** Instant DOM-based language switching (RU / BE / EN).
* **Responsive Layout:** Built with modern CSS Grid and Flexbox.

### Project Structure & Tech Stack
* **Frontend (Implemented):**
  * `index.html`, `style.css`, `script.js` — Clean modular architecture (Semantic HTML5, CSS Variables/Grid/Flexbox, Vanilla ES6+ JS).
  * `svaga2_full.html` — Standalone all-in-one bundle for quick local preview.
* **Backend & Database (In Progress / Roadmap):**
  * **Java & Spring Boot** — Core server architecture and business logic.
  * **Spring Data JPA & SQL** — Persistent storage for news, schedules, and school administration data.
  * **REST API & Fetch JS** — Asynchronous client-server communication for dynamic content rendering and site search.
  * **SOAP Web Services (WSDL/XML)** — Standardized data exchange module for external state system integrations.

---

## 🇷🇺 Описание на русском

**Веб-портал ГУО «Заславская гимназия №1»** — полнофункциональный (Fullstack) проект официального сайта учебного заведения. Проект включает готовый адаптивный фронтенд на чистом стеке и активно масштабируется за счет серверной части на **Java (Spring Boot)** с поддержкой **REST API**, протокола **SOAP** и реляционной базы данных **SQL**.

### Реализованный функционал (Frontend)
* **Панель доступности (Для слабовидящих):** Настройка размера шрифта, переключение цветовых тем (Стандартная, Ч/Б, Темная), регулировка межбуквенного интервала и управление графикой.
* **Интерактивный UI:** Кастомный слайдер с автопрокруткой, многоуровневое боковое меню (Accordion), фильтрация новостей по вкладкам без перезагрузки страницы и  карусель баннеров.
* **Мультиязычность шапки:** Переключение заголовков на лету (RU / BE / EN) через DOM-манипуляции.

### Архитектура и стек технологий
* **Frontend (Готово):**
  * `index.html`, `style.css`, `script.js` — Модульная сборка (HTML5, CSS3 Grid/Flexbox, Vanilla JS).
  * `svaga2_full.html` — Монолитная самодостаточная версия (All-in-One) для быстрого локального запуска.
* **Backend и БД (В разработке / Roadmap):**
  * **Java & Spring Boot** — Серверная логика и обработка запросов.
  * **SQL & Spring Data JPA** — Хранение новостей, расписания и структуры учреждения в БД.
  * **REST API** — Динамическая подгрузка контента и работа живого поиска по сайту через `fetch()`.
  * **SOAP** — Интеграционный модуль обмена данными в формате XML/WSDL.
