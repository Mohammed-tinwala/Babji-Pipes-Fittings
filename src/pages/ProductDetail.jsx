import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FadeIn from "../components/animations/FadeIn";
import { Send } from "lucide-react";

const ProductDetail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    // FETCH PRODUCT
    useEffect(() => {

        const fetchProduct = async () => {
            try {

                const res = await axios.post(
                    "https://babjibestpipes.com/mobileapis/fetchProductById.php",
                    { product_id: id }
                );

                if (res.data.status === true || res.data.status === 1) {
                    setProduct(res.data.data);
                }

            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();

    }, [id]);



    // HANDLE INPUT CHANGE
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    // HANDLE FORM SUBMIT
    const handleSubmit = async (e) => {

        e.preventDefault();

        const { fullname, email, phone, subject, message } = formData;

        if (!fullname || !email || !phone || !subject || !message) {

            setStatus({
                type: "error",
                message: "Please fill in all required fields.",
            });

            return;
        }

        setLoading(true);

        try {

            const res = await axios.post(
                "https://babjibestpipes.com/mobileapis/addContactForm.php",
                {
                    name: fullname,
                    email: email,
                    phone: phone,
                    subject: subject,
                    message: message,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (res.data.status === true || res.data.status === 1) {

                setStatus({
                    type: "success",
                    message:
                        "Your enquiry has been submitted successfully. Our team will contact you shortly.",
                });

                setFormData({
                    fullname: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });

            } else {

                setStatus({
                    type: "error",
                    message: "Something went wrong. Please try again.",
                });

            }

        } catch (error) {

            console.error("Contact API error:", error);

            setStatus({
                type: "error",
                message: "Server error. Please try again later.",
            });

        }

        setLoading(false);

        setTimeout(() => {
            setStatus({ type: "", message: "" });
        }, 5000);
    };

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto py-28 px-4 animate-pulse">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* LEFT PRODUCT SKELETON */}
                    <div>
                        <div className="h-8 w-64 skeleton rounded mb-6"></div>

                        <div className="w-[80%] h-[350px] skeleton rounded-xl"></div>
                    </div>

                    {/* RIGHT FORM SKELETON */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6">

                        <div className="h-7 w-40 skeleton rounded mb-4"></div>

                        <div className="h-12 skeleton rounded-xl"></div>
                        <div className="h-12 skeleton rounded-xl"></div>
                        <div className="h-12 skeleton rounded-xl"></div>
                        <div className="h-12 skeleton rounded-xl"></div>

                        <div className="h-24 skeleton rounded-xl"></div>

                        <div className="h-12 w-full skeleton rounded-xl"></div>

                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-28 px-4">

            {/* Background Blur */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 opacity-20 rounded-full blur-3xl" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE PRODUCT */}
                <div>

                    <h1 className="text-3xl text-white mb-6">
                        {product.pro_name}
                    </h1>

                    {product.images?.length > 0 && (
                        <img
                            src={product.images[0].image}
                            alt={product.pro_name}
                            className="w-[80%] rounded-xl mb-6"
                        />
                    )}

                </div>



                {/* RIGHT SIDE ENQUIRY FORM */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">

                    <h2 className="text-2xl text-white mb-6">
                        Product Enquiry
                    </h2>

                    <FadeIn delay={100}>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Full Name */}
                            <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                                placeholder="Enter your full name"
                                required
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                                placeholder="your.email@example.com"
                                required
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                                placeholder="+91 XXXXX XXXXX"
                                required
                            />

                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                                placeholder="Product enquiry / Bulk order / Catalogue request"
                                required
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                                placeholder="Please mention product name, size, quantity, and delivery location"
                                required
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                            >

                                <span>
                                    {loading ? "Sending..." : "Send Enquiry"}
                                </span>

                                {!loading && (
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                )}

                            </button>

                            {/* STATUS MESSAGE */}
                            {status.message && (
                                <div
                                    className={`p-4 rounded-xl ${status.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                        </form>
                    </FadeIn>

                </div>

            </div>
        </div>
    );
};

export default ProductDetail;