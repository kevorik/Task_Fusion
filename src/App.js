// task 3
function Number(num) {
  const first_twenty = [
    "ноль",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];

  const tens = [
    "",
    "",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];

  const hundreds = [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];

  const thousands = ["", "тысяча", "тысячи", "тысяч"];

  if (num === 0) {
    return first_twenty[num];
  }

  let result = "";

  if (num < 0 || num > 100000) {
    return "Не в диапазоне";
  }

  if (num >= 1000) {
    result += first_twenty[Math.floor(num / 1000)] + " тысяч "; // здесь проблема есть. когда число уже 5-ти значное, то на первую цифру undefined, но если num <= 4-ро значное, то все хорошо
    num %= 1000;
  }

  if (num >= 100) {
    result += hundreds[Math.floor(num / 100)] + " ";
    num %= 100;
  }

  if (num >= 20) {
    result += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 0) {
    if (num < 20) {
      result += first_twenty[num];
    } else {
      result += first_twenty[num % 10];
    }
  }

  return result.trim();
}
const str = 5133;
const result = Number(str);
console.log(`${str} в текстовом виде: ${result}`);
console.log(result);

//task2
function flatArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));
// очень долго здесь искал ошибку... а по итогу у меня во второй строчке кода была переменная const.

//task1
// к сожалению даже в голову не лезет решение, может еще время надо подумать, или хотя бы помощь от интернета в этой задаче... голова не может придумать план решения

export default Number;
