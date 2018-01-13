
/**
 * JavaScript Rename Function
 * @author Nate Ferrero
 * @license Public Domain
 * @date Apr 5th, 2014
 */
module.exports = function renameFunction (name, fn) {
    return (new Function("return function (call) { return function " + name +
        " () { return call(this, arguments) }; };")())(Function.apply.bind(fn));
};
