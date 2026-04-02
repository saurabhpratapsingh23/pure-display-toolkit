import KYC2020Logo from "./KYC2020Logo";

const BlogCard2 = () => {
  return (
   <div className="relative w-full max-w-4xl min-h-[360px] flex flex-col justify-between rounded-lg overflow-hidden bg-[#1A2332]">
      <div className="absolute top-0 right-0 w-48 h-48 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#E8781A]">
          <polygon points="100,10 140,35 140,85 100,110 60,85 60,35" fill="none" stroke="currentColor" strokeWidth="1" />
          <polygon points="150,50 190,75 190,125 150,150 110,125 110,75" fill="none" stroke="currentColor" strokeWidth="1" />
          <polygon points="100,90 140,115 140,165 100,190 60,165 60,115" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative p-8 md:p-12 flex flex-col gap-6">
        {/* 2026 Guide badge */}
        <div className="self-end">
          <span className="border border-[#E8781A] text-[#E8781A] text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
            2026 GUIDE
          </span>
        </div>

  

        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-lg">
          How to Choose an{" "}
          <span className="text-[#E8781A]">AML Screening Vendor</span>
        </h2>

        {/* Subtitle */}
        {/* <p className="text-gray-400 text-sm max-w-lg">
          What to look for, what to test, and who to consider.{" "}
          <span className="text-white font-semibold">
            A guide for compliance teams evaluating screening providers.
          </span>
        </p> */}
      </div>

  <div className="absolute bottom-6 left-9 z-10">
  <KYC2020Logo />
</div>
      {/* Bottom gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0EA5E9] via-[#10B981] to-[#0EA5E9]" />
    </div>
  );
};

export default BlogCard2;
