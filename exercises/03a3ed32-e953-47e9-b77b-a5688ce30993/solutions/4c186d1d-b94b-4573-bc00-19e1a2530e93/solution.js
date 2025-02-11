db.advanced_books.find(
    {"available": true},
    {
        "_id": 0,
        "title": 1,
        "published.year": 1,
        "price": 1
    }
).sort({"published.year": 1, "price": -1})
