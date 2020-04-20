 function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
    return os;
  }
  var os = getOS();
  if(os !== 'iOS' || os !== 'Android') {
    // 非移动端平台下才设置动态favicon
    var favicon_images = [
                    'https://cdn.jsdelivr.net/gh/xiongbao/we.dog/assets/images/favicon/0.jpg',
                    'https://cdn.jsdelivr.net/gh/xiongbao/we.dog/assets/images/favicon/1.jpg',
                    'https://cdn.jsdelivr.net/gh/xiongbao/we.dog/assets/images/favicon/2.jpg',
                    'https://cdn.jsdelivr.net/gh/xiongbao/we.dog/assets/images/favicon/3.jpg',
                    'https://cdn.jsdelivr.net/gh/xiongbao/we.dog/assets/images/favicon/4.jpg',
                    'https://cdn.jsdelivr.net/gh/xiongbao/we.dog/assets/images/favicon/5.jpg'
                ],
    image_counter = 0; // To keep track of the current image

    setInterval(function() {
        $("link[rel='icon']").remove();
        $("link[rel='shortcut icon']").remove();
        $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/jpeg">');
        
      // If last image then goto first image
      // Else go to next image    
      if(image_counter == favicon_images.length -1)
            image_counter = 0;
        else
            image_counter++;
    }, 80);
  }