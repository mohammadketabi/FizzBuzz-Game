const label = document.querySelector("#lbl");

document.querySelector("#btn").addEventListener("click", () => {
  const num = +document.querySelector("#get_num").value;
  console.log(num);
  console.log(typeof num);

  if (num == "") {
    label.textContent = "Please enter a valid number!";
  } else {
    if (num % 3 == 0 && num % 5 == 0) {
      label.textContent = `The number is ${num} and it's FizzBuzz`;
    } else if (num % 5 == 0) {
      label.textContent = `The number is ${num} and it's Buzz`;
    } else if (num % 3 == 0) {
      label.textContent = `The number is ${num} and it's Fizz`;
    } else {
      label.textContent = `The number is ${num}`;
    }
    document.querySelector("#get_num").value = "";
  }
});
