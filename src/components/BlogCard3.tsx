import KYC2020Logo from "./KYC2020Logo";

const integrationNodes = [
  { label: "CRM", detail: "Salesforce · Zoho · HubSpot", color: "#10B981" },
  { label: "ERP", detail: "SAP · NetSuite · Sage", color: "#8B5CF6" },
  { label: "PAY", detail: "Payment Processors · MSBs · Crypto Platforms", color: "#E8781A" },
  { label: "API", detail: "Internal Systems · Custom Platforms · Proprietary Tools", color: "#6B7280" },
];

const BlogCard3 = () => {
  return (
    <div className="relative w-full max-w-4xl rounded-lg overflow-hidden bg-[#F8FAFB]">
      <div className="flex flex-col md:flex-row p-8 md:p-12 gap-8">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <span className="inline-block self-start bg-[#10B981] text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
            API INTEGRATION
          </span>
          <h2 className="text-[#1A2332] text-3xl md:text-4xl font-bold leading-tight">
            Integrating{" "}
            <span className="text-[#E8781A]">AML and KYC Screening</span>{" "}
            Into Your CRM, ERP, or Business Platform
          </h2>
          <p className="text-gray-500 text-sm">
            Connect screening directly to the systems your business already runs
            on. Salesforce, Zoho, SAP, and more.
          </p>
        </div>

        {/* Right side - integration nodes */}
        <div className="flex flex-col items-center gap-4 md:w-[340px] relative">
          {integrationNodes.slice(0, 2).map((node, index) => (
            <div key={index} className="flex items-center gap-3 bg-white rounded-lg shadow-sm px-4 py-3 w-full max-w-[300px]">
              <span
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white text-[10px] font-bold rounded-full"
                style={{ backgroundColor: node.color }}
              >
                {node.label}
              </span>
              <span className="text-[#1A2332] text-sm font-medium">{node.detail}</span>
            </div>
          ))}

          {/* KYC2020 API Platform node */}
          <div className="border-2 border-[#10B981] rounded-lg px-4 py-2">
            <span className="text-[#10B981] text-sm font-semibold">KYC2020 API Platform</span>
          </div>

          {integrationNodes.slice(2).map((node, index) => (
            <div key={index} className="flex items-center gap-3 bg-white rounded-lg shadow-sm px-4 py-3 w-full max-w-[300px]">
              <span
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white text-[10px] font-bold rounded-full"
                style={{ backgroundColor: node.color }}
              >
                {node.label}
              </span>
              <span className="text-[#1A2332] text-sm font-medium">{node.detail}</span>
            </div>
          ))}

          {/* Connecting lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="#10B981" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Bottom section with logo */}
      <div className="px-8 md:px-12 pb-6">
        <KYC2020Logo />
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0EA5E9] via-[#10B981] to-[#0EA5E9]" />
    </div>
  );
};

export default BlogCard3;
