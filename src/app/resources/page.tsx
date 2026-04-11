import FeaturedResource from "@/features/resources/FeaturedResource";
import ResourceGrid from "@/features/resources/ResourceGrid";
import ResourcesHeader from "@/features/resources/ResourcesHeader";
import ResourceSidebar from "@/features/resources/ResourceSidebar";

export const metadata = {
  title: "Intelligence & Resources | SuperNova Coaching Center",
  description:
    "Expert insights, exam strategies, and technical breakdowns for aspirants.",
};

export default function ResourcesPage() {
  return (
    <main className="flex-1 w-full bg-white flex flex-col min-h-screen">
      {/* Mobile & Desktop Header Component with Search */}

      <section className="py-12">
        <ResourcesHeader />
        <div className="container py-12 bg-white mx-auto px-4 md:px-6">
          {/* Top Featured Post (Only visible on larger screens normally, but we show it universally or styled responsively) */}
          <FeaturedResource />

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 lg:mt-0">
            {/* Main Content: Left Side */}
            <div className="lg:col-span-8">
              <ResourceGrid />
            </div>

            {/* Sidebar: Right Side */}
            <div className="lg:col-span-4">
              <ResourceSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
