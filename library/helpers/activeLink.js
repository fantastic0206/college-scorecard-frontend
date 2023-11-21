import { withRouter } from "next/router";
const ActiveLink = ({ className, children, router, href, query }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // router.push(href);
    router.push(
      {
        pathname: href,
        query: query,
      },
      href
    );
  };

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
