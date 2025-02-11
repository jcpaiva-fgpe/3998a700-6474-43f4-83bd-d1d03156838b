db.advanced_books.find(
    {
        $or: [
            {"stats.pages": {$gt: 1000}},
            {"price": {$gt: 30}}
        ]
    },
    {
        "_id": 0,
        "title": 1,
        "stats.pages": 1,
        "price": 1
    }
).sort({"stats.pages": -1})
