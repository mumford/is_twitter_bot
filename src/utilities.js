function stringFormat(format) {  
  var args = Array.prototype.slice.call(arguments, 1);
  return format.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
      ? args[number] 
      : match
    ;
  });
};

function logMessage(message) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (args) {
    console.log(stringFormat(arguments[0], args));
  } else {
    console.log(message);
  }
};

module.exports = {
    stringFormat: stringFormat,
    logMessage: logMessage
};