import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header";

// Mock do useNavigate
const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Header Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render the title", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("CompactaVideos")).toBeInTheDocument();
  });

  test("should render Login button when user is not provided and navigate on click", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(mockedNavigate).toHaveBeenCalledWith("/login");
  });

  test("should render user name and Logout button when user and handleLogout are provided", () => {
    const handleLogoutMock = jest.fn();
    const user = { firstName: "John", lastName: "Doe" };

    render(
      <BrowserRouter>
        <Header user={user} handleLogout={handleLogoutMock} />
      </BrowserRouter>
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();

    const logoutButton = screen.getByText("Sair");
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    expect(handleLogoutMock).toHaveBeenCalledTimes(1);
  });
});
