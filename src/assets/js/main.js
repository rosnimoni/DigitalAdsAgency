/***************************************************
==================== JS INDEX ======================
****************************************************/
 // Get Device width
 let device_width = window.innerWidth;

// 03. Scroll Top
let scroll_top = document.getElementById("scroll_top");
if (scroll_top) {
    window.onscroll = function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scroll_top.style.display = "block";
      } else {
        scroll_top.style.display = "none";
      }
    };

    scroll_top.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  /////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// 05. Header 1
if (device_width < 1365) {
  let header_bg = document.querySelector(".header__area");

  if (header_bg) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg.style.background = "#121212";
        header_bg.style.setProperty('mix-blend-mode', 'unset');
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg.style.background = "transparent";
        header_bg.style.setProperty('mix-blend-mode', 'exclusion');
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
}
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
// 06. Header 2
let header_bg_2 = document.querySelector(".header__area-2");
if (header_bg_2) {
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header_bg_2.style.background = "#121212";
      header_bg_2.classList.add("sticky-2");
      if (scroll_top) {
        scroll_top.style.display = "block";
      }
    } else {
      header_bg_2.style.background = "transparent";
      header_bg_2.classList.remove("sticky-2");
      if (scroll_top) {
        scroll_top.style.display = "none";
      }
    }
  };
}
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// 07. Header 3
let header_bg_3 = document.querySelector(".header__area-3");
if (header_bg_3) {
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header_bg_3.classList.add("sticky-3");
      if (scroll_top) {
        scroll_top.style.display = "block";
      }
    } else {
      header_bg_3.classList.remove("sticky-3");
      if (scroll_top) {
        scroll_top.style.display = "none";
      }
    }
  };
}
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// 08. Header 5
let header_bg_5 = document.querySelector(".header__area-5");
if (header_bg_5) {
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header_bg_5.classList.add("sticky-5");
      if (scroll_top) {
        scroll_top.style.display = "block";
      }
    } else {
      header_bg_5.classList.remove("sticky-5");
      if (scroll_top) {
        scroll_top.style.display = "none";
      }
    }
  };
}

  /////////////////////////////////////////////////////
  // 30. Service 3
  const serviceImgItem = document.querySelectorAll(".service__item-3");

  function followImageCursor(event, serviceImgItem) {
    const contentBox = serviceImgItem.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  serviceImgItem.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(followImageCursor(event, item), 1000);
    });
  });
  
   /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 34. Hero 3 Animation
  const radio_buttons = document.querySelector("#video_check");
  const video_start = document.querySelector(".hero__area-3");

  if (radio_buttons) {
    radio_buttons.addEventListener('click', function () {
      let video = document.querySelector(".video-title")
      let videoClose = document.querySelector(".video-title.close-video-title")
      if (radio_buttons.checked) {
        document.querySelector(".wrapper").style.zIndex = "1";
        video.style.display = "none";
        videoClose.style.display = "block";
        video_start.classList.add('start-video');
        document.querySelector('.header__area-3').classList.add('bg-white');

      }
      else {
        document.querySelector(".wrapper").style.zIndex = "999";
        video.style.display = "block";
        videoClose.style.display = "none";
        video_start.classList.remove('start-video');
        document.querySelector('.header__area-3').classList.remove('bg-white');
      }
    });
  }


    