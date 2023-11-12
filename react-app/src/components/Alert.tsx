import { ReactNode } from "react";

// children prop allows you to pass prop as a child to a component
interface Props {
    children: ReactNode;
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert