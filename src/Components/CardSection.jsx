import React, { useRef, useState, useEffect } from "react";


import { useProductContext } from  "../Context/CardContext";

const CardSection = () => {  
    
    // Active card maintaining
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    // Function to get the index of the active subcategory
    const getActiveIndex = () => {
      return uniqueSubCategories.findIndex(
        (subCategory) => subCategory === activeSubCategory
      );
    };
  
    const activeCardRef = useRef(null);
  
    // Context value
    const { Products, mobile, category, setProducts, generateUniqueSubCategories } = useProductContext();
  
    const uniqueSubCategories = generateUniqueSubCategories();

    const MembersCards = {
        DURGADASS24: "20-24 DURGADASS V C.webp",
        MAHENDRAPRABU24: "20-24 MAHENDRA PRABU T.webp",
        MOHAMEDASRAF24: "20-24 MOHAMED ASRAF M.webp",
        SHRIMATHI24: "20-24 SHRIMATHI C M.webp",
        SIFAS24: "20-24 SIFAS S.webp",
        SRIRAM24: "20-24 SRIRAM S.webp",
    };

     // carousel Arrow
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState({
    isStart: true,
    isEnd: false,
  });

  // carousel arrow
  const handleArrowClick = (direction) => {
    const carousel = carouselRef.current;

    if (carousel) {
      const { clientWidth, scrollWidth } = carousel;
      const distancePercentage = 0.1; // 10% of the total width
      const distance =
        direction === "left"
          ? -distancePercentage * scrollWidth
          : distancePercentage * scrollWidth;

      const newPosition = carousel.scrollLeft + distance;

      carousel.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  // carousel arrow
  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        const isEnd = scrollLeft + clientWidth >= scrollWidth;
        const isStart = scrollLeft === 0;

        setScrollPosition({ isStart, isEnd });
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (activeCardRef.current) {
      activeCardRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [activeSubCategory]);


  return (
    <div>
      
      <div
            ref={carouselRef}
            id="carousel"
            className="flex gap-0 lg:gap-2 w-fit p-2 bg-transparent rounded-sm overflow-x-scroll overflow-y-hidden text-black dark:text-white"
          >
            {/* <div className="inline-block min-w-28" /> */}
            {uniqueSubCategories.map((subCategory) => (
              <CategoryCarouselCard
                key={subCategory}
                subCategory={subCategory}
                image={MembersCards[subCategory]}
                setActiveSubCategory={setActiveSubCategory}
                activeCardRef={activeCardRef}
              />
            ))}
            {/* <div className="inline-block min-w-28" /> */}
          </div>
    </div>
  )
}

export default CardSection
