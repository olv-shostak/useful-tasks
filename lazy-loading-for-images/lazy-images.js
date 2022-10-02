const refs = {
  progress: document.querySelector(".progress"),
  sections: document.querySelector(".sections"),
  sectionList: document.querySelectorAll(".section"),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

refs.sections.addEventListener("scroll", handleScroll);

function handleScroll(e) {
  refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;
  const scroll = document.querySelector(".title");
  scroll.textContent = e.target.scrollTop;
}

const sectionsObserver = new IntersectionObserver(onEntry, {
  threshold: 0.2,
});

refs.sectionList.forEach((s) => sectionsObserver.observe(s));

function onEntry(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const { id } = entry.target.dataset;

    const prev = document.querySelector("li.active");
    const menuItem = document.querySelector(`li[data-id="${id}"]`);
    const img = entry.target.querySelector("img");

    const { url } = img.dataset;
    img.src = url;

    if (prev) {
      prev.classList.remove("active");
    }
    menuItem.classList.add("active");
  });
}
