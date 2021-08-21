
const GifGridItem = ({id, title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title}></img>
        </div>
    )
}

export default GifGridItem;