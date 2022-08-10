'use strict'


function one(x) {
  let count = 10;
  function two() {
    const num = +prompt("Введите значение от 1 до 100");
    count--;

    if (num > x && count != 0) {
      alert('Загаданное число меньше. У вас осталось ' + count + ' попыток');
      two();
    } else if (num == 0) {
      if (confirm('Игра окончена, хотите повторить?')) {
        two();
      } else {
          return;
      }
    }  else if (num < x && count != 0) {
      alert('Загаданное число больше. У вас осталось ' + count + ' попыток');
      two();
    } else if (num == x) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (typeof num == 'string') {
      alert('Введите число');
      two();
    } else if (count==0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        location.reload();
      } else {
          return;
      }
    } else {
      alert('Введите число');
      two();
    }
  }
  two();
}


one(18);