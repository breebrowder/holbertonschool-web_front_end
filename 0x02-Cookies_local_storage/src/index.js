document.addEventListener("DOMContentLoaded", () => {
    function setCookies() {
        let firstnameInput = document.getElementById("firstname").value;
        let emailInput = document.getElementById("email").value;
        document.cookie = `firstname=${firstnameInput}`;
        document.cookie = `email=${emailInput}`;
    }

    function showCookies() {
        let theParagraph = document.createElement("p");
        let allCookies = document.cookie;
        theParagraph.innerHTML = `Cookies: ${allCookies}`;
        document.body.append(theParagraph);
    }
}
