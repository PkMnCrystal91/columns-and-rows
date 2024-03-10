function changeOrder() {
  const container = document.querySelector(".box-parent");
  const boxes = document.querySelectorAll(".box");

  // Convert NodeList to Array
  const boxesArray = Array.from(boxes);

  // Reverse the order of boxes in the array
  const reversedBoxes = boxesArray.reverse();

  // Clear the container
  container.innerHTML = "";

  // Append the boxes in the new order
  reversedBoxes.forEach((box) => {
    container.appendChild(box);
  });
}
