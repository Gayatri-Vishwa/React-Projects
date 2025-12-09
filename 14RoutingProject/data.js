// import express from "express";
// import path from "path";
// import cors from "cors";
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());

// app.use("/images", express.static(path.join(__dirname, "../public/images")));

// app.get("/", (req, res) => {
//   console.log(path.join(__dirname, "../public"));
  const foodData = [
 
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },

    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/cake.png",
      type: "breakfast",
    },
 

    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pancake.png",
      type: "dinner",
    },

    ////////////////////////////////////////////
        {
      name: "BANANA SHAKE",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/banana.jpeg",
      type: "breakfast",
    },
        {
      name: "BURGER",
      price: 12,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/burger.png",
      type: "breakfast",
    },
        {
      name: "VADA PAV",
      price: 28,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/vadapav.jpeg",
      type: "breakfast",
    },
        
        {
      name: "DAL RICE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/dalrice.jpeg",
      type: "dinner",
    },
        {
      name: "DHOKLA",
      price: 16,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/dhokla.jpeg",
      type: "breakfast",
    },
        {
      name: "DOSSA",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/dossa.jpeg",
      type: "lunch",
    },
    //     {
    //   name: "FRUITS",
    //   price: 25,
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //   image: "/images/fruit.jpeg",
    //   type: "breakfast",
    // },
        {
      name: "GOLGAPPA",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/golgappa.jpeg",
      type: "dinner",
    },
        // {
    //   name: "IDLI",
    //   price: 25,
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //   image: "/images/idli.png",
    //   type: "breakfast",
    // },
        {
      name: "PANEER RICE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/paneer.jpeg",
      type: "lunch",
    },
        {
      name: "PAV BHAJI",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pavbhaji.jpeg",
      type: "dinner",
    },
  





  ];

  export default foodData

//   res.json(foodData);
// });

// app.listen(9000, () => {
//   console.log("Server is running on http://localhost:9000 ");
// });
