import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="mb-6">
        <Image
          src="/illustration.svg"
          alt="Neighborhood illustration"
          width={320}
          height={200}
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Welcome to NeighborFit
      </h1>
      <p className="mb-6 text-lg text-gray-600 max-w-xl">
        Find your perfect neighborhood match based on your lifestyle
        preferences. We use real-world data and smart algorithms to help you
        discover the best places to live.
      </p>
      <Link
        href="/survey"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Start Survey
      </Link>
    </section>
  );
}
