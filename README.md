# Macau Drive

A personal driving theory prep app containing all 647 original questions from the five supplied question booklets. No questions or distractors have been generated. The two supplementary PDFs are included in the source library.

## Open the web app

https://boscolei1129-svg.github.io/macau-drive-prep/

Open this link in Safari on iPad or iPhone. No ChatGPT account or sign-in is required. Anyone with the link can access the app and source PDFs; the GitHub repository is public. To add the app to your home screen, use Safari → Share → Add to Home Screen and enable Open as Web App if offered. No study progress is stored in this repository or uploaded to the server. Progress stays per-browser; use backups to transfer it. No analytics or third-party font requests are included.

## GitHub Pages hosting

The site is served by GitHub Pages from the root of the `gh-pages` branch. The `main` branch keeps the app source in `dist/`. Run `./deploy-pages.ps1` after committing updates to publish the current `dist/` tree. No ChatGPT hosting or account is used. Progress is browser-local and is not stored in Git. To transfer progress from an older site address, export it there and import it on this GitHub Pages address using Performance.

## Use

- Practice by topic, unanswered questions, latest mistakes, or bookmarks.
- Choose a mock exam question count and time limit. The default is 50 questions in 45 minutes, labeled Macau Exam Pace; you can customize these settings.
- Every new session shuffles answer choices; the same order stays fixed when resuming. Exams also shuffle questions.
- In letter-reference choices such as “A and C”, references follow the shuffled option positions. Vehicle/figure labels stay unchanged. “All / None of the above” means the other three choices.
- Exams submit at the deadline, including after you reopen the app. Unanswered exam questions count as incorrect.
- Practice progress is recorded only when you check an answer. Scores for practice sessions exclude unchecked questions.
- Performance includes unique question coverage, accuracy across submitted attempts, topic accuracy, study days, and session reviews.
- Use Performance → Export backup to preserve or transfer your progress. Import replaces the current browser's progress after confirmation.

## Offline copy

Extract the downloaded ZIP and open `index.html` in a modern browser. Keep all the files and the `assets` folder together. The question bank, figures, and original PDFs are included and do not require a server. The interface uses system fonts. Browser storage behavior for local files varies, so export a backup before moving the folder or switching browsers.

## Data and scope

Progress is saved in localStorage in the current browser, separately for each origin and browser profile. It does not sync between the hosted app and the offline copy, or between devices; use backup export/import to transfer it. Clearing browser/site data removes the saved progress.

Question and choice text is extracted from the original PDFs with whitespace and extraction punctuation normalized. Scoring uses the original printed solution tables. Original figures are cropped from the supplied PDFs, without generated replacements. Each feedback/review links to the original question and answer-key pages. The app follows the supplied source material, including the 2014 question booklets, without externally updating the rules.

Question counts: Traffic signs 176; Road situations 66; Traffic regulations 150; Offences & penalties 139; Driving safety 116. Total: 647.

## Figure loading

Session figures are fetched and decoded before a new session begins, then reused from memory as you move between questions. A new exam timer starts only after its figures are ready. Loading can be canceled or retried without replacing your existing session. Original figure bytes and source questions are unchanged.

## Verification

Run `node verify.cjs` in the source checkout. The checks cover the bank, assets, question counts, all 24 option orders for every question, letter references, and unique-coverage/latest-mistake tracking. Browser checks covered practice scoring, timed examination, automatic expiry submission, refresh/resume, and session results.
