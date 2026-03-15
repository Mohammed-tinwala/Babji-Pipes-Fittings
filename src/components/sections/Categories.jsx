import axios from "axios";
import { useEffect, useState } from "react";
import { Factory } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { Link } from "react-router-dom";

const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchCategories = async () => {

      try {

        const res = await axios.post(
          "https://babjibestpipes.com/mobileapis/fetchCategories.php"
        );

        if (res.data.status === true || res.data.status === 1) {
          setCategories(res.data.data);
        }

      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      }

      setLoading(false);

    };

    fetchCategories();

  }, []);



  return (
    <section id="categories" className="relative py-20 bg-black overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Factory className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Categories
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white font-normal mb-4">
              Our Product Categories
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Explore a carefully selected range of pipes, fittings, valves,
              and industrial products designed to meet oil field, marine,
              and industrial project requirements.
            </p>

          </div>
        </FadeIn>


        {/* ERROR MESSAGE */}
        {error && (
          <div className="text-center text-red-400 mb-8">
            {error}
          </div>
        )}


        {/* Categories Grid */}
        <FadeIn delay={120}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {loading

              /* ------------ SKELETON LOADER ------------ */

              ? [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 overflow-hidden"
                >

                  <div className="aspect-[4/3] skeleton"></div>

                  <div className="p-4 flex justify-center">
                    <div className="h-5 w-32 skeleton rounded"></div>
                  </div>

                </div>
              ))

              /* ------------ CATEGORY CARDS ------------ */

              : categories.map((cat, idx) => (

                <Link
                  to={`/category/${cat.id}`}
                  key={cat.id ?? idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                >

                  <div className="p-4 aspect-[4/3] w-full bg-white/5">

                    {cat.image && (
                      <img
                        src={cat.image}
                        alt={cat.label}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    )}

                  </div>

                  <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">

                    <div className="w-full text-center">

                      <div className="text-white text-lg font-semibold">
                        {cat.label}
                      </div>

                    </div>

                  </div>

                </Link>

              ))}

          </div>

        </FadeIn>

      </div>
    </section>
  );
};

export default Categories;