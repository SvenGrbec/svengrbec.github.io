function funkcija() {
    var ovastvar = $("select#ovastvar option:checked").val();
    var onastvar = $("#onastvar").val();

    $("#rezultat").text(ovastvar + "  " + onastvar);
}

$('#okform').submit(function () {
 funkcija();
 return false;
});