$(function () {
  var p = 1,
    scrollTimer
  function pickPictures(page) {
    $.ajax({
      type: 'GET',
      url: 'http://konachan.net/post.json',
      data: 'limit=20&page=' + page + '&tags=',
      success: function (data) {
        $.each(data, function (idx, item) {
          $('.list').append(
            '<li class="img-box"><div class="pic"><a href="return false"><img alt="' +
              item.tags +
              '" src="' +
              item.preview_url +
              '"/></img></a></div></li>'
          )
        })
      },
    })
  }

  // $(window).scroll(function () {
  //   clearTimeout(scrollTimer)
  //   scrollTimer = setTimeout(function () {
  //     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
  //       p++
  //       pickPictures(p)
  //     }
  //   }, 200)
  // })
})
