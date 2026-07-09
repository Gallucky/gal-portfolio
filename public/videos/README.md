# Videos

Static video assets served directly from the site root, same pattern as `public/Gal-Ben-Abu-CV.pdf`.

The recruiter pitch is recorded once per language and switches automatically with the site's language toggle. Drop the two files here as:

```
welcome-recruiters-en.mp4
welcome-recruiters-he.mp4
```

The `WelcomeRecruitersSection` component (`src/components/section/WelcomeRecruiters/WelcomeRecruiters.section.tsx`) reads the path per language from `data.videoSrc` in `src/lang/section/WelcomeRecruiters/welcomeRecruiters.ts` — no code change needed once both files are added.

Scripts to record from: `docs/welcome-recruiters-video-script.md`.

Delete this README once both videos are in place, or leave it; it isn't referenced anywhere.
