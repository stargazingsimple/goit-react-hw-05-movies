import { BallTriangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <BallTriangle
      color="pink"
      height={80}
      width={80}
      wrapperStyle={{ justifyContent: 'center' }}
    />
  );
}
