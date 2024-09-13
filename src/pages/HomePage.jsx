import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import styles from "./Homepage.module.css";

// Dynamically import all images
const importImages = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg}");

const HomePage = ({ setDarkMode, darkMode }) => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for image name search
  const [category, setCategory] = useState(""); // State for category filter

  const categories = [
    ...new Set(Object.keys(importImages).map((path) => path.split("/")[3])),
  ];

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = [];
      for (const [path, resolver] of Object.entries(importImages)) {
        const module = await resolver();
        const fileNameWithExtension = path.split("/").pop(); // Get the full file name with extension
        const fileName = fileNameWithExtension.split(".")[0]; // Get the file name without extension
        const folderName = path.split("/")[3]; // Get the category/folder name
        loadedImages.push({
          src: module.default,
          name: fileName,
          fileNameWithExtension, // Add the full file name with extension
          category: folderName,
        });
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  // Filter images based on search and category
  const filteredImages = images.filter((image) => {
    const matchesName = image.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "" || image.category === category;
    return matchesName && matchesCategory;
  });

  return (
    <div className={`${darkMode ? styles.homePage : ""}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

      <div
        className={`${styles.search} d-flex justify-content-center align-items-center mt-3`}
      >
        {/* Input for searching by name */}
        <input
          type="text"
          placeholder="Search by image name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`form-control m-2 ${styles.input}`}
          style={{ width: "200px" }}
        />
        {/* Select for filtering by category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`form-control m-2 ${styles.input}`}
          style={{ width: "200px" }}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Display images or spinner */}
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 pb-5">
        {images.length === 0 ? (
          <div className=" mt-5 p-5">
            {" "}
            <Spinner />{" "}
          </div>
        ) : (
          filteredImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.imageContainer} d-flex flex-column justify-content-center align-items-center`}
            >
              {/* Anchor tag with download attribute */}
              <a href={image.src} download={image.fileNameWithExtension}>
                <img
                  src={image.src}
                  alt={image.name}
                  className={`${styles.pic} ${
                    darkMode ? styles.picDarkMode : styles.picLightMode
                  }`}
                  style={{ cursor: "pointer" }} // Change cursor to pointer to indicate clickable
                />
              </a>
              <h1 className={styles.imageName}>{image.name}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;