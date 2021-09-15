export default function NewBadge(props) {
  const { label } = props;
  return (
    <div className="bg-red-600 text-white inline-block px-2 py-1 mb-2">Overriden: { label }</div>
  );
}
