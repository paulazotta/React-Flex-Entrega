const productos = [
    {
        id: 1,
        producto: "agua",
        valor: 10
    },
    {
        id: 2,
        producto: "jugo",
        valor: 50
    },
    {
        id: 3,
        producto: "gaseosa",
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

