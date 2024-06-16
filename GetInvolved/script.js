document.addEventListener("DOMContentLoaded", function () {
  // Menangani submit form
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    var inputName = document.getElementById("inputName").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var inputMessage = document.getElementById("inputMessage").value;

    if (!inputName || !inputEmail || !inputMessage) {
      event.preventDefault();
      alert("Please fill out all fields.");
    }
  });

  // Fungsi untuk menggulir ke bagian "Take Action"
  function scrollToTakeAction() {
    // Menggunakan smooth scrolling untuk menggulir halaman ke bagian "Take Action"
    var takeActionSection = document.getElementById("take-action");
    if (takeActionSection) {
      takeActionSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Menambahkan event listener untuk card jika diperlukan
  // Misalnya, jika ingin menggulir ketika card diklik
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.addEventListener("click", scrollToTakeAction);
  });
});
