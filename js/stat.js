'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FOUNT_GAP = 15;
var GAP_X_TEXT_VICTORY = 30;
var GAP_Y_TEXT_VICTORY = 30;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X_TEXT_VICTORY,
      CLOUD_Y + GAP_Y_TEXT_VICTORY);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X_TEXT_VICTORY,
      CLOUD_Y + GAP_Y_TEXT_VICTORY + FOUNT_GAP);
};

