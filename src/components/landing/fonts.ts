import { IBM_Plex_Mono, Instrument_Sans, Schibsted_Grotesk } from "next/font/google"

/*
 * The landing's three Google families. next/font downloads them at build time
 * and serves them from our own origin, so the browser never talks to Google.
 *
 * Tactic Sans is not here: it is licensed and self-hosted through @font-face
 * in src/styles/tyou-ds.css, and reserved for the logotype and the hero.
 *
 * The variables go on the .ty-landing root, which is where tyou-ds.css scopes
 * its tokens, so --font-display / --font-text / --font-mono can read them.
 */
const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const landingFontVariables = [
  schibstedGrotesk.variable,
  instrumentSans.variable,
  ibmPlexMono.variable,
].join(" ")
