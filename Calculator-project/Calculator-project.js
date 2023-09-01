const inputValue = document.querySelector(".interface-js");

let expression = '';

const press = (num) => {
  expression += num;
  inputValue.value = expression;
}

const equal = () => {
  inputValue.value = eval(expression);
  expression = '';
}

const erase = () => {
  expression = '';
  inputValue.value = expression;
}
