import React from "react";
import { File } from "../../interfaces/file-data.interface";
import Button from "../Button";

interface Props {
  files: File[];
  onDelete: (fileId: string) => void;
}

const CompressedFilesList: React.FC<Props> = ({ files, onDelete }) => (
  <>
    {files.length === 0 && <p>Nenhum arquivo encontrado</p>}
    {files.map(file => (
      <div key={file.id}>
        <p>{file.filename}</p>
        <video width="320" height="240" controls>
          <source src={file.url} type="video/mp4" />
        </video>
        <Button title="Baixar Vídeo" onClick={() => window.open(file.url, "_blank")} />
        <Button title="Deletar Vídeo" onClick={() => onDelete(file.id)} />
      </div>
    ))}
  </>
);

export default CompressedFilesList;
