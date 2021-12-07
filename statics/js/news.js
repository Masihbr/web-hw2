$("#myForm").on("submit", function (e) {
  e.preventDefault();
  $("#myModal").modal("show");
});

$(document).ready(function () {
  $("#modalOKBtn").click(function () {
    $("#myToast").toast("show");
  });
});

$(".toast").toast({
  delay: 3000,
});
