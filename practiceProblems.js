//1 
console.log("-1");

const arr = [1,3,4,6,8,9];

const sq = arr.map(num => num*num);

//2
console.log("-2");

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
console.log("-3");

const sum = arr.reduce((acc, num) => acc + num, 0 );


//4
console.log("-4");

const names = ["Alice","Bob","Charlie","David","Eva"];
  

const printer = names.forEach(element => console.log(`Hello ,${element}!` ));

//5
console.log("-5");

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
  console.log("-6");

  const nums = [1,-33,4,6,8,9];

  const negative = nums.map(num => (num<0 === true) ? true : false);

  console.log(negative.includes(true));

  //7
  console.log("-7");

  let books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      yearPublished: 1960,
      genres: ["Fiction", "Classic"],
      rating: 4.8,
      isAvailable: true
    },
    {
      title: "1984",
      author: "George Orwell",
      yearPublished: 1949,
      genres: ["Dystopian", "Science Fiction"],
      rating: 4.7,
      isAvailable: false
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: 1925,
      genres: ["Classic", "Novel"],
      rating: 4.4,
      isAvailable: true
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      yearPublished: 1951,
      genres: ["Fiction", "Classic"],
      rating: 4.2,
      isAvailable: false
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      yearPublished: 1851,
      genres: ["Adventure", "Classic"],
      rating: 4.0,
      isAvailable: true
    }
  ];

  console.log(books.map(book => book.isAvailable == true));
  const allavlbl = !(books.map(book => book.isAvailable == true).includes(false));
  console.log(allavlbl);

  //8
  console.log("-8");

  let employees = [
    { name: "John", yearsAtCompany: 3 },
    { name: "Jane", yearsAtCompany: 7 },
    { name: "Sam", yearsAtCompany: 2 }
  ];
 
  const legacy = employees.findIndex(emp => emp.yearsAtCompany > 5);

  //9
  Console.log("-9");

  let numberArrays = [[1, 2], [3, 4], [5, 6]];

  const fltn = numberArrays.flat().map( num => num*3);

  //10
  Console.log("-10");

  let movies = [
    { title: "Movie 1", year: 2015 },
    { title: "Movie 2", year: 2010 },
    { title: "Movie 3", year: 2020 }
  ];

  const movieorder = movies.sort((a,b) => a.year - b.year);
