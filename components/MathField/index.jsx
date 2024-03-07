export default function MathField({ value, setValue }) {
  return (
    <>
      <math-field onInput={(e) => setValue(e.target.value)}>{value}</math-field>
    </>
  );
}
