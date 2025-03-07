const output = document.getElementById('output');

const toyCar1 = {
    brand: "Hot Wheels",
    model: "Nissan Skyline 2000GT-R LBWK",
    color: "Pearl Magenta",
    year: 2025,
    series: "HW J-Imports",
    baseColor: "Black",
    baseType: "Plastic",
    windowColor: "Smoke Tint",
    wheelType: "OH5SP",
    country: "Malaysia"
};

output1.textContent = `This toy car is a ${toyCar1.year} ${toyCar1.brand} ${toyCar1.model} in ${toyCar1.color}. It is part of the ${toyCar1.series} series, made in ${toyCar1.country}.This car has a ${toyCar1.baseColor} ${toyCar1.baseType} base, ${toyCar1.windowColor} windows, and ${toyCar1.wheelType} wheels.`;

const toyCar2 = {
    brand: "Hot Wheels",
    model: "BMW M3 GT2",
    color: "Red",
    year: 2021,
    series: "HW Race Day",
    baseColor: "Black",
    baseType: "Plastic",
    windowColor: "Tinted Smoke",
    wheelType: "GRX89",
    country: "Malaysia"
};

output2.textContent = `This toy car is a ${toyCar2.year} ${toyCar2.brand} ${toyCar2.model} in ${toyCar2.color}. It is part of the ${toyCar2.series} series, made in ${toyCar2.country}.This car has a ${toyCar2.baseColor} ${toyCar2.baseType} base, ${toyCar2.windowColor} windows, and ${toyCar2.wheelType} wheels.`;

const toyCar3 = {
    brand: "Hot Wheels",
    model: "Automobili Pininfarina Battista",
    color: "Bianco Sestriere",
    year: 2023,
    series: "HW Green Speed",
    baseColor: "Black",
    baseType: "Plastic",
    windowColor: "Smoke Tint",
    wheelType: "PR5",
    country: "Malaysia"
};

output3.textContent = `This toy car is a ${toyCar3.year} ${toyCar3.brand} ${toyCar3.model} in ${toyCar3.color}. It is part of the ${toyCar3.series} series, made in ${toyCar3.country}.This car has a ${toyCar3.baseColor} ${toyCar3.baseType} base, ${toyCar3.windowColor} windows, and ${toyCar3.wheelType} wheels.`;

function toyCar(brand, model, color, year, series, baseColor, baseType, windowColor, wheelType, country) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.series = series;
    this.baseColor = baseColor;
    this.baseType = baseType;
    this.windowColor = windowColor;
    this.wheelType = wheelType;
    this.country = country;
    this.describe = function() {
        let description = `This toy car is a ${this.year} ${this.brand} ${this.model} in ${this.color}. It is part of the ${this.series} series, made in ${this.country}.This car has a ${this.baseColor} ${this.baseType} base, ${this.windowColor} windows, and ${this.wheelType} wheels.`;
        return description;
    };
};

output4.textContent = toyCar.describe();