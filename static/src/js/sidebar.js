/* Copyright 2016, 2018 Cenoel.
 * License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl). */

// Check if debug mode is active and then add debug into URL when clicking on the App sidebar
odoo.define('cenoel_backend_theme.Sidebar', function (require) {
    "use strict";
    var core = require('web.core');
    var session = require('web.session');
    var Widget = require('web.Widget');
    $(function () {
        (function ($) {
            $.addDebug = function (url) {
                url = url.replace(/(.{4})/, "$1?debug");
                return url;
            }
            $.addDebugWithAssets = function (url) {
                url = url.replace(/(.{4})/, "$1?debug=assets");
                return url;
            }
            $.delDebug = function (url) {
                var str = url.match(/web(\S*)#/);
                url = url.replace("str/g", "");
                return url;
            }
        })(jQuery);
        $("#sidebar a").each(function () {
            var url = $(this).attr('href');
            if (session.debug == 1) $(this).attr('href', $.addDebug(url));
            if (session.debug == 'assets') $(this).attr('href', $.addDebugWithAssets(url));
            if (session.debug == false) $(this).attr('href', $.delDebug(url));
        });
    });
    $(document).ready(function () {
        $("#app-sidebar").css({"display": "none"});
        $(".o_action_manager").css({"margin-left": "0"});
        $("a").click(function () {
            $("#app-sidebar").css({"display": "none"});
            $(".o_action_manager").css({"margin-left": "0"});
        });
        $("li .nav-item").click(function () {
            $("#app-sidebar").css({"display": "none"});
            $(".o_action_manager").css({"margin-left": "0"});
        });
        $('body div').click(function () {
            $("#app-sidebar").css({"display": "none"});
            $(".o_action_manager").css({"margin-left": "0"});
        });
    });
});
