'use strict';

var COUNT_WIZARDS = 4;
var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
  'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц',
  'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var choiceRandomValueInList = function (listData) {
  return listData[Math.floor(Math.random() * listData.length)];
};

var generatorWizardsParameters = function (firstNames, secondNames, coatColors, eyesColors) {
  var listWizardsParameter = [];
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    var wizardParameters = {};
    wizardParameters.firsName = choiceRandomValueInList(firstNames);
    wizardParameters.lastName = choiceRandomValueInList(secondNames);
    wizardParameters.coatColor = choiceRandomValueInList(coatColors);
    wizardParameters.eyesColor = choiceRandomValueInList(eyesColors);
    listWizardsParameter.push(wizardParameters);
  }
  return listWizardsParameter;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.firsName + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// открыть окно настроек
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// открыть похожих персонажей
var similarCharacters = document.querySelector('.setup-similar');
similarCharacters.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = generatorWizardsParameters(FIRST_NAME, LAST_NAME, COAT_COLOR, EYES_COLOR);

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
