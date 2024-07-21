
const productos = [
    {
        id: 1,
        caracteristicas: "es de manzana",
        nombre: "agua",
        valor: 10
        
    },
    {
        id: 2,
        caracteristicas: "es de pera",
        nombre: "jugo",
        valor: 50
        
    },
    {
        id: 3,
        caracteristicas: "es de uva",
        nombre: "gaseosa",
        valor: 30
        
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

