import Header from '@components/Header';

import './index.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
