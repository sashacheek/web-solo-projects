function expand() {
    // alert("hi");
    var expandMenu = document.getElementsByClassName("collapse");
    for (var i = 0; i < expandMenu.length; i++) {
        expandMenu[i].classList.remove("hidden");
        expandMenu[i].classList.add("shown");
    }

    expandUp = document.getElementById("expand-up");
    expandDown = document.getElementById("expand-down");
    expandUp.style.display = "inline-block";
    expandDown.style.display = "none";
    var toggleExpand = document.getElementById("toggle-expand");
    toggleExpand.removeEventListener("click", expand);
    toggleExpand.addEventListener("click", collapse);
    // if (expandMenu[1].style.maxHeight) {
    //     // for (var i = 1; i < expandMenu.length; i++) {
    //     //     var link = expandMenu[i];
    //     //     this.classList.toggle("active");
    //     //     link.style.maxHeight = null;
    //     //     link.style.padding = "0 0 0 5px";
    //     //     // link.style.display = "none";
    //     // }
    //     var collapse = document.querySelector('.collapse');
    //     collapse.style.maxHeight = null;
    //     collapse.style.padding = "0 0 0 5px";
    //     collapse.style.display = "none";
    // }
    // else {
    //     // for (var i = 1; i < expandMenu.length; i++) {
    //     //     var link = expandMenu[i];
    //     //     this.classList.toggle("active");
    //     //     // link.style.display = "block";
    //     //     link.style.padding = "5px";
    //     //     link.style.maxHeight = link.scrollHeight + "px";
    //     // }
    //     var collapse = document.querySelector('.collapse');
    //     collapse.style.display = "block";
    //     collapse.style.padding = "5px";
    //     collapse.style.maxHeight = collapse.scrollHeight + "px";
    // };


    // for (var i = 1; i < expandMenu.length; i++) {
    //         this.classList.toggle("active");
    //         var link = expandMenu[i];
    //         if (link.style.maxHeight) {
    //             link.style.maxHeight = null;
    //             link.style.padding = "0 0 0 5px";
    //             // link.style.display = "none";
    //         }
    //         else {
    //             // link.style.display = "block";
    //             link.style.maxHeight = link.scrollHeight + "px";
    //             link.style.padding = "5px";
    //         };
    // }
}

function collapse() {
    var expandMenu = document.getElementsByClassName("collapse");
    for (var i = 0; i < expandMenu.length; i++) {
        expandMenu[i].classList.remove("shown");
        expandMenu[i].classList.add("hidden");
    }

    expandUp = document.getElementById("expand-up");
    expandDown = document.getElementById("expand-down");
    expandDown.style.display = "inline-block";
    expandUp.style.display = "none";
    var toggleExpand = document.getElementById("toggle-expand");
    toggleExpand.removeEventListener("click", collapse);
    toggleExpand.addEventListener("click", expand);
}

function init() {
    var toggleExpand = document.getElementById("toggle-expand");
    toggleExpand.addEventListener("click", expand);
}

window.onload = init;