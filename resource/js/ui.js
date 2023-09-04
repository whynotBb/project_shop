//modal
function modalOpen(el) {
    $(el).fadeIn();
    $("body").addClass("modal-open");
}
function modalClose(el) {
    $(el).fadeOut();
    $("body").removeClass("modal-open");
}
function modalCloseAll() {
    $(".modal_wrap").fadeOut();
    $("body").removeClass("modal-open");
}
function modalCloseSingle(el) {
    $(el).fadeOut();
}
//toast
function toastOpen(el) {
    $(el).fadeIn();
    setTimeout(function () {
        $(el).fadeOut();
    }, 3000);
}
function toastClose() {
    $(".toast_wrap").fadeOut();
}
function contentsView(el) {
    $(".tab_con").hide();
    $(el).show();
}
$(document).ready(function () {
    // select box
    // select box 여닫기
    $(".selected").click(function () {
        $(this).siblings(".option_group").toggleClass("active");
    });
    $(".selectbox").on("mouseleave", function () {
        $(this).children(".option_group").removeClass("active");
    });
    // 항목 선택
    $(".inner ul li").click(function () {
        if (!$(this).hasClass("disabled")) {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            var selectedValue = $(this).text();
            $(this).closest(".selectbox").find(".selected").text(selectedValue);
            $(this).closest(".option_group").removeClass("active");
        }
    });

    //pagination
    $(".pagination li").on("click", function () {
        $(".pagination li").removeClass("on");
        $(this).addClass("on");
    });
});
