import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <div>
      <footer class="main-footer">
        <div class="main-container_footer">
          <div class="main-footer__upper">
            <div class="main-footer__row main-footer__row-1">
              <h2 class="heading heading-sm main-footer__heading-sm">
                <p className="text-footer">Social</p>
              </h2>
              <div class="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/aidina-bek/"
                >
                  <img
                    class="main-footer__icon"
                    src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                    alt="Aidina Bekturova Linkedin Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/dinDivDev"
                >
                  <img
                    class="main-footer__icon"
                    src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                    alt="dinDivDev Github Profile"
                  />
                </a>
              </div>
            </div>

            <div class="main-footer__row main-footer__row-2">
              {/* <p class="heading heading-sm text-lt text-footer">
                {" "}
                Aidina Bekturova
              </p> */}
              <br></br>

              <p class="main-footer__short-desc">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications.
              </p>
            </div>
          </div>

          <div class="main-footer__lower">
            © Copyright
            <script>document.write(new Date().getFullYear())</script>2023. Made
            by Aidina Bekturova
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
