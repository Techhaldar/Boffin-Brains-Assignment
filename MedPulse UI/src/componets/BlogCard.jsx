import { CalendarDays, MessageSquare } from "lucide-react";

const BlogCard = ({ image, date, comments, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt="Blog" className="w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <CalendarDays size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageSquare size={16} />
            <span>{comments} Comments</span>
          </div>
        </div>
        <h3 className="sm:text-sm text-xs text-left font-semibold mb-3">{title}</h3>
        <a href="#" className="text-sm font-semibold text-black hover:underline flex items-center">
          Read More <span className="ml-1">+</span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
