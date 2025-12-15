(() => {
  const inHtmlFolder = location.pathname.includes("/html/");

  const links = [
    { label: "ZH 1 - Pékség", file: "Pek.html" },
    { label: "ZH 1 - Autó", file: "Auto.html" },
    { label: "ZH 1 - Gyógyszertár", file: "Gyogyszertar.html" },
    { label: "ZH 1 - Sörök variáció", file: "Sorok_variacio.html" },
    { label: "ZH 1 - Sörök", file: "Sorok.html" },
    { label: "ZH 1 - Videójátékok", file: "Videojatekok.html" },
    { label: "ZH 2", file: "zh2.html" },
  ];

  const nav = document.createElement("nav");
  nav.className = "nav";

  const current = location.pathname.split("/").pop();

  links.forEach(l => {
    const a = document.createElement("a");
    a.textContent = l.label;

    // ha /html/-ban vagy: "Auto.html"
    // ha rootból futna valami: "html/Auto.html"
    a.href = inHtmlFolder ? l.file : `html/${l.file}`;

    if (current === l.file) a.classList.add("active");

    nav.appendChild(a);
  });

  document.body.prepend(nav);
})();
