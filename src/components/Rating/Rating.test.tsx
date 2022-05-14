import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';
import { Rating } from '.';

describe('<Rating />', () => {
  test('should render star icons', () => {
    const { container } = renderComponentWithTheme(<Rating score={4} />);

    const totalOfSVGsIsFive = container.querySelectorAll('svg').length === 5;

    expect(totalOfSVGsIsFive).toBeTruthy();
  });

  test('should render ten star icons', () => {
    const { container } = renderComponentWithTheme(
      <Rating iconSize="16px" score={4} total={10} />,
    );

    const totalOfSVGsIsTen = container.querySelectorAll('svg').length === 10;

    expect(totalOfSVGsIsTen).toBeTruthy();
  });
});
