
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fountain-screenplay").forEach(container => {
    const source = container.querySelector(".fountain-source");
    const output = container.querySelector(".fountain-output");

    if (!source || !output || typeof fountain === "undefined") {
      return;
    }

    try {
      const screenplay = fountain.parse(source.textContent.trim());

      output.innerHTML = screenplay.html.script;
      source.remove();
    } catch (error) {
      console.error("Fountain rendering failed:", error);
      output.textContent = source.textContent;
    }
  });
});
