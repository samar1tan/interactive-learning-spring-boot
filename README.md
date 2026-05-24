# Spring Boot Architect Gym

An interactive learning website for entry-level Java engineers who want to learn Spring Boot by practicing the parts that still matter in the AI coding era: runtime mental models, boundaries, configuration, persistence decisions, tests, observability, and review of generated code.

This is not meant to be another CRUD tutorial. Coding agents can scaffold CRUD quickly. The site is designed to help a learner start as a rookie but practice like an architect.

## What is included

- A static GitHub Pages-ready app with no build step.
- A six-module Spring Boot learning path.
- Hands-on practice drills with scratchpads and local progress tracking.
- LLM coach prompt generation for hint, review, and pair-programming modes.
- A dependency radar that separates learn-now topics from later or legacy topics.
- Architecture lab scenarios for decision practice and ADR thinking.

## Run locally

Because this is a plain static site, you can open `index.html` directly in a browser.

For a local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to the `main` branch and the repository root.
5. Save and wait for GitHub Pages to publish the site.

The `.nojekyll` file keeps GitHub Pages from applying Jekyll processing.

## Content baseline

Spring Boot documentation changes over time. The app currently labels its content as checked on `2026-05-24`, when the official Spring Boot documentation listed `4.0.6` as a stable release and described Spring Boot `4.0.6` as requiring at least Java 17.

Before making production version decisions, verify the official docs again:

- https://docs.spring.io/spring-boot/reference/index.html
- https://docs.spring.io/spring-boot/system-requirements.html
- https://docs.spring.io/spring-boot/documentation.html

## Product direction

The next useful layer is not more text. It is more deliberate practice:

- Real repo-based exercises with starter branches.
- Agent review checklists for generated Spring Boot pull requests.
- A version-aware dependency map backed by official metadata.
- Optional backend integration for real LLM conversations.
- A learner journal that turns drills into reusable ADRs.
