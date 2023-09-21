import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoApp } from "./todoApp";

describe("TodoApp", () => {
  it("renders the todo input and add button", () => {
    render(<TodoApp />);
    expect(screen.getByTestId("todo-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-todo-button")).toBeInTheDocument();
  });

  it("adds a new todo when the add button is clicked", () => {
    render(<TodoApp />);
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("clears the input after adding a todo", () => {
    render(<TodoApp />);
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "Another Todo" } });
    fireEvent.click(button);

    expect((input as HTMLInputElement).value).toBe(""); // Using type assertion to access value property
  });

  it("does not add an empty todo", () => {
    render(<TodoApp />);
    const button = screen.getByTestId("add-todo-button");

    fireEvent.click(button);

    const todoList = screen.getByTestId("todo-list");
    expect(todoList).not.toHaveTextContent(/./);
  });
});
