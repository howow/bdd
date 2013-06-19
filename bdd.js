/**
 * @author Otto Pecz - otto.pecz@hogarthww.com
 * @date 17/06/2013
 */
/*global define*/
define(function (app) {
    var that = Object.create({});

    that.GIVEN = function () {
        var args = Array.prototype.slice.call(arguments);

        this.given = args[0].call(this);
        return this;
    };

    that.PLUS = function () {
        var args = Array.prototype.slice.call(arguments);

        if (!this.plus || Object.prototype.toString.call(this.plus) !== '[object Array]') {
            this.plus = [];
        }

        this.plus.push(args[0].call(this));
        return this;
    };

    that.WHEN = function () {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 1) {
            this.when = args[0].call(this);
        } else if (args.length === 2) {
            this.when = args[0].call(this, args[1]);
        }

        return this;
    };

    that.THEN = function () {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 1) {
            args[0].call(this);
        } else if (args.length === 2) {
            args[0].call(this, args[1]);
        }

        return this;
    };

    that.AND = function () {
        return this.THEN.apply(this, arguments);
    };

    return that;
});