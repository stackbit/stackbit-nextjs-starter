import Link from 'next/link';

export default function Button({ label, url, icon, alt, type, className }) {
  return (
    <Link href={url}>
      <a
        aria-label={alt}
        title={alt}
        className="sb-btn inline-flex items-center justify-center text-center transition duration-200 focus:outline-none bg-green-600 text-red-600"
      >
        OVERRIDEN: {label}
      </a>
    </Link>
  );
}
