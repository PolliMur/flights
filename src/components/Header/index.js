import { memo } from 'react';
import { DateTime } from 'luxon';

import PopupCart from '@components/PopupCart';
import ThemePicker from '@components/ThemePicker';

import logo from '@assets/icons/plane-tickets.png';

import './index.scss';

const colorThemes = [
  { value: 'default', label: 'Default' },
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
];

const Header = () => (
  <div className="header__wrapper">
    <header className="header">
      <div className="header__content-container">
        <div className="header__logo-container">
          <div className="header__logo">
            <img className="header__logo-img" src={logo} alt="Ticket logo" />
          </div>

          <div className="header__logo-title">Avia tickets</div>
        </div>
        <div className="header__info-container">
          <div className="header__date">
            {DateTime.now().toFormat('yyyy, LLLL dd')}
          </div>
          <div className="header__location">Minsk, Belarus</div>
        </div>
      </div>
      <div className="header__feats-container">
        <PopupCart />
        <ThemePicker themes={colorThemes} />
      </div>
    </header>
  </div>
);

export default memo(Header);
