$(function () {
  var p = 1,
    tp = 1,
    tag,
    scrollTimer
  function getQueryString(key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
    var result = window.location.search.substr(1).match(reg)
    return result ? decodeURIComponent(result[2]) : null
  }

  ;(p = getQueryString('page')), (tag = getQueryString('tag'))
  if (p || tag) {
    console.log(p, tag)
    pickPictures(p, tag)
  }

  function pickPictures(page, tag) {
    ;(page = page || 1), (tag = tag || '')
    $.ajax({
      type: 'GET',
      url: 'http://konachan.net/post.json',
      data: 'limit=20&page=' + page + '&tags=' + tag,
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

  function pickTags(page) {
    $.ajax({
      type: 'GET',
      url: 'http://konachan.net/tag.json',
      data: 'limit=10&order=count',
      success: function (data) {
        $.each(data, function (idx, item) {
          $('.tags').append(
            '<li><a href="F:\\bei\\github\\code\\insummary\\index.html?page=1&tag=' +
              item.name +
              '" >' +
              item.name +
              '(' +
              item.count +
              ')</a></li>'
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

  pickTags(tp)
})
