
$(document).ready(function () {

    // TASK 0: jQuery Setup
    console.log("jQuery is ready!");


    // TASK 1: Selectors and CSS
    $("#changeBtn").click(function () {
        $("#myText").text("Text changed using jQuery!");
        $(".myClass").html("<b>Bold HTML content!</b>");
        $("h3").css("color", "red");
    });

    $("#resetSelectors").click(function () {
        $("#myText").text("Original ID text");
        $(".myClass").text("Original class text");
        $("h3").css("color", "");
    });


    // TASK 2: Visibility Methods
    $("#hideBtn").click(function () {
        $("#visibilityText").hide();
    });

    $("#showBtn").click(function () {
        $("#visibilityText").show();
    });

    $("#toggleBtn").click(function () {
        $("#visibilityText").toggle();
    });


    // TASK 3: Fade Methods
    $("#fadeOutBtn").click(function () {
        $("#fadeImage").fadeOut(600);
    });

    $("#fadeInBtn").click(function () {
        $("#fadeImage").fadeIn(600);
    });

    $("#fadeToggleBtn").click(function () {
        $("#fadeImage").fadeToggle(600);
    });


    // TASK 4: Slide Methods
    $("#slideUpBtn").click(function () {
        $("#slidePanel").slideUp(600);
    });

    $("#slideDownBtn").click(function () {
        $("#slidePanel").slideDown(600);
    });

    $("#slideToggleBtn").click(function () {
        $("#slidePanel").slideToggle(600);
    });


    // TASK 5: Add and Remove Elements
    let itemCount = 2;

    $("#addItemBtn").click(function () {
        itemCount++;
        $("#itemList").append("<li>Item " + itemCount + "</li>");
    });

    $("#prependItemBtn").click(function () {
        itemCount++;
        $("#itemList").prepend("<li>Item " + itemCount + "</li>");
    });

    $("#removeItemBtn").click(function () {
        $("#itemList li:last").remove();
    });


    // TASK 6: Modifying Attributes
    $("#changeImageBtn").click(function () {
        $("#changeImage").attr(
            "src",
            "https://picsum.photos/id/1025/300/200"
        );
    });

    $("#changeLinkBtn").click(function () {
        $("#dynamicLink").attr(
            "href",
            "https://www.google.com/"
        );
        $("#dynamicLink").text("Visit Google");
    });


    // TASK 7: Form Interaction
    $("#nameInput").on("input", function () {
        let name = $(this).val();
        $("#namePreview").text(name);
    });

    $("#emailInput").on("input", function () {
        let email = $(this).val();
        $("#emailPreview").text(email);
    });


    // TASK 8: Basic Animation
    $("#basicAnimateBtn").click(function () {
        $("#basicBox").stop(true).animate({
            width: "110px",
            height: "110px",
            left: "200px"
        }, 1000);
    });

    $("#basicResetBtn").click(function () {
        $("#basicBox").stop(true).css({
            width: "60px",
            height: "60px",
            left: "0px",
            top: "0px"
        });
    });


    // TASK 9: Sequential Animations
    $("#sequenceBtn").click(function () {
        $("#sequenceBox").stop(true).css({
            width: "60px",
            height: "60px",
            left: "0px",
            top: "0px"
        });

        $("#sequenceBox")
            .animate({left: "200px"}, 600)
            .animate({top: "130px"}, 600)
            .animate({
                width: "30px",
                height: "30px"
            }, 600)
            .animate({
                left: "0px",
                top: "0px",
                width: "60px",
                height: "60px"
            }, 600);
    });

    $("#sequenceResetBtn").click(function () {
        $("#sequenceBox").stop(true).css({
            left: "0px",
            top: "0px",
            width: "60px",
            height: "60px"
        });
    });


    // TASK 10: Combined Animation
    $("#combinedBtn").click(function () {
        $("#combinedBox").stop(true).animate({
            opacity: 0.3,
            width: "120px",
            height: "120px",
            left: "180px",
            top: "60px"
        }, 1200);
    });

    $("#combinedResetBtn").click(function () {
        $("#combinedBox").stop(true).css({
            opacity: 1,
            width: "60px",
            height: "60px",
            left: "0px",
            top: "0px"
        });
    });


    // TASK 11: Accordion Mini Project
    $(".accordionHeader").click(function () {
        let content = $(this).next(".accordionContent");

        $(".accordionContent").not(content).slideUp(400);

        content.slideToggle(400);
    });

    $("#openAllBtn").click(function () {
        $(".accordionContent").slideDown(400);
    });

    $("#closeAllBtn").click(function () {
        $(".accordionContent").slideUp(400);
    });

});
