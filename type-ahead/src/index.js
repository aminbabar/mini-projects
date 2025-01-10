import TypeAhead from "./typeAhead";
const BASE_URL = 'http://localhost:3000/api/proxy?url=https://api.frontendexpert.io/api/fe/glossary-suggestions';

document.addEventListener("DOMContentLoaded", () => {
    new TypeAhead(BASE_URL);
});