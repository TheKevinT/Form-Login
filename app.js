$('#sign-modal').on('hidden.bs.modal', function() {
    $(".jumbotron").fadeIn();
});

$('#sign-modal').on('shown.bs.modal', function() {
    $(".jumbotron").fadeOut();
});

$("#sign-modal").modal("show");