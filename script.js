'use strict'


function one(x) {

  function two() {
    const num = prompt("Введите значение от 1 до 100");

    if (num > x) {
      alert('Загаданное число меньше');
      two();
    }  else if (num < x) {
      alert('Загаданное число больше');
      two();
    } else if (num === null) {
      alert('Игра окончена');
    } else if (num == x) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (typeof num == 'string') {
      alert('Введите число');
      two();
    } else {
      alert('Неправильное значение, повторите попытку');
      two();
    }
  }
  two();
}


one(18);