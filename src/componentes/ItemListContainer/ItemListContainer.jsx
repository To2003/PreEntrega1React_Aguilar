import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {

    return (
        <div className="itemList">
            <h1>{greeting}</h1>
        </div>
    )
}