export default function Advanced(props) {
  const siteConfig = props?.siteConfig ?? {};
  const page = props?.page ?? {};
  const sections = page?.sections ?? [];
  const urlPath = page?.__metadata?.urlPath ?? '';
  const pageUrl = '/' + urlPath.replace(/^\//, '');
  return <div>{props.children}</div>;
}
