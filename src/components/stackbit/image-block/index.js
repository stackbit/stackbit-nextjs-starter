export default function ImageBlock(props) {
    const imageUrl = props.imageUrl;
    if (!imageUrl) {
        return null;
    }
    const imageAltText = props.imageAltText || '';
    return (
        <img className={props.className} src={imageUrl} alt={imageAltText} title={props.imageCaption} />
    );
}
