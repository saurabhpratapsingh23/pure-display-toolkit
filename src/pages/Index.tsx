import blog3 from "@/assets/blog-3.png";
import blogImage2 from "@/assets/blogImage-2.png";
import blogImage1 from "@/assets/blogImage-1.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center gap-8 py-12 px-4">
      <img src={blogImage1} alt="5 Screening Problems You Won't Find Without Testing" className="w-full max-w-4xl rounded-lg" />
      <img src={blogImage2} alt="How to Choose an AML Screening Vendor" className="w-full max-w-4xl rounded-lg" />
      <img src={blog3} alt="Integrating AML and KYC Screening Into Your CRM, ERP, or Business Platform" className="w-full max-w-4xl rounded-lg" />
    </div>
  );
};

export default Index;
