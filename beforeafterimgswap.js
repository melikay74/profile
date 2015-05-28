$(document).ready(function() {

  /** SWAPPING **/

  baCreate();

  $(".fp-asset").live("click", function() {

    imgb = $(this).attr("data-before");    
    imga = $(this).attr("data-after");    
    imgd = $(this).attr("data-desc");    
    imgl = $(this).attr("data-label");    

    bimg = $("<img>");
    bimg.attr("src", imgb).height(390).width(860);
    aimg = $("<img>");
    aimg.attr("src", imga).height(390).width(860);

    //clear content of div but retain div structure
    $(".beforeafter").attr("style", "").html("").append(bimg).append(aimg);

    //create rcred span if image has rendering credit
    if (imgd.length > 0) {
      $(".banote.rcred").html("").append("Rendering Credit:" + imgd); 
     } else {
      $(".banote.rcred").html("") //clear content, retain span for other credits
     }  

    $(".balinks").remove(); //will be re-rendered & populated by baCreate

    $(".ba-content #fpa-desc").html("").append(imgl);

    baCreate();

    goToByScroll("#batop");

    
  }); 
 
 }); //END READY
 
  
  
  function goToByScroll(id){
   $('html,body').animate({scrollTop: $(id).offset().top-75},'slow');
}
