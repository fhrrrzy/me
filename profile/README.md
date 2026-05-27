# Profile Data — Portfolio Source of Truth

```
profile/
├── README.md                         ← you are here
├── Profile.pdf                       ← original LinkedIn export
│
├── identity/
│   ├── README.md                     ← basics: name, location, bio, one-liners
│   ├── personality.md                ← traits, fun facts, quirks
│   ├── socials.md                    ← all social links
│   ├── interests.md                  ← beyond code: what fascinates me, references
│   └── availability.md              ← freelance status, how I work, what I take on
│
├── capabilities/
│   ├── README.md                     ← roles overview + what sets me apart
│   ├── languages.md                  ← programming languages & proficiency
│   ├── frontend.md                   ← frameworks, styling, animation, charts
│   ├── backend.md                    ← Laravel, auth, real-time, bots
│   ├── data.md                       ← databases, ORMs, processing
│   └── infrastructure.md            ← Docker, Linux, hosting, tooling
│
├── case-studies/
│   ├── README.md                     ← index of all case studies
│   ├── cmms.md                       ← SAP PM equipment monitoring (71 factories)
│   ├── dendrogram-master.md          ← data unification for 71 factories
│   ├── oas.md                        ← paperless paskibra competition judging
│   ├── cradle-space.md               ← premium coworking brand site (solo)
│   ├── palmira.md                    ← multi-provider AI chat workspace
│   ├── other-projects.md             ← quick-reference grid of smaller work
│   ├── testimonials.md               ← client/user quotes
│   └── screenshots/                  ← visual assets per project
│       ├── README.md                    naming convention guide
│       ├── oas/                         hero-desktop ✅, hero-mobile ✅
│       ├── cradle-space/                hero-desktop ✅, hero-mobile ✅
│       ├── cmms/                        ← you provide (login required)
│       ├── dendrogram-master/           ← you provide (login required)
│       └── palmira/                     ← you provide (login required)
│
├── career/
│   ├── README.md                     ← timeline + career arc narrative
│   ├── ptpn4.md                      ← current role details
│   ├── diskominfo.md                 ← government software engineer
│   ├── cowalaid.md                   ← startup frontend developer
│   ├── freelance.md                  ← early career freelance
│   └── education.md                  ← UNIMED, Dicoding, certifications
│
├── cv/
│   ├── README.md                     ← structured CV data (for site generation)
│   └── experience.md                ← bullet-point experience format
│
└── values/
    ├── README.md                     ← how I think (problem-first, A→B→C→D formula)
    ├── design-philosophy.md          ← clarity, speed, mobile-first, motion
    └── tone-guide.md                 ← writing rules for portfolio copy
```

## How to Use This

| Portfolio Section | Source File(s) |
|-------------------|----------------|
| Hero | `identity/README.md` (one-liners) |
| About | `identity/personality.md` + `identity/interests.md` + `values/README.md` |
| What I Do | `capabilities/` (each file = one section) |
| Case Studies | `case-studies/*.md` (each = one project page) |
| More Work | `case-studies/other-projects.md` |
| Testimonials | `case-studies/testimonials.md` |
| Timeline | `career/README.md` |
| CV / Resume | `cv/README.md` → render as page or generate PDF |
| Contact / CTA | `identity/socials.md` + `identity/availability.md` |
| Copywriting tone | `values/tone-guide.md` |

## What You Still Need to Provide

- [ ] Screenshots for CMMS, Dendrogram Master, Palmira (login required)
- [ ] More Cradle Space screenshots (scroll sections, navigation open)
- [ ] Real testimonial from Cradle Space owner
- [ ] Real testimonial from Dendrogram Master users
- [ ] Certifications file when ready
- [ ] Any additional case studies you want to add
