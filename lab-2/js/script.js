const output = document.getElementById('output');

const toyCar1 = {
    brand: "Hot Wheels",
    model: "Ferrari",
    color: "red",
    year: 2019,
    description() {
        let description = `This is a ${this.color} ${this.year} ${this.brand} ${this.model}.`;
        return description;
    }
}