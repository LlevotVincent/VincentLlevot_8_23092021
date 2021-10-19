import React from 'react';
import '../Styles/Tags.css'

class Tags extends React.Component {

    render() {

        return (
            <div className='TagList'>
            {this.props.tagList.map((Tag) =>
                <div key={Tag} className='Tag'>{Tag}</div>
            )}
            </div>
        )
    }
}
export default Tags