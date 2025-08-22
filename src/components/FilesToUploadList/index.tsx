import React, { useEffect } from "react";
import { FileToUpload } from "../../interfaces/file-data.interface";
import { StyledFileListToUpload, StyledFileItem, StyledLoadingBar, StyledProgress } from "./style";
import DeleteButton from "../DeleteButton";
import { useFakeProgress } from "../../hooks/useFakeProgress";

interface Props {
  files: (FileToUpload & { isUploading?: boolean })[];
  onRemove?: (index: number) => void;
  onFinishUpload?: (index: number) => void;
}

const FilesToUploadList: React.FC<Props> = ({ files, onRemove, onFinishUpload }) => (
  <StyledFileListToUpload>
    {files.length === 0 && <p>Nenhum arquivo selecionado</p>}

    {files.map((file, index) => {
      const { progress, finish } = useFakeProgress(file.isUploading ?? false);

      useEffect(() => {
        if (!file.isUploading && progress === 99) {
          finish();
          onFinishUpload && onFinishUpload(index);
        }
      }, [file.isUploading]);

      return (
        <StyledFileItem key={index}>
          <span>{file.name}</span>

          {file.isUploading ? (
            <StyledLoadingBar>
              <StyledProgress style={{ width: `${progress}%` }} />
            </StyledLoadingBar>
          ) : (
            onRemove && <DeleteButton onRemove={() => onRemove(index)} />
          )}
        </StyledFileItem>
      );
    })}
  </StyledFileListToUpload>
);

export default FilesToUploadList;
