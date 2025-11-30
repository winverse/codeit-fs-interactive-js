// DOM 트리 실습
const list = document.querySelector("ul");

// 부모 노드에 접근
console.log(list.parentNode); // body

// 자식 노드들에 접근
console.log(list.children); // [li, li]

// 형제 노드에 접근
console.log(list.previousElementSibling); // p
console.log(list.nextElementSibling); // script

const heading = document.querySelector("h1");
console.log(heading.nodeType); // 1 (요소 노드)
