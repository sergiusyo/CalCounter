document.write('<div class="container">');
document.write(
  '<h1 class="main-title">Калькулятор калорийности блюда (счетчик калорий)</h1>'
);

document.write('<ul class="list">');

let index = 0;
let totalWeight = 0;

//вывод карточки 1
function printProduct1() {
  index++;
  let product1 = prompt(`Введите название продукта ${index}:`);
  let calc1 = Number(
    prompt(`Количество килокалорий в 1 грамме продукта ${index}:`)
  );
  let weight1 = Number(prompt(`Вес продукта (гр):`));
  totalWeight1 = calc1 * weight1;

  document.write(`<li class="list__item">
        <p class="text__item">${index}) ${product1}, калорийность: ${calc1} ккал,  вес: ${weight1} гр,
        всего: ${totalWeight1} ккал</p>
        </li>`);
}

printProduct1();

//вывод карточки 2
function printProduct2() {
  index++;
  let product2 = prompt(`Введите название продукта ${index}:`);
  let calc2 = Number(prompt(`Количество килокалорий в 1 грамме продукта:`));
  let weight2 = Number(prompt(`Вес продукта (гр):`));
  totalWeight2 = calc2 * weight2;

  document.write(`<li class="list__item">
                  <p class="text__item">${index}) ${product2}, калорийность: ${calc2} ккал,  вес: ${weight2} гр,
                  всего: ${totalWeight2} ккал</p> </p>
                  </li>`);
}

printProduct2();

// // //вывод карточки 3
function printProduct3() {
  index++;
  let product3 = prompt(`Введите название продукта ${index}:`);
  let calc3 = Number(prompt(`Количество килокалорий в 1 грамме продукта:`));
  let weight3 = Number(prompt(`Вес продукта (гр):`));
  totalWeight3 = calc3 * weight3;

  document.write(`<li class="list__item">
                  <p class="text__item">${index}) ${product3}, калорийность: ${calc3} ккал,  вес: ${weight3} гр,
всего: ${totalWeight3} ккал</p> </p></p>
                  </li>`);
}

printProduct3();

//вывод карточки

document.write("</ul>");

//общая калорийность блюда
function opa() {
  let tops = totalWeight1 + totalWeight2 + totalWeight3;
  document.write(
    `<div class="total">Калорийность всего блюда: ${tops} ккал</div>`
  );
}
opa();
