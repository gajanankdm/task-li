import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-li';
skills: Array<string> = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Bootstrap",
  "Git",
  "GitHub",
  "REST API",
  "RxJS"
];

 frontendTech: Array<string> = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Bootstrap",
  "Tailwind CSS",
  "SASS",
  "Webpack"
];

 backendSkills: Array<string> = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "REST API",
  "JWT",
  "GraphQL",
  "Docker"
];


 databases: Array<string>= [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Oracle",
  "Redis",
  "Firebase",
  "DynamoDB",
  "Cassandra",
  "MariaDB"
];

 tools: Array<string> = [
  "VS Code",
  "Git",
  "GitHub",
  "Postman",
  "Chrome DevTools",
  "NPM",
  "Webpack",
  "Jira",
  "Figma",
  "Slack"
];

softSkills: Array<string> = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Creativity",
  "Critical Thinking",
  "Work Ethic",
  "Decision Making"
];

mobileBrands: Array<string>= [
  "Apple",
  "Samsung",
  "OnePlus",
  "Xiaomi",
  "Realme",
  "Oppo",
  "Vivo",
  "Motorola",
  "Nokia",
  "Nothing"
];

 operatingSystems: Array<string> = [
  "Windows",
  "macOS",
  "Linux",
  "Android",
  "iOS",
  "Ubuntu",
  "Debian",
  "Fedora",
  "Chrome OS",
  "Unix"
];


 programmingLanguages: Array<string> = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP"
];

 webConcepts: Array<string> = [
  "HTTP",
  "HTTPS",
  "REST",
  "CORS",
  "JWT",
  "OAuth",
  "SPA",
  "SSR",
  "SEO",
  "Web Security"
];



students = [
  {
    fname: "Rahul",
    lname: "Patil",
    email: "rahul.patil@gmail.com",
    contact: 9876543210,
    stdId: "STD001"
  },
  {
    fname: "Sneha",
    lname: "Shinde",
    email: "sneha.shinde@gmail.com",
    contact: 9123456789,
    stdId: "STD002"
  },
  {
    fname: "Amit",
    lname: "Deshmukh",
    email: "amit.d@gmail.com",
    contact: 9988776655,
    stdId: "STD003"
  },
  {
    fname: "Pooja",
    lname: "Kulkarni",
    email: "pooja.k@gmail.com",
    contact: 9090909090,
    stdId: "STD004"
  },
  {
    fname: "Vikas",
    lname: "Jadhav",
    email: "vikas.j@gmail.com",
    contact: 9012345678,
    stdId: "STD005"
  }
];
studentsGroup1 = [
  {
    id: "STD01",
    name: "Rahul Patil",
    age: 21,
    email: "rahul@gmail.com",
    contact: "9876543210",
    course: "Angular",
    isActive: true
  },
  {
    id: "STD02",
    name: "Sneha Shinde",
    age: 22,
    email: "sneha@gmail.com",
    contact: "9123456789",
    course: "React",
    isActive: true
  }
];




employees = [
  {
    empId: "EMP01",
    name: "Amit Sharma",
    department: "IT",
    designation: "Frontend Developer",
    salary: 45000
  },
  {
    empId: "EMP02",
    name: "Neha Verma",
    department: "HR",
    designation: "HR Executive",
    salary: 38000
  },
  {
    empId: "EMP03",
    name: "Rohit Mehta",
    department: "Finance",
    designation: "Accountant",
    salary: 42000
  },
  {
    empId: "EMP04",
    name: "Pooja Nair",
    department: "Marketing",
    designation: "Marketing Manager",
    salary: 50000
  },
  {
    empId: "EMP05",
    name: "Kunal Singh",
    department: "Sales",
    designation: "Sales Executive",
    salary: 36000
  }
];
products = [
  {
    productId: "P01",
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    inStock: true
  },
  {
    productId: "P02",
    name: "Mobile",
    category: "Electronics",
    price: 18000,
    inStock: false
  },
  {
    productId: "P03",
    name: "Headphones",
    category: "Accessories",
    price: 2500,
    inStock: true
  }
];
movies = [
  {
    movieId: "M01",
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    releaseYear: 2010
  },
  {
    movieId: "M02",
    title: "KGF",
    genre: "Action",
    rating: 8.2,
    releaseYear: 2022
  },
  {
    movieId: "M03",
    title: "3 Idiots",
    genre: "Drama",
    rating: 8.4,
    releaseYear: 2009
  }
];
orders = [
  {
    orderId: "O1001",
    customerName: "Rahul",
    totalAmount: 1200,
    status: "Delivered",
    paymentMode: "UPI"
  },
  {
    orderId: "O1002",
    customerName: "Sneha",
    totalAmount: 3400,
    status: "Pending",
    paymentMode: "Card"
  },
  {
    orderId: "O1003",
    customerName: "Amit",
    totalAmount: 799,
    status: "Cancelled",
    paymentMode: "COD"
  }
];

}
