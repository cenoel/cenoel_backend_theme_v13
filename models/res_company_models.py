# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
import datetime
from odoo.exceptions import UserError, ValidationError

class CenoelBackendResCompany(models.Model):
    """Classe qui herite la classe ResCompany"""
    _inherit = 'res.company'

    brand_primary = fields.Char(_('Primary color'))
    brand_secondary = fields.Char(_('Secondary color'))
