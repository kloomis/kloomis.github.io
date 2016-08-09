var main = function() {
    "use strict";
    var leadParagraph = "<p style='font-weight:bold;'>Comments:</p>";
    $(".comments").html(leadParagraph);

    //1. Load comments from localstore, and add to the webpage
    $(".comments").html(localStorage.getItem("toDoList"));

    var addCommentFromInputBox = function() {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            //$new_comment.hide();
            $(".comments").append($new_comment);
            //save all comments in local storage
            localStorage.setItem("toDoList", $(".comments").html());
            //$new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function() {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);