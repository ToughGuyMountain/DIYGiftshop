var item = 0;
var itemUrls = [
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051774391%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3dd09e30b6-5de8-46be-801f-fb27e11e6b78',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051779549%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d96e14e35-6786-4e10-8e7a-98013e877c98',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3093587310%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d8bc761cd-830b-468e-9ee2-d745e6af0f6f',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051780473%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3da0c146b7-a220-49dd-b771-302664d921f2',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3093797498%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d43462205-0578-4b51-ac38-dc9faa40dc17',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3093797755%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d86b1302e-9917-4779-be68-75497a4472c0',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3093798404%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d2917b7f2-e0d5-48d2-b167-b9a48d3e57f0',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051794686%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3df74a586e-c47f-4d8d-9a34-b7d4a90da2ee',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3051779354%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d141d69b4-6ef7-4442-9615-5f2236ff7f60',
  'http://www.vistaprint.ca/share-design.aspx?doc_id=3093284794&shopper_id=WEQ5W14PTOE164EQT460QV4RS1LEJLHW&xnav=sharesource_8&share_key=2f0a66da-8341-40a2-a2f4-78251fec4382&GP=8%2f20%2f2015+3%3a01%3a14+PM&GPS=3590691809&GNF=1',
  'http://www.vistaprint.ca/vp/gateway.aspx?s=4009498034&preurl=%2fshare-design.aspx%3fdoc_id%3d3093590337%26shopper_id%3dWEQ5W14PTOE164EQT460QV4RS1LEJLHW%26xnav%3dsharesource_8%26share_key%3d23df1063-1caa-4711-94b8-2cce82b4b3cb'
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
      
      window.setTimeout(function() {
        window.location.href = itemUrls[item];
      }, 400);
            
      item++;
      
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
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(500);
    } 
  });

});