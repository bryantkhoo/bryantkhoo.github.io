import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
  h1: {
    color: "var(--textTitle)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  h2: {
    color: "var(--textTitle)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  h3: {
    color: "var(--textTitle)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  p: {
    color: "var(--textNormal)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  figcaption: {
    color: "var(--textNormal)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  li: {
    color: "var(--textNormal)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  footer: {
    color: "var(--textNormal)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  header: {
    color: "var(--textNormal)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  small: {
    color: "var(--textNormal)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  label: {
    color: "var(--textNormal)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
  },
  a: {
    color: "var(--textLink)",
    webkittransition: "color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "color 2s ease" /* For modern browsers */,
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
    webkittransition: "background-color 2s" /* For Safari 3.0 to 6.0 */,
    transition: "background-color 2s" /* For modern browsers */,
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
