const Material = [
    {tipo: "mosquetones", cantidad: 15},
    {tipo: "cuerdas", cantidad: 6 },
    {tipo: "expresses", cantidad: 22 },
    {tipo: "poleas", cantidad: 3 },
    {tipo: "arneses", cantidad: 6 },
    {tipo: "cordinos", cantidad: 10 },
]

const materialOrdenado = Material.sort((a, b) => {
    return a.cantidad - b.cantidad
})
console.log(materialOrdenado)