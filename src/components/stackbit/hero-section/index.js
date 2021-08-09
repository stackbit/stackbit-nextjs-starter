import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../badge';
import Button from '../button';
import ImageBlock from '../image-block';
import Link from '../link';
import VideoBlock from '../video-block';
import InlineMarkdown from '../inline-markdown';

export default function HeroSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'auto';
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames(colors, 'py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'text-center': alignHoriz === 'center',
                'text-right': alignHoriz === 'right'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'w-full': height === 'viewport'
                })}
            >
                <HeroVariants {...props} />
            </div>
        </div>
    );
}

function HeroVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return HeroFeatureRight(props);
        case 'variant-b':
            return HeroFeatureLeft(props);
        case 'variant-c':
            return HeroFeatureTop(props);
        case 'variant-d':
            return HeroFeatureBottom(props);
    }
    return null;
}

function HeroFeatureRight(props) {
    return (
        <div
            className={classNames('grid gap-8 lg:items-center', {
                'lg:grid-cols-2': props.feature
            })}
        >
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
            {props.feature && (
                <div>
                    {HeroFeature(props.feature)}
                </div>
            )}
        </div>
    );
}

function HeroFeatureLeft(props) {
    return (
        <div
            className={classNames('grid gap-8 lg:items-center', {
                'lg:grid-cols-2': props.feature
            })}
        >
            {props.feature && (
                <div>
                    {HeroFeature(props.feature)}
                </div>
            )}
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
        </div>
    );
}

function HeroFeatureTop(props) {
    return (
        <>
            {props.feature && (
                <div className="mb-8 lg:mb-12">
                    {HeroFeature(props.feature)}
                </div>
            )}
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
        </>
    );
}

function HeroFeatureBottom(props) {
    return (
        <>
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
            {props.feature && (
                <div className="mt-8 lg:mt-12">
                    {HeroFeature(props.feature)}
                </div>
            )}
        </>
    );
}

function HeroFeature(feature) {
    switch (feature.type) {
        case 'image_block':
            return <ImageBlock {...feature} className="mx-auto" />;
        case 'video_block':
            return <VideoBlock {...feature} className="mx-auto" />;
    }
    return null;
}

function HeroContent(props) {
    return (
        <>
            {props.badge && <Badge label={props.badge} />}
            {props.title && (
                <h1 className="font-medium font-sans text-4xl tracking-tight sm:text-5xl mb-6">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h1>
            )}
            {props.text && <Markdown className="md:text-lg">{props.text}</Markdown>}
        </>
    );
}

function HeroActions(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('flex flex-wrap items-center -mx-2', {
                'mt-8': props.badge || props.title || props.text,
                'justify-center': alignHoriz === 'center',
                'justify-end': alignHoriz === 'right'
            })}
        >
            {props.actions.map((action, idx) =>
                (action.type === 'primary-button' || action.type === 'secondary-button') ? (
                    <Button
                        key={idx}
                        {...action}
                        className="mb-3 mx-2 lg:whitespace-nowrap"
                    />
                ) : (
                    <Link key={idx} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" />
                )
            )}
        </div>
    );
}
