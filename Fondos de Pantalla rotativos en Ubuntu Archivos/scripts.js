/**
 * ABN Framework global scripts
 * jQuery free since v6.6.0
 */
document.addEventListener("DOMContentLoaded", function () {
    const captions = [...document.querySelectorAll(".wp-caption")];
    if (captions) {
        captions.forEach((x) => {
            x.removeAttribute("style");
        });
    }

    const sitenameDescription = document.querySelector(
        ".sitename-description--link"
    );
    if (sitenameDescription) {
        modifySitenameStyles(sitenameDescription);
    }

    const searchBar = document.getElementById("searchBar");
    const searchFormInput = document.getElementById("searchFormInput");
    document
        .querySelectorAll("#searchToogle, #searchToggle404")
        .forEach((node) =>
            node.addEventListener("click", (ev) => {
                searchBar.classList.toggle("active");
                if (searchBar.classList.contains("active")) {
                    searchFormInput.focus();
                }
                ev.preventDefault();
            })
        );

    document.querySelector(".close-button").addEventListener("click", (ev) => {
        searchBar.classList.remove("active");
        ev.preventDefault();
    });

    const mainNavigation = document.getElementById("mainNavigation");
    const navBurger = document.getElementById("navBurger");
    document.getElementById("navBurger").addEventListener("click", (ev) => {
        mainNavigation.classList.toggle("active");
        navBurger.classList.toggle("clicked");
        document.body.classList.toggle("menu-active");
        ev.stopPropagation();
        ev.preventDefault();
    });

    document.addEventListener("click", (ev) => {
        if (!mainNavigation.classList.contains("active")) {
            return;
        }
        if (ev.target.closest("#mainNavigation")) {
            return;
        }
        mainNavigation.classList.remove("active");
        document.getElementById("navBurger").classList.remove("clicked");
        document.body.classList.remove("menu-active");
    });

    const commentsToggle = document.getElementById("commentsToggle");
    const commentsToggleHeader = document.getElementById(
        "commentsHeaderToggle"
    );
    const commentsContainer = document.getElementById("commentsContainer");
    if (commentsToggle) {
        commentsToggle.addEventListener("click", (ev) => {
            if (commentsContainer) {
                commentsContainer.classList.toggle("active");
            }
            ev.preventDefault();
        });
    }
    if (commentsToggleHeader) {
        commentsToggleHeader.addEventListener("click", (ev) => {
            if (commentsContainer) {
                commentsContainer.classList.toggle("active");
            }
        });
    }

    const privacyBox = document.getElementById("contentDatos");
    const privacyToggle = document.getElementById("toggleDatos");
    if (privacyBox) {
        privacyToggle.addEventListener("click", (ev) => {
            privacyBox.classList.toggle("active");
            ev.preventDefault();
        });
    }

    const topLink = document.getElementById("toplink");
    topLink.addEventListener("click", (ev) => {
        window.scrollTo(0, 0);
        ev.preventDefault();
    });
});

function modifySitenameStyles(sitenameDescription) {
    const words = sitenameDescription.innerText
        .split(" ")
        .filter((word) => word);
    const spans = words.map(wrapSitenameWord);
    sitenameDescription.innerHTML = "";
    spans.forEach((node) => sitenameDescription.appendChild(node));
}

function wrapSitenameWord(word) {
    const span = document.createElement("span");
    span.classList.add("sitename-word");
    span.textContent = word;
    return span;
}
