/**
 * Created by Administrator on 2016/8/31.
 */
var exec = require("child_process").exec;
function start(){
    console.log("Request handler 'start' was called.");
    var content = "empty";

    exec("ls-lah",function (error, stdout, stderr) {
        content = stdout;
    })

    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(3000);
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return"Hello Upload";
}
exports.upload = upload;
exports.start = start;