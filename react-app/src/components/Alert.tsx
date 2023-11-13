import { ReactNode } from "react";

// children prop allows you to pass prop as a child to a component
interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <div className={"alert alert-primary alert-dismissible fade show"}>
        {children}
        <button 
            onClick={onClose}
            type="button" 
            className="btn-close" 
            data-bs-dismiss="alert" 
            aria-label="Close">
        </button>
    </div>
  )
}

export default Alert