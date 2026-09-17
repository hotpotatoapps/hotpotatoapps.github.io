const filters = document.querySelector(".filters");
if (filters) {
  filters.hidden = false;
  const cards = [...document.querySelectorAll("[data-category]")];
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    for (const control of filters.querySelectorAll("button"))
      control.setAttribute("aria-pressed", String(control === button));
    let count = 0;
    for (const card of cards) {
      card.hidden =
        button.dataset.filter !== "all" &&
        card.dataset.category !== button.dataset.filter;
      if (!card.hidden) count++;
    }
    document.querySelector(".result-count").textContent =
      `${count} ${count === 1 ? "app" : "apps"}${button.dataset.filter === "all" ? ". Plenty of personality." : ` for ${button.textContent.toLowerCase()}.`}`;
  });
}
