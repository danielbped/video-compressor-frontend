import React from "react"
import { File } from "../../interfaces/file-data.interface"
import Button from "../Button"
import {
  StyledCompressedFile,
  StyledCompressedFilesGrid,
  StyledCompressedFileActions,
  StyledCompressedFileInfo,
  FileInfoText,
  CompressionPercentage,
  StyledNoVideosFound
} from "./style"
import { convertFileSize } from "../../helpers/fileUtils"

interface Props {
  files: File[]
  onDelete: (fileId: string) => void
}

const CompressedFilesList: React.FC<Props> = ({ files, onDelete }) => (
  <>
    { files.length === 0 && <StyledNoVideosFound>Nenhum vídeo encontrado, os vídeos comprimidos aparecerão aqui.</StyledNoVideosFound> }
    <StyledCompressedFilesGrid>
      { files.map(file => (
        <StyledCompressedFile key={ file.id } title={ file.original_filename }>
          <video controls>
            <source src={ file.compressed_url } type="video/mp4" />
          </video>
          <StyledCompressedFileInfo>
            <FileInfoText>
              <strong>Nome:</strong> { file.original_filename }
            </FileInfoText>
            <FileInfoText>
              <strong>Tamanho original:</strong> { convertFileSize(file.original_size) } MB
            </FileInfoText>
            <FileInfoText>
              <strong>Tamanho pós compressão:</strong> { convertFileSize(file.compressed_size) } MB
            </FileInfoText>
            <CompressionPercentage>Compressão de { file.compression_percentage }%</CompressionPercentage>
          </StyledCompressedFileInfo>
          <StyledCompressedFileActions>
            <Button title="Baixar Vídeo" onClick={ () => window.open(file.compressed_url, "_blank") } />
            <Button title="Baixar Vídeo Original" onClick={ () => window.open(file.original_url, "_blank") } />
            <Button title="Deletar Vídeo" onClick={ () => onDelete(file.id) } />
          </StyledCompressedFileActions>
        </StyledCompressedFile>
      )) }
    </StyledCompressedFilesGrid>
  </>
)

export default CompressedFilesList
