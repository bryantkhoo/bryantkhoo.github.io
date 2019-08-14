import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
  h1: {
    color: "var(--textTitle)",
  },
  h2: {
    color: "var(--textTitle)",
  },
  h3: {
    color: "var(--textTitle)",
  },
  p: {
    color: "var(--textNormal)",
  },
  footer: {
    color: "var(--textNormal)",
  },
  header: {
    color: "var(--textNormal)",
  },
  small: {
    color: "var(--textNormal)",
  },
  label: {
    color: "var(--textNormal)",
  },
  a: {
    color: "var(--textLink)",
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  "a.anchor": {
    boxShadow: "none",
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  hr: {
    background: "var(--hr)",
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
