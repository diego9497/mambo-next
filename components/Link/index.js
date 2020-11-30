import NextLink from "next/link";
export default function Link({ href, children, hash = "" }) {
  if (process.env.SPA) {
    return (
      <NextLink href={href}>
        <a style={{ textDecoration: "none" }}>{children}</a>
      </NextLink>
    );
  } else {
    return (
      <a
        href={href === "/" ? href : href + ".html" + hash}
        style={{ textDecoration: "none" }}
      >
        {children}
      </a>
    );
  }
}
