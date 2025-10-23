import { useState, useEffect, useRef } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { FaStar, FaRegStar, FaGem } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { CtaButtonBlueRotating } from "../gadgets/ctaButtonBlueRotating";

type Review = {
  name: string;
  photo: string;
  rating: number;
  comment: string;
};

export const ReviewsCarousel = () => {
  const { t } = useTranslation();

  // obtener reviews desde i18n
  const reviewsObj = t("reviews.reviewsList", { returnObjects: true }) as Record<string, Review>;
  const reviews: Review[] = Object.values(reviewsObj);

  const visibleCards = 4;

  // duplicamos: [ ...ultimos, ...original, ...primeros ]
  const extendedReviews = [
    ...reviews.slice(-visibleCards),
    ...reviews,
    ...reviews.slice(0, visibleCards),
  ];

  const [current, setCurrent] = useState(visibleCards); // empezamos en el "original"
  const [isTransitioning, setIsTransitioning] = useState(true);

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    resetAutoplay();
  };

  // cuando terminen las transiciones, hacemos el salto invisible
  useEffect(() => {
    if (current === extendedReviews.length - visibleCards) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(visibleCards);
      }, 500); // mismo tiempo que transition
    } else if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(reviews.length);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [current, reviews.length, extendedReviews.length, visibleCards]);

  // --- drag and drop ---
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleStart = (clientX: number) => {
    startX.current = clientX;
    isDragging.current = true;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current || startX.current === null) return;
    const diff = clientX - startX.current;

    if (diff > 50) {
      prevSlide();
      isDragging.current = false;
    } else if (diff < -50) {
      nextSlide();
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
    startX.current = null;
    resetAutoplay();
  };

  return (
    <section id="reviews" className="py-16 select-none cursor-grab">
      <Container>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Title>{t("reviews.title")}</Title>
        </div>

        <div
          className="relative overflow-hidden mt-8"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-500" : ""}`}
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
            }}
          >
            {extendedReviews.map((review, index) => (
              <div
                key={index}
                className="px-4 flex justify-center"
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <div className="bg-white rounded-xl shadow-md p-6 max-w-sm text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg flex justify-center items-center gap-2">
                    {review.name} <FaGem className="text-blue-500" />
                  </h4>
                  <div className="flex justify-center my-2">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < review.rating ? (
                        <FaStar key={i} className="text-yellow-400" />
                      ) : (
                        <FaRegStar key={i} className="text-gray-300" />
                      )
                    )}
                  </div>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            ›
          </button>
        </div>
        <div className="flex justify-center pt-5">
                  <CtaButtonBlueRotating />
                </div>
      </Container>
    </section>
  );
};

export default ReviewsCarousel;
