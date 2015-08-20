var item = 1;
var itemUrls = [
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051779549%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d96e14e35-6786-4e10-8e7a-98013e877c98',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051774391%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3dd09e30b6-5de8-46be-801f-fb27e11e6b78',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051779354%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d141d69b4-6ef7-4442-9615-5f2236ff7f60',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3093587310%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d8bc761cd-830b-468e-9ee2-d745e6af0f6f',
  ' http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3093590337%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d23df1063-1caa-4711-94b8-2cce82b4b3cb'
];

$(document).ready(function(){
    $('#purchaseModal').modal({show: false});

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
      
      item++;
      console.log(item);
      
      //$('#purchaseFrame').attr('src', itemUrls[item]);
      
      $('#purchaseModal').modal('show');
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

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