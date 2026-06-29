const envelopeButton = document.querySelector("#openEnvelope");
const birthdayPhoto = document.querySelector("#birthdayPhoto");
const photoPlaceholder = document.querySelector("#photoPlaceholder");

// Animasi pembuka amplop sebelum berpindah ke halaman ucapan.
if (envelopeButton) {
  envelopeButton.addEventListener("click", () => {
    envelopeButton.classList.add("is-open");
    envelopeButton.disabled = true;

    window.setTimeout(() => {
      document.body.classList.add("page-leaving");
    }, 650);

    window.setTimeout(() => {
      window.location.href = "ucapan.html";
    }, 1050);
  });
}

// Placeholder tetap muncul jika assets/foto.jpg belum diganti.
if (birthdayPhoto && photoPlaceholder) {
  birthdayPhoto.addEventListener("error", () => {
    birthdayPhoto.classList.add("is-hidden");
    photoPlaceholder.removeAttribute("hidden");
  });

  birthdayPhoto.addEventListener("load", () => {
    photoPlaceholder.setAttribute("hidden", "");
  });
}
