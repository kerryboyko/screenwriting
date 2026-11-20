document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#ideas-table");
  if (!table) return;

  const tbody = table.querySelector("tbody");
  const headers = [...table.querySelectorAll("thead th")];

  let currentColumn = -1;
  let ascending = true;

  const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });

  headers.forEach((header, column) => {
    const button = header.querySelector("button");

    button.addEventListener("click", () => {
      // Same column reverses direction.
      // New column starts ascending.
      ascending = currentColumn === column ? !ascending : true;
      currentColumn = column;

      const rows = [...tbody.querySelectorAll("tr")];

      rows.sort((a, b) => {
        const aValue = a.cells[column].textContent.trim();
        const bValue = b.cells[column].textContent.trim();

        const result = collator.compare(aValue, bValue);
        return ascending ? result : -result;
      });

      tbody.append(...rows);

      headers.forEach((th) => th.setAttribute("aria-sort", "none"));
      header.setAttribute("aria-sort", ascending ? "ascending" : "descending");
    });
  });
});
