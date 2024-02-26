export default function ProgressBar({ progress }) {
  return <p>Occurence Progress: {Number(progress.toFixed(2))}%</p>;
}
