function funkcija() {
    var ovastvar = $("select#ovastvar option:checked").val();
    var onastvar = $("#onastvar").val();

    $("#rezultat").text(ovastvar + "  " + onastvar);
    return false;
}
