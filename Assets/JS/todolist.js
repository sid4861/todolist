$("ul").on("click", "span", function (event) {
    $(this).parent().remove();
    event.stopPropagation();
});


$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});

$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13) {
        // grabbing the input value

        var toDoText = $(this).val();
        $(this).val("");
        //appending it to the ul

        $("ul").append("<li> <span class='deleteButton'><i class='far fa-trash-alt'></i></span> " + toDoText + " </li>")
    }
});


$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});