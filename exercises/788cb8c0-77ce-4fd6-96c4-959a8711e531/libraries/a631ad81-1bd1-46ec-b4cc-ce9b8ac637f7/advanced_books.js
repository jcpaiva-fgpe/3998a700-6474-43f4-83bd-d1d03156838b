db.advanced_books.insertMany([
  {
    "_id": "1",
    "title": "Don Quijote",
    "author": {
      "name": "Miguel de Cervantes",
      "country": "Spain",
      "birth_year": 1547
    },
    "published": {
      "year": 1605,
      "publisher": "Francisco de Robles",
      "location": "Madrid"
    },
    "genres": ["Novel", "Parody", "Adventure"],
    "translations": [
      {"language": "English", "year": 1612, "translator": "Thomas Shelton"},
      {"language": "French", "year": 1614, "translator": "César Oudin"},
      {"language": "Italian", "year": 1622, "translator": "Lorenzo Franciosini"}
    ],
    "reviews": [
      {"score": 5, "user": "literary_buff", "date": "2023-01-15"},
      {"score": 4, "user": "classic_lover", "date": "2023-02-20"}
    ],
    "stats": {
      "pages": 863,
      "words": 195000,
      "chapters": 126
    },
    "available": true,
    "price": 29.99,
    "keywords": ["chivalry", "adventure", "spanish literature", "classic"]
  },
  {
    "_id": "2",
    "title": "One Hundred Years of Solitude",
    "author": {
      "name": "Gabriel García Márquez",
      "country": "Colombia",
      "birth_year": 1927
    },
    "published": {
      "year": 1967,
      "publisher": "Editorial Sudamericana",
      "location": "Buenos Aires"
    },
    "genres": ["Novel", "Magical Realism"],
    "translations": [
      {"language": "English", "year": 1970, "translator": "Gregory Rabassa"},
      {"language": "French", "year": 1968, "translator": "Claude Durand"}
    ],
    "reviews": [
      {"score": 5, "user": "booklover99", "date": "2023-03-10"},
      {"score": 5, "user": "magical_reader", "date": "2023-04-15"}
    ],
    "stats": {
      "pages": 417,
      "words": 144000,
      "chapters": 20
    },
    "available": true,
    "price": 24.99,
    "keywords": ["magical realism", "family saga", "latin american literature"]
  },
  {
    "_id": "3",
    "title": "The Name of the Rose",
    "author": {
      "name": "Umberto Eco",
      "country": "Italy",
      "birth_year": 1932
    },
    "published": {
      "year": 1980,
      "publisher": "Bompiani",
      "location": "Milan"
    },
    "genres": ["Historical Novel", "Mystery", "Philosophy"],
    "translations": [
      {"language": "English", "year": 1983, "translator": "William Weaver"},
      {"language": "Spanish", "year": 1982, "translator": "Ricardo Pochtar"}
    ],
    "reviews": [
      {"score": 4, "user": "mystery_fan", "date": "2023-01-05"},
      {"score": 5, "user": "medieval_buff", "date": "2023-02-28"}
    ],
    "stats": {
      "pages": 512,
      "words": 175000,
      "chapters": 28
    },
    "available": true,
    "price": 27.99,
    "keywords": ["medieval", "monastery", "mystery", "semiotics"]
  },
  {
    "_id": "4",
    "title": "War and Peace",
    "author": {
      "name": "Leo Tolstoy",
      "country": "Russia",
      "birth_year": 1828
    },
    "published": {
      "year": 1869,
      "publisher": "The Russian Messenger",
      "location": "Moscow"
    },
    "genres": ["Historical Novel", "Literary Fiction", "War"],
    "translations": [
      {"language": "English", "year": 1899, "translator": "Louise Maude"},
      {"language": "French", "year": 1879, "translator": "Irène Paskévitch"}
    ],
    "reviews": [
      {"score": 5, "user": "russian_lit_fan", "date": "2023-05-20"},
      {"score": 4, "user": "history_reader", "date": "2023-06-15"}
    ],
    "stats": {
      "pages": 1225,
      "words": 587287,
      "chapters": 365
    },
    "available": false,
    "price": 34.99,
    "keywords": ["napoleonic wars", "russian literature", "epic"]
  },
  {
    "_id": "5",
    "title": "The Trial",
    "author": {
      "name": "Franz Kafka",
      "country": "Austria-Hungary",
      "birth_year": 1883
    },
    "published": {
      "year": 1925,
      "publisher": "Verlag Die Schmiede",
      "location": "Berlin"
    },
    "genres": ["Novel", "Philosophical Fiction", "Absurdist Fiction"],
    "translations": [
      {"language": "English", "year": 1937, "translator": "Willa Muir"},
      {"language": "French", "year": 1933, "translator": "Alexandre Vialatte"}
    ],
    "reviews": [
      {"score": 5, "user": "existentialist", "date": "2023-07-10"},
      {"score": 4, "user": "kafka_fan", "date": "2023-08-05"}
    ],
    "stats": {
      "pages": 178,
      "words": 84300,
      "chapters": 10
    },
    "available": true,
    "price": 19.99,
    "keywords": ["bureaucracy", "existentialism", "justice system"]
  },
  {
    "_id": "6",
    "title": "The Lord of the Rings",
    "author": {
      "name": "J.R.R. Tolkien",
      "country": "United Kingdom",
      "birth_year": 1892
    },
    "published": {
      "year": 1954,
      "publisher": "Allen & Unwin",
      "location": "London"
    },
    "genres": ["Fantasy", "Adventure", "Epic"],
    "translations": [
      {"language": "Spanish", "year": 1977, "translator": "Luis Domènech"},
      {"language": "Japanese", "year": 1972, "translator": "Teiji Seta"}
    ],
    "reviews": [
      {"score": 5, "user": "fantasy_lover", "date": "2023-09-01"},
      {"score": 5, "user": "middle_earth_fan", "date": "2023-09-15"}
    ],
    "stats": {
      "pages": 1178,
      "words": 481103,
      "chapters": 62
    },
    "available": true,
    "price": 39.99,
    "keywords": ["middle-earth", "fantasy", "epic", "quest"]
  },
  {
    "_id": "7",
    "title": "The Divine Comedy",
    "author": {
      "name": "Dante Alighieri",
      "country": "Italy",
      "birth_year": 1265
    },
    "published": {
      "year": 1320,
      "publisher": "Unknown",
      "location": "Florence"
    },
    "genres": ["Epic Poetry", "Religious Literature", "Allegorical Fiction"],
    "translations": [
      {"language": "English", "year": 1867, "translator": "Henry Longfellow"},
      {"language": "Spanish", "year": 1515, "translator": "Pedro Fernández"}
    ],
    "reviews": [
      {"score": 5, "user": "poetry_lover", "date": "2023-10-05"},
      {"score": 4, "user": "medieval_fan", "date": "2023-10-20"}
    ],
    "stats": {
      "pages": 798,
      "words": 111000,
      "chapters": 100
    },
    "available": true,
    "price": 29.99,
    "keywords": ["afterlife", "italian literature", "medieval poetry"]
  }
]);
