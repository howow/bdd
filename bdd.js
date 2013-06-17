/**
 * @author Otto Pecz - otto.pecz@hogarthww.com
 * @date 17/06/2013
 */
/*global define*/
define(function (app) {
    var that = Object.create({});

    that.GIVEN = function () {
        var args = Array.prototype.slice.call(arguments);

        this.given =  args[0].call(this);
        return this;
    };

    that.WHEN = function () {
        var args = Array.prototype.slice.call(arguments);

        args[0].call(this, args[1]);
        return this;
    };

    that.THEN = function () {
        var args = Array.prototype.slice.call(arguments);

        args[0].call(this, args[1]);
    };

    return that;
});