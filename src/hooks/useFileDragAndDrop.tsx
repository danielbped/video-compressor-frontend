import { useState, useCallback } from "react";
import { FileToUpload } from "../interfaces/file-data.interface";
import { filterVideoFiles, validateMaxFiles, validateMaxFilesSize } from "../helpers/fileUtils";

type SetFilesToUpload = React.Dispatch<React.SetStateAction<FileToUpload[]>>;

interface UseFileDragAndDropProps {
  filesToUpload: FileToUpload[];
  setFilesToUpload: SetFilesToUpload;
}

export const useFileDragAndDrop = ({ filesToUpload, setFilesToUpload }: UseFileDragAndDropProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback((filesData: FileList | null) => {
    const newFiles = filterVideoFiles(filesData);
    if (!validateMaxFiles(filesToUpload, newFiles)) return;
    if (!validateMaxFilesSize(newFiles)) return;
    setFilesToUpload(prev => [...prev, ...newFiles]);
  }, [filesToUpload, setFilesToUpload]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files);
    setIsDragging(false);
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
    handleFile(e.clipboardData.files);
  }, [handleFile]);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.clientX === 0 && e.clientY === 0) {
      setIsDragging(false);
    }
  }, []);

  return {
    isDragging,
    handleDrop,
    handleDragOver,
    handlePaste,
    handleDragLeave,
    handleFile,
  };
};
