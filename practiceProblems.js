//1 

const arr = [1,3,4,6,8,9];

const sq = arr.map(num => num*num);

//2

const students = [
    { name: "Alice", grade: 85, age: 17 },
    { name: "Bob", grade: 92, age: 18 },
    { name: "Charlie", grade: 78, age: 16 },
    { name: "David", grade: 95, age: 17 },
    { name: "Eva", grade: 88, age: 18 }
  ];
  
const smartppl = students.filter(stu=> stu.grade > 80 );

console.log(smartppl);

//3

const sum = arr.reduce((acc, num) => acc + num, 0 );


//4

const names = ["Alice","Bob","Charlie","David","Eva"];
  

const printer = names.forEach(element => console.log(`Hello ,${element}!` ));

//5

const products = [
    {
      id: 1,
      name: "Smartphone",
      category: "Electronics",
      price: 69,
      inStock: true,
      description: "A high-end smartphone with 128GB storage.",
      ratings: 4.5
    },
    {
      id: 2,
      name: "Laptop",
      category: "Electronics",
      price: 120,
      inStock: true,
      description: "A powerful laptop with 16GB RAM and 512GB SSD.",
      ratings: 4.8
    },
    {
      id: 3,
      name: "Wireless Headphones",
      category: "Accessories",
      price: 19,
      inStock: false,
      description: "Noise-cancelling over-ear wireless headphones.",
      ratings: 4.3
    },
    {
      id: 4,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49,
      inStock: true,
      description: "Programmable coffee maker with 12-cup capacity.",
      ratings: 4.1
    },
    {
      id: 5,
      name: "Electric Scooter",
      category: "Transportation",
      price: 9,
      inStock: true,
      description: "Foldable electric scooter with a range of 20 miles.",
      ratings: 4.6
    }
  ];

  const over50 = products.filter(element => element.price>50);
  const firstover50 = console.log(over50[0]);

  //6

  const nums = [1,-33,4,6,8,9];

  const negative = nums.map(num => (num<0 === true) ? true : false);

  console.log(negative.includes(true));