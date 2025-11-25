const menuBtn = document.createElement("div");
  menuBtn.className = "menu-btn";
  menuBtn.innerHTML = "☰ ";
  document.body.appendChild(menuBtn);

  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
