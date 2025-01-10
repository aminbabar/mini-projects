class TypeAhead {
    constructor(baseUrl) {
        this.searchWrapper = document.querySelector("#wrapper");
        this.searchInput = this.searchWrapper.querySelector("#typeahead");
        this.searchSuggestions = this.searchWrapper.querySelector("#suggestions-list");
        this.baseUrl = baseUrl;
        this.searchInput.addEventListener("input", this.handleInputChange.bind(this));
        this.searchSuggestions.addEventListener("click", this.handleResultClick.bind(this));
        this.handleFetch = this.debounce(this.handleFetch.bind(this), 500);
    }

    handleResultClick(e) {
        this.searchInput.value = e.target.textContent;
        this.clearSearchList();
    }

    debounce(func, delay) {
        let timeOutId;
        return (...args) => {
            clearTimeout(timeOutId);
            timeOutId = setTimeout(() => func(...args), delay);
        }
    }

    handleInputChange(e) {
        if (e.target.value === "") return this.clearSearchList();
        this.handleFetch(e.target.value);
    }

    handleFetch(typedText) {
        return fetch(`${this.baseUrl}?text=${typedText}`)
            .then(res => res.json())
            .then(data => this.handleData(data))
            .catch(() => {
                console.log("fetch request failed");
            });
    }

    clearSearchList() {
        this.searchSuggestions.innerHTML = '';
    }

    handleData(searchData) {
        const fragment = new DocumentFragment();

        searchData.forEach((res) => {
            const li = document.createElement('li');
            li.textContent = res;
            fragment.append(li);
        });
        this.clearSearchList();
        this.searchSuggestions.append(fragment);
    }
}

export default TypeAhead;