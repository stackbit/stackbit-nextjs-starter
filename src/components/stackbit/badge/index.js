import classNames from 'classnames';

export default function Badge({ label, className }) {
    if (!label) {
        return null;
    }
    return <p className={classNames('sb-badge inline-block mb-4 text-xs', className)}>{label}</p>;
}
