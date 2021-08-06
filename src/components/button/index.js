import classNames from 'classnames';
import Link from 'next/link';
import ArrowRight from '../../svgs/arrow-right';
import Cart from '../../svgs/cart';

export default function Button({ label, url, icon, alt, type, className }) {
    const iconMap = {
        arrowRight: ArrowRight,
        cart: Cart
    };
    const IconComponent = icon ? iconMap[icon] : null;

    console.log(type)
    return (
        <Link href={url}>
            <a
                aria-label={alt}
                title={alt}
                className={classNames(
                    'sb-btn inline-flex items-center justify-center text-center transition duration-200 focus:outline-none',
                    className,
                    type === 'primary-button' ? 'sb-btn-primary' : 'sb-btn-secondary'
                )}
            >
                {label}
                {IconComponent && <IconComponent className="fill-current h-5 ml-2 w-5" />}
            </a>
        </Link>
    );
}
