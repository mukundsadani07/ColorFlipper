let cvalue = document.querySelector("#cvalue");
let btn = document.querySelector("button");
let body = document.querySelector("body");
let heading = document.querySelector("h1");
btn.addEventListener("click", function () {
  let colorValue = "#";
  let chars = "ABCDEF1234567890";
  for (let i = 0; i <= 5; i++) {
    let x = Math.floor(Math.random() * chars.length);
    console.log(i + 1 + " " + x + " " + chars.substr(x, 1));
    colorValue += chars.substr(x, 1);
  }

  cvalue.innerHTML = colorValue;

  if (colorValue === "#000000") {
    cvalue.style.color = "#FFFFFF";
    heading.style.borderColor = "#FFFFFF";
    body.style.background = colorValue;
  } else {
    body.style.background = colorValue;
  }
  console.log("Clicked");
});
