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
// 파일박스 : 싱글
function handleFileChange(inputId) {
    $(inputId).on("change", function () {
        var fileName = $(this).val();
        $(this).siblings(".upload-name").val(fileName);
    });
}
//파일박스 : 멀티 // input 에 multiple 추가
function handleFileMultiChange(inputId) {
    $(inputId).on("change", function () {
        var files = $(this)[0].files;
        var fileNames = [];

        for (var i = 0; i < files.length; i++) {
            fileNames.push(files[i].name);
        }

        var formattedFileNames = fileNames.join(", ");

        $(this).siblings(".upload-name").val(formattedFileNames);
    });
}
$(document).ready(function () {
    // text editor
    $("#summernote").summernote({
        placeholder: "공지사항 내용 입력",
        tabsize: 2,
        height: 490,
        toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["color", ["color"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview", "help"]],
        ],
    });
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
    // dash board - tab_menu
    $(".tab_menu li").on("click", function () {
        $(".tab_menu li").removeClass("on");
        $(this).addClass("on");
    });
    // 정산관리 - tab_menu
    $(".table_tab_menu li").on("click", function () {
        $(".table_tab_menu li").removeClass("on");
        $(this).addClass("on");
    });
    //자주묻는질문 - tab menu
    $(".check_tab_menu li").on("click", function () {
        $(".check_tab_menu li").removeClass("on");
        $(this).addClass("on");
    });
    $(".cs_lnb_wrap li").on("click", function (e) {
        e.preventDefault();
        $(".cs_lnb_wrap li").removeClass("on");
        $(this).addClass("on");
    });
    // date range picker
    const datepickerOption = {
        format: "YYYY-MM-DD",
        separator: " → ",
        applyLabel: "확인",
        cancelLabel: "취소",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "Custom",
        weekLabel: "주",
        daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        firstDay: 1,
    };
    $('input[name="daterange"]')
        .daterangepicker({
            opens: "left",
            autoApply: true,
            locale: datepickerOption,
        })
        .val("")
        .attr("placeholder", "시작일자 → 종료일자");
    $('input[name="singleDate"]').daterangepicker({
        opens: "left",
        autoApply: true,
        locale: datepickerOption,
        singleDatePicker: true,
    });

    //pagination
    $(".pagination li").on("click", function () {
        $(".pagination li").removeClass("on");
        $(this).addClass("on");
    });
});
