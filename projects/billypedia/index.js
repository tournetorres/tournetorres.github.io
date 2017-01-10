/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
  

   
    
//         let topRated = data.discography.topRated;
//         console.log(topRated);
        
//   for (var i = 0; i < topRated.length; i++) {      
//         $('ul#list-top-rated').append($('<li>').append(topRated[i].title));
   
//   $('#sidebar').append($('<section id="section-recordings"></section>'));
   

  
//   $('#section-recordings').append($('<ul id="list-recordings"></ul>'));
    $('#section-bio').css('color', '#795548').css('line-height','14px').css('font-family','futura');
    $('#section-quotes').css('width', '50%');
    $('#section-quotes').css('background-color', 'black').css('border-radius', '20px').css('padding', '10px').css('text-align', 'center').css('color', 'white').css('font-family', 'futura').css('line-height', '14px');
  
  
    $('<header>').attr('class', 'header-recordings').attr('id', 'header-recordings').text('Recordings').appendTo($('#sidebar'));
      
    $('<section>').attr('id', 'section-recordings').appendTo($('#sidebar'));
      
    $('<ul>').attr('id', 'ul-recordings').appendTo($('#section-recordings'));
      
    $('<div>').attr('id', 'image-container-recordings').appendTo($('#header-recordings'));
      
    $('<div>').attr('id', 'image-container-toprated').appendTo($('#header-top-rated'));

    
    var topRated = data.discography.topRated;

        
   
//   var recordings = data.discography.recordings;
//         console.log(recordings);
//      var rListElements = _.map(recordings, function(album) {
//           let $results = $('<li>').attr('class', 'recording');
//           $results.append($('<div>').attr('class', 'title').text("Title: " + album.title));
//           $results.append($('<div>').attr('class', 'artist').text("Artist: " + album.artist));
//           $results.append($('<div>').attr('class', 'release').text("Release: " + album.release));
//           $results.append($('<div>').attr('class', 'year').text("Year: " + album.year));
//           return $results;
// });

//     $('ul#list-recordings').append(rListElements).css('line-height','20px');

//     console.log(rListElements);

  _.map(topRated, function(val) {
        var list = ($('<li>').click(function() {
                    $('#image-toprated').attr('src', val.art);
            }))
                .append($('<div>').text('Title' + ': ' + val.title).click(function() {
                        $('#image-toprated').attr('src', val.art);
            }))
                        $('#list-top-rated').append(list);
    });


    var showImages = true;
    _.forEach(topRated, function(value, key, object) {
        if (showImages === true) {
            $('#image-container-toprated').append($('<img src=' + value.art + '>').attr('id', 'image-toprated'));
            showImages = false;
        }
    });


    var recordings = data.discography.recordings;
    // var rImage = data.discography.recordings;
        
        
    _.map(recordings, function(val){
        var recordingList = $('<li>').attr('id', 'recording').click(function() { $('#image-recordings').attr('src', val.art);});
        recordingList.append($('<div>').attr('class', 'title').text('Title' + ': ' + val.title)).click(function() { $('#image-recordings').attr('src', val.art);})
            .append($('<div>').attr('class', 'artist').text('Artist' + ': ' + val.artist)).click(function() { $('#image-recordings').attr('src', val.art);})
            .append($('<div>').attr('class', 'release').text('Release' + ': ' + val.release)).click(function() { $('#image-recordings').attr('src', val.art);})
            .append($('<div>').attr('class', 'year').text('Year' + ': ' + val.year)).click(function() { $('#image-recordings').attr('src', val.art);});
        $('#ul-recordings').append(recordingList)

    });
    
        showImages = true;
    _.map(recordings, function(val) {
            
        if (showImages === true) {
            $('#image-container-recordings').append($('<img src=' + val.art + '>').attr('id', 'image-recordings').attr('height', '200px'));
            showImages = false;
        }
    });
       

    // $('#header-top-rated').append($('<div class="image-container" id="image-container-recording"></div>'));
    
    // $('<img src="images/album/eastern-rebellion.jpg" class="image">').appendTo($("div#image-container-recording"));

    //  $('#section-recordings').prepend($('<div class="image-container" id="image-container-topRated"></div>'));
    
    // $('<img src="images/album/voice-in-the-night.jpg" class="image">').appendTo($("div#image-container-topRated"));

    // $('#section-recordings').prepend($('<header id="header-recordings" class="header-recordings">Recordings</header>'));

    
    
    
    
    var billyImage = data.images.billy;
    console.log(billyImage);


    var images = document.querySelectorAll('[name=pic]');
    for(var i=0; i < images.length; i++) {
      var image = images[i];
      //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
      image.addEventListener('click', imageClicked(), false);
    }

    function imageClicked() {

      var counter = 0;
      return function(event) {
        //Increment counter
        counter++;
        //The context of "this" is the image element
        //Use a modulus
        this.src = billyImage[counter % billyImage.length];
      };
    }

    
            
            
    $('<section>').attr('id', 'section-rider').appendTo('#sections');
    $('<h3>').html("IT'S A RIDER EVERYBODY PANIC").appendTo('#section-rider');
            
    let rider = data.rider;
            
    let createTable = function(riders) {
    let createRow = function(rider) {
        let $row = $("<tr>");
        let $type = $("<td>").text(rider.type);
        let $desc = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    let $table = $("<table>");
    let $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
    };
            
    let table = createTable(rider);
            
    $('#section-rider').append(table);
            
    
// let $topRatedListItem = $('li#list-top-rated').addClass("topRatedListItem");

// $('.list-recordings ul').children().eq(0).addClass('topRatedListItem');




// var collectTopRatedImages = _.reduce (topRated, function (current, next ) {
//     return current.concat(next.art);
// }, []);

// console.log(collectTopRatedImages);

// let $topRatedSource = $('div#image-container-recording img').attr('src');

        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


