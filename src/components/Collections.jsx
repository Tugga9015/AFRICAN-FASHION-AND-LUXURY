import { useState } from "react";
import "./Collections.css";

const products = [
  {
    id: 1,
    name: "Ankara",
    description:
      "A beautiful African print outfit celebrating vibrant patterns and traditional style.",
    price: "₦45,000",
    category: "Clothes",
    image: "/images/Ankara.png",
  },
  {
    id: 2,
    name: "Classic Agbada",
    description:
      "A stylish traditional outfit designed for special occasions and elegant appearances.",
    price: "₦65,000",
    category: "Clothes",
    image: "/images/Classic Agbada.png",
  },
  {
    id: 3,
    name: "Modern Kaftan",
    description:
      "A comfortable and elegant kaftan that combines modern fashion with African style.",
    price: "₦38,000",
    category: "Clothes",
    image: "/images/kaftan.png",
  },
  {
    id: 4,
    name: "African Print Dress",
    description:
      "A fashionable dress featuring colourful African-inspired prints and patterns.",
    price: "₦32,000",
    category: "Clothes",
    image: "/images/African_Print_dress.png",
  },
  {
    id: 5,
    name: "Embroidered Native Set",
    description:
      "A refined native outfit featuring decorative embroidery and traditional details.",
    price: "₦55,000",
    category: "Clothes",
    image: "/images/EmbroidedNativeSet.png",
  },
  {
    id: 6,
    name: "Senator Wear",
    description:
      "A classic senator outfit offering a smart and sophisticated traditional look.",
    price: "₦50,000",
    category: "Clothes",
    image: "/images/Senator Wear.png",
  },
  {
    id: 7,
    name: "Heritage Bracelet",
    description:
      "A decorative bracelet inspired by African fashion and cultural accessories.",
    price: "₦12,000",
    category: "Accessories",
    image: "/images/Breceletes.png",
  },
  {
    id: 8,
    name: "African Beaded Necklace",
    description:
      "A beautiful beaded necklace that adds a distinctive touch to traditional outfits.",
    price: "₦18,000",
    category: "Accessories",
    image: "/images/AfricanBeadedNecklace.png",
  },
  {
    id: 9,
    name: "Traditional Cap",
    description:
      "A classic traditional cap that completes an elegant African outfit.",
    price: "₦15,000",
    category: "Accessories",
    image: "/images/Traditional_Caps.png",
  },
];

function Collections({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const displayedProducts =
    showAll || searchTerm.trim() !== ""
      ? filteredProducts
      : filteredProducts.slice(0, 3);

  return (
    <section id="shop" className="collections-section">
      <div className="section-heading">
        <p>DISCOVER OUR STYLE</p>
        <h2>Our Collections</h2>
      </div>

      <input
        type="text"
        placeholder="Search collections..."
        aria-label="Search products by name"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="product-search"
      />

      <div className="category-filters">
        {["All", "Clothes", "Accessories"].map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? "active-filter" : ""}
            aria-pressed={selectedCategory === category}
            onClick={() => {
              setSelectedCategory(category);
              setShowAll(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {displayedProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <h3>{product.name}</h3>

              <p className="product-description">{product.description}</p>

              <p>{product.price}</p>

              <button type="button" onClick={() => onAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">No products found. Try another search.</p>
      )}

      {filteredProducts.length > 3 && searchTerm.trim() === "" && (
        <button
          type="button"
          className="show-more-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}

export default Collections;
