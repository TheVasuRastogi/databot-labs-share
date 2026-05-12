const express = require('express');
const surveyHandler = require('../api/survey');

module.exports = function setupSurveyApi(app) {
  app.use(express.json());
  app.all('/api/survey', (req, res) => surveyHandler(req, res));
};
