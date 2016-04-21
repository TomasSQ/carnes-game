from google.appengine.ext import ndb

class Author(ndb.Model):
	"""Sub model for representing an author."""
	identity = ndb.StringProperty(indexed=False)
	email = ndb.StringProperty(indexed=False)