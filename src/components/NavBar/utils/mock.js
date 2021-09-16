import "./Img.css";

const productos=[

    {id:1, name:"Remera Penguin",picture:"https://www.online-convert.com/es/downloadfile/947f542f-0fc2-4c26-abef-31126909325e/820d972c-78cd-4763-8d5d-4516c778b855"},
    {id:2, name:"Remera Lacoste",picture:"https://www.online-convert.com/es/downloadfile/947f542f-0fc2-4c26-abef-31126909325e/92e6a520-01ff-401e-a476-54da650cd794"},
    {id:3, name:"Buzo Tommy Hilfiger",picture:"https://www.online-convert.com/es/downloadfile/947f542f-0fc2-4c26-abef-31126909325e/466d3863-bc2e-4ee0-934e-cbfb29fa2a73"},
    ]

   export const getFetch = new Promise((resolve, reject) => {


        let respuesta = "200"
        if (respuesta === "200"){
            setTimeout(()=>{
                resolve(productos)
            },2000)
        }else{
            reject("404")
        }
    })
    
    const producto = {id:5,picture:"https://www.online-convert.com/es/downloadfile/a9190ebe-b547-4e1b-a82b-fa9ab41a860e/7b45e2bd-753d-4853-b2f7-38b3f4399147"}

    export const getFetchUno = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(producto)
        },2000)

    })