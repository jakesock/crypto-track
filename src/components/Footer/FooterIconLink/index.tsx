import { IconButton, Link } from '@material-ui/core';

interface FooterIconLinkProps {
  to: string;
}

const FooterIconLink: React.FC<FooterIconLinkProps> = ({ children, to }) => {
  return (
    <IconButton component={Link} href={to} target="_blank">
      {children}
    </IconButton>
  );
};

export default FooterIconLink;
