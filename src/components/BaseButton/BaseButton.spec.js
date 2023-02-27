import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import BaseButton from './index';

describe('BaseButton', () => {
    const createComponent = (props = {}) => {
        // eslint-disable-next-line testing-library/no-node-access
        render(<BaseButton {...props}>{props.children}</BaseButton>);
    };
    const getButton = () => screen.getByRole('button');

    const DEFAULT_CLASS = 'button';

    it('should be rendered with passed children', () => {
        const children = 'button label';

        createComponent({ children });

        expect(getButton()).toContainHTML(children);
    });

    it('should be empty without children', () => {
        createComponent();

        expect(getButton()).toBeEmptyDOMElement();
    });

    it('should be rendered with default className by default', () => {
        createComponent();

        expect(getButton()).toHaveClass(DEFAULT_CLASS);
    });

    it('should be rendered also with passed className', () => {
        const className = 'home-page__button';

        createComponent({ className });

        expect(getButton()).toHaveClass(DEFAULT_CLASS, className);
    });

    it('should be rendered without type by default', () => {
        createComponent();

        const button = getButton();

        expect(button.getAttribute('type')).toBeNull();
    });

    it('shoud be rendered with passed type', () => {
        const type = 'submit';

        createComponent({ type });

        expect(getButton()).toHaveAttribute('type', type);
    });

    it('should be enabled by default', () => {
        createComponent();

        expect(getButton()).toBeEnabled();
    });

    it('should be disabled when disabled=true prop passed', () => {
        createComponent({ disabled: true });

        expect(getButton()).toBeDisabled();
    });

    test('onClick handler should be called when button clicked', () => {
        const onClick = jest.fn();

        createComponent({ onClick });

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
