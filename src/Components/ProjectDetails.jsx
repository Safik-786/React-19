import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { productData } from "../Constants/product.data";

function ProjectDetails() {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = React.useState(null);

  const product = productData.find((p) => p.slug === slug);

  React.useEffect(() => {
    if (product?.images?.length) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div>
          {/* Main Image */}
          <div className="h-120 w-120 rounded-2xl  border-8 shadow border-white">
            <img
              src={activeImage}
              alt={product.title}
              className="object-cover h-full w-full rounded-lg shadow-md"     
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setActiveImage(img)}
                className={`h-20 w-20 object-cover rounded-lg border cursor-pointer transition 
                  ${
                    activeImage === img
                      ? "border-black scale-105"
                      : "border-gray-300 hover:border-black"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {product.title}
          </h1>

          <p className="text-gray-600">{product.description}</p>

          {/* Pricing */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-black">
              ${product.discountPrice}
            </span>
            <span className="text-gray-400 line-through">
              ${product.price}
            </span>
          </div>

          {/* Rating */}
          <div className="text-sm text-gray-600">
            ⭐ {product.rating} ({product.reviewsCount} reviews)
          </div>

          {/* Stock */}
          <div>
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">In Stock</span>
            ) : (
              <span className="text-red-500 font-medium">Out of Stock</span>
            )}
          </div>

          {/* Metadata */}
          <div className="text-sm text-gray-500 space-y-1">
            <p>
              Category: {product.category} / {product.subCategory}
            </p>
            <p>Brand: {product.brand}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;