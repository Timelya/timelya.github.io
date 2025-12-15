(async () => {
  const inHtmlFolder = location.pathname.includes("/html/");

  // nav.html betöltése
  const navPath = inHtmlFolder ? "../js/nav.html" : "js/nav.html";
  const res = await fetch(navPath);
  const navHtml = await res.text();

  document.body.insertAdjacentHTML("afterbegin", navHtml);

  // útvonal térkép
  const map = {
    Pek: inHtmlFolder ? "Pek.html" : "html/Pek.html",
    Auto: inHtmlFolder ? "Auto.html" : "html/Auto.html",
    Gyogyszertar: inHtmlFolder ? "Gyogyszertar.html" : "html/Gyogyszertar.html",
    Sorok_variacio: inHtmlFolder ? "Sorok_variacio.html" : "html/Sorok_variacio.html",
    Sorok: inHtmlFolder ? "Sorok.html" : "html/Sorok.html",
    Videojatekok: inHtmlFolder ? "Videojatekok.html" : "html/Videojatekok.html",
    zh2: inHtmlFolder ? "zh2.html" : "html/zh2.html",
  };

  document.querySelectorAll(".nav a").forEach(a => {
    const key = a.dataset.page;
    a.href = map[key];

    // aktív oldal kiemelése
    if (location.pathname.endsWith(map[key])) {
      a.classList.add("active");
    }
  });
})();
