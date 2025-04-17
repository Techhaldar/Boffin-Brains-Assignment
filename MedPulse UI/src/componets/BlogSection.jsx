import BlogCard from "./BlogCard";

const blogData = [
   {
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4XdJGyg9tV7sZUeZkCaZZbq5boWzoz7d2zaPlu8wNJ6KJ49vl",
      date: "24th March 2023",
      comments: 3,
      title: "Cras accumsan nulla nec lacus ultricies placerat.",
   },
   {
      image: "https://img.freepik.com/premium-photo/bearded-doctor-examining-lungs-patient_23-2147896887.jpg?w=360",
      date: "24th March 2023",
      comments: 3,
      title: "Dras accumsan nulla nec lacus ultricies placerat.",
   },
   {
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZLHv4Vv5UbAfahPaQegEwLTUzKvDjs-PqALYmjql9XEtAJQRj",
      date: "24th March 2023",
      comments: 3,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
   },
];

const BlogSection = () => {
   return (
      <section id="Blog" className="py-14 pt-4 bg-white text-center max-w-7xl mx-auto">
         <h4 className="text-blue-600 font-semibold uppercase text-sm mb-2">Our Blog</h4>
         <h2 className="text-3xl md:text-4xl font-bold mb-10">Latest Blog & News</h2>
         <div className="grid gap-6 md:grid-cols-3 px-6 md:px-16">
            {blogData.map((blog, index) => (
               <BlogCard key={index} {...blog} />
            ))}
         </div>
      </section>
   );
};

export default BlogSection;
