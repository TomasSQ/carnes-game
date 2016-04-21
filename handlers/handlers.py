import os
import urllib

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2
from models.models import *

JINJA_ENVIRONMENT = jinja2.Environment(
	loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), os.pardir, os.path.dirname('static/templates/'))),
	extensions=['jinja2.ext.autoescape'],
	autoescape=True,
	trim_blocks=True)

class MainPage(webapp2.RequestHandler):

	def get(self):
		template = JINJA_ENVIRONMENT.get_template('sample.html')

		self.response.write(template.render())