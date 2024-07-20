
const productos = [
    {
        id: 1,
        nombre: "agua",
        valor: 10
    },
    {
        id: 2,
        nombre: "jugo",
        valor: 50
    },
    {
        id: 3,
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

