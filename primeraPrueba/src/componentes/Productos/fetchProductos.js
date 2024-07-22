
const productos = [
    {
        id: 1,
        img: "../assets/MD_808Pro.jpg",
        caracteristicas: "es de manzana",
        nombre: "agua",
        valor: 10,
        categoria: "taller"
        
    },
    {
        id: 2,
        img: "./componentes/Productos/assets/MD_808Pro.jpg",
        caracteristicas: "es de pera",
        nombre: "jugo",
        valor: 50,
        categoria: "particular"
        
    },
    {
        id: 3,
        img: "./componentes/Productos/assets/MD_808Pro.jpg",
        caracteristicas: "es de uva",
        nombre: "gaseosa",
        valor: 30,
        categoria: "taller"
        
    }
]

export default function fetchProductos (){
    return new Promise (resolve => {
        console.log("funciona")
        setTimeout(()=>{
            resolve (productos)
        }, 1000)
    })
}

