import { FileToUpload } from "../interfaces/file-data.interface";

export const filterVideoFiles = (filesData: FileList | null): FileToUpload[] => {
  if (!filesData || filesData.length === 0) return [];
  return Array.from(filesData).filter(file => file.type.startsWith('video/')) as unknown as FileToUpload[];
};

export const validateMaxFiles = (currentFiles: FileToUpload[], newFiles: FileToUpload[], max = 5): boolean => {
  if ((currentFiles.length + newFiles.length) > max) {
    alert(`Você pode enviar no máximo ${max} arquivos por vez.`);
    return false;
  }
  return true;
};
