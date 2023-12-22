import React, { createContext, useContext, useState, useEffect } from "react";
import ProductsData from "../../public/Data/Products.json";

const ProductContext = createContext();

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    console.log("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [brand, setBrand] = useState("gscaltax");
  const [category, setCategory] = useState("all");
  const [mobile, setMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [Products, setProducts] = useState([]); 
  const [currentProduct, setCurrentProduct] = useState({}); 
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    const openCard = () => {
      setIsCardOpen(true);
    };

    const closeCard = () => {
      setIsCardOpen(false);
    };

  const checkScreenWidth = () => {
    if (window.innerWidth < 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const generateUniqueSubCategories = () => {
    if (category === "all") {
      return [
        "all",
        ...new Set(Products.map((product) => product.subCategory)),
      ];
    } else {
      const filteredProducts = Products.filter(
        (product) => product.category === category
      );
      return [
        "all",
        ...new Set(filteredProducts.map((product) => product.subCategory)),
      ];
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    setProducts(ProductsData);
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const contextValue = {
    Products,
    brand,
    setBrand,
    category,
    setCategory,
    mobile,
    isModalOpen,
    openModal,
    closeModal,
    isCardOpen,
    openCard,
    closeCard,
    selectedSubCategory,
    setSelectedSubCategory,
    generateUniqueSubCategories,
    currentProduct,
    setCurrentProduct,
    searchQuery,
    setSearchQuery,
    handleScrollToTop,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};