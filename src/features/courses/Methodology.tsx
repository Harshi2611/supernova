import test1 from "@/assets/test1.svg";
import test2 from "@/assets/test2.svg";
import test3 from "@/assets/test3.svg";
import test4 from "@/assets/test4.svg";
import Image from "next/image";

export default function Methodology() {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-slate-300 flex-grow max-w-[80px]"></div>
          <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider font-heading">
            Our Scientific Methodology
          </h2>
        </div>

        {/* The Stellar Progress Test Series */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-16 border border-slate-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-heading mb-4">
              The Stellar Progress Test Series
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A gamified multi-tiered assessment system designed to push
              boundaries and track evolution from foundational concepts to
              competitive mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Level 1 */}
            <Image
              src={test1}
              alt="ss"
              width={200}
              height={55}
              className="object-contain"
              priority
              unoptimized
            />
            <Image
              src={test2}
              alt="ss"
              width={200}
              height={55}
              className="object-contain"
              priority
              unoptimized
            />
            <Image
              src={test3}
              alt="ss"
              width={200}
              height={55}
              className="object-contain"
              priority
              unoptimized
            />
            <Image
              src={test4}
              alt="ss"
              width={200}
              height={55}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple icons to keep it self-contained instead of finding external ones
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2l2.4 7.6 7.6 2.4-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
    </svg>
  );
}
function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2s4 4 4 9c0 5-4 9-4 9s-4-4-4-9c0-5 4-9 4-9z" />
      <path
        d="M12 10s2 2 2 4.5c0 2.5-2 4.5-2 4.5s-2-2-2-4.5c0-2.5 2-4.5 2-4.5z"
        fill="white"
      />
    </svg>
  );
}
function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4.18 10.3l-1.92 5.76-2.26-2.26-2.26 2.26-1.92-5.76c.49.25 1.05.41 1.63.46l.28 3.51 2.27-2.27 2.27 2.27.28-3.51c.58-.05 1.13-.21 1.63-.46z" />
    </svg>
  );
}
