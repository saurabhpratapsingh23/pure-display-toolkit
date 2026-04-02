import KYC2020Logo from "./KYC2020Logo";

const problems = [
  "Threshold Drift",
  "List Coverage Gaps",
  "Name Normalization Failures",
  "Adverse Media Filter Blind Spots",
  "Broken Case Management Handoff",
];

const BlogCard1 = () => {
  return (
    <div className="relative w-full max-w-4xl rounded-lg overflow-hidden bg-[#1A2332]">
      {/* Main content */}
      <div className="flex flex-col md:flex-row p-8 md:p-12 pb-6 gap-8">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <span className="inline-block self-start bg-[#E8781A] text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
            SCREENING VALIDATION
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-[#E8781A]">5 Screening Problems</span>{" "}
            You Won't Find Without Testing
          </h2>
          <p className="text-gray-400 text-sm">
            The failures that don't generate alerts. They generate silence.
          </p>
        </div>

        {/* Right side - numbered list */}
        <div className="flex flex-col gap-3 md:w-[320px]">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#1E2D3D] rounded-md px-4 py-3"
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-[#E8781A] text-white text-sm font-bold rounded">
                {index + 1}
              </span>
              <span className="text-white text-sm font-medium">{problem}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section with logos */}
      <div className="px-8 md:px-12 pb-6 flex items-center gap-4">
        <KYC2020Logo />
        <div className="w-px h-8 bg-gray-600" />
        <span className="text-gray-300 font-bold text-lg tracking-wider">
          CERTID
        </span>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0EA5E9] via-[#10B981] to-[#0EA5E9]" />
    </div>
  );
};

export default BlogCard1;
