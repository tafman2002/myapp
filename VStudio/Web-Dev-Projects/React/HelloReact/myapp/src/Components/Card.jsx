function Card(props) {
    return (
        <div className="Card">
            <div className="container">
            <p> {props.title}</p>
            <p> {props.content}</p>
            <button onClick={props.deleteItem}>Delete</button>
            </div>
        </div>
    );
}

export default Card;