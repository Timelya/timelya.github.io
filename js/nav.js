(() => {
  const inHtmlFolder = location.pathname.includes("/html/");

  // linkek: cím + célfájl
  // index (pékség) a gyökérben van, a többi a /html/ mappában
  const links = [
    { label: "ZH 1 - Pékség", root: "index.html", html: "../index.html" },
    { label: "ZH 1 - Autó", file: "Auto.html" },
    { label: "ZH 1 - Gyógyszertár", file: "Gyogyszertar.html" },
    { label: "ZH 1 - Sörök variáció", file: "Sorok_variacio.html" },
    { label: "ZH 1 - Sörök", file: "Sorok.html" },
    { label: "ZH 1 - Videójátékok", file: "Videojatekok.html" },
    { label: "ZH 2", file: "zh2.html" },
  ];

  const nav = document.createElement("nav");
  nav.className = "nav";

  links.forEach(l => {
    const a = document.createElement("a");
    a.textContent = l.label;

    // Href számítás: ha /html/ mappában vagyok, akkor sima fájlnév,
    // ha gyökérben vagyok, akkor html/<fájl>
    if (l.root && l.html) {
      a.href = inHtmlFolder ? l.html : l.root;
    } else {
      a.href = inHtmlFolder ? l.file : `html/${l.file}`;
    }

    // Active jelölés
    const current = location.pathname.split("/").pop();
    const target = (inHtmlFolder ? a.href.split("/").pop() : a.href.split("/").pop());

    if (current === target) a.classList.add("active");
    if (!inHtmlFolder && current === "index.html" && l.label.includes("Pékség")) a.classList.add("active");
    if (inHtmlFolder && current !== "index.html" && l.label.includes("Pékség") && current === "index.html") a.classList.add("active");

    nav.appendChild(a);
  });

  // beszúrjuk a body elejére
  document.body.prepend(nav);
})();
