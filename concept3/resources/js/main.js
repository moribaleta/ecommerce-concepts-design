function openProduct(){
    window.open("product.html","_self")
}
var blOnscrolldown = true;

/*$('.main-content-item').on("scroll",function(){*/
//var lastScrollTop = 0;
/*
$('.main-content-item').scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $('html, body').animate({
            scrollTop: $("#main-content").offset().top
        }, 2000);
    } else {
        // upscroll code
    }
    lastScrollTop = st;
});
*/

$(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $('#navbar').css('padding-top','50px');
        $('.navbar-brand').css('font-size','32px');
       // blOnscrolldown = true;
    }else{
        $('#navbar').css('padding-top','0px');
        $('.navbar-brand').css('font-size','18px');
        /*if(blOnscrolldown==true){
            $('html, body').animate({
                scrollTop: $(".main-content").offset().top
            }, 300);
            blOnscrolldown = false;
        }*/
    }        
});