db.advanced_books.find(
    {"reviews": {$exists: true}},
    {"_id": 0, "title": 1, "price": 1}
).sort({"price": -1})
