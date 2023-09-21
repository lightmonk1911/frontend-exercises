import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import { Countdown } from "./countdown";

describe("Countdown Component", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("renders initial counter value", () => {
    render(<Countdown />);
    expect(screen.getByTestId("counter-display").textContent).toBe("10");
  });

  it("decreases the counter value every second", () => {
    render(<Countdown />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId("counter-display").textContent).toBe("9");

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByTestId("counter-display").textContent).toBe("7");
  });

  it("resets the counter when reset button is clicked", () => {
    render(<Countdown />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    fireEvent.click(screen.getByTestId("reset-button"));
    expect(screen.getByTestId("counter-display").textContent).toBe("10");
  });
});
