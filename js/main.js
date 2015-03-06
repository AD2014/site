



/****************************************/
/* DOWNLOAD BUTTON */
/********************************/


function fadeIn($elts) {
  $elts.each(function() {
    var $this = $(this);
    if ($this.css('opacity') == 0 || !$this.is(':visible'))
      $this.fadeIn(800);
  });
}

// Download Button
$(document).ready(function(){
	$('#download-info').fadeOut(500);
});

$(".download-btns").hover(function(){
//  $(".download-text").css('display', 'none');
    $(".download-text").animate({
       opacity: 0
    }, 500, function(){
        $(".download-text").css('display', 'none');
        fadeIn($(".win-btn-wrapper, a.mac-btn, #download-info"));
    });
//  fadeIn($(".win-btn-wrapper, a.mac-btn, #download-info"));
},
function(){
    $("#download-info").fadeOut(500);
});




/*   DEVICE popping  */

var devOneUp = true;
var devTwoUp = false;

if (devOneUp = true){

    $('#device-2').mouseenter(function() {

        $('#device-1').animate({
            left: '-5',
            zIndex: '0'

        }, 500, function(){

            $('#device-1').animate({
            left: '40',

        }, 500)
        });

        $('#device-2').animate({
            left: '5',
            zIndex: '100'

        }, 500, function(){

            $('#device-2').animate({
            left: '-40',

        }, 500)

        });

    });

    devOneUp = false;
    devTwoUp = true;

};

if (devTwoUp = true){

    $('#device-1').mouseenter(function() {

        $('#device-1').animate({
            left: '-5',
            zIndex: '100'

        }, 500, function(){

            $('#device-1').animate({
            left: '40',

        }, 500)
        });

        $('#device-2').animate({
            left: '5',
            zIndex: '0'

        }, 500, function(){

            $('#device-2').animate({
            left: '-40',

        }, 500)

        });

    });

    devOneUp = true;
    devTwoUp = false;

};




/***************************************/
/* FADEIN */
/***************************************/


$(document).ready(function() {

    /* Check the location of each desired element */
        $('.hide').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate(
                    {
                        'opacity':'1',
                        'right':'0'
                    }
                    ,800);

            }

        });


    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate(
                    {
                        'opacity':'1',
                        'top':'0'
                    }
                    ,800);

            }

        });

    });

});



/***************************************/
/* TWITTER */
/***************************************/
var config5 = {
  "id": '567982831931256832',
  "domId": 'twitter-container',
  "maxTweets": 10,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "dateFunction": 'momentDateFormatter',
  "showRetweet": false,
  "customCallback": handleTweets,
  "showInteraction": false
};

function momentDateFormatter(date, dateString) {
  return moment(dateString).fromNow();
}


function handleTweets(tweets){
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('twitter-container');
    var html = '<ul class="tweet-container-ul">';
    while(n < x) {
      html += '<li class="tweet-container-li">' + tweets[n] + '</li>';
      n++;
    }
    html += '</ul>';
    element.innerHTML = html;
}

twitterFetcher.fetch(config5);



/***************************************/
/* INSTAGRAM */
/***************************************/

function createPhotoElement(photo) {
      var innerHtml = $('<img>')
        .addClass('instagram-image')
        .attr('src', photo.images.thumbnail.url);

      innerHtml = $('<a>')
        .addClass('th')
        .attr('target', '_blank')
        .attr('href', photo.link)
        .append(innerHtml);

      return $('<div>')
        .addClass('instagram-placeholder')
        .attr('id', photo.id)
        .append(innerHtml);
    }

    function didLoadInstagram(event, response) {
      var that = this;

      $.each(response.data, function(i, photo) {
        $(that).append(createPhotoElement(photo));
      });
    }

$(document).ready(function() {
  
  $('.instagram').on('willLoadInstagram', function(event, options) {
    console.log(options);
  });
  $('.instagram').on('didLoadInstagram', didLoadInstagram );


  $('.instagram').instagram({
    userId: 1683878670,
    accessToken: '1683878670.8563946.4ea682edf3194878981b5e02749e6480'
  });


});

function callbackFunction (resp) {
    console.log(resp)
}



/*ACCESS TOKEN 1683878670.8563946.4ea682edf3194878981b5e02749e6480*/





/**********************************/
/*  MAILCHIMP  */

function callbackFunction (resp) {
    if (resp.result === 'success') {
        $('#mc-embedded-subscribe').addClass('successo-iscrizione');
        $('#mc-embedded-subscribe').val('Iscritto!');
        $('#successo-checkmail').fadeTo("slow", 1 );
    }else{
      $('#mc-embedded-subscribe').addClass('fallimento-iscrizione');
      $('#successo-checkmail').fadeTo("slow", 0 );

    }
}

$(document).ready(function() {
  $('#mc-embedded-subscribe-form').ajaxChimp({
      url: 'http://life.us10.list-manage.com/subscribe/post?u=b4b4b2998e0738bb9096c0e4c&amp;id=2fd3acd1f1',
      callback: callbackFunction
  });
});
