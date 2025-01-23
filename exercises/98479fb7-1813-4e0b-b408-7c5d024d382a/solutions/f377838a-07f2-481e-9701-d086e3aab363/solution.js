db.movies_2015.find(
    {"rated": "TV-14", "type": "series"},
    {"title": 1, "cast": 1}
)
