export function getDom(selector) {
  console.dir(document.querySelector(selector));
  return document.querySelector(selector);
}

export function onClick(dom, cbFunction) {
  // dom에 click 이벤트를 할당하기
  dom.onclick = cbFunction;
}

export function getValue(dom) {
  // dom에 입력된 값을 반환하기
  return parseInt(dom.value);
}

export function setText(dom, text) {
  // dom에 textContent를 할당하기
  dom.textContent = text;
}
