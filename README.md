# WorksAi WaveCut Studio (`worksai-wavecut-studio`)

> Zero-backend browser waveform audio editor with automatic dead-air silence cutting and chapter show-notes generation.

- **Live Subdomain Application:** [https://wavecut.worksai.org](https://wavecut.worksai.org)
- **WorksAI Hub Specification:** [https://worksai.org/apps/worksai-wavecut-studio](https://worksai.org/apps/worksai-wavecut-studio)
- **Category:** A. Web apps
- **License:** MIT (Derived from [AudioMass](https://github.com/pkalogiros/AudioMass) @ `21f5ee1`)

## Capability Matrix
- **What You Can Do:** Analyze audio sample arrays for silence intervals (<0.02 RMS), construct valid 44-byte RIFF WAVE 16-bit mono PCM containers, and format timestamped podcast chapter Markdown.
- **Deterministic Domain Utilities:** analyzeWaveformAndBuildChapters (RMS window silence detector, DataView 44-byte RIFF WAVE PCM header builder, and Markdown chapter formatter).
- **Genuine AI Model Features:** Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct) show-notes summarization and chapter title refinement.
- **Persisted R2/Neon Features:** Trimmed waveform metadata, silence interval logs, and chapter Markdown persisted in Cloudflare R2 (workspaces/worksai-wavecut-studio/*).
- **Known Limitations:** Operates on PCM sample buffers and transcript segments; MP3 encoding is intentionally omitted to preserve 100% MIT licensing.

## Verification & Local Testing
```bash
npm run lint
npm run typecheck
npm test
```
