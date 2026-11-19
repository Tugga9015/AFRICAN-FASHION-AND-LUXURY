import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Collections from "./components/Collections";
import About from "./components/About";
import Booking from "./components/Booking";
import Newsletter from "./components/Newsletter";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId),
    );
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartClick={() => {
          setIsCartOpen(true);
        }}
        theme={theme}
        onThemeToggle={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      />

      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Collections onAddToCart={addToCart} />
        <Booking />
        <Newsletter />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {isCartOpen && (
        <div className="cart-panel">
          <h2>Your Shopping Bag</h2>

          <button onClick={() => setIsCartOpen(false)}>
            Close
          </button>

          {cartItems.length === 0 ? (
            <p>Your shopping bag is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}

              <h3>
                Total: &#8358;
                {cartItems
                  .reduce(
                    (total, item) =>
                      total +
                      Number(item.price.replace(/[₦,]/g, "")) *
                        item.quantity,
                    0,
                  )
                  .toLocaleString("en-NG")}
              </h3>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
