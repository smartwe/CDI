window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementsByClassName(selector)[0];
        if (element) element.innerText = text;
    };
    replaceText("gb_1 gb_2 gb_1d gb_1c", "login");

});