// =============================================================================
// Uraan - Demo Templates Data & Generator Module
// Dynamic Given Name Interpolation for Word (.doc) and Text (.txt) Downloads
// =============================================================================

export const generateTemplates = (
  givenName = 'Ayesha Rahman',
  field = 'Computer Science & AI',
  degree = "Master's Degree",
  targetCountry = 'Germany'
) => {
  const safeName = (givenName && givenName.trim()) || 'Applicant Name'
  const firstName = safeName.split(' ')[0] || 'Applicant'
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return [
    {
      id: 'cv',
      title: 'Academic Scholarship CV / Resume',
      category: 'Curriculum Vitae',
      tag: 'Europass & US Harvard Format',
      colorTag: 'green',
      iconType: 'cv',
      description:
        'Standard 2-page academic curriculum vitae structured specifically for international scholarship evaluation committees (DAAD, Chevening, Erasmus Mundus, Fulbright).',
      fileBaseName: `${safeName.replace(/[^a-zA-Z0-9_-]/g, '_')}_Scholarship_CV`,
      previewSummary: `Curriculum Vitae of ${safeName} highlighting academic achievements, research publications, GPA, honors, and leadership profile for ${targetCountry} scholarship committees.`,
      getHtml: () => `
        <div style="font-family: 'Calibri', Arial, sans-serif; line-height: 1.45; color: #111827; max-width: 800px; margin: 0 auto; padding: 20px;">
          <!-- HEADER / CONTACT -->
          <div style="border-bottom: 3px solid #15803d; padding-bottom: 12px; margin-bottom: 20px;">
            <h1 style="font-size: 24pt; margin: 0 0 6px 0; color: #15803d; text-transform: uppercase; letter-spacing: 0.5px;">${safeName}</h1>
            <p style="margin: 0; font-size: 10.5pt; color: #4b5563;">
              Aspiring ${degree} Scholar &bull; Specialization: <strong>${field}</strong><br/>
              Email: ${firstName.toLowerCase()}.scholar@uraan.example.com &bull; Phone: +1 (555) 019-2834 &bull; Target Country: <strong>${targetCountry}</strong><br/>
              LinkedIn: linkedin.com/in/${firstName.toLowerCase()}-scholar &bull; ORCID: 0009-0004-1289-4920 &bull; City, Country
            </p>
          </div>

          <!-- ACADEMIC PROFILE SUMMARY -->
          <div style="margin-bottom: 18px;">
            <h2 style="font-size: 13pt; color: #dc2626; border-bottom: 1.5px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase;">
              Academic Profile & Research Objective
            </h2>
            <p style="font-size: 10.5pt; text-align: justify; margin: 0;">
              High-achieving graduate candidate seeking admission and scholarship award for a <strong>${degree}</strong> in <strong>${field}</strong> in <strong>${targetCountry}</strong>. Proven record in scientific inquiry, quantitative research, and cross-cultural leadership. Dedicated to advancing innovation, peer-reviewed scholarship, and sustainable global development.
            </p>
          </div>

          <!-- EDUCATION -->
          <div style="margin-bottom: 18px;">
            <h2 style="font-size: 13pt; color: #dc2626; border-bottom: 1.5px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase;">
              Education & Academic Credentials
            </h2>
            <div style="margin-bottom: 10px;">
              <table style="width: 100%; font-size: 10.5pt;">
                <tr>
                  <td><strong>Bachelor of Science in ${field}</strong></td>
                  <td style="text-align: right; color: #4b5563;">2021 – 2025</td>
                </tr>
                <tr>
                  <td style="color: #15803d; font-weight: 600;">Top Tier National University</td>
                  <td style="text-align: right; font-weight: bold; color: #15803d;">CGPA: 3.88 / 4.00 (Top 2% Rank)</td>
                </tr>
              </table>
              <ul style="margin: 6px 0 0 18px; font-size: 10pt; color: #374151;">
                <li><strong>Undergraduate Thesis:</strong> "Novel Computational Frameworks and Optimization in ${field}" (Awarded Highest Distinction).</li>
                <li><strong>Relevant Coursework:</strong> Advanced Algorithms, Statistical Inference, Deep Learning, Systems Engineering, Research Methodologies.</li>
              </ul>
            </div>
          </div>

          <!-- RESEARCH EXPERIENCE -->
          <div style="margin-bottom: 18px;">
            <h2 style="font-size: 13pt; color: #dc2626; border-bottom: 1.5px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase;">
              Research Experience & Publications
            </h2>
            <div style="margin-bottom: 10px;">
              <table style="width: 100%; font-size: 10.5pt;">
                <tr>
                  <td><strong>Graduate Research Assistant</strong> &bull; University Research Laboratory</td>
                  <td style="text-align: right; color: #4b5563;">Jan 2024 – Present</td>
                </tr>
              </table>
              <ul style="margin: 6px 0 0 18px; font-size: 10pt; color: #374151;">
                <li>Co-authored peer-reviewed paper in international IEEE/Springer conference proceedings on applied ${field}.</li>
                <li>Conducted benchmark empirical experiments across 10,000+ data samples with 98.4% reproducibility precision.</li>
                <li>Mentored 12 junior undergraduate students in literature reviews and LaTeX scientific typesetting.</li>
              </ul>
            </div>
          </div>

          <!-- HONORS & AWARDS -->
          <div style="margin-bottom: 18px;">
            <h2 style="font-size: 13pt; color: #dc2626; border-bottom: 1.5px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase;">
              Honors, Scholarships & Distinctions
            </h2>
            <ul style="margin: 6px 0 0 18px; font-size: 10pt; color: #374151;">
              <li><strong>Dean’s Academic Merit Award:</strong> Awarded for consecutive 6 semesters of academic excellence (2022–2025).</li>
              <li><strong>National Science & Technology Fellowship Nominee:</strong> Selected among top 50 scholars nationwide.</li>
              <li><strong>International Student Leadership Grant:</strong> Conferred for community outreach and STEM mentorship.</li>
            </ul>
          </div>

          <!-- LEADERSHIP & EXTRACURRICULARS -->
          <div style="margin-bottom: 18px;">
            <h2 style="font-size: 13pt; color: #dc2626; border-bottom: 1.5px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase;">
              Leadership & Community Engagement
            </h2>
            <ul style="margin: 6px 0 0 18px; font-size: 10pt; color: #374151;">
              <li><strong>President</strong>, University STEM & Global Scholarship Society: Organized 14 webinars reaching 2,500+ attendees.</li>
              <li><strong>Volunteer Mentor</strong>, Youth Tech Bridge: Taught introductory programming and mathematics to 150+ underprivileged high school students.</li>
            </ul>
          </div>

          <!-- REFEREES -->
          <div>
            <h2 style="font-size: 13pt; color: #dc2626; border-bottom: 1.5px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase;">
              Academic References
            </h2>
            <p style="font-size: 10pt; color: #4b5563; margin: 0;">
              <strong>Prof. Dr. Michael Vance</strong>, Chair of Department, Email: m.vance@univ.edu<br/>
              <strong>Assoc. Prof. Elena Rostova</strong>, Principal Research Investigator, Email: e.rostova@univ.edu
            </p>
          </div>
        </div>
      `,
      getText: () => `
================================================================================
CURRICULUM VITAE: ${safeName.toUpperCase()}
================================================================================
Candidate for ${degree} in ${field}
Target Study Destination: ${targetCountry}
Email: ${firstName.toLowerCase()}.scholar@uraan.example.com | Phone: +1 (555) 019-2834
LinkedIn: linkedin.com/in/${firstName.toLowerCase()}-scholar | Date of Generation: ${currentDate}

1. ACADEMIC PROFILE & OBJECTIVE
--------------------------------------------------------------------------------
High-achieving graduate candidate seeking admission and scholarship award for a
${degree} in ${field} in ${targetCountry}. Proven record in scientific inquiry,
quantitative research, and cross-cultural leadership. Dedicated to advancing innovation,
peer-reviewed scholarship, and sustainable global development.

2. EDUCATION & ACADEMIC CREDENTIALS
--------------------------------------------------------------------------------
Bachelor of Science in ${field} (2021 – 2025)
Top Tier National University | CGPA: 3.88 / 4.00 (Top 2% of Graduating Class)
- Undergraduate Thesis: "Novel Computational Frameworks and Optimization in ${field}"
  (Awarded Highest Distinction by Departmental Review Committee).
- Relevant Coursework: Advanced Algorithms, Statistical Inference, Deep Learning,
  Systems Engineering, Scientific Research Methodologies.

3. RESEARCH EXPERIENCE & PUBLICATIONS
--------------------------------------------------------------------------------
Graduate Research Assistant | University Laboratory (Jan 2024 – Present)
- Co-authored peer-reviewed research paper in international conference proceedings on applied ${field}.
- Conducted benchmark empirical experiments across 10,000+ data samples with 98.4% reproducibility.
- Mentored 12 junior undergraduate students in literature reviews and LaTeX scientific typesetting.

4. HONORS, SCHOLARSHIPS & DISTINCTIONS
--------------------------------------------------------------------------------
- Dean's Academic Merit Award: Conferred for 6 consecutive semesters of academic excellence (2022–2025).
- National Science & Technology Fellowship Nominee: Selected among top 50 scholars nationwide.
- International Student Leadership Grant: Conferred for community outreach and STEM mentorship.

5. TECHNICAL & LANGUAGE PROFICIENCIES
--------------------------------------------------------------------------------
- Technical Stack: Python, R, MATLAB, C++, SQL, PyTorch, Git, Linux, LaTeX.
- Language Proficiencies: English (IELTS Band 8.0 - C1 Proficient), Native Language, Target Language (A2/B1).

6. ACADEMIC REFERENCES
--------------------------------------------------------------------------------
Prof. Dr. Michael Vance, Chair of Department | Email: m.vance@univ.edu
Assoc. Prof. Elena Rostova, Principal Investigator | Email: e.rostova@univ.edu
================================================================================
Generated via Uraan Global Education Platform for ${safeName}
`
    },
    {
      id: 'motivation',
      title: 'Scholarship Motivation Letter',
      category: 'Cover Letter',
      tag: 'Proven High-Acceptance Draft',
      colorTag: 'red',
      iconType: 'motivation',
      description:
        'Persuasive, highly structured 1-page motivation letter addressing international scholarship selection committees (e.g. DAAD, Chevening, Stipendium Hungaricum) explaining academic intent, institutional fit, and socio-economic vision.',
      fileBaseName: `${safeName.replace(/[^a-zA-Z0-9_-]/g, '_')}_Motivation_Letter`,
      previewSummary: `Official Letter of Motivation signed by ${safeName}, outlining passionate drive for ${degree} in ${field} and bilateral impact in ${targetCountry}.`,
      getHtml: () => `
        <div style="font-family: 'Calibri', Arial, sans-serif; line-height: 1.5; color: #111827; max-width: 800px; margin: 0 auto; padding: 20px;">
          <!-- APPLICANT HEADER -->
          <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #dc2626; padding-bottom: 12px; margin-bottom: 20px;">
            <div>
              <h2 style="font-size: 16pt; margin: 0; color: #dc2626; text-transform: uppercase;">${safeName}</h2>
              <p style="margin: 2px 0 0 0; font-size: 10pt; color: #4b5563;">
                Candidate for ${degree} &bull; ${field}<br/>
                Email: ${firstName.toLowerCase()}.scholar@uraan.example.com &bull; Phone: +1 (555) 019-2834
              </p>
            </div>
            <div style="text-align: right; font-size: 10pt; color: #4b5563;">
              Date: <strong>${currentDate}</strong><br/>
              Target: <strong>${targetCountry}</strong>
            </div>
          </div>

          <!-- RECIPIENT -->
          <div style="margin-bottom: 18px; font-size: 10.5pt; color: #1f2937;">
            <strong>To:</strong><br/>
            The Selection and Evaluation Committee,<br/>
            International Scholarship Committee & Graduate Admissions Board,<br/>
            ${targetCountry}
          </div>

          <!-- SUBJECT -->
          <div style="margin-bottom: 18px; font-size: 11.5pt; font-weight: bold; color: #15803d;">
            SUBJECT: Application for Scholarship Award and Admission to the ${degree} Program in ${field}
          </div>

          <!-- SALUTATION -->
          <p style="font-size: 10.5pt; margin-bottom: 14px;">Dear Honorable Members of the Selection Committee,</p>

          <!-- BODY PARAGRAPHS -->
          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            I am writing to express my enthusiastic application for the prestigious scholarship award to pursue the <strong>${degree}</strong> in <strong>${field}</strong> in <strong>${targetCountry}</strong>. Having graduated with top academic honors (CGPA 3.88/4.00) in my undergraduate studies, I have established a robust theoretical grounding and an unwavering commitment to solving systemic technological and societal challenges through rigorous scientific research.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            My academic trajectory has been defined by proactive inquiry. During my undergraduate thesis work on modern optimization architectures, I spearheaded experimental models that improved data handling efficiency by 24%. While working as a research assistant, I experienced firsthand how cutting-edge research in <strong>${field}</strong> translates into transformative real-world solutions. However, solving the frontier questions in this domain requires the world-renowned academic infrastructure, laboratory environments, and multidisciplinary faculty available in <strong>${targetCountry}</strong>.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            Studying in <strong>${targetCountry}</strong> is a deliberate and vital step in my career. The targeted curriculum aligns seamlessly with my research focus on scalable methodologies, while the collaborative academic environment offers an unparalleled bridge between foundational science and practical societal impact. Receiving this scholarship will alleviate financial constraints, enabling me to dedicate 100% of my intellectual energy toward high-impact research, publications, and cross-border innovation.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 18px;">
            Upon graduation, my aspiration is to return and establish dedicated research collaborations between ${targetCountry} and my home country, fostering bilateral academic exchange and leading impactful development initiatives. I am profoundly eager to contribute my dedication, diverse perspective, and work ethic to your esteemed academic community.
          </p>

          <p style="font-size: 10.5pt; margin-bottom: 24px;">
            Thank you for considering my application. I look forward to the opportunity of discussing my academic vision in an interview.
          </p>

          <!-- SIGN-OFF -->
          <div style="font-size: 10.5pt;">
            Yours sincerely,<br/><br/>
            <strong style="font-size: 12pt; color: #15803d;">${safeName}</strong><br/>
            <span style="color: #6b7280; font-size: 9.5pt;">Prospective Scholar | ${degree} in ${field}</span>
          </div>
        </div>
      `,
      getText: () => `
================================================================================
SCHOLARSHIP MOTIVATION LETTER
================================================================================
Applicant: ${safeName}
Field of Study: ${field}
Degree Level: ${degree}
Target Country: ${targetCountry}
Date: ${currentDate}

To:
The Selection and Evaluation Committee,
International Scholarship Committee & Graduate Admissions Board,
${targetCountry}

SUBJECT: Application for Scholarship Award & Admission to the ${degree} in ${field}

Dear Honorable Members of the Selection Committee,

I am writing to express my enthusiastic application for the prestigious scholarship
award to pursue the ${degree} in ${field} in ${targetCountry}. Having graduated
with top academic honors (CGPA 3.88/4.00) in my undergraduate studies, I have
established a robust theoretical grounding and an unwavering commitment to solving
systemic technological and societal challenges through rigorous scientific research.

My academic trajectory has been defined by proactive inquiry. During my undergraduate
thesis work on modern optimization architectures, I spearheaded experimental models
that improved data handling efficiency by 24%. While working as a research assistant,
I experienced firsthand how cutting-edge research in ${field} translates into
transformative real-world solutions. However, solving the frontier questions in this
domain requires the world-renowned academic infrastructure, laboratory environments,
and multidisciplinary faculty available in ${targetCountry}.

Studying in ${targetCountry} is a deliberate and vital step in my career. The targeted
curriculum aligns seamlessly with my research focus on scalable methodologies, while
the collaborative academic environment offers an unparalleled bridge between foundational
science and practical societal impact. Receiving this scholarship will alleviate
financial constraints, enabling me to dedicate 100% of my intellectual energy toward
high-impact research, publications, and cross-border innovation.

Upon graduation, my aspiration is to return and establish dedicated research collaborations
between ${targetCountry} and my home country, fostering bilateral academic exchange
and leading impactful development initiatives. I am profoundly eager to contribute my
dedication, diverse perspective, and work ethic to your esteemed academic community.

Thank you for considering my application. I look forward to the opportunity of discussing
my academic vision in an interview.

Yours sincerely,

${safeName}
Prospective Scholar | ${degree} in ${field}
Email: ${firstName.toLowerCase()}.scholar@uraan.example.com
Phone: +1 (555) 019-2834
================================================================================
Generated via Uraan Global Education Platform
`
    },
    {
      id: 'sop',
      title: 'Statement of Purpose (SOP)',
      category: 'Statement of Purpose',
      tag: 'Research & Academic Vision',
      colorTag: 'yellow',
      iconType: 'sop',
      description:
        'Comprehensive 1,000-word SOP framework detailing academic milestones, research problem statements, methodology, professors of interest, and clear post-graduation career roadmap.',
      fileBaseName: `${safeName.replace(/[^a-zA-Z0-9_-]/g, '_')}_Statement_of_Purpose`,
      previewSummary: `In-depth Statement of Purpose by ${safeName} for postgraduate enrollment in ${field} at partner universities in ${targetCountry}.`,
      getHtml: () => `
        <div style="font-family: 'Calibri', Arial, sans-serif; line-height: 1.5; color: #111827; max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 12px; margin-bottom: 20px;">
            <h1 style="font-size: 20pt; margin: 0; color: #15803d; text-transform: uppercase;">STATEMENT OF PURPOSE</h1>
            <p style="font-size: 11pt; color: #4b5563; margin: 4px 0 0 0;">
              <strong>${safeName}</strong> &bull; Application for ${degree} in ${field}<br/>
              Target Destination: <strong>${targetCountry}</strong> &bull; Date: ${currentDate}
            </p>
          </div>

          <h3 style="color: #dc2626; font-size: 12pt; text-transform: uppercase;">1. Introduction & Scientific Motivation</h3>
          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            The continuous expansion of <strong>${field}</strong> has redefined modern computational landscapes, yet addressing critical bottlenecks in efficiency, ethical deployment, and scalability remains one of the defining challenges of our generation. My objective in applying for the <strong>${degree}</strong> in <strong>${field}</strong> in <strong>${targetCountry}</strong> is to delve deeper into these foundational challenges, conduct high-caliber empirical research, and emerge as an innovation leader capable of engineering resilient global solutions.
          </p>

          <h3 style="color: #dc2626; font-size: 12pt; text-transform: uppercase;">2. Academic Background & Foundational Preparation</h3>
          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            During my Bachelor of Science studies, I maintained a strict commitment to academic excellence, culminating in a cumulative GPA of 3.88/4.00. Courses such as Advanced Algorithms, Mathematical Modeling, and Distributed Systems provided the quantitative rigor required for advanced graduate exploration. Beyond coursework, my senior capstone project allowed me to pioneer automated analysis pipelines, earning departmental distinction and validating my passion for sustained research.
          </p>

          <h3 style="color: #dc2626; font-size: 12pt; text-transform: uppercase;">3. Practical & Laboratory Research Experience</h3>
          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            As a Graduate Research Assistant, I collaborated with multi-institutional teams on empirical modeling. This experience sharpened my capabilities in statistical benchmarking, scientific writing, and independent experimentation. Navigating unresolved research hypotheses taught me resilience, intellectual humility, and the importance of reproducible scientific inquiry.
          </p>

          <h3 style="color: #dc2626; font-size: 12pt; text-transform: uppercase;">4. Institutional Alignment & Research Fit</h3>
          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            The academic departments in <strong>${targetCountry}</strong> stand at the forefront of international breakthrough scholarship. The specific curriculum offerings, combined with state-of-the-art computational laboratories and specialized research groups in <strong>${field}</strong>, present an ideal academic environment for my research goals. I am particularly excited by recent publications emerging from your faculty and am keen to contribute actively to ongoing departmental investigations.
          </p>

          <h3 style="color: #dc2626; font-size: 12pt; text-transform: uppercase;">5. Long-term Career Objectives</h3>
          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 20px;">
            Following the completion of my <strong>${degree}</strong>, I plan to pursue PhD research and join leading industrial R&D laboratories or academia as a research scientist. I envision bridging academic theory with scalable applications that benefit both developing economies and international research consortia. The scholarship support in ${targetCountry} will be the pivotal catalyst empowering me to fulfill this vision.
          </p>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 10pt; color: #4b5563;">
            Respectfully submitted by: <strong>${safeName}</strong> &bull; Applicant for ${degree} in ${field}
          </div>
        </div>
      `,
      getText: () => `
================================================================================
STATEMENT OF PURPOSE: ${safeName.toUpperCase()}
================================================================================
Degree: ${degree} in ${field}
Target Country: ${targetCountry}
Date: ${currentDate}

1. INTRODUCTION & SCIENTIFIC MOTIVATION
The continuous expansion of ${field} has redefined modern computational landscapes,
yet addressing critical bottlenecks in efficiency, ethical deployment, and scalability
remains one of the defining challenges of our generation. My objective in applying
for the ${degree} in ${field} in ${targetCountry} is to delve deeper into these
foundational challenges, conduct high-caliber empirical research, and emerge as an
innovation leader capable of engineering resilient global solutions.

2. ACADEMIC BACKGROUND & PREPARATION
During my Bachelor of Science studies, I maintained a strict commitment to academic
excellence, culminating in a cumulative GPA of 3.88/4.00. Courses such as Advanced
Algorithms, Mathematical Modeling, and Distributed Systems provided the quantitative
rigor required for advanced graduate exploration. Beyond coursework, my senior
capstone project allowed me to pioneer automated analysis pipelines, earning
departmental distinction and validating my passion for sustained research.

3. PRACTICAL & LABORATORY RESEARCH EXPERIENCE
As a Graduate Research Assistant, I collaborated with multi-institutional teams on
empirical modeling. This experience sharpened my capabilities in statistical benchmarking,
scientific writing, and independent experimentation. Navigating unresolved research
hypotheses taught me resilience, intellectual humility, and the importance of
reproducible scientific inquiry.

4. INSTITUTIONAL ALIGNMENT & RESEARCH FIT
The academic departments in ${targetCountry} stand at the forefront of international
breakthrough scholarship. The specific curriculum offerings, combined with state-of-the-art
computational laboratories and specialized research groups in ${field}, present an
ideal academic environment for my research goals. I am particularly excited by recent
publications emerging from your faculty and am keen to contribute actively to ongoing
departmental investigations.

5. LONG-TERM CAREER OBJECTIVES
Following the completion of my ${degree}, I plan to pursue PhD research and join leading
industrial R&D laboratories or academia as a research scientist. I envision bridging
academic theory with scalable applications that benefit both developing economies and
international research consortia. The scholarship support in ${targetCountry} will be
the pivotal catalyst empowering me to fulfill this vision.

Respectfully submitted,
${safeName}
================================================================================
`
    },
    {
      id: 'lor',
      title: 'Letter of Recommendation (LOR) Sample',
      category: 'Reference Letter',
      tag: 'Academic Professor Endorsement',
      colorTag: 'green',
      iconType: 'lor',
      description:
        'Formal recommendation template written from the perspective of an academic professor / thesis supervisor, confirming top percentile ranking, analytical depth, and laboratory ethic of the applicant.',
      fileBaseName: `${safeName.replace(/[^a-zA-Z0-9_-]/g, '_')}_Academic_LOR_Sample`,
      previewSummary: `Academic reference letter endorsing ${safeName} for scholarship selection committees and graduate admissions in ${targetCountry}.`,
      getHtml: () => `
        <div style="font-family: 'Calibri', Arial, sans-serif; line-height: 1.5; color: #111827; max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="border-bottom: 2px solid #15803d; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #15803d; font-size: 16pt;">DEPARTMENT OF ACADEMIC SCIENCES & ENGINEERING</h2>
            <p style="margin: 2px 0 0 0; font-size: 10pt; color: #4b5563;">
              Office of the Professor & Research Chair &bull; University Campus, Building 4<br/>
              Date: <strong>${currentDate}</strong>
            </p>
          </div>

          <p style="font-size: 10.5pt; margin-bottom: 14px;"><strong>To the International Scholarship Selection Committee:</strong></p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            It is my distinct pleasure to provide this highest-priority recommendation for <strong>${safeName}</strong> in support of their application for the prestigious scholarship award and admission to the <strong>${degree}</strong> in <strong>${field}</strong> in <strong>${targetCountry}</strong>. I have known ${firstName} for the past three years as their course instructor and undergraduate thesis advisor, and I rank them without hesitation in the <strong>top 2%</strong> of students I have instructed in my 18-year academic tenure.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            In my advanced lecture seminars, <strong>${safeName}</strong> consistently demonstrated intellectual curiosity and sharp analytical capability. While other students were satisfied with theoretical solutions, ${firstName} persistently investigated edge cases, algorithmic computational complexity, and system constraints. In their thesis research, ${firstName} exhibited the independence, perseverance, and ethical rigor typically expected of senior doctoral candidates.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            Beyond academic brilliance, <strong>${safeName}</strong> possesses remarkable communication abilities and genuine team leadership. As a peer tutor, they demonstrated extraordinary patience in explaining difficult concepts to junior students. Their integrity, humility, and hunger for knowledge make them an exemplary cultural and academic ambassador.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 20px;">
            I am supremely confident that <strong>${safeName}</strong> will thrive in the challenging academic environment of <strong>${targetCountry}</strong> and will bring honor to any scholarship foundation granting them support. I recommend ${safeName} with my highest possible enthusiasm.
          </p>

          <div style="font-size: 10.5pt;">
            Sincerely,<br/><br/>
            <strong style="color: #15803d;">Prof. Dr. Arthur Vance, Ph.D.</strong><br/>
            Chair of Research & Professor of Computational Sciences<br/>
            Email: a.vance.department@university.edu &bull; Phone: +1 (555) 012-9843
          </div>
        </div>
      `,
      getText: () => `
================================================================================
ACADEMIC LETTER OF RECOMMENDATION
================================================================================
Applicant Nominated: ${safeName}
Program: ${degree} in ${field}
Destination: ${targetCountry}
Date: ${currentDate}

To the International Scholarship Selection Committee:

It is my distinct pleasure to provide this highest-priority recommendation for
${safeName} in support of their application for the prestigious scholarship
award and admission to the ${degree} in ${field} in ${targetCountry}.
I have known ${firstName} for the past three years as their course instructor and
undergraduate thesis advisor, and I rank them without hesitation in the top 2%
of students I have instructed in my 18-year academic tenure.

In my advanced lecture seminars, ${safeName} consistently demonstrated intellectual
curiosity and sharp analytical capability. While other students were satisfied with
theoretical solutions, ${firstName} persistently investigated edge cases, algorithmic
computational complexity, and system constraints. In their thesis research,
${firstName} exhibited the independence, perseverance, and ethical rigor typically
expected of senior doctoral candidates.

Beyond academic brilliance, ${safeName} possesses remarkable communication abilities
and genuine team leadership. As a peer tutor, they demonstrated extraordinary patience
in explaining difficult concepts to junior students. Their integrity, humility,
and hunger for knowledge make them an exemplary cultural and academic ambassador.

I am supremely confident that ${safeName} will thrive in the challenging academic
environment of ${targetCountry} and will bring honor to any scholarship foundation
granting them support. I recommend ${safeName} with my highest possible enthusiasm.

Sincerely,

Prof. Dr. Arthur Vance, Ph.D.
Chair of Research & Professor of Computational Sciences
Email: a.vance.department@university.edu
================================================================================
`
    },
    {
      id: 'cold_email',
      title: 'Cold Email to Prospective Professor',
      category: 'Faculty Outreach',
      tag: 'Research Supervision Request',
      colorTag: 'red',
      iconType: 'email',
      description:
        'Tested, polite cold email template to contact professors in Europe, UK, Canada, and the USA to secure graduate research supervision and funded assistantships (RA/TA).',
      fileBaseName: `${safeName.replace(/[^a-zA-Z0-9_-]/g, '_')}_Cold_Email_to_Professor`,
      previewSummary: `High-conversion email draft from ${safeName} requesting graduate research supervision in ${field} under a professor in ${targetCountry}.`,
      getHtml: () => `
        <div style="font-family: 'Calibri', Arial, sans-serif; line-height: 1.5; color: #111827; max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 12px 16px; margin-bottom: 18px; border-radius: 6px;">
            <strong style="color: #dc2626;">EMAIL SUBJECT LINE:</strong><br/>
            Prospective ${degree} Student (Funded/Scholarship Applicant) &bull; Research Alignment in ${field} &bull; ${safeName}
          </div>

          <p style="font-size: 10.5pt; margin-bottom: 12px;">Dear Professor [Professor's Last Name],</p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 12px;">
            I hope this email finds you well. My name is <strong>${safeName}</strong>, and I recently completed my Bachelor's degree in <strong>${field}</strong> with top academic honors (CGPA 3.88/4.00). I am preparing to apply for the upcoming <strong>${degree}</strong> cycle in <strong>${targetCountry}</strong> with full external scholarship funding.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 12px;">
            I have been closely following your research group's work on <em>[Specific Topic from Professor's Recent 2025/2026 Paper]</em>, particularly your findings regarding <em>[Key finding/methodology]</em>. During my undergraduate research, I developed a similar pipeline addressing <em>[Brief mention of your thesis/project]</em>, which yielded promising benchmark performance.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 12px;">
            Given the direct synergy between your laboratory's ongoing focus and my research background, I am writing to inquire if you are considering accepting new <strong>${degree}</strong> students for the upcoming academic session. Because I am applying through competitive scholarship funding schemes, my enrollment will not require departmental tuition financing.
          </p>

          <p style="font-size: 10.5pt; text-align: justify; margin-bottom: 14px;">
            I have attached my Academic CV and 2-page Research Statement for your kind review. If your schedule allows, I would welcome the opportunity to discuss how my skillset could contribute to your laboratory's objectives.
          </p>

          <p style="font-size: 10.5pt; margin-bottom: 20px;">
            Thank you very much for your time and consideration.
          </p>

          <div style="font-size: 10.5pt;">
            Sincerely,<br/><br/>
            <strong>${safeName}</strong><br/>
            <span style="color: #4b5563; font-size: 9.5pt;">
              BSc in ${field} &bull; CGPA 3.88/4.00<br/>
              Email: ${firstName.toLowerCase()}.scholar@uraan.example.com &bull; Phone: +1 (555) 019-2834<br/>
              LinkedIn: linkedin.com/in/${firstName.toLowerCase()}-scholar
            </span>
          </div>
        </div>
      `,
      getText: () => `
================================================================================
COLD EMAIL TO PROSPECTIVE PROFESSOR / SUPERVISOR
================================================================================
Sender: ${safeName}
Target Destination: ${targetCountry}
Field: ${field} | Degree: ${degree}

SUBJECT: Prospective ${degree} Student (Scholarship Applicant) | Research Alignment in ${field} - ${safeName}

Dear Professor [Professor's Last Name],

I hope this email finds you well. My name is ${safeName}, and I recently completed
my Bachelor's degree in ${field} with top academic honors (CGPA 3.88/4.00). I am
preparing to apply for the upcoming ${degree} cycle in ${targetCountry} with full
external scholarship funding.

I have been closely following your research group's work on [Specific Topic from
Professor's Recent 2025/2026 Paper], particularly your findings regarding [Key
finding/methodology]. During my undergraduate research, I developed a similar pipeline
addressing [Brief mention of your thesis/project], which yielded promising benchmark performance.

Given the direct synergy between your laboratory's ongoing focus and my research
background, I am writing to inquire if you are considering accepting new ${degree}
students for the upcoming academic session. Because I am applying through competitive
scholarship funding schemes, my enrollment will not require departmental tuition financing.

I have attached my Academic CV and 2-page Research Statement for your kind review.
If your schedule allows, I would welcome the opportunity of a brief 10-minute video
call to discuss how my skillset could contribute to your laboratory's objectives.

Thank you very much for your time and consideration.

Sincerely,

${safeName}
BSc in ${field} | CGPA 3.88/4.00
Email: ${firstName.toLowerCase()}.scholar@uraan.example.com
Phone: +1 (555) 019-2834
LinkedIn: linkedin.com/in/${firstName.toLowerCase()}-scholar
================================================================================
`
    }
  ]
}

// Word (.doc) download helper
export const downloadDocFile = (title, htmlBody, fileBaseName) => {
  const fullHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>${title}</title>
      <style>
        body { font-family: 'Calibri', Arial, sans-serif; font-size: 11pt; line-height: 1.45; color: #111827; margin: 1in; }
        h1 { font-size: 18pt; color: #15803d; border-bottom: 2pt solid #15803d; padding-bottom: 4pt; margin-bottom: 12pt; }
        h2 { font-size: 13pt; color: #dc2626; border-bottom: 1pt solid #e5e7eb; padding-bottom: 2pt; margin-top: 14pt; margin-bottom: 6pt; }
        h3 { font-size: 11.5pt; color: #0f172a; margin-top: 8pt; margin-bottom: 2pt; font-weight: bold; }
        p { margin-top: 0; margin-bottom: 8pt; }
        ul { margin-top: 0; margin-bottom: 8pt; padding-left: 20pt; }
        li { margin-bottom: 3pt; }
        .footer-tag { margin-top: 30pt; border-top: 1pt solid #d1d5db; padding-top: 8pt; font-size: 9pt; color: #6b7280; text-align: center; }
      </style>
    </head>
    <body>
      ${htmlBody}
      <div class="footer-tag">Official Document Template generated by Uraan International Education Platform</div>
    </body>
    </html>
  `
  const blob = new Blob(['\ufeff', fullHtml], { type: 'application/msword;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${fileBaseName}.doc`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// Plain Text (.txt) download helper
export const downloadTxtFile = (textContent, fileBaseName) => {
  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${fileBaseName}.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
