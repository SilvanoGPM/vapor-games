import { fireEvent, screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';
import { MenuToggle } from './MenuToggle';

const toggleSpy = jest.fn();

describe('<MenuToggle />', () => {
  test('should render a button to toggle with close icon', () => {
    renderComponentWithTheme(<MenuToggle isOpen toggle={toggleSpy} />);

    fireEvent.click(screen.getByRole('button'));

    expect(toggleSpy).toBeCalled();
    expect(screen.getByTestId('close')).toBeInTheDocument();
  });

  test('should render a button to toggle with open icon', () => {
    renderComponentWithTheme(<MenuToggle isOpen={false} toggle={toggleSpy} />);

    fireEvent.click(screen.getByRole('button'));

    expect(toggleSpy).toBeCalled();
    expect(screen.getByTestId('open')).toBeInTheDocument();
  });
});
