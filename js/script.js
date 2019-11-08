$( document ).ready(function() {

function updateBlockHeights() {
var planningBlockHeight1 = $('#planningBlock1').innerHeight();
var planningBlockHeight2 = $('#planningBlock2').innerHeight();
var planningBlockHeight3 = $('#planningBlock3').innerHeight();
var planningBlockHeight4 = $('#planningBlock4').innerHeight();

var deliverablesBlockHeight1 = $('#deliverablesBlock1').innerHeight();
var deliverablesBlockHeight2 = $('#deliverablesBlock2').innerHeight();
var deliverablesBlockHeight3 = $('#deliverablesBlock3').innerHeight();
var deliverablesBlockHeight4 = $('#deliverablesBlock4').innerHeight();
var deliverablesBlockHeight5 = $('#deliverablesBlock5').innerHeight();
var deliverablesBlockHeight6 = $('#deliverablesBlock6').innerHeight();
var deliverablesBlockHeight7 = $('#deliverablesCDColumn').innerHeight();


var compBlockHeight1 = $('#compBlock1').innerHeight();
var compBlockHeight2 = $('#compBlock2').innerHeight();
var compBlockHeight3 = $('#compBlock3').innerHeight();
var compBlockHeight4 = $('#compBlock4').innerHeight();
var compBlockHeight5 = $('#compBlock5').innerHeight();
var compBlockHeight6 = $('#compBlock6').innerHeight();

var resourceBlockHeight1 = $('#resourceBlock1').innerHeight();
var resourceBlockHeight2 = $('#resourceBlock2').innerHeight();
var resourceBlockHeight3 = $('#resourceBlock3').innerHeight();

$("#calcPlanningBlock1").height(planningBlockHeight1 + planningBlockHeight2 + planningBlockHeight3);
$("#calcPlanningBlock2").height(planningBlockHeight1 + planningBlockHeight2 + planningBlockHeight3);
$("#calcPlanningBlock3").height(planningBlockHeight2 + planningBlockHeight3);

$("#calcDeliverablesBlock1").height(deliverablesBlockHeight1);
$("#calcDeliverablesBlock2").height(deliverablesBlockHeight1 - 40);
$("#calcDeliverablesBlock3").height(deliverablesBlockHeight2);
$("#calcDeliverablesBlock4").height(deliverablesBlockHeight2 + deliverablesBlockHeight3);
$("#calcDeliverablesBlock5").height(deliverablesBlockHeight4-150);
$("#calcDeliverablesBlock6").height(deliverablesBlockHeight1 + 50);
$("#calcDeliverablesBlock7").height(deliverablesBlockHeight5);
$("#calcDeliverablesBlock8").height((resourceBlockHeight2+resourceBlockHeight1)+300);

$("#test1").css({transform:'translateY('+deliverablesBlockHeight7+')'});

$("#calcCompBlock1").height(compBlockHeight2);
$("#calcCompBlock2").height(compBlockHeight2 + compBlockHeight4);
$("#calcCompBlock3").height(compBlockHeight3);
$("#calcCompBlock4").height(compBlockHeight5);
$("#calcCompBlock5").height(compBlockHeight4 + compBlockHeight5 + compBlockHeight6);

$("#calcResourceBlock1").height(resourceBlockHeight1);
$("#calcResourceBlock2").height(resourceBlockHeight2-180);
$("#calcResourceBlock3").height(resourceBlockHeight3+100);
$("#calcResourceBlock4").height((resourceBlockHeight2-resourceBlockHeight1)+30);
$("#calcResourceBlock5").height((resourceBlockHeight2-resourceBlockHeight1)+300);

}

$( window ).resize(function() {
updateBlockHeights();
});

$("body").click(function() {
updateBlockHeights();
});

updateBlockHeights();

});
