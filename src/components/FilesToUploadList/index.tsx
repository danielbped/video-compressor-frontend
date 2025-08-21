import React from "react";
import { FileToUpload } from "../../interfaces/file-data.interface";
import { StyledFileListToUpload } from "../../pages/Compressor/style";

interface Props {
  files: FileToUpload[];
}

const FilesToUploadList: React.FC<Props> = ({ files }) => (
  <StyledFileListToUpload>
    {files.map((file, index) => (
      <p key={index}>{file.name}</p>
    ))}
  </StyledFileListToUpload>
);

export default FilesToUploadList;
