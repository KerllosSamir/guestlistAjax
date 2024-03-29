$(function () {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    $.ajax("guest.ajax", {
        type: "post",
        data: {
            first: first,
            last: last
        }
    }).done(displayGuests);
}

function displayGuests(data) {
    "use strict";
    $("#guestList").empty();

    var ul = $("<ul>");
    for (let i = 0; i < data.length; i++) {
        ul.append($("<li>", {text: data[i].first + " " + data[i].last}));
    }
    $("#guestList").append(ul);

}