function collapseNavbar() {
    var _collapsed = $(".navbar-toggler").hasClass("collapsed");
    if (_collapsed === false) {
        $("button.navbar-toggler").click();
    }
}

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        if (!clickover.hasClass("navbar-toggler")) {
            collapseNavbar();
        }
    });

    $(window).scroll(function (event) {
        collapseNavbar();
    });
});


// const theme = new URL(window.location).searchParams.get('theme');
// document.body.classList.remove('light', 'dark');
// document.body.classList.add(theme || 'light');