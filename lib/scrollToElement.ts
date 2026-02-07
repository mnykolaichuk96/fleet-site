// Експортуємо функцію, щоб її можна було використовувати в інших файлах
// Аналог у Java: public static void scrollToElement(...)
// Аналог у Python: def scroll_to_element(...):

export const scrollToElement = (
    id: string,        // id HTML-елемента, до якого треба проскролити
                       // (наприклад "contact-form" або "car-instance-preview")

    retries = 10,      // кількість спроб знайти елемент у DOM
                       // якщо DOM ще не готовий (default значення)

    offset = 80        // відступ зверху в пікселях
                       // потрібен через sticky header
) => {

    // document.getElementById — стандартний DOM API
    // Повертає HTML-елемент або null, якщо елемент ще не існує
    const el = document.getElementById(id);

    // if (el) — у JS це перевірка "не null і не undefined"
    // Аналог у Java:
    // if (el != null)
    if (el) {

        // el.getBoundingClientRect().top
        // → позиція елемента відносно видимої частини вікна (viewport)

        // window.pageYOffset
        // → скільки сторінка вже проскролена зверху

        // offset
        // → віднімаємо, щоб елемент не сховався під хедером

        const y =
            el.getBoundingClientRect().top + // позиція елемента
            window.pageYOffset -             // поточний скрол сторінки
            offset;                           // корекція під header

        // window.scrollTo — прокрутка вікна браузера
        // behavior: "smooth" → плавна анімація
        window.scrollTo({
            top: y,               // куди скролити по вертикалі
            behavior: "smooth",   // тип анімації
        });

        // return — виходимо з функції
        // (далі код НЕ виконується)
        return;
    }

    // Якщо елемент ще НЕ знайдений
    // (DOM ще не дорендерився)

    if (retries > 0) {
        // setTimeout — виконує функцію через певний час
        // Аналог у Python:
        // time.sleep(0.5) + виклик функції
        // Аналог у Java:
        // Thread.sleep(500)

        setTimeout(
            () => scrollToElement(id, retries - 1, offset),
            100 // 500 мс пауза між спробами
        );
    }
};
