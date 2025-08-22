import React from "react";
import { File } from "../../interfaces/file-data.interface";
import Button from "../Button";
import { StyledCompressedFile, StyledCompressedFilesGrid } from "./style";


interface Props {
  files: File[];
  onDelete: (fileId: string) => void;
}

const CompressedFilesList: React.FC<Props> = ({ files, onDelete }) => (
  <>
    {files.length === 0 && <p>Nenhum arquivo encontrado</p>}
    <StyledCompressedFilesGrid>
      {files.map(file => (
        <StyledCompressedFile key={file.id}>
          <p>{file.filename}</p>
          <video controls>
            <source src={file.url} type="video/mp4" />
          </video>
          <Button title="Baixar Vídeo" onClick={() => window.open(file.url, "_blank")} />
          <Button title="Deletar Vídeo" onClick={() => onDelete(file.id)} />
        </StyledCompressedFile>
      ))}
    </StyledCompressedFilesGrid>
  </>
);

export default CompressedFilesList;
