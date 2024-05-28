const endDate = "01 January 2025 00:00 AM";
document.querySelector(".endDate").innerText = endDate;
let inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diffrence = (end - now) / 1000;
  if (diffrence < 0) return;

  // show days
  inputs[0].value = Math.floor(diffrence / 3600 / 24);

  // show hours
  inputs[1].value = Math.floor(diffrence / 3600) % 24;

  // show minutes
  inputs[2].value = Math.floor(diffrence / 60) % 60;

  // show seconds
  inputs[3].value = Math.floor(diffrence) % 60;
}
clock();

setInterval(() => {
  clock();
}, 1000);
