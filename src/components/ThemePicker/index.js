import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { switchTheme } from '@redux/actions/theme';

import BaseSelect from '@components/BaseSelect';

import Colors from '@assets/svg/Colors';

import './index.scss';

const ThemePicker = ({ themes }) => {
  const colorTheme = useSelector(state => state.theme.currentTheme);
  const dispatch = useDispatch();

  const setColorTheme = theme => dispatch(switchTheme(theme));

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (!colorTheme && isDarkMode) {
      setColorTheme('dark');
    }

    if (!colorTheme && !isDarkMode) {
      setColorTheme('default');
    }

    if (colorTheme) {
      setColorTheme(colorTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  const onColorThemeChange = e => setColorTheme(e.target.value);

  return (
    <div className="theme-picker__container">
      <Colors className="theme-picker__icon" />
      <BaseSelect
        options={themes}
        value={colorTheme}
        className="theme-picker__select"
        onChange={onColorThemeChange}
      />
    </div>
  );
};

export default ThemePicker;
