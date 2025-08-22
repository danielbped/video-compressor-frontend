import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import useFileData from "../../hooks/useFilesDataMutate";
import useNewFilesMutate from "../../hooks/useNewFilesMutate";
import useDeleteFileMutate from "../../hooks/useDeleteFileMutate";
import Header from "../../components/Header";
import DraggingArea from "../../components/DraggingArea";
import FileUpload from "../../components/FileUpload";
import FilesToUploadList from "../../components/FilesToUploadList";
import CompressedFilesList from "../../components/CompressedFilesList";
import Button from "../../components/Button";
import { File, FileToUpload } from "../../interfaces/file-data.interface";
import { useFileDragAndDrop } from "../../hooks/useFileDragAndDrop";
import {
  StyledCompressor,
  StyledCompressorDroppingArea,
  StyledCompressorTitle,
  StyledCompressorParagraph
} from "./style";

const Compressor = () => {
  const [token, setToken] = useLocalStorage("token", null);
  const [filesToUpload, setFilesToUpload] = useState<FileToUpload[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const user = useSelector((root: any) => root.userReducer);
  const navigate = useNavigate();
  const useNewFiles = useNewFilesMutate();
  const deleteFileMutate = useDeleteFileMutate();
  const { data } = useFileData(token);

  const {
    isDragging,
    handleDrop,
    handleDragOver,
    handlePaste,
    handleDragLeave,
    handleFile
  } = useFileDragAndDrop({ filesToUpload, setFilesToUpload });

  useEffect(() => { if (data) setFiles(data); }, [data]);
  useEffect(() => { if (!user.id) { setToken(null); navigate("/login"); } }, [user.id]);

  const handleSendFiles = () => useNewFiles.mutate({ files: filesToUpload, token });
  const handleDeleteFile = (fileId: string) => deleteFileMutate.mutate({ file: fileId, token });

  return (
    <StyledCompressor>
      <Header user={user} handleLogout={() => { setToken(null); navigate("/login"); }} />
      <StyledCompressorTitle>Comprimir Vídeos</StyledCompressorTitle>
      <StyledCompressorParagraph>
        Diminua o tamanho do seu vídeo, mantendo a melhor qualidade possível. Otimize seus vídeos.
      </StyledCompressorParagraph>
      
      <FileUpload onFilesSelected={handleFile} />
      <StyledCompressorParagraph>
        arraste e solte os vídeos aqui ou cole os arquivos utilizando CTRL + V
      </StyledCompressorParagraph>

      <StyledCompressorDroppingArea
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onPaste={handlePaste}
        onDragLeave={handleDragLeave}
      >
        {isDragging && <DraggingArea />}
        <h2>Arquivos preparados para comprimir</h2>
        <FilesToUploadList
          files={filesToUpload}
           onRemove={(index) =>
            setFilesToUpload(prev => prev.filter((_, i) => i !== index))
          }
        />
        <Button title="Comprimir Vídeos" onClick={handleSendFiles} disabled={filesToUpload.length === 0} />
      </StyledCompressorDroppingArea>

      <h2>Arquivos comprimidos</h2>
      <CompressedFilesList files={files} onDelete={handleDeleteFile} />
    </StyledCompressor>
  );
};

export default Compressor;
