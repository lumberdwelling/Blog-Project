function userName() {
    var userName = prompt("Please enter your name", "<Name goes here>");

    if (userName != null) {
    document.getElementById('welcome').innerHTML = "Hello " + userName + "! How are you today?";
  }
}
function createParagraph() {
    var para = document.getElementById('loremDiv').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'lorem1.jpg') {
      myImage.setAttribute ('src','lorem2.jpg');
    } else {
      myImage.setAttribute ('src','lorem1.jpg');
    }
}
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.loremTypes));
});

var snd = document.getElementById("myAirHorn");

function playAudio() {
  snd.play();
  snd.currentTime=0;
}

(function() {
  if (window.__twitterIntentHandler) return;
  var intentRegex = /twitter\.com\/intent\/(\w+)/,
      windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
      width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width;

  function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;

    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }

    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;

        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2));
        }

        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }
  window.__twitterIntentHandler = true;
}());

function getQuote() {
  $('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
      $.ajax( {
        url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift(); // The data is an array of posts. Grab the first one.
          $('#quote-title').text(post.title);
          $('#quote-content').html(post.content);

          // If the Source is available, use it. Otherwise hide it.
          if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined')  {
            $('#quote-source').html('Source:' + post.custom_meta.Source);
          } else {
            $('#quote-source').text('');
          }
        },
        cache: false
      });
    });
};
$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote());
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=lumberdwelling&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  })
});
