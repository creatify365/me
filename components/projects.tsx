import { Card } from "./ui/card";
export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-20 bg-secondary text-dark">
      <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p>Short description of the project.</p>
          </div>
        </Card>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
}
