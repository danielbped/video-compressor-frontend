import { render, screen, fireEvent } from "@testing-library/react";
import { useFakeProgress } from "../../hooks/useFakeProgress";
import FilesToUploadList from "../../components/FilesToUploadList";

jest.mock("../../hooks/useFakeProgress");
const mockedUseFakeProgress = useFakeProgress as jest.Mock;

describe("FilesToUploadList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const createMockFile = (name: string, isUploading?: boolean) =>
    Object.assign(new File(["content"], name, { type: "video/mp4", lastModified: Date.now() }), {
      isUploading,
    });

  it("mostra mensagem quando não há arquivos", () => {
    render(<FilesToUploadList files={[]} />);
    expect(screen.getByText("Nenhum vídeo selecionado")).toBeInTheDocument();
  });

  it("renderiza arquivos corretamente", () => {
    mockedUseFakeProgress.mockReturnValue({ progress: 50, finish: jest.fn() });

    const files = [
      createMockFile("video1.mp4", true),
      createMockFile("video2.mp4"),
    ];

    render(<FilesToUploadList files={files} onRemove={jest.fn()} />);

    expect(screen.getByText("video1.mp4")).toBeInTheDocument();
    expect(screen.getByText("video2.mp4")).toBeInTheDocument();
  });

  it("chama onRemove quando DeleteButton é clicado", () => {
    mockedUseFakeProgress.mockReturnValue({ progress: 100, finish: jest.fn() });

    const files = [createMockFile("video.mp4")];
    const onRemoveMock = jest.fn();

    render(<FilesToUploadList files={files} onRemove={onRemoveMock} />);
    
    fireEvent.click(screen.getByRole("button"));
    expect(onRemoveMock).toHaveBeenCalledWith(0);
  });

  it("chama onFinishUpload quando upload termina", () => {
    const finishMock = jest.fn();
    mockedUseFakeProgress.mockReturnValue({ progress: 99, finish: finishMock });

    const files = [createMockFile("video.mp4", false)];
    const onFinishUploadMock = jest.fn();

    render(<FilesToUploadList files={files} onFinishUpload={onFinishUploadMock} />);
    
    expect(finishMock).toHaveBeenCalled();
    expect(onFinishUploadMock).toHaveBeenCalledWith(0);
  });
});
