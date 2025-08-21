import { useEffect, useRef, useState } from "react"
import { LoginResponse } from "../../interfaces/login-data.interface"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useLocalStorage } from "@uidotdev/usehooks"
import useFileData from "../../hooks/useFilesDataMutate"
import DraggingArea from "../../components/DraggingArea"
import {
  StyledCompressor,
  StyledCompressorDroppingArea,
  StyledCompressorHeader,
  HiddenInput,
  StyledFileListToUpload
} from "./style"
import Button from "../../components/Button"
import { File, FileToUpload } from "../../interfaces/file-data.interface"
import useNewFilesMutate from "../../hooks/useNewFilesMutate"
import useDeleteFileMutate from "../../hooks/useDeleteFileMutate"
// import { useDispatch } from "react-redux"

const Compressor = () => {
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null)
  const [filesToUpload, setFilesToUpload] = useState<FileToUpload[]>([])
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const user = useSelector((rootReducer: any) => rootReducer.userReducer)
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate()
  const useNewFiles = useNewFilesMutate()
  const deleteFileMutate = useDeleteFileMutate()

  const handleInputClick = () => {
    fileInputRef.current?.click();
  }

  const handleInput = ({ target: { files } }: any) => {
    handleFile(files)
  }

  const handleFile = (filesData: any) => {
    if (!filesData || filesData.length === 0) return;

    const newFiles = Array.from(filesData) as FileToUpload[];
    const filteredFiles = newFiles.filter(file => file.type.startsWith('video/'));

    if ((filesToUpload.length + filteredFiles.length) > 5) {
      alert('Você pode enviar no máximo 5 arquivos por vez.');
      return;
    }

    setFilesToUpload(prev => [...prev, ...filteredFiles]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files)
      setIsDragging(false);
    }
  }
  const { data } = useFileData(token)

  useEffect(() => {
    if (data && data.length) {
      setFiles(data)
    }
  }, [data])

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const { files } = event.clipboardData;
    handleFile(files)
  };

  const handleWindowDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.clientX === 0 && event.clientY === 0) {
      setIsDragging(false);
    }
  };

  const handleSendFiles = () => {
    useNewFiles.mutate({
      files: filesToUpload,
      token
    })
  }

  const handleDeleteFile = (fileId: string) => {
    deleteFileMutate.mutate({
      file: fileId,
      token
    })
  }

  useEffect(() => {
    if (user.id === '') {
      setToken(null)
      navigate('/login')
    }
  }, [user.id])

  return (
    <StyledCompressor>
      <StyledCompressorHeader>
        <h1>Video Compressor</h1>
        <div>
          <p>{ user.firstName } { user.LastName }</p>
          <Button
            title="Sair"
            onClick={() => {
              setToken(null)
              navigate('/login')
            }}
          />
        </div>
      </StyledCompressorHeader>
      <HiddenInput ref={ fileInputRef } type="file" accept="video/*" onChange={ handleInput } />
      <h1>Comprimir Vídeos</h1>
      <p>Diminua o tamanho do seu vídeo, mantendo a melhor qualidade possível. Otimize seus vídeos.</p>
      <Button
        title="Selecionar Vídeos"
        onClick={ handleInputClick }
      />
      <p>arraste e solte os vídeos aqui ou cole os arquivos utilizando CTRL + V</p>
      <StyledCompressorDroppingArea
        onDrop={ handleDrop }
        onDragOver={ handleDragOver }
        onPaste={ handlePaste }
        onDragLeave={ handleWindowDragLeave }
      >
        { isDragging && <DraggingArea /> }
        
        <h2>Arquivos preparados para comprimir</h2>
        <StyledFileListToUpload>
          { filesToUpload.length > 0 && filesToUpload.map((file, index) => (
            <p key={ index }>{ file.name }</p>
          )) }
        </StyledFileListToUpload>
        <Button
          title="Comprimir Vídeos"
          onClick={ handleSendFiles }
          disabled={ filesToUpload.length === 0 }
        />
      </StyledCompressorDroppingArea>
      <h2>Arquivos comprimidos</h2>
      { files.length === 0 && <p>Nenhum arquivo encontrado</p> }
      { files.length > 0 && files.map((file) => (
        <div key={ file.id }>
          <p>{ file.filename }</p>
          <div>
            <video width="320" height="240" controls>
              <source src={ file.url } type="video/mp4" />
            </video>
          </div>
          <Button
            title="Baixar Vídeo"
            onClick={() => window.open(file.url, '_blank')}
          />
          <Button
            title="Deletar Vídeo"
            onClick={() => handleDeleteFile(file.id)}
          />
        </div>
      ))}
    </StyledCompressor>
  )
}

export default Compressor