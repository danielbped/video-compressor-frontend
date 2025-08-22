import React, { useRef } from "react";
import { HiddenInput } from "../../pages/Compressor/style";
import Button from "../Button";

interface FileUploadProps {
  onFilesSelected: (files: FileList | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesSelected }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={e => onFilesSelected(e.target.files)}
        multiple
        
      />
      <Button
        title="Selecionar Vídeos"
        onClick={() => fileInputRef.current?.click()}
        width={30}
      />
    </>
  );
};

export default FileUpload;
