import { AdaCompilanceRequestArgs, WaveResponse } from "../types";

export const generateAdaEmailLayout = (data: WaveResponse, { email, url }: AdaCompilanceRequestArgs) => {
	const { statistics, categories } = data;

	return `
<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <style type="text/css">

      header,
      .mainUpperContainer {
        background-color: #000000 !important;
      }

      .websiteUrlContainer,
      .mainBottomContainer,
      .resultItem {
        background-color: #2c2c2c !important;
      }

      .footer {
        background-color: #274eda !important;
      }

      .ctaButton {
        color: #3f67f3 !important;
      }

      .notice {
      margin-top: 32px;
      }

      .mainHeader,
      .websiteLink,
      .resultItem,
      .instructionDescription,
      .footerHeader,
      .footerDescription,
      .notice,
      .notice a {
        color: #fff !important;
      }

      .websiteLink:hover span,
      .websiteLink:hover, .instrunctionHeader {
        color: #ffa800 !important;
      }

      body,
      h1,
      h2,
      h3,
      a,
      p,
      img {
        margin: 0;
        padding: 0;
      }

      .headerContainer {
        padding: 20px;
      }

      .logo {
        cursor: pointer;
        display: block;
        margin-right: auto;
      }

      .mainUpperContainer {
        padding: 16px 20px 24px 20px;

        flex-direction: column;
        justify-content: center;
      }

      .mainHeader {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;

        font-family: 'Inter', sans-serif;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: -1.5px;
      }

      .websiteUrlContainer {
        padding: 9px 9px 9px 12px;
        margin-bottom: 12px;
        border-radius: 6px;
        border: 1px solid #545454;
      }

      .websiteLink {
        display: flex;
        text-decoration: none;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
      }

      .resultsIcon {
        display: block;
        margin: 0 auto;
        width: 240px;
        height: 166px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 12px;
      }

      .upperResultsContainer,
      .bottomResultsContainer {
        width: 100%;
      }

      .resultItem {
        display: flex;
        border: 1px solid #545454;
        border-radius: 6px;
        margin-bottom: 8px;
        justify-content: space-between;
        padding: 9px 12px;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
      }

      .resultItemValueCount {
        display: block;
        margin-left: auto;
      }

      .mainBottomContainer {
        padding: 44px 20px;
      }

      .instructionHeaderContainer {
        margin-bottom: 6px;
      }

      .instrunctionHeader {
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -1px;
      }

      .instructionDescription {
        margin-bottom: 28px;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
      }

      .footer {
        padding: 32px 20px;
      }

      .footerHeader {
        margin-bottom: 8px;

        font-family: 'Inter', sans-serif;
        font-size: 26px;
        font-weight: 600;

        letter-spacing: -1px;
      }

      .footerDescription {
        margin-bottom: 32px;
        display: block;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
      }

      .ctaButton {
        padding: 12px;
        border: none;
        outline: none;
        border-radius: 6px;
        cursor: pointer;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 700;
      }

      .footerLink{
      }

      @media screen and (min-width: 320px) {
        .mainHeader {
          font-size: 32px;
        }

        .instrunctionNumber,
        .instrunctionHeaderText {
          font-size: 24px;
        }

        .instructionDescription {
          display: block;
          margin-bottom: 32px;
        }
      }

      @media screen and (min-width: 600px) {
        .headerContainer {
          padding: 20px 32px;
        }

        .mainUpperContainer {
          padding-left: 32px;
          padding-right: 32px;
        }

        .mainHeader {
          font-size: 40px;
        }

        .resultsContainer {
          display: flex;
        }

        .upperResultsContainer,
        .bottomResultsContainer {
          display: inline-block;
        }

        .upperResultsContainer {
          margin-right: 8px;
        }

        .mainBottomContainer {
          padding-left: 32px;
          padding-right: 32px;
        }

        .instrunctionNumber,
        .instrunctionHeaderText {
          font-size: 26px;
        }

        .footer {
          padding-left: 32px;
          padding-right: 32px;
        }
      }

      @media screen and (min-width: 900px) {
        .headerContainer {
          padding-left: 182px;
          padding-right: 182px;
        }

        .mainUpperContainer {
          padding-left: 182px;
          padding-right: 182px;
        }

        .mainBottomContainer {
          padding-left: 182px;
          padding-right: 182px;
        }

        .footer {
          padding-left: 182px;
          padding-right: 182px;
        }
      }

      @media screen and (min-width: 1280px) {
        .footer {
          padding-left: 372px;
          padding-right: 372px;
        }

        .mainBottomContainer {
          padding-left: 372px;
          padding-right: 372px;
        }

        .mainUpperContainer {
          padding-left: 372px;
          padding-right: 372px;
        }

        .headerContainer {
          padding-left: 372px;
          padding-right: 372px;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="headerContainer">
        <a class="logo" href="https://adacompliancepros.com/" target="_blanc">
          <img
            width="105"
            height="37"
            alt="logo"
            src="https://api.adacompliancepros.com/assets/ADA-logo.png"
          />
        </a>
      </div>
    </header>
    <main>
      <div class="mainUpperContainer">
        <h1 class="mainHeader">
          Your Journey to Digital Accessibility starts here
        </h1>
        <div class="websiteUrlContainer">
          <a href="${statistics.pageurl}" class="websiteLink" target="_blank"
            ><span style="display: block; margin: auto 0; ">${statistics.pageurl}</span>
            <img
              width="24"
              height="24"
              src="https://api.adacompliancepros.com/assets/link-icon.png"
              alt="link-icon"
              style="display: block; margin-left: auto"
            />
          </a>
        </div>
        <img
          class="resultsIcon"
          src="https://api.adacompliancepros.com/assets/results1.png"
        />
        <div class="resultsContainer">
          <div class="upperResultsContainer">
            ${Object.entries(categories)
							.slice(0, 3)
							.map(
								([_, value]) => `
            <div class="resultItem">
              <span style="display: block">${value.description}:</span
              ><span class="resultItemValueCount">${value.count}</span>
            </div>
            `
							)
							.join("")}
          </div>
          <div class="bottomResultsContainer">
            ${Object.entries(categories)
							.slice(3, 6)
							.map(
								([_, value]) => `
            <div class="resultItem">
              <span style="display: block">${value.description}:</span
              ><span class="resultItemValueCount">${value.count}</span>
            </div>
            `
							)
							.join("")}
          </div>
        </div>
      </div>
      <div class="mainBottomContainer">
        <div class="instructionList">
          <div class="instruction">
            <div class="instructionHeaderContainer">
              <h3 class="instrunctionHeader">
                <span style="margin-right: 12px">1</span
                ><span> Review Your Website's Score</span>
              </h3>
            </div>
            <span class="instructionDescription"
              >Above you will find your requested score. It is a snapshot to
              give you an understanding of how accessible your website currently
              is. This score is just the tip of the iceberg. We have mountains
              of additional info available and plan to share it with you.</span
            >
          </div>
          <div class="instruction">
            <div class="instructionHeaderContainer">
              <h3 class="instrunctionHeader">
                <span style="margin-right: 12px">2</span
                ><span> Review This Accessibility User Guide</span>
              </h3>
            </div>
            <span class="instructionDescription"
              >Included in this email is our detailed Accessibility User Guide.
              It will provide you a good baseline understanding of requirements,
              risks and options, including the chance to better understand the
              test results.</span
            >
          </div>
          <div class="instruction">
            <div class="instructionHeaderContainer">
              <h3 class="instrunctionHeader">
                <span style="margin-right: 12px">3</span
                ><span>
                  Let Us Answer Your Questions and Give Detailed Results</span
                >
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="mainContainer">
        <h2 class="footerHeader">
          Schedule a 30 minute consultation to review your findings in detail
          and discuss the next steps
        </h2>
        <span class="footerDescription"
          >Included in this email is our detailed Accessibility User Guide. It
          will provide you a good baseline understanding of requirements, risks
          and options, including the chance to better understand the test
          results.</span
        >
        <a href="https://calendly.com/adacp/30min"
          ><button type="button" class="ctaButton">
            Schedule a consult
          </button></a
        >
        <p class="notice">* You received this email because you requested information on the https://adacompliancepros.com/ website about ADA compliance for the website ${url} and provided this email address ${email} as the contact address.</p>
      </div>
    </footer>
  </body>
</html>

`;
};
