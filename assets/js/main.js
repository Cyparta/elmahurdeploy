import translations from "../../locales/translations.js";

const btn = document.querySelector(".click");


export var lang = localStorage.getItem("lang") || "ar";

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(lang)
})

btn.addEventListener('click', () => {
    if (lang === 'ar') {
        lang = 'en'
    } else {
        lang = "ar"
    }
    setLanguage(lang)
    localStorage.setItem("lang", lang)
    window.location.reload()
})





const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
  
  document.body.style.textAlign = lang === 'ar' ? 'right' : "left"
  document.body.classList.add(lang === 'ar' ? 'ar' : "en")
  if (lang === "ar") {
    document.getElementById("name").placeholder = "اسمك بالكامل";
    document.getElementById("phone").placeholder = "رقم الهاتف";
    document.getElementById("email").placeholder = "البريد الالكتروني";
    document.getElementById("message").placeholder = "كتابة رسالة";
  }
};
