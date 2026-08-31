(() => {
  const partUrl = (prefix, index) =>
    `./video-parts-v1/${prefix}-${String(index).padStart(3, "0")}.part`;

  document.querySelectorAll(".video-player").forEach((player) => {
    const video = player.querySelector("video");
    const button = player.querySelector(".video-load");
    if (!video || !button) return;

    button.addEventListener("click", async () => {
      if (button.classList.contains("is-loading")) return;

      button.classList.add("is-loading");
      button.querySelector("span").textContent = "正在加载…";

      try {
        const count = Number(video.dataset.parts);
        const prefix = video.dataset.prefix;
        const responses = await Promise.all(
          Array.from({ length: count }, (_, index) => fetch(partUrl(prefix, index)))
        );
        if (responses.some((response) => !response.ok)) {
          throw new Error("video part unavailable");
        }

        const chunks = await Promise.all(responses.map((response) => response.arrayBuffer()));
        video.src = URL.createObjectURL(new Blob(chunks, { type: "video/mp4" }));
        button.remove();
        await video.play();
      } catch {
        button.classList.remove("is-loading");
        button.classList.add("is-error");
        button.querySelector("span").textContent = "加载失败，请重试";
      }
    });
  });
})();
