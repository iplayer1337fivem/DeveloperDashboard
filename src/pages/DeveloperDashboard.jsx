import Navbar from "../components/Navbar";
import styles from "./DeveloperDashboard.module.css";
import { Link } from "react-router-dom";

function DeveloperDashboard({ setDarkMode, darkMode }) {
  return (
    <div className={`${darkMode ? styles.developerDashboard : ""}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

      <div className="d-flex flex-row justify-content-center  align-items-center mt-5 pb-5">
        <div className={styles.developerDashboardContainer}>
          {/* Card 1 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="fivem_social_logo.png"
                alt="Fivem Social - explore the mastodon features free"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://fivem.social/" className={styles.link}>
                FIVEM.SOCIAL
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="cfx_re_logo.png" alt="Fivem Forum - the holy place" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://forum.cfx.re/" className={styles.link}>
                FIVEM.FORUM
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="pepsscripts_logo.png" alt="Vehicle lua generator" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://pepsroleplay.eu/vehiclesgen/"
                className={styles.link}
              >
                Vehicle Generator
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="gta5_mods_logo.png"
                alt="GTA5 Mods everything you need"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://www.gta5-mods.com/" className={styles.link}>
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="openIV_logo.png"
                alt="Open IV - can't live without it"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://openiv.com/" className={styles.link}>
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div
            className={`${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="grzyClothTool_logo.png"
                alt="EUP ADDON TOOL - the best"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://github.com/grzybeek/grzyClothTool/releases"
                className={styles.link}
              >
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

          {/* Card 7 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="outplayed_logo.png"
                alt="Outplayed Free auto record - no restrictions"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://go.overwolf.com/outplayed/"
                className={styles.link}
              >
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

          {/* Card 8 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="cfx_status_logo.png"
                alt="Fivem Status update on game services"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://status.cfx.re/" className={styles.link}>
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 9 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="mustache_logo.png"
                alt="Mustache Scripts Best community and scripts"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://discord.gg/K8KAxHagaF" className={styles.link}>
                GO DISCORD
              </Link>
            </div>
          </div>

          {/* Card 10 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="fivemerr_logo.png"
                alt="Fivemerr free logging service"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://fivemerr.com/" className={styles.link}>
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 11 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="LSPDR_logo.png" alt="LCPDFR - police and EMS stuff" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://lcpdfr.com/" className={styles.link}>
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 12 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="codewalker_logo.png"
                alt="Codewalker - when you need to edit"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://github.com/dexyfex/CodeWalker"
                className={styles.link}
              >
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

          {/* Card 13 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="visualstudiocode_logo.png"
                alt="VisualStudio - must-have app for devs"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://code.visualstudio.com/" className={styles.link}>
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

          {/* Card 14 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="f_secure_logo.png"
                alt="F-Secure free online virus scanner"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://www.f-secure.com/en/online-scanner"
                className={styles.link}
              >
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

          {/* Card 15 */}
          <div
            className={`${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="dcprop_logo.png" alt="Easy going prop tool attacher" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://github.com/iplayer1337fivem/DC-Prop-Attach"
                className={styles.link}
              >
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 16 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="AR_itemgallery.png"
                alt="The github database for the item gallery"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://github.com/iplayer1337fivem/Item_Gallery"
                className={styles.link}
              >
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

          {/* Card 17 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="qbox_logo.png" alt="QBX best fivem framework" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://www.qbox.re/" className={styles.link}>
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 18 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="bentix_greenscreener.png" alt="Bentix Greenscreener" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://github.com/Bentix-cs/fivem-greenscreener"
                className={styles.link}
              >
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 19 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="tobiispace_logo.png" alt="GTA V ASSET GALLERY" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link to="https://tobii.space/" className={styles.link}>
                GO THERE
              </Link>
            </div>
          </div>

          {/* Card 20 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img
                src="grzyymteditor_logo.png"
                alt="Program allows to edit GTA5 *.ymt (Peds clothes) files"
              />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://github.com/grzybeek/YMTEditor/releases"
                className={styles.link}
              >
                FREE DOWNLOAD
              </Link>
            </div>
          </div>

         
          {/* Card 22 */}
          <div
            className={` ${styles.cardContainer} ${
              darkMode
                ? styles.cardContainerDarkMode
                : styles.cardContainerLightMode
            }`}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="sheenlogo.png" alt="SHEEN THE BEST" />
            </div>
            <div className="d-flex justify-content-center px-3 pt-2 pb-5">
              <Link
                to="https://discord.gg/YqMmT75hSu"
                className={styles.link}
              >
                GO DISCORD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperDashboard;
