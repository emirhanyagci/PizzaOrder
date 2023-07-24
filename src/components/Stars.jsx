import Star from "./Star";
function Stars({ amount }) {
  return (
    <div className="flex space-x-[0.15rem] mb-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} fill={i + 1 <= amount ? true : false} />
      ))}
    </div>
  );
}

export default Stars;
