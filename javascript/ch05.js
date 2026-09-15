onload = function () {
  const priceDom = document.querySelector(".package-ticket-price");
  console.log(priceDom);

  //   priceDom?.onclick = function () { // 같은 이벤트 중복 불가
  //     alert("Click");
  //   };
  priceDom?.addEventListener("click", function () {
    // 같은 이벤트를 중복해서 줄 수 있음
    alert("Click");
  });

  const buttons = document.querySelectorAll(".package-green-button");

  buttons.forEach(function (btn) {
    btn.onclick = function () {
      const package = this.closest(".package");
      const price = package.dataset.price;

      const btnArea = this.closest(".package-button-area");
      const newParagraph = document.createElement("p");
      newParagraph.classList.add("package-ticket-price");

      newParagraph.onclick = function () {
        alert("Click");
      };

      //   newParagraph.innerText = "From $" + price;
      newParagraph.innerText = `From $${price}`;

      btnArea.append(newParagraph);

      this.remove();
    };
  });
};
