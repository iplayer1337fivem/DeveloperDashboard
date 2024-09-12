import Navbar from "../components/Navbar";
import styles from "./About.module.css";
function About({ setDarkMode, darkMode }) {
  return (
    <div className={`${darkMode ? styles.about : ""}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className={styles.aboutSection}>
        <div
          className={`${darkMode ? styles.bgDark : styles.bgLight} ${
            styles.aboutSectionContent
          }`}
        >
          <h1 className="text-center mt-1">About Us</h1>

          <h4>Our Concept</h4>
          <p>
            Welcome to the Free Gallery website, a platform designed to provide
            access to a diverse range of visual content for free. Our gallery
            features a wide array of images, artwork, and other visual resources
            that can be used for personal or commercial projects without any
            cost.
          </p>
          <p>
            Our goal is to make high-quality visual content accessible to
            everyone, whether you're a designer, content creator, or simply
            someone looking for inspiration. We believe that creativity should
            not be limited by financial constraints, and we're committed to
            supporting the creative community by offering a free and open
            gallery of resources.
          </p>

          <h4>Our Mission</h4>
          <p>
            Our mission is to democratize access to visual content and foster
            creativity by providing a platform where users can easily find and
            use high-quality images and artworks. We strive to continuously
            expand our collection and improve our services to meet the needs of
            our users.
          </p>

          <h4>How It Works</h4>
          <p>
            Using our gallery is simple. Browse through our collection of images
            and artworks, download the ones you like, and use them in your
            projects. No registration is required, and there are no hidden fees.
            Just find what you need and get started!
          </p>

          <h4>Contact Us</h4>
          <p>
            If you have any questions or feedback, feel free to reach out to us
            at <span className={styles.colorBlue}>[support email address]</span>. We value your input and are always
            looking for ways to improve our service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
