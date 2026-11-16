export default class Member {
    constructor(name, position, department, available) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.available = available;
    }

    render() {
        const card = document.createElement("article");
        card.className = "member-card";

        card.innerHTML = `
            <h2>${this.name}</h2>
            <p><strong>Position:</strong> ${this.position}</p>
            <p><strong>Department:</strong> ${this.department}</p>
            <p><strong>Availability:</strong> ${this.available ? "Available" : "Not available"}</p>
        `;

        return card;
    }
}
