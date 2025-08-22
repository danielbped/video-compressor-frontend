import { FileToUpload } from "../interfaces/file-data.interface";

export const filterVideoFiles = (filesData: FileList | null): FileToUpload[] => {
  if (!filesData || filesData.length === 0) return [];
  return Array.from(filesData).filter(file => file.type.startsWith('video/')) as unknown as FileToUpload[];
};

export const validateMaxFiles = (currentFiles: FileToUpload[], newFiles: FileToUpload[], max = 5): boolean => {
  if ((currentFiles.length + newFiles.length) > max) {
    alert(`Você pode enviar no máximo ${max} vídeos por vez.`);
    return false;
  }
  return true;
};

export const validateMaxFilesSize = (files: FileToUpload[]): boolean => {
  return files.every(file => validateMaxFileSize(file));
}

export const validateMaxFileSize = (file: FileToUpload, maxSizeMB = 10): boolean => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    alert(`O vídeo ${file.name} excede o tamanho máximo de ${maxSizeMB}MB.`);
    return false;
  }
  return true;
};

export const convertFileSize = (size: number): string => (size / (1024 * 1024)).toFixed(2);
