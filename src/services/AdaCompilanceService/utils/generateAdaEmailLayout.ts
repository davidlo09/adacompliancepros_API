import { AdaCompilanceRequestArgs, FormattedCategories } from "../types";

export const generateAdaEmailLayout = (
	data: FormattedCategories[],
	{ url, fullName }: AdaCompilanceRequestArgs
) => {
	return `
<html>
	<head>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
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
				color: #ffa800 !important;
        background-color: #000000 !important;
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
			.websiteLink:hover,
			.instrunctionHeader {
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

				font-family: "Inter", sans-serif;
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

				font-family: "Inter", sans-serif;
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
				border: 1px solid #545454;
				border-radius: 6px;
				margin-bottom: 8px;
				justify-content: space-between;
				padding: 9px 12px;

				font-family: "Inter", sans-serif;
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
				font-family: "Inter", sans-serif;
				font-size: 20px;
				font-weight: 600;
				letter-spacing: -1px;
			}

       .instructionList{
        display: flex;
        flex-direction: column;
      }

    

			.instructionDescription {
				margin-bottom: 28px;

				font-family: "Inter", sans-serif;
				font-size: 16px;
				font-weight: 400;
			}

			.footer {
				padding: 32px 20px;
			}

			.footerHeader {
				margin-bottom: 8px;

				font-family: "Inter", sans-serif;
				font-size: 26px;
				font-weight: 600;

				letter-spacing: -1px;
			}

			.footerDescription {
				margin-bottom: 32px;
				display: block;

				font-family: "Inter", sans-serif;
				font-size: 16px;
				font-weight: 400;
			}

      .buttonContainer {
        display: flex;
        justify-content: center;
      }

			.ctaButton {
				padding: 12px;
				border: none;
				outline: none;
				border-radius: 6px;
				cursor: pointer;

				font-family: "Inter", sans-serif;
				font-size: 20px;
				font-weight: 700;
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
					display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 16px;
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
					<img width="105" height="37" alt="logo" src="https://api.adacompliancepros.com/assets/ADA-logo.png" />
				</a>
			</div>
		</header>
		<main>
			<div class="mainUpperContainer">
				<h1 class="mainHeader">Your Journey to Digital Accessibility starts here</h1>
				<div class="websiteUrlContainer">
					<a href="${url}" class="websiteLink" target="_blank"
						><span style="display: block; margin: auto 0">${url}</span>
						<img
							width="24"
							height="24"
							src="https://api.adacompliancepros.com/assets/link-icon.png"
							alt="link-icon"
							style="display: block; margin-left: auto"
						/>
					</a>
				</div>
				<img class="resultsIcon" src="https://api.adacompliancepros.com/assets/results1.png" />
			</div>
			<div class="mainBottomContainer">
				<div class="instructionList">
					<div >
						<div class="instructionHeaderContainer">
							<h3 class="instrunctionHeader">
								<span>Dear ${fullName}</span>
							</h3>
						</div>
						<span class="instructionDescription"
							>Thanks for taking our free web accessibility test.<br /><br />
							Whether it’s The Americans with Disabilities Act (ADA), WCAG, Section 508, The European Accessibility Act
							(EAA.), state, or regional initiatives, you need to know where your web assets are now and what you need
							to do for compliance. These results include important insights.<br /><br />
							It’s now expected that all public-facing digital properties comply with standard frameworks that allow
							people with disabilities to use them. If you’re not accessible, you’re vulnerable to an ADA lawsuit. Being
							proactive and compliant is required for all businesses.<br /><br />
							Below is a summary of your initial personalized report on digital accessibility for ${url}. The results
							are from an automated test, which–at best–can only uncover about 30% of the accessibility issues that
							actually exist.<br /><br />
							Nevertheless, what we’ve found already shows that you have a measurable risk of inaccessibility and
							non-compliance that requires attention.
						</span>
					</div>
				</div>
			</div>
			<div class="mainUpperContainer">
				<div class="resultsContainer">
          ${data
						.map(
							(item) =>
								`<div class="resultItem">
          <span style="color: #ffa800"><b>${item.count}</b></span>
          <span style="color: #ffa800"><b>${item.title}:</b></span>
          <span>${item.description}</span> 
          </div>`
						)
						.join("")}
			  </div>
      </div>
			<div class="mainBottomContainer">
				<div class="instructionList">
					<div >
						<div class="instructionHeaderContainer">
							<h3 class="instrunctionHeader">
								<span>Take Your Next Steps to Digital Accessibility Now</span>
							</h3>
						</div>
						<span class="instructionDescription"
							>The fact is, all of these issues (and more) can be remediated quickly and cost-effectively with our help.
							ADACP makes it easy from start to finish.<br /><br />
							Simply select a time to talk with us and we’ll explain how we can
							<b>accurately document your current state of digital accessibility in less than two weeks</b>. Let’s
							create a manageable plan together to keep you moving forward in a simple and effective way.<br /><br />
							<b
								>No matter what accessibility issues we uncover, we can solve them. We’ve been solving them for more
								than a decade in under two weeks.</b
							><br /><br />
							<b>Talk to us today. The consultation is 100% free.</b><br /><br /><br />
							Best Regards,<br /><br />
							David LoPresti<br /><br />
							CEO of ADACP
						</span>
						<div class="buttonContainer"><a href="https://calendly.com/adacp/30min"
							><button type="button" class="ctaButton">Schedule a consult</button></a
						></div>
					</div>
				</div>
			</div>
		</main>
	</body>
</html>
`;
};
