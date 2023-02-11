import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="50"
    width="50"
    radius="6"
    color="#bab6b5"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClassName=""
    visible={true}
  />
);
