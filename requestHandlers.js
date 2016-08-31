/**
 * Created by Administrator on 2016/8/31.
 */
function start(){
    console.log("Request handler 'start' was called.");
}

function upload() {
    console.log("Request handler 'upload' was called.")
}
exports.upload = upload;
exports.start = start;