import React from "react";
import { FileToUpload } from "../../interfaces/file-data.interface";
import { StyledFileListToUpload, StyledFileItem } from "./style";
import DeleteButton from "../DeleteButton";

interface Props {
  files: FileToUpload[];
  onRemove?: (index: number) => void;
}

const FilesToUploadList: React.FC<Props> = ({ files, onRemove }) => (
  <StyledFileListToUpload>
    {files.length === 0 && <p>Nenhum arquivo selecionado</p>}
    {files.map((file, index) => (
      <StyledFileItem key={index}>
        <span>{file.name}</span>
        {onRemove && (
         <DeleteButton onRemove={ () => onRemove(index) } />
        )}
      </StyledFileItem>
    ))}
  </StyledFileListToUpload>
);

export default FilesToUploadList;
