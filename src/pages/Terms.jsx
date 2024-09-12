import { useState } from "react";
import Navbar from "../components/Navbar";
//import css for this component
import styles from "./Terms.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Terms({ setDarkMode, darkMode }) {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);

  return (
    <div
      className={`${darkMode ? styles.terms : ""} ${styles.termsHeight} pb-5`}
    >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

      {/* question 1 */}
      <div
        className={`${styles.termsSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.termsSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question1 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}> Introduction</h4>
              </div>
              <div>
                {" "}
                {question1 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion1(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion1(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question1 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              Welcome to our Terms and Conditions page. These terms outline the
              rules and guidelines for using our website.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* for question 2 */}

      <div
        className={`${styles.termsSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.termsSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question2 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}> Acceptance of Terms</h4>
              </div>
              <div>
                {" "}
                {question2 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion2(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion2(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question2 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              By accessing or using our website, you agree to comply with these
              terms and conditions. If you do not agree, please do not use our
              site.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* for question 3 */}

      <div
        className={`${styles.termsSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.termsSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question3 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}> Changes to Terms</h4>
              </div>
              <div>
                {" "}
                {question3 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion3(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion3(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question3 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              We reserve the right to modify these terms at any time. Any
              changes will be posted on this page and will take effect
              immediately.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 3 */}

      <div
        className={`${styles.termsSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.termsSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question4 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}> User Responsibilities</h4>
              </div>
              <div>
                {" "}
                {question4 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion4(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion4(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question4 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              As a user, you are responsible for maintaining the confidentiality
              of your account information and for all activities that occur
              under your account.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 5 */}

      <div
        className={`${styles.termsSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.termsSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question5 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}> Limitation of Liability</h4>
              </div>
              <div>
                {" "}
                {question5 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion5(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion5(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question5 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              We are not liable for any damages or losses resulting from the use
              of our website or services. This includes indirect, incidental, or
              consequential damages.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 6 */}

      <div
        className={`${styles.termsSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.termsSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question6 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}> Governing Law</h4>
              </div>
              <div>
                {" "}
                {question6 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion6(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion6(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question6 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              These terms are governed by and construed in accordance with the
              laws of <span className={styles.span}>[Your Country]</span>. Any
              disputes arising under these terms will be subject to the
              exclusive jurisdiction of the courts in{" "}
              <span className={styles.span}> [Your Country]</span>.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 7 */}

      <div
        className={`${styles.termsSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.termsSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question7 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}> Contact Information</h4>
              </div>
              <div>
                {" "}
                {question7 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion7(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion7(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question7 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              If you have any questions about these terms, please contact us at{" "}
              <span className={styles.span}>[support email address]</span> or{" "}
              <span className={styles.span}> [support phone number]</span>.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Terms;
