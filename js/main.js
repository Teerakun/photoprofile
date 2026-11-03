(function () {
  const $ = (id) => document.getElementById(id);

  // โปรไฟล์
  document.title = CONFIG.name;
  $("name").textContent = CONFIG.name;
  $("bio").textContent = CONFIG.bio;
  $("avatar").src = CONFIG.avatar;
  $("footer").textContent = CONFIG.footer;

  // ถ้ารูปโหลดไม่ได้ ให้กลับไปใช้รูปสำรอง
  $("avatar").addEventListener("error", function () {
    this.src = "images/avatar.svg";
  }, { once: true });

  // สร้างหมวดและปุ่มลิงก์
  const root = $("sections");
  CONFIG.sections.forEach((section) => {
    const wrap = document.createElement("section");
    wrap.className = "section";

    const h = document.createElement("h2");
    h.className = "section-title";
    h.textContent = section.title;
    wrap.appendChild(h);

    const list = document.createElement("div");
    list.className = "links";

    section.links.forEach((item) => {
      const a = document.createElement("a");
      a.className = "link-btn";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `
        <span class="link-icon">${icon(item.icon)}</span>
        <span class="link-text">
          <span class="link-label"></span>
          <span class="link-desc"></span>
        </span>
        <span class="link-arrow">${icon("arrow")}</span>`;
      a.querySelector(".link-label").textContent = item.label;
      a.querySelector(".link-desc").textContent = item.desc || "";
      list.appendChild(a);
    });

    wrap.appendChild(list);
    root.appendChild(wrap);
  });
})();
