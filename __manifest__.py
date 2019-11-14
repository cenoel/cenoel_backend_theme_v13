# -*- coding: utf-8 -*-
# Copyright 2016, 2018 Cenoel
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html).

{
    "name": "Cenoel backend theme odoo v12",
    "summary": "Cenoel backend theme odoo v12",
    "version": "12.0.0.1",
    "category": "Theme/Backend",
    "website": "",
    "description": """
		Backend theme for Odoo 12.0 community edition.
    """,
    'images': [
        'images/screen.png'
    ],
    "author": "Razafimiandrisoa Noarison Léonce",
    "installable": True,
    "depends": [
        'web',
    ],
    "data": [
        'views/assets.xml',
        'views/sidebar.xml',
    ],
    'qweb': [
        "static/src/xml/menu.xml",
    ],
    'auto_install': True,

}
