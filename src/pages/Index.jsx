import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  const catBreeds = [
    { name: "Siamese", origin: "Thailand" },
    { name: "Maine Coon", origin: "United States" },
    { name: "Persian", origin: "Iran" },
    { name: "British Shorthair", origin: "United Kingdom" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-md mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Cat Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Independent nature</li>
                <li>Excellent hunters</li>
                <li>Flexible and agile bodies</li>
                <li>Keen senses, especially hearing and smell</li>
                <li>Communicate through vocalizations and body language</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Cat Breeds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {catBreeds.map((breed) => (
                  <li key={breed.name} className="flex justify-between">
                    <span>{breed.name}</span>
                    <span className="text-gray-500">{breed.origin}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
