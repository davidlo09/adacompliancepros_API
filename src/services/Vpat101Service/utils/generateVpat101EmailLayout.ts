export const generateAdaEmailLayout = (name: string) => {
  return `
<html>
  <head>
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

      .textContainer {
        margin-top: 13px;
        margin-bottom: 13px;
      }

      .text {
        font-size: 13px;
        display: block;
        color: #222;
      }

      .header {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        color: #222;
      }

      .button {
        background-color: #3f67f3 !important;
        padding: 10px 20px;
        border: 1px solid #3f67f3 !important;
        border-radius: .4vw;
        text-decoration: none !important;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
      }

      .button:hover {
        background-color:#7090ff !important;
        border: 1px solid#7090ff !important;
      }

      .buttonsContainer {
        display: flex;
        width: 100%;
      }

      body {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <main>
      <div class="textContainer"><span class="text">Hi ${name},</span></div>
      <div class="textContainer">
        <span class="text">
          Please enjoy our VPAT 101 Explainer. It provides a comprehensive
          overview of Section 508 and WCAG Guidelines and why your company is
          being asked to submit a VPAT.
        </span>
      </div>
      <div class="textContainer">
        <span class="text">
          For further support, one of our accessibility experts is standing by
          to speak with you. We can walk you through the VPAT process and help
          you craft a tailored accessibility gameplan for your company.
        </span>
      </div>
      <div class="textContainer">
        <span class="text">&nbsp;</span>
      </div>
      <div class="buttonsContainer">
        <a
          href="https://calendly.com/adacp/vpat-consultation"
          class="button"
          style="display: block; margin-right: 10px; color: #fff !important"
          >SCHEDULE A CONSULT</a
        >
        <a
          href="https://api.adacompliancepros.com/assets/VPAT-101.pdf"
          class="button"
          style="display: block; color: #fff !important"
          >DOWNLOAD PDF FILE</a
        >
      </div>
      <div class="textContainer">
        <span class="text">&nbsp;</span>
      </div>
      <div class="textContainer">
        <span class="text">Thank you</span>
      </div>
      <div class="textContainer">
        <span class="text">Laura,</span>
      </div>
      <img
        src="https://api.adacompliancepros.com/assets/ADA-logo-black.jpg"
        alt="logo"
        width="120"
      />
      <div class="textContainer">
        <span class="text">
          556 S. Fair Oaks Avenue, Suite 271<br />
          Pasadena, CA91105
        </span>
      </div>
      <div class="textContainer">
        <span class="text">Phone: 626.486.2201</span>
      </div>
      <div class="textContainer">
        <span style="font-size: 13px; color: #222">Email:</span
        ><a href="mailto:laura@adacp.com" style="color: #f71010; font-size: 13px; margin-left: 4px;" target="_blank"
          >laura@adacp.com</a
        >
      </div>
      <div class="textContainer">
        <span class="header">CONFIDENTIALITY NOTICE</span>
      </div>
      <div class="textContainer">
        <span class="text">
          This e-mail message and all attachments transmitted with it may
          contain legally privileged and confidential information intended
          solely for the use of ADA Compliance Professionals, Inc. and the
          addressee. Information provided shall not be distributed to any
          persons other than authorized by ADA Compliance Professionals, Inc.
          and copying of information is prohibited. If the reader of this
          message is not the intended recipient, you are hereby notified that
          any reading, dissemination, distribution, copying, or other use of
          this message or its attachments is strictly prohibited. If you have
          received this message in error, please notify the sender immediately
          and delete this message from your system.
        </span>
      </div>
    </main>
  </body>
</html>

`;
};
