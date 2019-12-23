exports.getDate = function() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    var today = new Date();

    var options = {
        weekday: "long",
    };

    var day = today.toLocaleDateString("en-US", options);
    return day
}