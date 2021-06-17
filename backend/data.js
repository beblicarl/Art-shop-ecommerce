import bcrypt from "bcryptjs";
const data = {
    users: [
        {
            name: "Carl",
            email: "admin@gmail.com",
            password : bcrypt.hashSync("1234",8),
            isAdmin : true
        },
        {
            name: "Bebli",
            email: "user@example.com",
            password : bcrypt.hashSync("1234",8),
            isAdmin : false
        },
    ],
    products : [
        {
            
            name:"Beautiful Chaos",
            category:"print",
            image: "/images/1.jpg",
            price: 80, countInStock: 10,
            rating: 5,
            description: "High quality print painting"
        },
        {
            
            name:"Curled Rainbow",
            category:"hand painted",
            image: "/images/2.jpg",
            price: 60,countInStock: 20,
            rating: 2,
            description: "High quality hand painted art"
        },
        {
           
            name:"Projects",
            category:"hand painted",
            image: "/images/3.jpg",
            price: 88, countInStock: 13,
            rating: 4,
            description: "High quality hand painted art"
        },
        {
            
            name:"Keep Afloat",
            category:"print",
            image: "/images/4.jpg",
            price: 100, countInStock: 45,
            rating: 5,
            description: "High quality print painting"
        },
        {
           
            name:"Maze",
            category:"hand painted",
            image: "/images/5.jpg",
            price: 20, countInStock: 0,
            rating: 1,
            description: "High quality hand painted art"
        },
        {
            
            name:"Corona",
            category:"hand painted",
            image: "/images/6.jpg",
            price: 100, countInStock: 14,
            rating: 4,
            description: "High quality hand painted art"
        },
        {
            
            name:"Cold Eyes",
            category:"print",
            image: "/images/7.jpg",
            price: 80, countInStock: 0,
            rating: 3,
            description: "High quality print painting"
        },
        {
            
            name:"Calm",
            category:"hand painted",
            image: "/images/8.jpg",
            price: 60, countInStock: 0,
            rating: 2,
            description: "High quality hand painted art"
        },
        {
          
            name:"Departed Souls",
            category:"print",
            image: "/images/9.jpg",
            price: 120, countInStock: 40,
            rating: 5,
            description: "High quality print painting"
        },
        {
            
            name:"Inner Being",
            category:"hand painted",
            image: "/images/10.jpg",
            price: 78, countInStock: 23,
            rating: 4,
            description: "High quality hand painted art"
        },
        {
            
            name:"Bloody Hands",
            category:"hand painted",
            image: "/images/11.jpg",
            price: 60, countInStock: 10,
            rating: 3,
            description: "High quality hand painted art"
        },
        {
            
            name:"Faded Disciple",
            category:"print",
            image: "/images/12.jpg",
            price: 82, countInStock: 0,
            rating: 5,
            description: "High quality print painting"
        },

    ]
}

export default data;