import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryProductPage = () => {

  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.post(
          "https://babjibestpipes.com/mobileapis/fetchProducts.php",
          {
            category_id: id,
          }
        );

        if (res.data.status) {
          setProducts(res.data.data);
        }

      } catch (error) {
        console.error("Error fetching products:", error);
      }

      setLoading(false);

    };

    fetchProducts();

  }, [id]);



  /* ---------------- SKELETON LOADER ---------------- */

  if (loading) {
    return (
      <section className="py-28 bg-black min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">

            {[...Array(6)].map((_, i) => (

              <div
                key={i}
                className="border border-white/10 rounded-xl p-6"
              >

                <div className="w-full h-52 skeleton rounded mb-4"></div>

                <div className="h-6 w-3/4 skeleton rounded"></div>

              </div>

            ))}

          </div>

        </div>

      </section>
    );
  }



  /* ---------------- PRODUCT GRID ---------------- */

  return (
    <section className="py-28 bg-black min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {products.map((product) => (

            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="border border-white/10 rounded-xl p-6 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
            >

              {product.images?.length > 0 && (
                <img
                  src={product.images[0].image}
                  alt={product.pro_name}
                  loading="lazy"
                  className="w-full h-52 object-contain mb-4"
                />
              )}

              <h3 className="text-white text-lg">
                {product.pro_name}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CategoryProductPage;