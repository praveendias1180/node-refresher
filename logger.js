var url = 'https://range.quest.logger/log';

function log(message){
    // Sends and HTTPS request to the logger service.
    console.log(message);
}

module.exports.log = log;
module.exports.endpoint = url;

console.log(module);