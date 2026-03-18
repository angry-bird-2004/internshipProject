import React from "react";
// Image Imports
import Banner from "./assets/Image/backgrounds/Banner.png";
import Watch from "./assets/Image/tech/Watch.png";
import Laptop from "./assets/Image/tech/Laptop.png";
import Camera from "./assets/Image/tech/Camera.png";
import headPhone from "./assets/Image/tech/headPhone.png";
import phone1 from "./assets/Image/tech/phone1.png";

import img1 from "./assets/Layout/alibaba/Image/cloth/img 1.png";
import img2 from "./assets/Layout/alibaba/Image/cloth/img 2.png";
import img3 from "./assets/Layout/alibaba/Image/cloth/img 3.png";
import img4 from "./assets/Layout/alibaba/Image/cloth/img 4.png";
import img5 from "./assets/Layout/alibaba/Image/cloth/img 5.png";
import img6 from "./assets/Layout/alibaba/Image/cloth/img 6.png";
import img7 from "./assets/Layout/alibaba/Image/tech/img 7.png";
import img8 from "./assets/Layout/alibaba/Image/cloth/img 5.png";
import img9 from "./assets/Layout/alibaba/Image/interior/img 9.png";
import img10 from "./assets/Layout/alibaba/Image/tech/img 10.png";

import homebg from "./assets/Image/backgrounds/homebg.png";
import techbg from "./assets/Image/backgrounds/techbg.png";
import inqureybg from "./assets/Image/backgrounds/inqureyBg.png";

// --- Sub-Components ---

const Navbar = () => (
  <nav style={{ background: "#fff", borderBottom: "1px solid #dee2e7" }}>
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "15px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#0D6EFD" }}>
          Brand
        </div>
        <div
          style={{
            display: "flex",
            border: "2px solid #0D6EFD",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{ padding: "8px 15px", border: "none", width: "300px" }}
          />
          <select
            style={{
              border: "none",
              borderLeft: "1px solid #dee2e7",
              padding: "0 10px",
            }}
          >
            <option>All category</option>
          </select>
          <button
            style={{
              background: "#0D6EFD",
              color: "#fff",
              border: "none",
              padding: "0 20px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          color: "#8b96a5",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        <div>Profile</div>
        <div>Message</div>
        <div>Orders</div>
        <div>My cart</div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section
    style={{
      display: "grid",
      gridTemplateColumns: "240px 1fr 200px",
      gap: "20px",
      padding: "20px 0",
    }}
  >
    <ul
      style={{
        background: "#fff",
        listStyle: "none",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #dee2e7",
        margin: 0,
      }}
    >
      {[
        "Automobiles",
        "Clothes and wear",
        "Home interiors",
        "Computer and tech",
        "Tools, equipments",
        "Sports and outdoor",
        "Animal and pets",
        "Machinery tools",
        "More category",
      ].map((item) => (
        <li
          key={item}
          style={{ padding: "10px", cursor: "pointer", borderRadius: "4px" }}
        >
          {item}
        </li>
      ))}
    </ul>
    <div
      style={{
        background: `#E3F0FF url(${Banner}) no-repeat center center`,
        backgroundSize: "cover",
        borderRadius: "6px",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "300px",
      }}
    >
      <h3 style={{ margin: 0 }}>Latest trending</h3>
      <h1 style={{ fontSize: "32px", margin: "10px 0" }}>Electronic items</h1>
      <button
        style={{
          width: "fit-content",
          padding: "10px 20px",
          background: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Learn more
      </button>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          background: "#E3F0FF",
          padding: "15px",
          borderRadius: "6px",
          textAlign: "center",
        }}
      >
        <p>Hi, user let's get started</p>
        <button
          style={{
            background: "#0D6EFD",
            color: "#fff",
            border: "none",
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            marginBottom: "5px",
            cursor: "pointer",
          }}
        >
          Join now
        </button>
        <button
          style={{
            background: "#fff",
            color: "#0D6EFD",
            border: "1px solid #dee2e7",
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Log in
        </button>
      </div>
      <div
        style={{
          background: "#F38332",
          color: "#fff",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
        Get US $10 off with a new supplier
      </div>
      <div
        style={{
          background: "#55BDAD",
          color: "#fff",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
        Send quotes with supplier preferences
      </div>
    </div>
  </section>
);

const CategorySection = ({ title, bg, items }) => (
  <div
    style={{
      display: "flex",
      background: "#fff",
      border: "1px solid #dee2e7",
      borderRadius: "6px",
      overflow: "hidden",
      marginBottom: "20px",
    }}
  >
    <div
      style={{
        width: "280px",
        padding: "20px",
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <h4 style={{ maxWidth: "150px" }}>{title}</h4>
      <button
        style={{
          background: "#fff",
          border: "none",
          padding: "8px 15px",
          borderRadius: "6px",
          marginTop: "15px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Source now
      </button>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        flexGrow: 1,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderLeft: "1px solid #dee2e7",
            borderBottom: i < 4 ? "1px solid #dee2e7" : "none",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ margin: 0, fontSize: "14px" }}>{item.name}</p>
            <small style={{ color: "#8b96a5" }}>From USD {item.price}</small>
          </div>
          <img
            src={item.img}
            alt=""
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
              alignSelf: "flex-end",
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  // Dummy data for category grids
  const homeItems = [
    { name: "Soft chairs", price: "19", img: img1 },
    { name: "Sofa & chair", price: "19", img: img2 },
    { name: "Kitchen dishes", price: "19", img: img3 },
    { name: "Smart watches", price: "19", img: img4 },
    { name: "Kitchen mixer", price: "100", img: img5 },
    { name: "Blenders", price: "39", img: img6 },
    { name: "Home appliance", price: "19", img: img1 }, // Re-using img1
    { name: "Coffee maker", price: "10", img: img2 }, // Re-using img2
  ];
  const techItems = [
    { name: "Smart watches", price: "19", img: Watch },
    { name: "Laptops", price: "19", img: Laptop },
    { name: "GoPro cameras", price: "19", img: Camera },
    { name: "Headphones", price: "19", img: headPhone },
    { name: "Canon phones", price: "19", img: phone1 },
    { name: "Smart watches", price: "19", img: Watch },
    { name: "Laptops", price: "19", img: Laptop },
    { name: "GoPro cameras", price: "19", img: Camera },
  ];

  return (
    <div
      style={{
        backgroundColor: "#F7FAFC",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <Navbar />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* <Hero /> */}

        {/* Flash Deals */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #dee2e7",
            borderRadius: "6px",
            display: "flex",
            marginBottom: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "250px",
              padding: "20px",
              borderRight: "1px solid #dee2e7",
            }}
          >
            <h4 style={{ margin: "0 0 5px 0" }}>Deals and offers</h4>
            <p style={{ color: "#8b96a5", margin: 0 }}>Hygiene equipments</p>
            <div style={{ display: "flex", gap: "5px", marginTop: "15px" }}>
              {["04", "13", "34", "56"].map((time, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#606060",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "4px",
                    textAlign: "center",
                    width: "45px",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>{time}</div>
                  <div style={{ fontSize: "10px" }}>
                    {["Days", "Hour", "Min", "Sec"][idx]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
            }}
          >
            {[
              { name: "Smart watch", discount: "-25%", img: Watch },
              { name: "Laptops", discount: "-15%", img: Laptop },
              { name: "GoPro cameras", discount: "-40%", img: Camera },
              { name: "Headphones", discount: "-25%", img: headPhone },
              { name: "Canon phones", discount: "-25%", img: phone1 },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  padding: "20px",
                  textAlign: "center",
                  borderRight: index !== 4 ? "1px solid #dee2e7" : "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  style={{
                    height: "80px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
                <p style={{ fontSize: "14px", margin: "0 0 10px 0" }}>
                  {item.name}
                </p>
                <span
                  style={{
                    background: "#FFE3E3",
                    color: "#EB001B",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {item.discount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <CategorySection
          title="Home and outdoor"
          bg={homebg}
          items={homeItems}
        />
        <CategorySection
          title="Consumer electronics"
          bg={techbg}
          items={techItems}
        />

        {/* Inquiry Section (Using your logic) */}
        <section
          style={{
            background: `linear-gradient(rgba(0, 103, 255, 0.7), rgba(0, 103, 255, 0.7)), url(${inqureybg}) no-repeat center center`,
            backgroundSize: "cover",
            borderRadius: "6px",
            padding: "40px 60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "400px",
            marginBottom: "30px",
            color: "#fff",
          }}
        >
          <div style={{ maxWidth: "440px" }}>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "15px",
                fontWeight: "bold",
              }}
            >
              An easy way to send requests to all suppliers
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "6px",
              width: "440px",
              color: "#1C1C1C",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "20px" }}>
              Send quote to suppliers
            </h3>
            <input
              type="text"
              placeholder="What item you need?"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #dee2e7",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
            />
            <textarea
              placeholder="Type more details"
              style={{
                width: "100%",
                padding: "10px",
                height: "80px",
                marginBottom: "15px",
                border: "1px solid #dee2e7",
                borderRadius: "6px",
                boxSizing: "border-box",
                resize: "none",
              }}
            />
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <input
                type="number"
                placeholder="Quantity"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #dee2e7",
                  borderRadius: "6px",
                }}
              />
              <select
                style={{
                  padding: "10px",
                  border: "1px solid #dee2e7",
                  borderRadius: "6px",
                }}
              >
                <option>Pcs</option>
              </select>
            </div>
            <button
              style={{
                background: "#0D6EFD",
                color: "#fff",
                border: "none",
                padding: "12px 25px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send inquiry
            </button>
          </div>
        </section>

        {/* Recommended Items */}
        <section style={{ marginBottom: "40px" }}>
          <h3>Recommended items</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "20px",
            }}
          >
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
              (img, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid #dee2e7",
                    borderRadius: "6px",
                    padding: "15px",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      height: "150px",
                      width: "100%",
                      objectFit: "contain",
                      marginBottom: "15px",
                    }}
                  />
                  <p style={{ fontWeight: "bold", margin: "0 0 5px 0" }}>
                    $10.30
                  </p>
                  <p style={{ color: "#8b96a5", fontSize: "14px", margin: 0 }}>
                    T-shirts for men
                  </p>
                </div>
              ),
            )}
          </div>
        </section>

        {/* Region Section */}
        <section style={{ paddingBottom: "50px" }}>
          <h3>Suppliers by region</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "15px",
            }}
          >
            {[
              "Arabic Emirates",
              "Australia",
              "United States",
              "Russia",
              "Italy",
              "Denmark",
              "France",
              "China",
              "Great Britain",
            ].map((region) => (
              <div key={region} style={{ fontSize: "14px" }}>
                <strong>{region}</strong> <br />{" "}
                <span style={{ color: "#8b96a5" }}>shopname.ae</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer
        style={{
          background: "#fff",
          padding: "40px 0",
          borderTop: "1px solid #dee2e7",
          textAlign: "center",
        }}
      >
        <h3>Subscribe on our newsletter</h3>
        <p style={{ color: "#8b96a5" }}>
          Get daily news on upcoming offers from many suppliers
        </p>
        <div style={{ marginTop: "20px" }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              border: "1px solid #dee2e7",
              borderRadius: "6px 0 0 6px",
              width: "250px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              background: "#0D6EFD",
              color: "#fff",
              border: "none",
              borderRadius: "0 6px 6px 0",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </footer>
    </div>
  );
}
