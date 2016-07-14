$(document).ready(function() {
    
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });
 
     function initMenu() {
       $(".block").hide();
       $(".section1").slideDown();
       $( "ul#menu li:eq(0)" ).addClass('active');
         
       $('#menu ul').hide();
       $('#menu ul').children('.current').parent().show();
       //$('#menu ul:first').show();
       $('#menu li a').click(
        function() {
          var checkElement = $(this).next();
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
 var previous = 1;
//----  left menu bar selector -------------------------------------//
   $("ul#menu").on('click','li',function(e){
        console.log(previous);
        var index = $(this).val();
        $(".block").slideUp(700);
        $(".section"+index).slideDown(700);
        $(this).addClass('active');
        if(previous){
            $( "ul#menu li:eq("+(previous-1)+")").removeClass('active');
        }
        previous = parseInt(index);
    });

// ------------------ technical skills section ------------------------//
$(".sub-menu").hide();
  $("ul.navbar li:has(ul)").mouseover(function(e){
      var t = $(event.target).text();
    $('.sub-menu').hide();
    $("ul."+t).slideDown('slow');
  });

//  $(".sub-menu").mouseleave(function(e){
//    $(".sub-menu").slideUp('slow').stop;
//    
//  });

//---------------- Project and work section -----------------------------//

//    $('li.field').filter(':nth-child(n+4)').slideUp(200);
     $('li.field').slideUp(200);
    $('ul').on('click','li.title', function(e){
       $(this).next().siblings('li.field').slideUp(200); 
       $(this).next().slideToggle(200);
    });

    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );

initMenu();

});