# WorksAi WaveCut Studio (`worksai-03`)

> Zero-backend browser waveform audio editor with automatic dead-air silence cutting and chapter show-notes generation.

**Category:** A. Web apps  
**License:** MIT (Derivative of [AudioMass](https://github.com/pkalogiros/AudioMass) @ `21f5ee1`)  
**Portfolio Page:** `https://devinai.uk/worksai/products/worksai-wavecut-studio/`

## Value Proposition & Scope
Gives podcasters, educators, and Chromebook users instant browser-based audio trimming, RMS silence/dead-air removal, vocal clarity EQ presets, and timestamped show-notes generation without Descript's $16-$50/mo subscription.

### What Works Out-of-the-Box (Zero External Credentials Required)
PCM waveform analysis, RMS silence detection & trimming, RIFF WAV export, vocal EQ chain configuration, and timestamped chapter/show-notes formatting.

### What Requires User Configuration (`.env.example`)
Optional `OPENAI_API_KEY` or local Whisper endpoint for raw audio-to-text transcription.

## Measurable Acceptance Criteria
- AC-01: Computes accurate RMS amplitude envelopes and detects silence/dead-air intervals below a configurable dBFS threshold and minimum duration.
- AC-02: Non-destructively strips detected dead-air intervals and recalculates adjusted chapter timestamps.
- AC-03: Generates valid 44-byte RIFF/WAVE PCM headers and binary audio buffers with zero LGPL dependencies.
- AC-04: Synthesizes formatted Markdown podcast chapters and show notes from timestamped transcript segments.

## Known Limitations
- Exports standard uncompressed 16-bit PCM `.wav` and `.amss.json` sessions natively to remain 100% MIT-clean without LGPL MP3 binaries.
- Browser memory limits single-tab uncompressed PCM buffers to ~1.5 hours of stereo 44.1kHz audio.

## Quick Start & Verification
```bash
npm test
```
