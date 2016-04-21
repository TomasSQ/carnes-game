import webapp2
from handlers.handlers import *


app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)