import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoApp } from "./todoApp";

describe("TodoApp", () => {
  it("renders the todo input and add button", () => {
    const { getByTestId } = render(<TodoApp />);
    expect(getByTestId("todo-input")).toBeInTheDocument();
    expect(getByTestId("add-todo-button")).toBeInTheDocument();
  });

  it("adds a new todo when the add button is clicked", () => {
    const { getByTestId } = render(<TodoApp />);
    const input = getByTestId("todo-input");
    const button = getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(getByTestId("todo-list").textContent).toContain("New Todo");
  });

  it("clears the input after adding a todo", () => {
    const { getByTestId } = render(<TodoApp />);
    const input = getByTestId("todo-input") as HTMLInputElement;
    const button = getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "Another Todo" } });
    fireEvent.click(button);

    expect(input.value).toBe("");
  });

  it("does not add an empty todo", () => {
    const { getByTestId } = render(<TodoApp />);
    const button = getByTestId("add-todo-button");

    fireEvent.click(button);

    expect(getByTestId("todo-list").children.length).toBe(0);
  });
});
