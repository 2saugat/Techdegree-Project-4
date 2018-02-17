'use strict';

const gallery = (function () {



  function searchFilter() {

    var input, filter, item, caption, i;
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    item = document.getElementsByTagName("a");


    for (i = 0; i < item.length; i++) {

      caption = item[i].getAttribute("title");

      if (caption.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
  }

  const lightbox = function () {

    return {
      matchbox: $('.lightbox').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        },
        titleSrc: 'title'
      })
    };
  };




  return {
    searchFilter,
    lightbox : $('.lightbox').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      titleSrc: 'title'
    })
  };

}());