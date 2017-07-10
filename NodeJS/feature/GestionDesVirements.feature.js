'use strict';

var gherkin = require('node-gherkin-runner');
var assert = require('assert');

gherkin.api.featureSteps(/Gestion des Virements/)
    .before(() => {
    })
    .given(/ceci est un exemple avec une variable (\d+)/, (variable) => {
    });
