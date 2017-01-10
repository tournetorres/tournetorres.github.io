 /* global $ _ opspark */
 // var _ = require('lodash');
$(document).ready(function() {
  // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function(products) {
        initUI(products);
        showProducts(products);


function initUI(products) {
    
}

function showProducts(products) {
    // kill anything in the dom //
    
    $('main').append(createProductsList(products));
    // build UI for all products (layout products) //
    
    $('.li-product').on('click', function(event) {
        console.log($(event.currentTarget).data('product'));
    });


}
    

function createProductsList(products) {
    return $('<ul>')
        .attr('id', 'list-products')
        .addClass('list-products')
        .append(createProductListItems(products))
}

function createProductListItems(products) {
    return _.map(products, function(product) {
        return $('<li>')
            .data('product', product)
            .addClass('li-product')
            .append(createImageDiv('img/product/thumbs/' + product.image, 'li-product-image'))
            .append(createProductDetailsDiv(product.desc, "$" + product.price, product.stock + " left in stock"))
            .on('click', function(event) {
                $('.modal-content').empty()
                .append(createImageDiv('img/product/' + product.image, 'li-modal-image'))
                .append(createProductDetailsDiv(product.desc, "$" + product.price, product.stock + " left in stock", product.specs, "Available Colors: " + product.availableColors))

                // $('.modal-body').append(populateModal(product));
                $('#model').modal();
    
            });
        });
}

// function populateModal(product) {
//          return $('<li>')
//             .append
//             .addClass('li-product')
//             .append(createImageDiv('img/product/' + product.image, 'li-product-image'))
//             .append(createProductDetailsDiv(product.desc, "$" + product.price, product.stock + " left in stock"))
// }


function createImageDiv(path, cssClass) {
    return $('<div>')
        .append($('<img>')
            .addClass(cssClass)
            .attr('src', path));
}

function createProductDetailsDiv(desc, price, stock, specs, availableColors) {
    return $('<div>')
        .append($('<div>').text(desc))
        .append($('<div>').text(price))
        .append($('<div>').text(stock))
        .append($('<div>').text(specs))
        .append($('<div>').text(availableColors))

}

//create nav bar class
$('nav').addClass('navStyle');

$('.btn').on('click', function() {
    let $input = $('input').val();
    $("main").empty();
   return $('main').append(showProducts(searchFilter($input)));
   
});

let find = function(data, target) {
    if(typeof data === "string") {
        return data.includes(target);
    }
    if (typeof data === "object") {
        return _.some(data, function(val) {
            return find(val, target);
        })
    }
}

let searchFilter = function(string) {
    return products.filter(function(obj) {
        return find(obj, string); 
});


};

// function pullUpModal(products) {
//     $('.li-product').on('click', function(event) {
//         $('.modal-content').empty();
//         $('.modal-body').append(createProductListItems($(event.currentTarget)));
//         $('#model').modal();
//         // $('.close').one('click', function() {
//         //     $('.modal-body').empty();
            
        
//     });
    
// }

let dropDownTypes = _.reduce(products, function(memo, val) {
    if (_.indexOf(memo, val.type) === -1) {
        memo.push(val.type);
    }
        return memo;
}, []);

console.log(dropDownTypes);



let pullObjectsbyType = function (type) {
    return products.filter(function(val){
        return val.type === type;
    });
}



let populateDropDown = dropDownTypes.map(function(type) {
    
    return $('<div>')
                .text(type)
                .attr('id', 'li-dd')
                .on('click', function() {
                    $('main').empty();
                    return $('main').append(showProducts(pullObjectsbyType(type)));
                    }); 
                
});


$('.dropdown-menu').append(populateDropDown);




// $('').on('click', function() {
//     let $input = $('input').val();
//   return $('main').append(showProducts(searchFilter($input)));

// var modal = (function(){
//   var 
//   method = {},
//   $overlay,
//   $modal,
//   $content,
//   $close;

//     $overlay = $('<div id="overlay"></div>');
//     $modal = $('<div id="modal"></div>');
//     $content = $('<div id="content"></div>');
//     $close = $('<a id="close" href="#">close</a>');

//     $modal.hide();
//     $overlay.hide();
//     $modal.append($content, $close);

//     $('body').append($overlay, $modal);
    
    
//     method.center = function () {
//   var top, left;

//   top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
//   left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

//   $modal.css({
//     top:top + $(window).scrollTop(), 
//     left:left + $(window).scrollLeft()
//   });
// };

// method.open = function (settings) {
//   $content.empty().append(settings.content);

//   $modal.css({
//     width: settings.width || 'auto', 
//     height: settings.height || 'auto'
//   });

//   method.center();

//   $(window).bind('resize.modal', method.center);

//   $modal.show();
//   $overlay.show();
// };

// method.close = function () {
//   $modal.hide();
//   $overlay.hide();
//   $content.empty();
//   $(window).unbind('resize.modal');
// };

// $close.click(function(e){
//   e.preventDefault();
//   method.close();
// });

// modal.open({content: "Howdy"});

// modal.open({content: "<p>Howdy</p>"});

// modal.open({content: $("<p>Howdy</p>"), width: "500px", height: "200px"});

// // Ajax
// $.get('ajax.html', function(data){
//   modal.open({content: data});
  
// });

// });

		
  // ALL YOUR CODE GOES ABOVE HERE //
}).fail(function() { console.log('getJSON on discography failed!'); });
});

