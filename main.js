$( "#cell11" ).click(function() {
   $(this).data('clicked', true);
  $( "#cell3, #cell10, #cell12, #cell19").addClass("green"); 
});


$( "#cell12" ).click(function() { 
        if($('#cell11').data('clicked') == true) {
          $( "#cell12" ).addClass("yellow");  
          $( "#cell4, #cell13, #cell20" ).addClass("green");
        }
     
});
 

$( "#cell20" ).click(function() {
     if($( "#cell11" ).data('clicked') == true) {
            $( "#cell20" ).addClass("yellow");
            $( "#cell21, #cell28" ).addClass("green");      
     }
 
});

$( "#cell28" ).click(function() {
     if($( '#cell11' ).data('clicked') == true) {
        $( "#cell28" ).addClass("yellow");
        $( "#cell27, #cell29 ,#cell36" ).addClass("green");
     }
});

$( "#cell27" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell27" ).addClass("yellow");
     $( "#cell26, #cell35" ).addClass("green");
    }
});

$( "#cell26" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell26" ).addClass("yellow");
     $( "#cell18, #cell25, #cell34" ).addClass("green");
    }
});

$( "#cell25" ).click(function() {
     if($('#cell11').data('clicked') == true) {
     $( "#cell25" ).addClass("yellow");
     $( "#cell17, #cell33" ).addClass("green");
     }
});

$( "#cell33" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell33" ).addClass("yellow");
     $( "#cell41" ).addClass("green");
    }
});

$( "#cell41" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell41" ).addClass("yellow");
     $( "#cell49, #cell42" ).addClass("green");
    }
});

$( "#cell49" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell49" ).addClass("yellow");
     $( "#cell57, #cell50" ).addClass("green");
    }
});

$( "#cell50" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell50" ).addClass("yellow");
     $( "#cell51, #cell58" ).addClass("green");
    }
});

$( "#cell51" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell51" ).addClass("yellow");
     $( "#cell43, #cell52, #cell59" ).addClass("green");
    }
});

$( "#cell52" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell52" ).addClass("yellow");
     $( "#cell53, #cell44, #cell60" ).addClass("green");
    }
});

$( "#cell44" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell44" ).addClass("yellow");
     $( "#cell37, #cell45" ).addClass("green");
    }
});

$( "#cell45" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell45" ).addClass("yellow");
     $( "#cell46" ).addClass("green");
    }
});

$( "#cell46" ).click(function() {
    if($('#cell11').data('clicked') == true) {
     $( "#cell46" ).css("background-color", "#e6e600");
     alert("You Win")
     $("#cell47").animate({backgroundColor:'#000080'});
    }
});