db.empleados.find({}, {"_id": false}).sort({"empno": 1}).limit(4)
