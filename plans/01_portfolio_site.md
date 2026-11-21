# Plan 01: Personal portfolio website (Next.js on Cloud Run)

## Context
Priya wants a personal portfolio site for an assignment. It should present her background, three projects, leadership, skills, and contact details, and it must be a dynamic Next.js app (App Router, JavaScript, plain responsive CSS). The site deploys to Google Cloud Run through a Cloud Build trigger that runs on every push to `main` of a private GitHub repo. Content comes from her resume, the QSVM final report, the sludge alert report, and the IEEE paper.

Decisions already made:
- Contact details on the site and in the vCard: **Email, LinkedIn, GitHub**. No phone number.
- **No Awards section.**
- **No project PDFs are downloadable.** The research paper card links to IEEE Xplore: https://ieeexplore.ieee.org/abstract/document/10434550
- **The QSVM card describes the method without quoting accuracy figures**, because the report's numbers contradict each other.

- **Resume download:** use `~/projects/portfolio_source/Lakshmi Priya - Public Resume.pdf`, the version without the phone number. It's copied to `public/resume/srilakshmi_priya_vutukuri_resume.pdf`. If that file isn't there, I'll stop and ask you for the path before adding the download. I won't fall back to the version that has the phone number.

## Where it lives
- New, separate repo: `~/projects/portfolio_site/`. It does not go inside `hello_api`.
- `git init -b main`, then switch to the branch `initial_portfolio_build` before writing any code. I won't commit, push, merge, or open PRs.
- Source PDFs: please copy the four PDFs into `~/projects/portfolio_source/`. This folder is outside the repo, so the reports are never committed. Only the resume gets copied into `public/`.

## Assignment files (created first, after approval)
- `CLAUDE.md`: same rules as hello_api (prompt log, numbered plans, no commits to `main`, underscores in names, README kept current, no unneeded packages, no secrets), with the Project section changed to "Next.js App Router, JavaScript, npm".
- `PROMPTS.md`: time-stamped entry with this prompt.
- `plans/01_portfolio_site.md`: copy of this approved plan, unchanged.
- `README.md`: install, run, build, Docker, and deploy steps.

## Rewritten copy (please review)

**Home: introduction**
> Hi, I'm Srilakshmi Priya Vutukuri. I combine my background in electrical engineering with what I'm learning in Purdue's M.S. in Business Analytics and Information Management to solve problems in technology and operations. I use Python, quantitative analysis, and structured problem-solving to turn technical data into practical business insights.

**Home: About Me**
> I'm 22, and I'm happiest when I'm learning something new. I also value time on my own to recharge. Outside of classes, you'll usually find me singing, drawing, or cooking, and my favorite sports are badminton, swimming, and table tennis. One thing that makes me a little different: I have 24 fingers. It's a fun conversation starter and a reminder that being different is a good thing.

## Pages and navigation
Page order: **Home → Projects → Skills → Contact**. Every page has a sticky top nav that marks the current page. On phones it collapses into a menu button. A `PageNav` component adds Previous/Next buttons at the bottom of each page (Home shows only Next, Contact shows only Previous).

1. **Home** (`app/page.js`): hero with name, title, and introduction. **Download Resume** button (`/resume/srilakshmi_priya_vutukuri_resume.pdf`, uses the `download` attribute). About Me section. Education (Purdue M.S. BAIM, Aug 2027. VIT B.Tech EEE, Jul 2025). Experience (Jabil intern, Nov–Dec 2023, 3 bullets from the resume).
2. **Projects** (`app/projects/page.js`, **server-rendered on every request** via `export const dynamic = 'force-dynamic'`). One `ProjectCard` per project, each with a title, date/role, what it was about, a tools/methods tag list, a figure, and links. Below the cards is a separate **Leadership** section.
   - **Ball Bearing Fault Detection using QSVM** (Dec 2024, team member, B.Tech capstone under Dr. Srihari Mandava). Classified four bearing conditions (outer race, inner race, ball, no fault) from Case Western Reserve University vibration data. Steps: Butterworth filtering, normalization, z-score scaling. Features: RMS, kurtosis, skewness, FFT peak frequency, spectral energy, and wavelet features. The classifier is a QSVM with a ZZFeatureMap quantum kernel on a Qiskit simulator, compared against classical SVM, Decision Tree, and KNN using accuracy, precision, recall, F1, and Cohen's kappa. *Tools:* Python, Qiskit, scikit-learn, NumPy, Pandas, Matplotlib, Google Colab, MATLAB. *Picture candidate:* the filtered vibration data plots. No accuracy numbers.
   - **Design of Maneuverable Robotic Arm in Pharmaceutical Industry** (IEEE i-PACT 2023, published and presented, co-authored with Yashawanth HR and Rahulganth E N under Dr. A. Sharmila). A manually operated 2-DOF robotic arm on a 4WD chassis for handling pharmaceutical components. DPDT switches drive the chassis, and a joystick, an Arduino, and two MG995 servos control the arm. Includes forward-kinematics modeling and 3D-printed parts designed and stress-checked in Fusion 360. *Tools:* Arduino, MG995 servos, joystick module, DPDT switches, Fusion 360, 3D printing. *Picture candidate:* photo of the final assembled arm and chassis. *Link:* IEEE Xplore.
   - **Sludge Alert Detection** (Oct 2023, individual). An HC-SR04 ultrasonic sensor measures the distance to the sludge surface. The Arduino UNO converts echo time to centimeters and sounds a piezo buzzer when the distance drops below the 4 cm threshold. Simulated in TinkerCAD, built in hardware, and Gerber files made in KiCad. *Tools:* Arduino UNO R3, HC-SR04, piezo buzzer, C++/Arduino IDE, TinkerCAD, KiCad. *Picture candidate:* the TinkerCAD circuit. *Link:* https://github.com/LakshmiPriyaVutukuri/Sludge-Alert-Detection-Mini-Project
   - **Leadership** (one first-person sentence per activity):
     - "I served as Finance Head for VIT Community Radio, where I handled administrative work and kept our documentation up to date."
     - "I worked as a student coordinator for the Press and Media Team at Gravitas 2024, organizing schedules so the three-day tech fest was covered smoothly."
     - "I organized a club workshop at Gravitas 2024, planning the activity flow and assigning tasks to volunteers."
   - **Picture rules:** a card shows a picture only if it passed the check under "Pictures" below. Cards without one still look complete (no empty frame). Captions are plain descriptions with no report figure numbers (for example, "Final assembled robotic arm on its chassis"), and the alt text says the same thing.
3. **Skills** (`app/skills/page.js`): three groups labeled exactly **High**, **Medium**, **Low**. Each group has a text label plus a 3-segment meter (3/2/1 filled) so it's readable without relying on color, and the skills appear as chips. High: Python, IoT protocols, Raspberry Pi, Arduino Uno, ARM, ATmega, data structures and algorithms, KiCad, sensors, SQL, I2C, CAN, SPI. Medium: C, C++, OrCAD. Low: Xilinx.
4. **Contact** (`app/contact/page.js`): clickable cards for Email (`mailto:vutukuri@purdue.edu`), LinkedIn (`https://www.linkedin.com/in/srilakshmi-priya-vutukuri`), and GitHub (`https://github.com/LakshmiPriyaVutukuri`). External links open in a new tab with `rel="noopener noreferrer"`. The **Save Contact** button points to `/api/vcard`.
   - `app/api/vcard/route.js`: GET returns a vCard 3.0 (FN, N, EMAIL, two URLs, TITLE/ORG for Purdue) with `Content-Type: text/vcard` and `Content-Disposition: attachment; filename="srilakshmi_priya_vutukuri.vcf"`. Its contents come from the same contact list the cards use, so the two can't drift apart.

## Files
```
portfolio_site/
  CLAUDE.md  PROMPTS.md  README.md  plans/01_portfolio_site.md
  package.json  next.config.mjs (output: 'standalone')  jsconfig.json  .gitignore
  Dockerfile  .dockerignore  cloudbuild.yaml
  app/  layout.js  globals.css  page.js  not-found.js
        projects/page.js  skills/page.js  contact/page.js  api/vcard/route.js
  components/  NavBar.js (client; usePathname, menu toggle)  PageNav.js
               ProjectCard.js  SkillGroup.js  ContactCard.js
  lib/  site_content.js (intro, about, education, experience, contacts)
        projects.js  leadership.js  skills.js  page_order.js (drives nav + prev/next)
  public/  resume/srilakshmi_priya_vutukuri_resume.pdf
           images/   (only the pictures that pass the check, e.g. sludge_circuit.png,
                      robotic_arm_assembly.png, qsvm_filtered_vibration.png)
```
- **Dependencies:** only `next`, `react`, `react-dom`, pinned to the exact current stable versions at install time. No CSS framework and no linters beyond what Next includes.
- **Pictures (checked before I build the cards):** the PDFs aren't on disk yet, and poppler isn't installed (I checked `pdfimages` and `pdftoppm`), so I couldn't extract anything during planning. After approval, once the PDFs are in `~/projects/portfolio_source/`:
  1. Extract the embedded images with PyMuPDF from a throwaway venv in my scratchpad, run with `python -I`. It's never added to the project. If you'd rather, install `poppler-utils` and I'll use `pdfimages` instead.
  2. Open each candidate and keep it only if it's readable at card width (about 360px on a phone): sharp, not tiny, labels legible if it has any, and not cut off.
  3. Check each kept picture in the local preview (`npm run dev`) at all three viewport sizes. Anything that's missing or blurry is left out, and I'll tell you which ones made it.
  - The figures I expect to be weakest: the QSVM plots (small axis text) and the TinkerCAD screenshot (low resolution). The assembly photo should hold up best.
  - Shown with `next/image`, with alt text and fixed aspect ratios.
- **Styling:** CSS custom properties in `globals.css`. Palette: background `#F8FAFC`, text `#1E293B`, muted text `#475569`, primary navy `#1F3A5F`, accent teal `#0F766E`, card white with `#E2E8F0` borders. All text pairs meet WCAG AA contrast. Base font 16px (body line-height 1.6) with visible focus outlines. Breakpoints: phone < 640px (1 column, menu button), tablet 640–1023px (2-column cards), desktop ≥ 1024px (3-column cards, inline nav). 16px side gutters and no horizontal scrolling.

## Deployment: GitHub (private) → Cloud Build → Cloud Run
**Repo files I'll write:**
- `Dockerfile`: multi-stage build on the current Node LTS (Alpine). Runs `npm ci`, then `npm run build`. The final image copies `.next/standalone`, `.next/static`, and `public`, sets `PORT=8080` and `HOSTNAME=0.0.0.0`, and runs `node server.js`.
- `cloudbuild.yaml`: (1) `docker build -t us-central1-docker.pkg.dev/$PROJECT_ID/portfolio/site:$SHORT_SHA .`, (2) push the image, (3) `gcloud run deploy portfolio --image …:$SHORT_SHA --region us-central1 --allow-unauthenticated --port 8080`, with `options: logging: CLOUD_LOGGING_ONLY`. I'm using single-word names (`portfolio`, `site`) because Artifact Registry and Cloud Run don't allow underscores.

**One-time setup you'll do (documented step by step in the README):**
1. Enable APIs: `run`, `cloudbuild`, `artifactregistry`, `secretmanager`.
2. `gcloud artifacts repositories create portfolio --repository-format=docker --location=us-central1`
3. Cloud Build → Repositories (2nd gen) → **Create host connection** (GitHub). Install the Cloud Build GitHub App on **only** the private portfolio repo, then **Link repository**.
4. Create or choose a service account for builds. Grant it `roles/run.admin`, `roles/iam.serviceAccountUser`, `roles/artifactregistry.writer`, and `roles/logging.logWriter`.
5. Create the trigger: event **Push to a branch**, branch regex `^main$`, config `cloudbuild.yaml`, region `us-central1`, using that service account.
6. Merge your PR into `main`. In a fresh repo, `main` needs a first commit before you can open a PR into it.

**Checking that the trigger ran and the site is live:**
- `gcloud builds list --region=us-central1 --limit=5` should show the newest build as `SUCCESS`, and its commit should match `git rev-parse --short origin/main`. You can also check Cloud Build → History in the console.
- `gcloud run services describe portfolio --region us-central1 --format='value(status.url,status.latestReadyRevisionName)'` should show a new revision whose image tag matches the commit SHA. `gcloud run revisions list --service portfolio --region us-central1` lists the revision history.
- `curl -I <URL>/`, `<URL>/projects`, `<URL>/skills`, `<URL>/contact` should all return 200. `curl -I <URL>/api/vcard` should return `text/vcard` with the attachment header, and `curl -I <URL>/resume/srilakshmi_priya_vutukuri_resume.pdf` should return `application/pdf`.
- Then run the viewport checklist below against the live URL.

## Verification
**Local:** `npm run dev` for development. Then `npm run build` and confirm the route table marks `/projects` as **ƒ (Dynamic)**, which proves it renders on the server per request. `npm start` serves the production build. If Docker is available, also run `docker build -t portfolio . && docker run -p 8080:8080 portfolio`.

**Viewport testing:** use Chrome DevTools → Toggle device toolbar → custom sizes **Phone 375×667**, **Tablet 768×1024**, **Desktop 1440×900**. Check each item at each size:
| Check | What to confirm |
|---|---|
| Navigation | Phone: the menu button opens and closes the menu, works with the keyboard, and closes after you pick a page. Tablet/desktop: inline links. The current page is highlighted. Previous/Next go to the right pages. |
| Layout | No horizontal scrolling. Cards show in 1, 2, or 3 columns depending on width. Text doesn't overflow. Skill meters stay aligned. |
| Links | All nav links work. GitHub, IEEE Xplore, and LinkedIn open in a new tab. Email opens your mail app. No 404s. |
| Images | Every picture that's included loads sharp, undistorted, and not cropped, and has alt text (inspect to check). No broken-image icons. Cards without a picture have no empty frame. Captions have no figure numbers. |
| Downloads | The resume PDF downloads and opens. Save Contact downloads a `.vcf` that imports correctly. After deploying, test the vCard on a real phone too. |
