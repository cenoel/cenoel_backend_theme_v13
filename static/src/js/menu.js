odoo.define('cenoel_backend_theme.Menu', function (require) {
    "use strict";

    var AppsMenu = require('web.AppsMenu');

    var Menu = AppsMenu.include({
        init: function () {
            var self = this;
            this._super.apply(this, arguments);
        },
        start: function () {
            var self = this;

            $('.toggle_menu_item').click(function () {
                if ($("#app-sidebar").css("display") == 'block') {
                    $("#app-sidebar").css({"display": "none"});
                    $(".o_action_manager").css({"margin-left": "0"});
                } else {
                    $("#app-sidebar").css({"display": "block"});
                    $(".o_action_manager").css({"margin-left": "250px"});
                }
            });

            $(document).click(function () {
                if ($("#app-sidebar").css("display") == 'block') {
                    $("nav").css({"margin-left": "250px"});
                    $(".o_action_manager").css({"margin-left": "250px"});
                } else {
                    $("nav").css({"margin-left": "0px"});
                    $(".o_action_manager").css({"margin-left": "0"});
                }
            });

            $("nav").click(function () {
                if ($("#app-sidebar").css("display") == 'block') {
                    $("nav").css({"margin-left": "250px"});
                } else {
                    $("nav").css({"margin-left": "0px"});
                }
            });
            $(".o_menu_apps").click(function () {
                $("#app-sidebar").css({"display": "none"});
                $("header").css({"margin-left": "0px"});
            });
            $(".o_action_manager").click(function () {
                $("#app-sidebar").css({"display": "none"});
                $("header").css({"margin-left": "0px"});
                $(".o_action_manager").css({"margin-left": "0"});
            });
            $(".o_menu_brand").click(function () {
                $("#app-sidebar").css({"display": "none"});
                $("header").css({"margin-left": "0px"});
            });
            $(".o_menu_sections").click(function () {
                $("#app-sidebar").css({"display": "none"});
                $("header").css({"margin-left": "0px"});
            });
            $(".o_menu_systray").click(function () {
                $("#app-sidebar").css({"display": "none"});
                $("header").css({"margin-left": "0px"});
            });

            return this._super.apply(this, arguments);
        },
    });


    return Menu;

});
