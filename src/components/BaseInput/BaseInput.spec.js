import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BaseInput from './index';

describe('BaseInput', () => {
    const createComponent = (props = {}) => {
        render(<BaseInput {...props} />);
    };

    const getInput = () => screen.getByRole('textbox');
    const getErrorMessage = () => screen.getByRole('alert');

    const DEFAULT_CLASS = 'input';

    it('should be rendered with passed id', () => {
        const inputId = 'input_id';
        createComponent({ id: inputId });

        expect(getInput()).toHaveAttribute('id', inputId);
    });

    it('should be rendered without id by default', () => {
        createComponent();

        expect(getInput().getAttribute('id')).toBeNull();
    });

    it('should be rendered with passed name', () => {
        const inputName = 'input_name';
        createComponent({ name: inputName });

        expect(getInput()).toHaveAttribute('name', inputName);
    });

    it('should be rendered without name by default', () => {
        createComponent();

        expect(getInput().getAttribute('id')).toBeNull();
    });

    it('should be rendered with passed type', () => {
        const inputType = 'password';
        createComponent({ name: inputType });

        expect(getInput()).toHaveAttribute('name', inputType);
    });

    it('should be rendered without type by default', () => {
        createComponent();

        expect(getInput().getAttribute('type')).toBeNull();
    });

    it('should be rendered with passed placeholder', () => {
        const inputPlaceholder = 'placeholder';
        createComponent({ name: inputPlaceholder });

        expect(getInput()).toHaveAttribute('name', inputPlaceholder);
    });

    it('should be rendered without placeholder by default', () => {
        createComponent();

        expect(getInput().getAttribute('placeholder')).toBeNull();
    });

    it('should have autocomplete=off', () => {
        createComponent();

        expect(getInput()).toHaveAttribute('autocomplete', 'off');
    });

    it('should have class input by default', () => {
        createComponent();

        expect(getInput()).toHaveClass(DEFAULT_CLASS);
    });

    it('should be rendered with passed value', () => {
        const inputValue = 'value';

        createComponent({ value: inputValue });

        expect(getInput()).toHaveAttribute('value', inputValue);
    });

    test('onChange handler should be called on value change', () => {
        const onChange = jest.fn();
        const inputValue = 'value';

        createComponent({ onChange });

        fireEvent.input(getInput(), { target: { value: inputValue } });

        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('onBlur handler should be called when input unfocused', () => {
        const onBlur = jest.fn();

        createComponent({ onBlur });

        const input = getInput();

        input.focus();
        input.blur();

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('should display error when isTouched=true and error passed', () => {
        const error = 'Something went wrong...';

        createComponent({ isTouched: true, error });

        expect(getErrorMessage()).toHaveTextContent(error);
    });
});
