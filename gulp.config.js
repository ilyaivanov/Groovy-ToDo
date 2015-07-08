module.exports = function () {
    var config = {};
    config.getKarmaOptions = getKarmaOptions;

    return config;

    function getKarmaOptions() {
        return {
            files: ['app/spec.js'],
            exclude: []
        };
    }
};
