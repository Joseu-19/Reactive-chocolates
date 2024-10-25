import CandyCard from './CandyCard.js';
import calories from './CaloricData.js';

const CandyList = () => {
    return (
        <div className = 'chocolate-container'>
            {calories.map((calorie, index)=>{
                <CandyCard Key = {index} calorie = {calorie}/>;
                return <CandyCard Key = {index} calorie = {calorie}/>;
            })}
        </div>
    );
};

export default CandyList;