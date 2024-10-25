import {useState} from 'react';

const CandyCard = ({calorie}) =>{
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () =>{
        setShowModal(true);
    }

    const handleCloseModal = () =>{
        setShowModal(false);
    }

    return(
        <div className = 'candy-card'>
            <img src={calorie.image}></img>
            <h1>{calorie.name}</h1>
            <p>{'Description: '+ calorie.type}</p>
            <p>{'Ingredients: ' + calorie.ingredients}</p>

            <button className = 'modalButtons' onClick = {handleOpenModal}>Calories</button>

            {showModal && (
                    <div className='modal' onClick = {(e)=> e.stopPropagation()}>
                    <h2>{calorie.calories + ' Calories'}</h2>
                    <button className = 'modalButtons' onClick = {handleCloseModal}>Close</button>
                    </div>
            )}

        </div>
    )
}

export default CandyCard;