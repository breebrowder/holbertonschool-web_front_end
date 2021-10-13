document.addEventListener("DOMContentLoaded", () => {
    function setCookies() {
        let firstNameInput = document.getElementById("firstname").value;
        let emailInput = document.getElementById("email").value;
        document.cookie = `firstname=${firstNameInput}`;
        document.cookie = `email=${emailInput}`;
    }

    function showCookies() {
        let theParagraph = document.createElement("p");
        let allCookies = document.cookie;
        theParagraph.innerHTML = `Cookies: ${allCookies}`;
        document.body.append(theParagraph);
    }
}
