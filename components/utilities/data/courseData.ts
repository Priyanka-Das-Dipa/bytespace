export type Course = {
  id: number;
  title: string;
  author: string;
  image: string;
  categories: string[];
  rating: number;
  price: number;
};

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
] as const;

export const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "/images/course1.svg",
    categories: ["UI/UX Design", "Graphic Design", "Web Development"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "/images/course2.svg",
    categories: ["Digital Illustration", "Animation", "Graphic Design"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    image: "/images/course3.svg",
    categories: ["Data Science", "Web Development"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 4,
    title: "Balancing Productivity and Work",
    author: "purepearl studio",
    image: "/images/course4.svg",
    categories: ["Productivity", "Freelance & Entrepreneurship"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "purepearl studio",
    image: "/images/course5.svg",
    categories: ["Freelance & Entrepreneurship", "Marketing"],
    rating: 4.5,
    price: 25,
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image: "/images/course6.svg",
    categories: ["Marketing", "Creative Marketing", "Social Media"],
    rating: 4.5,
    price: 25,
  },
];
