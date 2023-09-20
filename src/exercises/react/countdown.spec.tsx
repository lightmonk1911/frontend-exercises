import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Countdown } from "./countdown";

describe('Countdown Component', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });
  
    afterAll(() => {
      jest.useRealTimers();
    });
  
    it('renders initial counter value', () => {
      const { getByTestId } = render(<Countdown />);
      expect(getByTestId('counter-display').textContent).toBe('10');
    });
  
    it('decreases the counter value every second', () => {
      const { getByTestId } = render(<Countdown />);
  
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(getByTestId('counter-display').textContent).toBe('9');
  
      act(() => {
        jest.advanceTimersByTime(2000);
      });
      expect(getByTestId('counter-display').textContent).toBe('7');
    });
  
    it('resets the counter when reset button is clicked', () => {
      const { getByTestId } = render(<Countdown />);
      
      act(() => {
        jest.advanceTimersByTime(3000);
      });
  
      fireEvent.click(getByTestId('reset-button'));
      expect(getByTestId('counter-display').textContent).toBe('10');
    });
  });