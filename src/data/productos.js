
const articulos = [
    {
        "id": 1,
        "name": "Alimento Ken-L 15kg",
        "description": "Alimento premium Ken-L por 15kg para perro adulto con 26% de proteínas",
        "stock": 4 ,
        "price": 35000, 
        "image": "/Productos/perros/alimento1.png",
        "category":{
            "name": "Perros",
            "id": "perros"
        }
    },

    {
        "id": 2,
        "name": "Alimento DogChow 15kg",
        "description": "Alimento DogChow por 15kg para perros adultos medianos y grandes. Sabor carne y pollo",
        "stock": 4 ,
        "price": 25000, 
        "image": "/Productos/perros/Dog-Chow.png",
        "category":{
            "name": "Perros",
            "id": "perros"
        }
    },
    
    {
        "id": 3,
        "name": "Alimento Dog Selection 15kg",
        "description": "Alimento Dog Selection por 15kg criadores 21% de proteínas",
        "stock": 4 ,
        "price": 27000, 
        "image": "/Productos/perros/dogselection.png",
        "category":{
            "name": "Perros",
            "id": "perros"
        }
    },

    {
        "id": 4,
        "name": "Alimento Excellent 15kg",
        "description": "Alimento Purina Excellent por 15k para perro adulto, 24% de proteínas. Sabor carne",
        "stock": 4 ,
        "price": 45000, 
        "image": "/Productos/perros/Excellent-alimento.jpg",
        "category":{
            "name": "Perros",
            "id": "perros"
        }
    },
    {
        "id": 5,
        "name": "Alimento Nutribon 8kg",
        "description": "Alimento Nutribon por 8kg para perro adulto mix de sabores (carne, pollo, cereales y vegetales)",
        "stock": 10 ,
        "price": 38000, 
        "image": "/Productos/perros/nutribon.png",
        "category":{
            "name": "Perros",
            "id": "perros"
        }
    },
    {
        "id": 6,
        "name": "Alimento Dogui Carne 20kg",
        "description": "Alimento Dogui por 20kg completo y balanceado para perro adulto. Sabor carne con cereales y arroz",
        "stock": 10 ,
        "price": 24000, 
        "image": "/Productos/perros/dogui-carne.png",
        "category":{
            "name": "Perros",
            "id": "perros"
        }
    },

    {
        "id": 8,
        "name": "Alimento CatPro 15kg",
        "description": "Alimento para gato adulto",
        "stock": 4 ,
        "price": 30000, 
        "image": "/Productos/gatos/catPro.jpg",
        "category":{
            "name": "Gatos",
            "id": "gatos"
        }
    },
    {
        "id": 9,
        "name": "Alimento Excellent 15kg",
        "description": "Alimento para gato adulto",
        "stock": 4 ,
        "price": 54000, 
        "image": "/Productos/gatos/excellentGato.jpg",
        "category":{
            "name": "Gatos",
            "id": "gatos"
        }
    },
    {
        "id": 10,
        "name": "Cucha de polar premium",
        "description": "cucha 60cm*70cm",
        "stock": 4 ,
        "price": 22000, 
        "image": "/Productos/accesorios/a-descansar.jpg",
        "category":{
            "name": "Accesorios",
            "id": "accesorios"
        }
    },
    {
        "id": 11,
        "name": "Casa para gato",
        "description": "Escalador para gato 120cm*50cm",
        "stock": 4 ,
        "price": 45000, 
        "image": "/Productos/accesorios/casa-gato.jpg",
        "category":{
            "name": "Accesorios",
            "id": "accesorios"
        }
    },
    {
        "id": 12,
        "name": "Comedero premium yellow",
        "description": "comedero grande amarrillo",
        "stock": 4 ,
        "price": 8000, 
        "image": "/Productos/accesorios/Comedero.jpg",
        "category":{
            "name": "Accesorios",
            "id": "accesorios"
        }
    },
    {
        "id": 13,
        "name": "Correa de paseo regulable",
        "description": "correa huesitos para mascota pequeña ",
        "stock": 5 ,
        "price": 12000, 
        "image": "/Productos/accesorios/correa.jpg",
        "category":{
            "name": "Accesorios",
            "id": "accesorios"
        }
    },
    {
        "id": 14,
        "name": "Cif diluible 5lts",
        "description": "Cif fragancia duradera, limpieza profunda x 5lts",
        "stock": 5,
        "price": 5000,
        "image": '/Productos/cif.jpg',
        "category": {
            "name": "liquidos",
            "id": "liquidos"
        }
    },
    {
        "id": 15,
        "name": "Skip baja espuma 5lts",
        "description": "Skip liquido baja espuma rinde 500kg de ropa seca",
        "stock": 5,
        "price": 8000,
        "image": "/Productos/skip.jpg",
        "category": {
            "name": "liquidos",
            "id": "liquidos"
        }
    },
    {
        "id": 16,
        "name": "Balde bordo 10lts",
        "description": " Balde bordo sina 10lts premium",
        "stock": 5,
        "price": 8000,
        "image": "/Productos/balde-bordo-sina.jpg",
        "category": {
            "name": "plasticos",
            "id": "plasticos"
        }
    },
    {
        "id": 17,
        "name": "Barre hojas Plastico",
        "description": "Barre hojas premium 40cm",
        "stock": 5,
        "price": 8000,
        "image": "/Productos/barrehojas.jpg",
        "category": {
            "name": "plasticos",
            "id": "plasticos"
        }
    },
    {
        "id": 18,
        "name": "Esponja de cocina Romyl",
        "description": "Esponja de cocina salva uñas",
        "stock": 5,
        "price": 2000,
        "image": "/Productos/esponja-ecco.jpg",
        "category": {
            "name": "plasticos",
            "id": "plasticos"
        }
    },
    {
        "id": 19,
        "name": "Escobillon Premium ",
        "description": "Escobillon/Escoba premium Romyl",
        "stock": 5,
        "price": 4000,
        "image": "/Productos/mica-escoba.jpg",
        "category": {
            "name": "plasticos",
            "id": "plasticos"
        }
    },

    
]

const productos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(articulos);
    },3000);
});

export default productos;

