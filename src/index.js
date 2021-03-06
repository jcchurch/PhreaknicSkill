var APP_ID = "amzn1.ask.skill.93e48219-870d-4596-8577-730347dd0ce0";

var AlexaSkill = require("./AlexaSkill");
var Dialog = require('./Dialog');

/**
 * Phreaknic is a child of AlexaSkill.
 */
var Phreaknic = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Phreaknic.prototype = Object.create(AlexaSkill.prototype);
Phreaknic.prototype.constructor = Phreaknic;

Phreaknic.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Phreaknic onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    intent = "OpeningDialogIntent";
    response.ask(Dialog[intent], Dialog[intent])
};

Phreaknic.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("Phreaknic onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

Phreaknic.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("Phreaknic onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

var speechHandler = function (intent, session, response) {
    response.ask(Dialog[intent.name], Dialog[intent.name]);
};

var stopHandler = function (intent, session, response) {
    response.tell(Dialog[intent.name], Dialog[intent.name]);
};

Phreaknic.prototype.intentHandlers = {
    "OpeningDialogIntent": speechHandler
  , "WhoAreYouIntent": speechHandler
  , "WhoAmIIntent": speechHandler
  , "WhereAreYouIntent": speechHandler
  , "TellMeSomethingIntent": speechHandler
  , "FinalRebuttalIntent": stopHandler
  , "AMAZON.HelpIntent": speechHandler
  , "AMAZON.CancelIntent": stopHandler
  , "AMAZON.StopIntent": stopHandler
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the Phreaknic skill.
    var skill = new Phreaknic();
    skill.execute(event, context);
};

