import { fireEvent, render, screen } from '@testing-library/react';
import ContainerComponent from './ContainerComponent';
import TableComponent from './TableComponent';


test('render table as default', () => {
  render(<ContainerComponent />);
  const tableElement = screen.getByText(/OWNER USER ID/i);
  expect(tableElement).toBeInTheDocument();
});

test('render form after button click', () => {
    render(<ContainerComponent />);
    fireEvent.click(screen.getByRole('button'));
    const tableElement = screen.getByText(/Your Name/i);
    expect(tableElement).toBeInTheDocument();
  });
