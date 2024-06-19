import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { testApi, getAllProductsApi } from "../../apis/Api";
import ProductCard from "../../components/ProductCard";
const Homepage = () => {
  // 1. State for all fetched products
  const [products, setProducts] = useState([]); //array

  // 2. Call API initially (page load) - set all fetch products to state(1)
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        // response : res.data.products (all products)
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.ebayimg.com/images/g/VNwAAOSwu3lkuGJI/s-l1200.webp"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>15% off if you are wearing pink outfit</h5>
                <p>Valid till Tihar</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ebayimg.com/images/g/GtEAAOSw1W9eN1cY/s-l1600.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Free ticket if you bring gun with you</h5>
                <p>Note: Duplicate wont count</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.squarespace-cdn.com/content/v1/567064569cadb63cb308ddb1/1450208617048-6Z99SCNCDPDOLOVN6RO4/mad-max-fury-road-movie-posters.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>25% off till Tihar</h5>
                <p>Free popcorn</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <h2 className="mt-2">Now Showing</h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {/* g=gap, md= how much to fit in one row */}

          {products.map((singleProduct) => (
            <div class="col">
              <ProductCard productInformation={singleProduct} color={'green'} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Homepage;
