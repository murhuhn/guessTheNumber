'use strict'


function one() {
  let count = 10;
  let x = Math.floor(Math.random() * 100) + 1;
  console.log(x);
  function two() {
    const num = +prompt("Введите значение от 1 до 100");
    count--;

    if (num > x && count != 0) {
      alert('Загаданное число меньше. У вас осталось ' + count + ' попыток');
      two();
    } else if (num == 0) {
      alert ('Игра окончена');
    }  else if (num < x && count != 0) {
      alert('Загаданное число больше. У вас осталось ' + count + ' попыток');
      two();
    } else if (num == x) {
      if (confirm('Поздравляю, Вы угадали! Хотели бы сыграть еще?')) {
          location.reload();
      } else {
          return;
      }
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


one();