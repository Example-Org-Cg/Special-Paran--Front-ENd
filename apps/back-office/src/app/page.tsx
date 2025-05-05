import Image from "next/image";

export async function getTours() {
  const res = await fetch("http://localhost:4000/products/public", {
    cache: "force-cache",
    next: {
      tags: ["tours"],
    },
  });

  return res.json();
}
export default async function Home() {
  const tours = await getTours();

  console.log("log tours", tours);

  return (
    <div className="flex mx-auto ">
      {tours &&
        tours?.products.map((tour: any) => (
          <div className="text-white text-6xl" key={tour.id}>
            {tour.name}
          </div>
        ))}
    </div>
  );
}
