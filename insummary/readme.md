# konachan api

## doucment

[http://konachan.net/help/api](http://konachan.net/help/api)

## Posts

url: `http://konachan.net/post.json`

- limit: Count per page.
- page: The page number.
- tags: The tags to search for.

Response list:

```json
[
  {
    "id": 304969,
    "tags": "2girls animal_ears arknights cropped dishwasher1910 long_hair schwarz_(arknights) siege_(arknights) tail thighhighs",
    "created_at": 1587039493,
    "creator_id": 181250,
    "author": "BattlequeenYume",
    "change": 1828626,
    "source": "",
    "score": 3,
    "md5": "8b8da13890f4e929c92057e4ba941634",
    "file_size": 7628938,
    "file_url": "https://konachan.net/image/8b8da13890f4e929c92057e4ba941634/Konachan.com%20-%20304969%202girls%20animal_ears%20arknights%20cropped%20dishwasher1910%20long_hair%20schwarz_%28arknights%29%20siege_%28arknights%29%20tail%20thighhighs.png",
    "is_shown_in_index": true,
    "preview_url": "https://konachan.net/data/preview/8b/8d/8b8da13890f4e929c92057e4ba941634.jpg",
    "preview_width": 150,
    "preview_height": 117,
    "actual_preview_width": 300,
    "actual_preview_height": 234,
    "sample_url": "https://konachan.net/sample/8b8da13890f4e929c92057e4ba941634/Konachan.com%20-%20304969%20sample.jpg",
    "sample_width": 1500,
    "sample_height": 1170,
    "sample_file_size": 799491,
    "jpeg_url": "https://konachan.net/jpeg/8b8da13890f4e929c92057e4ba941634/Konachan.com%20-%20304969%202girls%20animal_ears%20arknights%20cropped%20dishwasher1910%20long_hair%20schwarz_%28arknights%29%20siege_%28arknights%29%20tail%20thighhighs.jpg",
    "jpeg_width": 3386,
    "jpeg_height": 2641,
    "jpeg_file_size": 1392063,
    "rating": "q",
    "has_children": false,
    "parent_id": null,
    "status": "active",
    "width": 3386,
    "height": 2641,
    "is_held": false,
    "frames_pending_string": "",
    "frames_pending": [],
    "frames_string": "",
    "frames": []
  }
]
```

## Tags

url: `http://konachan.net/tag.json`

- limit: Count per page.
- page: The page number.
- order: _date_ or _name_ or _count_.
- id: The id number of the tag.
- after_id: Return the id number greater than you given.
- name: The exact name of the tag.
- name_pattern: Search for any tag that has this parameter in its name.

## Artists

url: `http://konachan.net/artist.json`

- name: The full name or a partial name.
- order: _date_ or _name_.
- page: The page number.
