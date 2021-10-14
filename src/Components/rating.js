import React from 'react';
import StarCheck from '../Assets/StarCheck.svg'
import StarUncheck from '../Assets/StarUncheck.svg'

class Rating extends React.Component {

    render() {

        const range = [1, 2, 3, 4, 5]

        return (
            <div className='Ratting'>
            {range.map((rangeElem) =>
                this.props.rating >= rangeElem ? <img src={StarCheck}></img> : <img src={StarUncheck}></img>
            )}
            </div>
        )
    }
}
export default Rating