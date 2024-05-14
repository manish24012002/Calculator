let btns = document.querySelectorAll("button");
let inpEL = document.querySelector("input");

for (let item of btns) {
  item.addEventListener("click", function (e) {
    let btnText = e.target.innerText;
    if (btnText === "AC") {
      inpEL.value = "";
    } else if (btnText === "=") {
      try {
        inpEL.value = eval(inpEL.value);
      } catch (e) {
        // console.log(e);
        inpEL.value = "GIAN HAI AAP";
      }
    } else {
      inpEL.value += btnText;
    }
  });
}