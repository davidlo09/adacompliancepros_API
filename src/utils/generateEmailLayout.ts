import { WaveResponse } from '../services/AdaCompilanceService/types';

export const generateEmailLayout = (data: WaveResponse) => {
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
    <style>
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

      header {
        background-color: #000;
      }

      .headerContainer {
        display: flex;
        padding: 20px;

        @media (min-width: 600px) {
          padding: 20px 32px;
        }

         @media (min-width: 900px) {
          padding-left: 182px;
          padding-right: 182px;
        }

        @media (min-width: 1280px) {
          padding-left: 372px;
          padding-right: 372px;
        }
      }

      .logo {
        cursor: pointer;
      }

      .mainUpperContainer {
        padding: 16px 20px 24px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #000;

        @media (min-width: 600px) {
          padding-left: 32px;
          padding-right: 32px;
        }

        @media (min-width: 900px) {
          padding-left: 182px;
          padding-right: 182px;
        }

        @media (min-width: 1280px) {
          padding-left: 372px;
          padding-right: 372px;
        }
      }

      .mainHeader {
        width: 100%;
        text-align: center;
        color: #fff;
        margin-bottom: 20px;

        font-family: 'Inter', sans-serif;
        font-size: 28px;
        font-weight: 600;
             letter-spacing: -1.5px;

        @media (min-width: 320px) {
          font-size: 32px;
        }

         @media (min-width: 600px) {
          font-size: 40px;
        }
      }

      .websiteUrlContainer {
        background-color: #2c2c2c;
        padding: 9px 9px 9px 12px;
        margin-bottom: 12px;
        border-radius: 6px;
        border: 1px solid #545454;
      }

      .websiteLink {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        text-decoration: none;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
      
      }

      .websiteLink:hover span,
      .websiteLink:hover .linkIcon path,
      .websiteLink:hover {
        color: #ffa800;
        stroke: #ffa800;
      }

      .resultsIcon {
        width: 240px;
        height: 166px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 12px;
      }

      .resultsContainer {
        @media (min-width: 600px) {
          display: flex;
          gap: 8px;
          width: 100%;
        }
      }

      .upperResultsContainer,
      .bottomResultsContainer {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 8px;
        width: 100%;
      }

      .resultItem {
        background-color: #2c2c2c;
        border: 1px solid #545454;
        color: #fff;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        padding: 9px 12px;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
      
      }

      .mainBottomContainer {
        background-color: #2c2c2c;
        padding: 44px 20px;

        @media (min-width: 600px) {
          padding-left: 32px;
          padding-right: 32px;
        }

        @media (min-width: 900px) {
          padding-left: 182px;
          padding-right: 182px;
        }

        @media (min-width: 1280px) {
          padding-left: 372px;
          padding-right: 372px;
        }
      }

      .instructionList {
        display: flex;
        flex-direction: column;
        gap: 28px;
      }

      .instructionHeaderContainer {
        display: flex;
        gap: 8px;
        margin-bottom: 6px;
      }

      .instrunctionNumber {
        width: 25px;
        height: 25px;
        text-align: start;
      }

      .instrunctionNumber,
      .instrunctionHeaderText {
        color: #ffa800;

        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -1px;

         @media (min-width: 320px) {
           font-size: 24px;
        };

        @media (min-width: 600px) {
           font-size: 26px;
        };
      }

      .instructionDescription {
        color: #fff;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
      
      }

      .footer {
        background-color: #274eda;
        padding: 32px 20px;

        @media (min-width: 600px) {
          padding-left: 32px;
          padding-right: 32px;
        }

        @media (min-width: 900px) {
          padding-left: 182px;
          padding-right: 182px;
        }

        @media (min-width: 1280px) {
          padding-left: 372px;
          padding-right: 372px;
        }
      }

      .footerHeader {
        color: #fff;
        margin-bottom: 8px;

        font-family: 'Inter', sans-serif;
        font-size: 26px;
        font-weight: 600;
      
        letter-spacing: -1px;
      }

      .footerDescription {
        color: #fff;
        margin-bottom: 32px;
        display: block;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
      
      }

      .ctaButton {
        padding: 12px;
        background-color: #fff;
        color: #3f67f3;
        border: none;
        outline: none;
        border-radius: 6px;
         cursor: pointer;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <header>
      <div class="headerContainer">
      <a href="https://adacompliancepros.com/" target="_blanc">
      <svg class="logo" width="105" height="37" viewBox="0 0 105 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43217 24.6417L5.2782 33.4813H0L5.4285 0.500549H12.7166L18.3463 33.4888H12.9178L11.611 24.6417H6.43217ZM11.0175 19.9992C10.2125 14.3706 9.50943 9.0373 9.10694 5.33329H8.90569C8.80634 8.04873 7.74918 15.1114 7.09704 19.9992H11.0175Z" fill="white"/>
<path d="M20.8071 0.500549H27.9933C35.126 0.500549 36.8404 4.10696 36.8404 10.2286V22.9123C36.8404 27.9503 35.9845 33.4813 27.9933 33.4813H20.8071V0.500549ZM25.9834 29.1416H27.6418C31.0604 29.1416 31.5622 27.0193 31.5622 23.6106V9.84568C31.5622 6.84243 31.0528 4.90783 27.6418 4.90783H25.9834V29.1416Z" fill="white"/>
<path d="M45.0811 24.6417L43.9271 33.4813H38.6489L44.0774 0.500549H51.3655L56.9953 33.4888H51.5668L50.2599 24.6492L45.0811 24.6417ZM49.6664 19.9992C48.8614 14.3706 48.1584 9.0373 47.7559 5.33329H47.5546C47.4553 8.04873 46.3981 15.1114 45.746 19.9992H49.6664Z" fill="white"/>
<path d="M74.4349 23.6031V24.887C74.4349 28.6911 73.7802 33.9743 66.6934 33.9743C60.4599 33.9743 59.1531 30.1227 59.1531 25.1348V8.49421C59.1531 3.40619 61.5171 0 66.7953 0C73.0797 0 74.2846 4.09944 74.2846 8.69193V10.1735H69.1058V8.09878C69.1058 5.87637 68.553 4.64253 66.7443 4.64253C64.9841 4.64253 64.4313 5.82632 64.4313 8.09878V25.5277C64.4313 27.7 64.8847 29.3794 66.8437 29.3794C68.7033 29.3794 69.2076 27.8978 69.2076 25.4776V23.6006L74.4349 23.6031Z" fill="white"/>
<path d="M87.5718 0.500549H77.4485V33.4813H82.6248V19.9016H87.2712C93.6525 19.9016 95.614 16.2952 95.614 10.8643V8.9372C95.614 3.06083 92.8984 0.500549 87.5718 0.500549Z" fill="white"/>
<path d="M95.0688 31.862L102.133 29.064C102.243 29.0184 102.332 28.9325 102.379 28.8242C102.427 28.7159 102.43 28.5937 102.387 28.4834L102.291 28.2131C102.283 28.1922 102.281 28.1698 102.285 28.148C102.288 28.1261 102.297 28.1055 102.311 28.088C103.73 26.2635 102.759 23.8333 102.759 23.8333L101.346 20.272V20.2545C101.318 20.1318 100.92 18.4325 99.6286 18.4325C99.3667 18.4156 99.1046 18.4617 98.8649 18.5668C98.6252 18.6719 98.4152 18.8328 98.253 19.0356C98.238 19.0585 98.2165 19.0765 98.1911 19.0874C98.1657 19.0983 98.1376 19.1015 98.1103 19.0967C98.0831 19.0919 98.0579 19.0792 98.0379 19.0603C98.018 19.0414 98.0042 19.0172 97.9983 18.9906C97.9091 18.6227 97.6162 18.1597 96.7119 18.0596C95.7082 17.9495 95.3082 18.5026 95.1503 18.903C95.1424 18.9294 95.1264 18.9528 95.1044 18.9699C95.0823 18.9869 95.0555 18.9969 95.0275 18.9982C94.9995 18.9996 94.9717 18.9924 94.9481 18.9776C94.9244 18.9627 94.9061 18.941 94.8956 18.9155C94.572 18.2548 93.8766 17.489 93.0079 17.7743C92.7868 17.8372 92.5825 17.9472 92.4095 18.0964C92.2365 18.2456 92.099 18.4304 92.0068 18.6377C91.9965 18.6626 91.9789 18.6838 91.9562 18.6988C91.9335 18.7138 91.9068 18.7218 91.8794 18.7218C91.8521 18.7218 91.8254 18.7138 91.8027 18.6988C91.78 18.6838 91.7624 18.6626 91.7521 18.6377L90.3001 14.9712C90.3001 14.9712 89.6021 12.7688 88.145 13.3119C86.6879 13.855 87.475 15.7421 87.475 15.7421L90.8274 24.444C90.8388 24.4702 90.8413 24.4994 90.8345 24.5271C90.8277 24.5549 90.8119 24.5797 90.7896 24.598C90.7673 24.6162 90.7396 24.6269 90.7106 24.6285C90.6816 24.6301 90.6529 24.6224 90.6287 24.6067L89.0289 23.6581H89.0136C88.8964 23.558 87.205 22.1565 86.1376 23.2502C85.0703 24.3439 86.2446 25.5552 86.3338 25.6453L86.3491 25.6578L94.2918 31.3014L94.3351 31.354L94.4676 31.6318C94.5182 31.7389 94.6091 31.8227 94.7211 31.8656C94.8331 31.9085 94.9577 31.9072 95.0688 31.862Z" fill="#3F67F3"/>
<path d="M104.955 33.2561L103.363 29.7372C103.308 29.6155 103.206 29.5196 103.08 29.4696C102.955 29.4197 102.814 29.4196 102.688 29.4695L94.8955 32.5528C94.8297 32.5789 94.77 32.6179 94.72 32.6673C94.6699 32.7168 94.6306 32.7757 94.6044 32.8405C94.5782 32.9053 94.5657 32.9747 94.5676 33.0444C94.5694 33.1141 94.5857 33.1827 94.6153 33.2461L96.2355 36.6973C96.2887 36.8189 96.3888 36.9148 96.5139 36.9641C96.639 37.0133 96.7789 37.0119 96.9029 36.9601L104.667 33.9443C104.733 33.9189 104.793 33.8806 104.843 33.8318C104.894 33.7831 104.934 33.7248 104.961 33.6605C104.988 33.5962 105.001 33.5272 105 33.4577C104.999 33.3882 104.984 33.3196 104.955 33.2561Z" fill="#3F67F3"/>
<path d="M84.1023 6.47201C84.1664 6.63397 84.2787 6.77316 84.4246 6.87139C84.5705 6.96963 84.7432 7.02233 84.92 7.02261C85.0271 7.0217 85.1332 7.00221 85.2334 6.96505C85.3411 6.92504 85.4398 6.86455 85.5238 6.78702C85.6078 6.7095 85.6754 6.61647 85.7227 6.51325C85.77 6.41004 85.7961 6.29867 85.7996 6.18552C85.8031 6.07237 85.7838 5.95966 85.7428 5.85384L84.8283 3.52382C84.7402 3.3184 84.5742 3.15471 84.3654 3.0674C84.1566 2.98008 83.9215 2.97598 83.7097 3.05596C83.4979 3.13594 83.3261 3.29373 83.2306 3.49595C83.1351 3.69817 83.1234 3.92895 83.198 4.13948L84.1023 6.47201Z" fill="#FFA800"/>
<path d="M80.1359 7.90606L82.4591 8.91966C82.669 8.99949 82.902 8.99695 83.11 8.91256C83.318 8.82817 83.485 8.6684 83.5764 8.46636C83.6677 8.26431 83.6765 8.03548 83.6008 7.82727C83.5251 7.61906 83.3708 7.44744 83.1698 7.34796L80.8441 6.33436C80.739 6.28868 80.6259 6.26377 80.511 6.26105C80.3962 6.25834 80.2819 6.27787 80.1748 6.31854C80.0676 6.35921 79.9697 6.42022 79.8865 6.49808C79.8033 6.57594 79.7366 6.66913 79.6901 6.77233C79.6436 6.87553 79.6182 6.98672 79.6155 7.09955C79.6127 7.21237 79.6326 7.32463 79.674 7.42991C79.7154 7.53518 79.7775 7.63142 79.8567 7.71312C79.936 7.79482 80.0309 7.86038 80.1359 7.90606Z" fill="#FFA800"/>
<path d="M93.0667 11.5125L90.7435 10.5114C90.5337 10.4315 90.3006 10.4341 90.0926 10.5185C89.8846 10.6029 89.7176 10.7626 89.6263 10.9647C89.5349 11.1667 89.5261 11.3956 89.6018 11.6038C89.6775 11.812 89.8318 11.9836 90.0328 12.0831L92.3586 13.0842C92.4701 13.1326 92.5907 13.1573 92.7126 13.1567C92.9134 13.1573 93.1082 13.0899 93.2644 12.966C93.4205 12.842 93.5284 12.669 93.57 12.476C93.6115 12.283 93.5842 12.0819 93.4925 11.9064C93.4009 11.731 93.2505 11.5918 93.0667 11.5125Z" fill="#FFA800"/>
<path d="M83.5647 10.6741C83.524 10.5682 83.4624 10.4712 83.3835 10.3887C83.3046 10.3062 83.2099 10.2398 83.1048 10.1933C82.9998 10.1469 82.8864 10.1212 82.7712 10.1178C82.6561 10.1144 82.5413 10.1333 82.4336 10.1735L80.062 11.072C79.8701 11.143 79.7097 11.278 79.6089 11.4535C79.5081 11.629 79.4734 11.8336 79.5107 12.0318C79.5481 12.2299 79.6552 12.4087 79.8132 12.5371C79.9713 12.6654 80.1703 12.7351 80.3753 12.7338C80.4832 12.7329 80.5902 12.7134 80.6912 12.6762L83.0628 11.7778C83.2773 11.6955 83.4502 11.5335 83.5441 11.327C83.638 11.1205 83.6454 10.8859 83.5647 10.6741Z" fill="#FFA800"/>
<path d="M89.0009 8.59682C89.065 8.75877 89.1773 8.89797 89.3232 8.9962C89.4691 9.09443 89.6418 9.14713 89.8186 9.14741C89.9257 9.14677 90.0319 9.12727 90.132 9.08985L92.5087 8.19138C92.6159 8.15079 92.7139 8.08985 92.7972 8.01204C92.8804 7.93423 92.9472 7.84107 92.9938 7.73789C93.0404 7.6347 93.0659 7.52351 93.0688 7.41066C93.0716 7.29781 93.0518 7.18551 93.0105 7.08017C92.9692 6.97484 92.9072 6.87853 92.828 6.79674C92.7488 6.71496 92.6539 6.6493 92.5489 6.60352C92.4439 6.55774 92.3307 6.53272 92.2158 6.52991C92.101 6.5271 91.9867 6.54655 91.8795 6.58714L89.5053 7.48561C89.2885 7.56739 89.1137 7.73034 89.0191 7.93869C88.9245 8.14703 88.918 8.38374 89.0009 8.59682Z" fill="#FFA800"/>
<path d="M84.24 16.0924L85.2589 13.81C85.3123 13.7058 85.3437 13.5922 85.351 13.4758C85.3583 13.3594 85.3415 13.2428 85.3016 13.133C85.2617 13.0232 85.1995 12.9226 85.1188 12.8371C85.0381 12.7516 84.9406 12.6831 84.8321 12.6358C84.7237 12.5885 84.6066 12.5633 84.4879 12.5617C84.3693 12.5602 84.2516 12.5823 84.1419 12.6268C84.0322 12.6713 83.9329 12.7373 83.8499 12.8206C83.7669 12.904 83.702 13.003 83.6592 13.1117L82.6275 15.3942C82.5462 15.6003 82.5488 15.8293 82.6347 16.0337C82.7206 16.238 82.8832 16.4021 83.0889 16.4918C83.2945 16.5816 83.5275 16.5902 83.7394 16.5158C83.9513 16.4415 84.126 16.2899 84.2272 16.0924H84.24Z" fill="#FFA800"/>
<path d="M87.457 7.00759C87.5687 7.0555 87.6892 7.08021 87.8111 7.08017C87.9794 7.08155 88.1445 7.03502 88.2864 6.94619C88.4284 6.85737 88.5411 6.73005 88.611 6.57962L89.6427 4.29715C89.6893 4.19411 89.7149 4.08306 89.7179 3.97032C89.7209 3.85758 89.7012 3.74537 89.66 3.6401C89.6189 3.53482 89.557 3.43854 89.478 3.35675C89.399 3.27496 89.3043 3.20927 89.1994 3.16342C89.0946 3.11757 88.9815 3.09247 88.8668 3.08954C88.752 3.08661 88.6378 3.10592 88.5306 3.14635C88.4235 3.18679 88.3255 3.24757 88.2422 3.32521C88.159 3.40286 88.0921 3.49586 88.0455 3.59889L87.0138 5.88387C86.9226 6.09083 86.918 6.32472 87.0009 6.53499C87.0839 6.74526 87.2477 6.91503 87.457 7.00759Z" fill="#FFA800"/>
</svg></a>
      </div>
    </header>
    <main>
      <div class="mainUpperContainer">
        <h1 class="mainHeader">
          Your Journey to Digital Accessibility starts here
        </h1>
        <div class="websiteUrlContainer">
          <a href="" class="websiteLink" target="_blank"
            ><span>${statistics.pageurl}</span>
            <svg
              class="linkIcon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.87862 7.05026L11.2928 5.63605C13.2455 3.68343 16.4113 3.68343 18.3639 5.63605V5.63605C20.3165 7.58867 20.3165 10.7545 18.3639 12.7071L16.9497 14.1213"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M14.1214 16.9498L12.7072 18.364C10.7545 20.3166 7.58872 20.3166 5.6361 18.364V18.364C3.68348 16.4113 3.68348 13.2455 5.6361 11.2929L7.05031 9.87869"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M14.1213 9.87869L9.8787 14.1213"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <img class="resultsIcon" src="https://api.adacompliancepros.com/assets/results1.png" />
        <div class="resultsContainer">
          <div class="upperResultsContainer">
          ${Object.entries(categories)
            .slice(0, 3)
            .map(
              ([_, value]) =>
                `<div class="resultItem"><span>${value.description}:</span><span></span>${value.count}</div>`
            )
            .join('')}
          </div>
          <div class="bottomResultsContainer">
            ${Object.entries(categories)
              .slice(3, 6)
              .map(
                ([_, value]) =>
                  `<div class="resultItem"><span>${value.description}:</span><span></span>${value.count}</div>`
              )
              .join('')}
          </div>
        </div>
      </div>
      <div class="mainBottomContainer">
        <div class="instructionList">
          <div class="instruction">
            <div class="instructionHeaderContainer">
              <h3 class="instrunctionNumber">1</h3>
              <h3 class="instrunctionHeaderText">
                Review Your Website's Score
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
              <h3 class="instrunctionNumber">2</h3>
              <h3 class="instrunctionHeaderText">
                Review This Accessibility User Guide
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
              <h3 class="instrunctionNumber">3</h3>
              <h3 class="instrunctionHeaderText">
                Let Us Answer Your Questions and Give Detailed Results
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
        <a href="https://calendly.com/adacp/30min"><button type="button" class="ctaButton">Schedule a consult</button></a>
      </div>
    </footer>
  </body>
</html>
`;
};
