import { render, screen, fireEvent } from "@testing-library/react";
import FileUpload from "../../components/FileUpload";

describe("FileUpload Component", () => {
  test("should render the select videos button", () => {
    render(<FileUpload onFilesSelected={jest.fn()} />);
    
    const button = screen.getByText("Selecionar Vídeos");
    expect(button).toBeInTheDocument();
  });

  test("should trigger input click when button is clicked", () => {
    render(<FileUpload onFilesSelected={jest.fn()} />);
    
    const button = screen.getByText("Selecionar Vídeos");
    const input = screen.getByTestId("file-input");

    // Mock the input click
    const clickMock = jest.fn();
    input.click = clickMock;

    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalledTimes(1);
  });

  test("should call onFilesSelected when files are selected", () => {
    const onFilesSelectedMock = jest.fn();
    render(<FileUpload onFilesSelected={onFilesSelectedMock} />);

    const input = screen.getByTestId("file-input");

    const file = new File(["video content"], "video.mp4", { type: "video/mp4" });
    const fileList = {
      0: file,
      length: 1,
      item: (index: number) => file,
    } as unknown as FileList;

    fireEvent.change(input, { target: { files: fileList } });

    expect(onFilesSelectedMock).toHaveBeenCalledWith(fileList);
    expect(onFilesSelectedMock.mock.calls[0][0][0]).toBe(file);
  });
});
