export const Button = ({content, className} : {content : string, className : string}) => {
    return (
        <div>
            <button className={className}>{content}</button>
        </div>
    );
}