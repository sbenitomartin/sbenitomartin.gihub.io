// TODO eliminar
function collapseNavbar() {
    var _collapsed = $(".navbar-toggler").hasClass("collapsed");
    if (_collapsed === false) {
        $("button.navbar-toggler").click();
    }
}

// TODO eliminar
/********* Collapse Navbar when scroll or click outside *********/
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

document.getElementById('themeSwitch').addEventListener('click',()=>{
    var _dark = document.body.classList.contains("dark");
    if (_dark === false) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
})