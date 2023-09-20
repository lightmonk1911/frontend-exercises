import { debounce } from "./debounce";

describe("debounce", () => {
  jest.useFakeTimers();

  it("delays the function execution", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 500);

    debouncedFn();

    expect(fn).not.toBeCalled();

    jest.advanceTimersByTime(500);

    expect(fn).toBeCalled();
  });

  it("executes the function only once", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 500);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(500);

    expect(fn).toBeCalledTimes(1);
  });

  it("calls the function with the latest arguments", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 500);

    debouncedFn("arg1");
    debouncedFn("arg2");
    debouncedFn("arg3");

    jest.advanceTimersByTime(500);

    expect(fn).toBeCalledWith("arg3");
  });

  it("preserves the this context", () => {
    const contextObject = {
      value: "Hello, World!",
      fn: function () {
        return this.value = 'changed value';
      },
    };

    const debouncedFn = debounce(contextObject.fn.bind(contextObject), 500);

    const anotherContext = {
      value: "Wrong Context",
    };

    debouncedFn.call(anotherContext);

    jest.advanceTimersByTime(500);

    const result = contextObject.value;

    expect(result).toBe("changed value"); // The result should come from the original contextObject, not anotherContext.
  });
});
