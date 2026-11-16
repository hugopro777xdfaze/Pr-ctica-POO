import Member from "./Member.js";

class Main {
    constructor() {
        this.members = [];
        this.container = document.querySelector("#members");
        this.departmentSelect = document.querySelector("#department");
        this.departmentSelect.addEventListener("change", () => this.filterMembers());
        this.loadTeam();
    }

    async loadTeam() {
        try {
            const response = await fetch("./data/team.json");
            const data = await response.json();

            this.members = data.map(member =>
                new Member(member.name, member.position, member.department, member.available)
            );

            this.addDepartments();
            this.render(this.members);
        } catch (error) {
            this.container.textContent = "Could not load the team.";
            console.error(error);
        }
    }

    addDepartments() {
        const departments = [...new Set(this.members.map(member => member.department))];

        departments.forEach(department => {
            const option = document.createElement("option");
            option.value = department;
            option.textContent = department;
            this.departmentSelect.appendChild(option);
        });
    }

    filterMembers() {
        const selectedDepartment = this.departmentSelect.value;

        if (selectedDepartment === "all") {
            this.render(this.members);
        } else {
            const filteredMembers = this.members.filter(member =>
                member.department === selectedDepartment
            );
            this.render(filteredMembers);
        }
    }

    render(members) {
        this.container.innerHTML = "";
        members.forEach(member => {
            this.container.appendChild(member.render());
        });
    }
}

new Main();
