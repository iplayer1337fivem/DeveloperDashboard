import { useState } from "react";
import Navbar from "../components/Navbar";
//import css for this component
import styles from "./FAQ.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function FAQ({ setDarkMode, darkMode }) {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);
  const [question9, setQuestion9] = useState(false);
  const [question10, setQuestion10] = useState(false);

  return (
    <div className={`${darkMode ? styles.faq : ""} ${styles.faqHeight} pb-5`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

      {/* question 1 */}
      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.faqSectionContent}`}>
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
                <h4 className={styles.heading}> What is this website about?</h4>
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
              This website is a platform designed to{" "}
              <span className={styles.span}>
                [describe the main purpose of your website, such as providing
                information, offering a service, selling products, etc.]
              </span>
              . Our goal is to{" "}
              <span className={styles.span}>
                [state your mission or vision]
              </span>
              .
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* for question 2 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.faqSectionContent}`}>
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
                <h4 className={styles.heading}> How do I create an account?</h4>
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
              To create an account, click on the "Sign Up" button at the top
              right corner of the homepage. Fill in the required details,
              including your name, email address, and password. Once submitted,
              you will receive a confirmation email to verify your account.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* for question 3 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.faqSectionContent}`}>
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
                <h4 className={styles.heading}>
                  {" "}
                  How can I reset my password?
                </h4>
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
              If you have forgotten your password, click on the "Forgot
              Password" link on the login page. Enter your registered email
              address, and we will send you instructions on how to reset your
              password.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 3 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.faqSectionContent}`}>
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
                <h4 className={styles.heading}>
                  {" "}
                  How do I contact customer support?
                </h4>
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
              You can contact our customer support team by clicking on the
              "Contact Us" link at the bottom of the page. Alternatively, you
              can email us at{" "}
              <span className={styles.span}>[support email address]</span> or
              call us at{" "}
              <span className={styles.span}>[support phone number]</span>.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 5 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.faqSectionContent}`}>
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
                <h4 className={styles.heading}>
                  {" "}
                  What payment methods do you accept?
                </h4>
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
              We accept various payment methods including credit/debit cards
              <span className={styles.span}>
                {" "}
                (Visa, MasterCard, American Express)
              </span>
              , PayPal, and other online payment gateways. Please see our
              Payment Methods page for more details.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 6 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.faqSectionContent}`}>
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
                <h4 className={styles.heading}> What is your return policy?</h4>
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
              We offer a 30-day return policy on most products. If you are not
              satisfied with your purchase, you can return it within 30 days of
              receiving it for a full refund or exchange. Please refer to our
              Return Policy page for more details.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 7 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.faqSectionContent}`}>
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
                <h4 className={styles.heading}> How do I track my order?</h4>
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
              Once your order is shipped, you will receive a tracking number via
              email. You can use this number on our Track Order page to see the
              status of your shipment.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 8 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.faqSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question8 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}>
                  {" "}
                  Can I change or cancel my order?
                </h4>
              </div>
              <div>
                {" "}
                {question8 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion8(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion8(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question8 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              If you need to change or cancel your order, please contact us as
              soon as possible. We will do our best to accommodate your request,
              but please note that orders that have already been processed or
              shipped cannot be changed or canceled.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 9 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={` ${styles.faqSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question9 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}>
                  {" "}
                  Do you ship internationally?
                </h4>
              </div>
              <div>
                {" "}
                {question9 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion9(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion9(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question9 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              Yes, we do offer international shipping. Please see our Shipping
              Information page for more details on shipping rates and delivery
              times for your region.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* question 10 */}

      <div
        className={`${styles.faqSection}  ${
          darkMode ? styles.bgDark : styles.bgLight
        } pb-3`}
      >
        <div className={`${styles.faqSectionContent}`}>
          <div
            className={
              darkMode ? styles.whiteBottomBorder : styles.blackBottomBorder
            }
          >
            <div
              className={`${question10 ? styles.colorBlue : ""} ${
                styles.question
              } d-flex flex-row justify-content-between align-items-center pt-3 pb-0`}
            >
              <div>
                {" "}
                <h4 className={styles.heading}>
                  {" "}
                  How can I provide feedback about my experience?
                </h4>
              </div>
              <div>
                {" "}
                {question10 ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    onClick={() => setQuestion10(false)}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => setQuestion10(true)}
                    className={styles.icon}
                  />
                )}
              </div>
            </div>
          </div>

          {question10 ? (
            <div className={`${styles.fontSize}  mt-3`}>
              We value your feedback! You can provide feedback by clicking on
              the "Feedback" link at the bottom of the page or by contacting our
              customer support team. Your insights help us improve our services.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
