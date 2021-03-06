from db import db
from datetime import datetime

class Historial(db.EmbeddedDocument):
    fecha = db.DateTimeField(default=datetime.now)
    data = db.StringField()
    meta = {'strict': False}

    def to_dict(self):
        return{
            "fecha": str(self.fecha),
            "data": self.data
        }