export default function VideoBlock(props) {
    const videoUrl = props.videoUrl;
    if (!videoUrl) {
        return null;
    }
    return (
        <video
            {...(props.autoplay && { autoPlay: true })}
            {...(props.loop && { loop: true })}
            {...(props.muted && { muted: true })}
            {...(props.controls && { controls: true })}
            playsInline
            poster={props.posterUrl}
            className={props.className}
        >
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
}
