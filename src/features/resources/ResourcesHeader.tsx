import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ResourcesHeader() {
  return (
    <div className="w-full bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-2">
          The Knowledge Hub
        </h1>
        <p className="text-slate-600 mb-8 max-w-2xl font-sans">
          Expert insights for your academic journey. Explore our curated
          intelligence.
        </p>

        <div className="max-w-2xl">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              type="text"
              placeholder="Search resources, articles..."
              className="pl-12 py-6 text-base bg-white border-slate-300 shadow-sm rounded-xl focus-visible:ring-primary h-auto"
            />
          </div>

          <div className="flex overflow-x-auto pb-2 scrollbar-hide space-x-3">
            <Button className="rounded-md px-6 whitespace-nowrap bg-primary text-white hover:bg-primary/90 font-semibold shadow-sm">
              All Resources
            </Button>
            <Button
              variant="outline"
              className="rounded-md px-6 whitespace-nowrap border-slate-300 text-slate-700 bg-white hover:bg-slate-100 font-semibold"
            >
              Exam Prep
            </Button>
            <Button
              variant="outline"
              className="rounded-md px-6 whitespace-nowrap border-slate-300 text-slate-700 bg-white hover:bg-slate-100 font-semibold"
            >
              Study Tips
            </Button>
            <Button
              variant="outline"
              className="rounded-md px-6 whitespace-nowrap border-slate-300 text-slate-700 bg-white hover:bg-slate-100 font-semibold"
            >
              College Admissions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
