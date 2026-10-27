export const Button = ({content, className, type, onClick} : {content : string, className : string, type?: "button" | "submit", onClick?: () => void}) => {
    return (
        <button type={type} className={className} onClick={onClick}>{content}</button>
    );
}