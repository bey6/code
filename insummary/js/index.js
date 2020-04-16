$(function () {
  console.log(location.search)
  $.ajax({
    type: 'GET',
    url: 'http://konachan.net/post.json',
    data: 'limit=20&page=1&tags=',
    success: function (data) {
      $.each(data, function (idx, item) {
        var li = document.createElement('li')
        li.className = 'img-box'
        var pic = document.createElement('img')
        pic.id = item.id
        pic.setAttribute('src', item.preview_url)
        pic.setAttribute('alt', item.tags)
        pic.attachEvent('onclick', function () {
          console.log('???')
          viewBigImg = window.open('' + item.id, 'picture-detail')
          viewBigImg.document.appendChild(
            '<img src="' + item.jpeg_url + '" alt="' + item.tags + '">'
          )
        })
        li.appendChild(pic)
        $('.list').append(li)
      })
    }
  })
})
