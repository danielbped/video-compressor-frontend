import { render, screen, fireEvent } from "@testing-library/react";
import { File } from "../../interfaces/file-data.interface";
import CompressedFilesList from "../../components/CompressedFilesList";

// Mock do helper convertFileSize
jest.mock("../../helpers/fileUtils", () => ({
  convertFileSize: (size: number) => `${size} MB`,
}));

describe("CompressedFilesList Component", () => {
  const mockFiles: File[] = [
    {
      id: "1",
      original_filename: "video1.mp4",
      compressed_filename: "video1-compressed.mp4",
      original_url: "https://example.com/video1.mp4",
      compressed_url: "https://example.com/video1-compressed.mp4",
      original_size: 100,
      compressed_size: 50,
      compression_percentage: 50,
      user: {
        id: "user1",
        firstName: "Test",
        lastName: "User",
        email: "testuser@example.com",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      original_filename: "video2.mp4",
      compressed_filename: "video2-compressed.mp4",
      original_url: "https://example.com/video2.mp4",
      compressed_url: "https://example.com/video2-compressed.mp4",
      original_size: 200,
      compressed_size: 100,
      compression_percentage: 50,
      user: {
        id: "user2",
        firstName: "Another",
        lastName: "User",
        email: "anotheruser@example.com",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  it("should render 'Nenhum vídeo encontrado' when files array is empty", () => {
    render(<CompressedFilesList files={[]} onDelete={jest.fn()} />);
    expect(screen.getByText(/nenhum vídeo encontrado/i)).toBeInTheDocument();
  });

  it("should call onDelete when 'Deletar Vídeo' button is clicked", () => {
    const onDeleteMock = jest.fn();
    render(<CompressedFilesList files={mockFiles} onDelete={onDeleteMock} />);
    const deleteButtons = screen.getAllByText(/deletar vídeo/i);
    fireEvent.click(deleteButtons[0]);
    expect(onDeleteMock).toHaveBeenCalledWith("1");
  });

  it("should open video URLs when 'Baixar Vídeo' buttons are clicked", () => {
    window.open = jest.fn(); // mock do window.open
    render(<CompressedFilesList files={mockFiles} onDelete={jest.fn()} />);
    
    const downloadButtons = screen.getAllByText(/baixar vídeo/i);
    fireEvent.click(downloadButtons[0]);
    expect(window.open).toHaveBeenCalledWith(mockFiles[0].compressed_url, "_blank");

    fireEvent.click(downloadButtons[1]);
    expect(window.open).toHaveBeenCalledWith(mockFiles[0].original_url, "_blank");
  });
});
