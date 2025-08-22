import { Trash2 } from "lucide-react"
import { StyledDeleteButton } from "./style";

const DeleteButton = ({ onRemove }: { onRemove: () => void }) => {
  return (
     <StyledDeleteButton onClick={onRemove}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <Trash2 size={16} />
        </div>
      </StyledDeleteButton>
  )
}

export default DeleteButton;