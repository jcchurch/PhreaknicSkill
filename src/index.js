var APP_ID = "amzn1.ask.skill.bef809de-5f87-4192-a079-1719e113b8f6";

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

Phreaknic.prototype.intentHandlers = {
    "OpeningDialogIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
  , "WhoAreYouIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
  , "WhoAmIIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
  , "WhereAreYouIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
  , "TellMeSomethingIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
  , "AMAZON.CancelIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
  , "AMAZON.StopIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
  , "AMAZON.HelpIntent": function (intent, session, response) { response.ask(Dialog[intent], Dialog[intent]); }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the Phreaknic skill.
    var skill = new Phreaknic();
    skill.execute(event, context);
};

