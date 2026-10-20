(() => {
  const supported = ["si", "en", "ta"];
  function changeLanguage(language) {
    if (!supported.includes(language)) return;
    localStorage.setItem("lkCoMathsLanguage", language);
    document.documentElement.lang = language;
    document.querySelectorAll("[data-si][data-en][data-ta]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
  }
  window.changeLanguage = changeLanguage;
  const saved = localStorage.getItem("lkCoMathsLanguage");
  changeLanguage(supported.includes(saved) ? saved : "si");
})();
