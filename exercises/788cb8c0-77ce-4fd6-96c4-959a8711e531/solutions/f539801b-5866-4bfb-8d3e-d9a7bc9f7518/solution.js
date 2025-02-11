db.advanced_books.find(
    {
        $and: [
            {"stats.pages": {$gt: 500}},
            {"stats.chapters": {$gt: 20}}
        ]
    },
    {
        "_id": 0,
        "title": 1,
        "stats": 1
    }
).sort({"stats.pages": -1})
