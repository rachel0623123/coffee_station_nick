export const Button = ({content, className} : {content : string, className : string}) => {
    return (
        <button className={className}>{content}</button>
    );
}