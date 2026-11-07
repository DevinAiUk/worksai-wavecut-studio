export const APP_DB_CONFIG = {
  schema: "worksai_hub",
  appSlug: "worksai-wavecut-studio",
  subdomain: "wavecut.worksai.org",
  mcpEndpoint: "https://wavecut.worksai.org/api/mcp",
  aiEndpoint: "https://wavecut.worksai.org/api/ai/analyze",
  mcpTools: ["wavecut.detect_silence_rms", "wavecut.generate_chapters", "wavecut.export_shownotes"]
} as const;
