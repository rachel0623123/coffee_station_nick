export const Badge = ({content, className} : {content : string, className : string}) => {
    return (
        <div className={className}>
            {content}
        </div>
    );
}