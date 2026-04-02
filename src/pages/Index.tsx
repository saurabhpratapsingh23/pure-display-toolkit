import BlogCard1 from "@/components/BlogCard1";
import BlogCard2 from "@/components/BlogCard2";
import BlogCard3 from "@/components/BlogCard3";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center gap-8 py-12 px-4">
      <BlogCard1 />
      <BlogCard2 />
      <BlogCard3 />
    </div>
  );
};

export default Index;
