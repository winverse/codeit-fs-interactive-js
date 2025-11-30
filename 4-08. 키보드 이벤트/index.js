// 키보드 이벤트 실습
const input = document.querySelector("#input");

input.addEventListener("keydown", function (e) {
  console.log("1. keydown");
  console.log("key:", e.key);
});
