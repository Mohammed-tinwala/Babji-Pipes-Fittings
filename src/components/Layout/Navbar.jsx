import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "../../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOppened, setIsMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [categories, setCategories] = useState([]);

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  const dropdownRef = useRef(null);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch categories API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.post(
          "https://babjibestpipes.com/mobileapis/fetchCategories.php"
        );

        if (res.data.status) {
          // console.log(res.data.data);
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMenuOpened(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setIsMenuOpened(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"}`}
      ref={dropdownRef}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="home"
              className="p-0"
            >
              <img
                src={COMPANY_INFO.logo}
                alt={`${COMPANY_INFO.name} logo`}
                className="h-14 object-contain"
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 relative">
            {NAV_LINKS.map((link) => (
              <div key={link.id} className="relative">
                <button
                  onClick={() =>
                    link.children
                      ? setOpenDropdown(
                        openDropdown === link.id ? null : link.id
                      )
                      : handleNavClick(link.id)
                  }
                  className={`flex items-center gap-1 text-base font-medium transition-all duration-300
                  ${activeSection === link.id ||
                      (location.pathname.startsWith("/category") && link.id === "products")
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}

                  {link.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300
                      ${openDropdown === link.id ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {link.children && openDropdown === link.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50">
                    <div className="bg-linear-to-r from-primary/20 via-primary/25 to-primary/40 border border-primary/20 backdrop-blur-xl rounded-xl shadow-2xl p-4 w-[760px]">
                      <ul className="grid grid-cols-3 gap-x-4 gap-y-1">
                        {link.id === "products"
                          ? categories.map((cat) => (
                            <li key={cat.id}>
                              <button
                                onClick={() =>
                                  handleCategoryClick(cat.id)
                                }
                                className="w-full text-left px-2 py-1.5 rounded-md text-xs text-white/70 hover:text-white hover:bg-white/10 transition"
                              >
                                {cat.category_name}
                              </button>
                            </li>
                          ))
                          : link.children.map((child) => (
                            <li key={child.id}>
                              <button
                                onClick={() => {
                                  handleNavClick(child.id);
                                  setOpenDropdown(null);
                                }}
                                className="w-full text-left px-2 py-1.5 rounded-md text-xs text-white/70 hover:text-white hover:bg-white/10 transition"
                              >
                                {child.label}
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-7 py-3.5 text-base font-medium text-[#212121] bg-white rounded-[17px] border border-white hover:border-white/90 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpened(!isMenuOppened)}
            className="md:hidden p-4 text-white hover:text-white/80 transition-colors duration-300"
          >
            {isMenuOppened ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOppened ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
          <nav className="space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.id}>
                <button
                  onClick={() =>
                    link.children
                      ? setOpenMobileDropdown(
                        openMobileDropdown === link.id ? null : link.id
                      )
                      : handleNavClick(link.id)
                  }
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5"
                >
                  {link.label}

                  {link.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openMobileDropdown === link.id ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>

                {/* Mobile dropdown */}
                {link.children && openMobileDropdown === link.id && (
                  <ul className="mt-2 ml-3 border-l border-white/10 pl-3 space-y-1">
                    {link.id === "products"
                      ? categories.map((cat) => (
                        <li key={cat.id}>
                          <button
                            onClick={() => handleCategoryClick(cat.id)}
                            className="block w-full text-left px-3 py-2 text-xs rounded-md text-white/60 hover:text-white hover:bg-white/10"
                          >
                            {cat.name}
                          </button>
                        </li>
                      ))
                      : link.children.map((child) => (
                        <li key={child.id}>
                          <button
                            onClick={() => handleNavClick(child.id)}
                            className="block w-full text-left px-3 py-2 text-xs rounded-md text-white/60 hover:text-white hover:bg-white/10"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full px-7 py-3.5 bg-white text-[#212121] rounded-[17px] border border-white hover:border-white/90 transition-all duration-300 text-base"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;