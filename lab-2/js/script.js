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

output.textContent = `This toy car is a ${toyCar1.year} ${toyCar1.brand} ${toyCar1.model} in ${toyCar1.color}. It is part of the ${toyCar1.series} series, made in ${toyCar1.country}.This car has a ${toyCar1.baseColor} ${toyCar1.baseType} base, ${toyCar1.windowColor} windows, and ${toyCar1.wheelType} wheels.`;