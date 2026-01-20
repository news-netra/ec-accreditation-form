import "./style.css";

document.querySelector("#app").innerHTML = `
<div class="toolbar no-print">
  <button class="btn" id="export">Export PDF</button>
</div>

<main class="stack">

<!-- ================= PAGE 1 : ANNEXURE A ================= -->
<section class="sheet a4">
  <div class="page">

    <div class="top-title">
      <div class="annexure">ANNEXURE – A</div>
      <div class="org">
        <div><strong>Bangladesh Election Commission</strong></div>
        <div>Election Commission Secretariat</div>
        <div>Nirbachon Bhabon.</div>
        <div>Agargoan, Dhaka</div>
        <div>www.ecs.gov.bd</div>
      </div>
      <h1 class="form-title">
        Application Form for International Election Observer / Foreign Media Accreditation
      </h1>
    </div>

    <ol class="q">
      ${[
        "Name",
        "Date of Birth",
        "Name of delegation / Organization / Foreign Government",
        "Profession",
      ].map(
        (l) => `
        <li class="q__item">
          <span class="q__label">${l}:</span>
          <span class="q__fill"><input /></span>
        </li>`
      ).join("")}

      <li class="q__item q__item--stack">
        <span class="q__label">Experience as an election observer (if any):</span>
        <div class="q__sub">
          <div class="q__sub-row"><span>International:</span><span class="q__fill"><input /></span></div>
          <div class="q__sub-row"><span>Domestic:</span><span class="q__fill"><input /></span></div>
        </div>
      </li>

      <li class="q__item q__item--stack">
        <span class="q__label">Passport Details:</span>
        <div class="q__sub">
          <div class="q__sub-row"><span>Number:</span><span class="q__fill"><input /></span></div>
          <div class="q__sub-row"><span>Date of expiry:</span><span class="q__fill"><input /></span></div>
        </div>
      </li>

      ${["Nationality", "Address in Bangladesh", "E-mail", "Phone"].map(
        (l) => `
        <li class="q__item">
          <span class="q__label">${l}:</span>
          <span class="q__fill"><input /></span>
        </li>`
      ).join("")}
    </ol>

    <p class="para">
      By signing this application, I hereby oonfimi that I will abide by the Guidelines for International Election Observers and Foreign Media 2025 issued by Bangladesh Election Commission. And I confimi that the Commission reserves the right to withdraw my accreditation in the appropriate cases.
    </p>

    <div class="sign-row">
      <div class="date-box">
        <span>Date:</span><span class="date-line"></span>
      </div>
      <!-- STATIC -->
      <div class="sig-box">
        <div class="sig-line"></div>
        <div class="sig-caption">Seal and Signature of the Applicant</div>
      </div>
    </div>

  </div>
</section>

<!-- ================= PAGE 2 : ANNEXURE B ================= -->
<section class="sheet a4">
  <div class="page">

    <div class="top-title">
      <div class="annexure">ANNEXURE – B</div>
      <div class="pledge-title">DECLARATION AND PLEDGE</div>
    </div>

    <div class="pledge-body">
      <p><strong>I hereby pledge that I will follow the Code of Conduct</strong> nd that all of my activities as an election observer will be conducted completely in accordance with it. I have no conflicts of interest - political, economic or other - that will interfere with my ability to be an impartial election observer and to follow the Code of Conduct.</p>
      <p><strong>I will maintain strict political impartiality all the time.</strong> will make my judgments based on the highest standard of accuracy of information and impartiality of analysis, distinguishing subjective factors from objective evidence, and I will base all of my conclusions on factual and verifiable evidence.</p>
      <p><strong>I will not obstruct or interfere in the election process.</strong> will fully respect national laws and the authority of election officials and will maintain a respectful attitude toward electoral and other national authorities. I will respect and promote the human rights and fundamental freedoms of the people of Bangladesh. I will maintain proper personal behaviour and respect others, including exhibiting sensitivity for Bangladeshi cultures and customs, exercise sound judgment in personal interactions and observe the highest level of professional conduct all the time, including leisure time.</p>
    <p><strong>I will protect the integrity of the international election observation mission and will follow the instructions of the observation mission.</strong> I will attend all briefings, training and debriefings required by the election observation mission and will cooperate in the production of its statements and reports as requested. I will refrain from making personal comments, observations or conclusions to the news media or the public before the election observation mission makes a statement, unless specifically authorized by the observation mission's leadership.</p>
      </div>

    <div class="pledge-sign">
      <div class="sign-row2">
        <span>Signature</span><span class="dotline"></span> <!-- STATIC -->
      </div>
      <div class="sign-row2">
        <span>Name</span><span class="dotline"><input /></span>
      </div>
      <div class="sign-row2">
        <span>Organisation</span><span class="dotline"><input /></span>
      </div>
      <div class="sign-row2">
        <span>Date</span><span class="dotline"><input /></span>
      </div>
    </div>

    <div class="page-no">12</div>
  </div>
</section>

<!-- ================= PAGE 3 : ANNEXURE C ================= -->
<section class="sheet a4">
  <div class="page">

    <div class="top-title">
      <div class="annexure">ANNEXURE-C</div>

      <div class="org">
        <div><strong>Bangladesh Election Commission</strong></div>
        <div>Election Commission Secretariat</div>
        <div>Nirbachon Bhabon.</div>
        <div>Agargaon, Dhaka</div>
        <div><a href="https://www.ecs.gov.bd" target="_blank">www.ecs.gov.bd</a></div>
      </div>

      <div class="underline-title">Authorization Form for the Contact Person</div>
    </div>

    <p class="para compact">
      The contact person will be the sole point of communication between the EC Secretariat and the
      Observer Organization. Please submit this form with complete contact details, as well as a
      passport sized photograph and a copy of the passport.
    </p>

    <div class="lines compact">
      <div class="line">
        <span class="line-label">Name of Observer Organization:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line">
        <span class="line-label">Personal Detail of Contact Person:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Name:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Gender:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Nationality:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Office Location in Bangladesh:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Mobile No.:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Telephone No.:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Fax No.:</span>
        <span class="line-fill"><input /></span>
      </div>

      <div class="line indent">
        <span class="line-label">Email:</span>
        <span class="line-fill"><input /></span>
      </div>
    </div>

    <p class="para compact">
      I, the Head of the Observer Organization, hereby authorize the contact person to perform the
      following tasks:
    </p>

    <ol class="alpha compact">
      <li>Sign all necessary documentation on behalf of the Observer Organization.</li>
      <li>
        Receive/submit all documents and materials to/from the observer organization and the EC
        Secretariat.
      </li>
    </ol>

    <div class="c-signs compact">
      <!-- STATIC per your rule -->
      <div class="c-sign c-sign--right">
        <div class="c-label">Signature of Contact Person:</div>
        <div class="c-fill"></div>
      </div>

      <div class="c-sign c-sign--right">
        <div class="c-label">Place and Date:</div>
        <div class="c-fill"><input /></div>
      </div>

      <div class="c-sign c-sign--right">
        <div class="c-label">
          Seal and Signature of the Head of the Observer Organizations:
        </div>
        <div class="c-fill"><input /></div>
      </div>
    </div>

    <div class="page-no">13</div>
  </div>
</section>


<!-- ================= PAGE 4 : ANNEXURE D ================= -->
<section class="sheet a4">
  <div class="page">

    <div class="top-title">
      <div class="annexure">ANNEXURE-D</div>
      <div class="underline-title">Observer’s Information and Deployment Details</div>
    </div>

    <div class="d-top">
      <div class="line">
        <span class="line-label"><strong>Name of Observer Organization:</strong></span>
        <span class="line-fill"><input /></span>
      </div>
      <div class="line">
        <span class="line-label"><strong>Address:</strong></span>
        <span class="line-fill"><input /></span>
      </div>
    </div>

    <div class="table-wrap">
      <table class="grid">
        <thead>
          <tr>
            <th rowspan="2" class="c-sn">S.N.</th>
            <th rowspan="2" class="c-name">Name of<br>the Observer</th>
            <th rowspan="2" class="c-age">Age</th>
            <th rowspan="2" class="c-gender">Gender</th>
            <th rowspan="2" class="c-nat">Nationality</th>
            <th rowspan="2" class="c-pass">Passport<br>No.</th>
            <th rowspan="2" class="c-contact">Contact<br>Number</th>
            <th rowspan="2" class="c-email">E-mail</th>
            <th colspan="2" class="c-deploy">Proposed Deployment</th>
          </tr>
          <tr>
            <th class="c-district">District</th>
            <th class="c-const">Constituency</th>
          </tr>
        </thead>

        <tbody>
          ${Array.from({ length: 5 }).map((_, i) => `
            <tr>
              <td class="center">${i + 1}</td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
              <td><input class="cell-input" /></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <div class="d-bottom">
      <div class="d-line">
        <div class="d-label">Name of the Head of Organization/Contact Person:</div>
        <div class="d-fill"><input /></div>
      </div>

      <!-- STATIC (per your rule: 2nd d-line) -->
      <div class="d-line">
        <div class="d-label">Signature:</div>
        <div class="d-fill"></div>
      </div>

      <div class="d-line">
        <div class="d-label">Seal of Observer Organization:</div>
        <div class="d-fill"><input /></div>
      </div>

      <div class="d-line">
        <div class="d-label">Date:</div>
        <div class="d-fill"><input /></div>
      </div>
    </div>

    <div class="page-no">14</div>
  </div>
</section>


</main>
`;

document.getElementById("export").onclick = () => window.print();
