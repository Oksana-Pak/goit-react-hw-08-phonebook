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
      top: '400px',
      left: '2%',
    }}
    wrapperClassName=""
    visible={true}
  />
);
