// onload = function () {
//   window;

//   // 아이디가 package-ticket-count 인 DOM에 대해
//   const cnt = document.querySelector("#package-ticket-count");

//   // oninput 이벤트가 발생하면
//   console.dir(cnt);
//   cnt.oninput = function () {
//     // 콘솔에 "Input!!"이 출력되도록 한다.
//     console.log("Input!!");

//     // 동시에 input의 부모 중 package에 있는
//     const package = this.closest(".package");

//     // data-price 값을 가져와 출력한다.
//     const price = package.dataset.price;
//     // const packagePrice = this.closest(".package").dataset.price;
//     console.log(price);

//     // 만약, input에 입력한 값이 비어있다면, 0으로 초기화 해라.
//     if (!this.value) {
//       this.value = 0;
//     }

//     // let inputValue = parseInt(this.value); // NaN or 숫자
//     // if (window.isNaN(inputValue)) {
//     //   inputValue = 0;
//     // }

//     // .package 다음 DOM(.total-price)안의 #amount를 가져온다.
//     const amount = package.nextElementSibling.querySelector("#amount");
//     amount.innerText = parseInt(this.value) * parseFloat(price);
//     // amount.innerText = inputValue * parseFloat(price);
//   };
// };
// window의 타입 Window
Window.prototype.afterRender = function (callbackFunction) {
  this.onload = callbackFunction;
};
// document의 타입 Document
Document.prototype.find = function (selector) {
  return this.querySelector(selector);
};

// DOM의 타입 ==> Element
Element.prototype.next = function () {
  return this.nextElementSibling;
};

Element.prototype.find = function (selector) {
  return this.querySelector(selector);
};

window.afterRender(function () {
  const count = document.find("#package-ticket-count");
  count.oninput = function () {
    const package = this.closest(".package");
    const price = package.dataset.price;

    if (!this.value) {
      this.value = 0;
    }

    const amount = package.next().find("#amount");
    amount.innerText = parseInt(this.value) * parseFloat(price);
  };
});
