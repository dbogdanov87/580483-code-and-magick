'use strict';

var BAR_WIDTH = 40;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FOUNT_GAP = 15;
var GAP = 10;
var GAP_X_TEXT_VICTORY = 30;
var GAP_Y_TEXT_VICTORY = 30;
var TEXT_WIDTH = 50;
var USER_NAME = 'Вы';


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  } return maxElement;
};

var colorizeBarsByName = function (name) {
  var barColor = 'blue';
  if (name === USER_NAME) {
    barColor = 'rgba(255, 0, 0, 1)';
  } else {
    barColor = 'rgba(30, 27, 94, ' + Math.random();
  } return barColor;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  // отрисовка облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // вывод текста о победе
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X_TEXT_VICTORY,
      CLOUD_Y + GAP_Y_TEXT_VICTORY);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X_TEXT_VICTORY,
      CLOUD_Y + GAP_Y_TEXT_VICTORY + FOUNT_GAP);

  // отрисовка гистограммы
  var maxTime = getMaxElement(times);
  var heightHistogram = 150;
  for (var i = 0; i < names.length; i++) {
    // вывод имен игроков
    ctx.fillText(names[i], CLOUD_X + GAP + FOUNT_GAP + (GAP + TEXT_WIDTH + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP);
    // вывод столбцов с результатами
    ctx.fillStyle = colorizeBarsByName(names[i]);
    ctx.fillRect(CLOUD_X + GAP + FOUNT_GAP + (GAP + TEXT_WIDTH + BAR_WIDTH) * i,
        CLOUD_HEIGHT - CLOUD_Y - FOUNT_GAP,
        BAR_WIDTH, -(heightHistogram * times[i]) / maxTime);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // возвращаю черный цвет
    // вывод времени
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FOUNT_GAP + (GAP + TEXT_WIDTH + BAR_WIDTH) * i,
        CLOUD_HEIGHT - FOUNT_GAP - CLOUD_Y - FOUNT_GAP - (heightHistogram * times[i]) / maxTime);
  }
};

