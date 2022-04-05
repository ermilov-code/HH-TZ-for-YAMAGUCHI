// ============================================================

let tableBtnUp = document.getElementById('tableBtnUp');
let tableBtnDown = document.getElementById('tableBtnDown');
let countertop = document.getElementById('countertop');

tableBtnUp.addEventListener("click", () => countertop.classList.add('tableAnimationCSS'));
tableBtnDown.addEventListener("click", () => countertop.classList.remove('tableAnimationCSS'));

// ============================================================