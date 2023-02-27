import './index.scss';
import { RevolvingDot } from 'react-loader-spinner';

const Spinner = () => (
  <div className="spinner-container">
    <RevolvingDot
      height="100"
      width="100"
      color="var(--spinner-color)"
      ariaLabel="loading"
      wrapperClass="spinner"
    />
  </div>
);

export default Spinner;
