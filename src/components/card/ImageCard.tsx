export const ImageCard = ({src, className1, className2} : {src : string, className1: string, className2: string}) => {
    return (
        <div className={className1}>
            <img className={className2} 
                src={src}/>
        </div>
    );
}