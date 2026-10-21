export const ImageCard = ({src, divStyle, imgStyle} : {src : string, divStyle: string, imgStyle: string}) => {
    return (
        <div className={divStyle}>
            <img className={imgStyle} 
                src={src} alt="img"/>
        </div>
    );
}