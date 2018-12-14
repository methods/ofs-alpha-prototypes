import React from 'react';


export default (props) => {

    return (
        <div className="ofs-jumbotron">
            <div className="ofs-width-container">
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <img src={props.imgUrl} alt={props.alt} />
                    </div>
                </div>
            </div>
        </div>
    )

}
