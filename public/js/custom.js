$("#details-description-button").click(function() {
  removeActiveClass();
  $("#details-description-button").addClass("description-tab-active");
  $("#details-description").removeClass("hidden");
  $("#details-location").addClass("hidden");
  $("#details-support").addClass("hidden");
});
$("#details-location-button").click(function() {
  removeActiveClass();
  $("#details-location-button").addClass("description-tab-active");
  $("#details-description").addClass("hidden");
  $("#details-location").removeClass("hidden");
  $("#details-support").addClass("hidden");
});

$("#details-support-button").click(function() {
  removeActiveClass();
  $("#details-support-button").addClass("description-tab-active");
  $("#details-description").addClass("hidden");
  $("#details-location").addClass("hidden");
  $("#details-support").removeClass("hidden");
});

function removeActiveClass() {
  $("#details-description-button").removeClass("description-tab-active");
  $("#details-location-button").removeClass("description-tab-active");
  $("#details-support-button").removeClass("description-tab-active");
}
