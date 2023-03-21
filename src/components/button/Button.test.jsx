import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Button, { buttonSizes, buttonVariants } from './Button';

describe('<Button/>', () => {

    const defaultProps = { children: 'Button' };
    const component = props => render(<Button {...props} />);

    it('renders content', () => {
        component({});
    });

    it('should component with disabled state', () => {
        component({ ...defaultProps, disabled: true });

        expect(screen.getByRole('button').getAttribute('disabled')).toBe('');
    });

    it('should click on the component', () => {
        const user = userEvent.component();
        component(defaultProps);

        user.click(screen.getByRole('button'));
    });

    describe('should display all component variants', () => {
        Object.values(buttonVariants).forEach(variant => {
            it(`should display button variant '${variant}'`, () => {
                const { container } = component({ ...defaultProps, variant });
                const findClassName = findSentence(variant);
                const [className] = findClassName(container.innerHTML);

                expect(className).toEqual(variant);
            });
        });
    });

    describe('should display all component sizes', () => {
        Object.values(buttonSizes).forEach(size => {
            it(`should display button size '${size}'`, () => {
                const { container } = component({ ...defaultProps, size });
                const findClassName = findSentence(size);
                const [className] = findClassName(container.innerHTML);

                expect(className).toEqual(size);
            });
        });
    });
});