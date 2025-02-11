db.advanced_books.find(
    {"author.country": {$in: ["Italy", "Spain"]}},
    {
        "_id": 0,
        "title": 1,
        "author.country": 1,
        "author.birth_year": 1
    }
).sort({"author.birth_year": 1})
