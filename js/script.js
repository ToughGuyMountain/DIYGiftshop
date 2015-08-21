var item = 1;
var itemUrls = [
  'tshirt.html',
  'tshirt.html',
  'tshirt.html',
  'tshirt.html',
  'tshirt.html'
];

$(document).ready(function(){
    $('#purchaseModal').modal({show: false});

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Buy!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
      
      item++;
      console.log(item);
      console.log(itemUrls[item]);
      
      $('.modal-body').load(itemUrls[item]);
      
      $('#purchaseModal').modal('show');
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Not Buy!</div>');

    item++;
    console.log(item);
     
    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('Na-na!'); 
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});