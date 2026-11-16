export default class Movie {
    constructor(title, director, year, rating) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
    }

    render() {
        const card = document.createElement("article");
        card.className = "card";

        if (this.rating >= 8) {
            card.classList.add("top-rated");
        }

        card.innerHTML = `
            <h2>${this.title} ${this.rating >= 8 ? "⭐" : ""}</h2>
            <p><strong>Director:</strong> ${this.director}</p>
            <p><strong>Year:</strong> ${this.year}</p>
            <p><strong>Rating:</strong> ${this.rating}/10</p>
        `;

        return card;
    }
}
