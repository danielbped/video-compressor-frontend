import { render, screen, fireEvent } from "@testing-library/react";
import RegisterForm from "../../components/RegisterForm";

describe("RegisterForm Component", () => {
  const handleRegisterMock = jest.fn();
  const submitMock = jest.fn();
  const handleNavigateMock = jest.fn();

  const defaultProps = {
    handleRegister: handleRegisterMock,
    submit: submitMock,
    handleNavigate: handleNavigateMock,
    disabledButton: false,
    isError: false,
    error: "Erro de teste",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call handleRegister when typing in inputs", () => {
    render(<RegisterForm {...defaultProps} />);
    
    const firstNameInput = screen.getByPlaceholderText("Jon");
    fireEvent.change(firstNameInput, { target: { value: "Alice" } });

    expect(handleRegisterMock).toHaveBeenCalledTimes(1);
  });

  test("should call submit when clicking the 'Cadastrar' button", () => {
    render(<RegisterForm {...defaultProps} />);

    const registerButton = screen.getByText("Cadastrar");
    fireEvent.click(registerButton);

    expect(submitMock).toHaveBeenCalledTimes(1);
  });

  test("should call handleNavigate when clicking the 'Voltar' button", () => {
    render(<RegisterForm {...defaultProps} />);

    const backButton = screen.getByText("Voltar");
    fireEvent.click(backButton);

    expect(handleNavigateMock).toHaveBeenCalledWith("login");
  });

  test("should display error message when isError is true", () => {
    render(<RegisterForm {...defaultProps} isError={true} />);

    expect(screen.getByText("Erro de teste")).toBeInTheDocument();
  });
});
