(() => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
