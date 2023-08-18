import React from "react";

const LeftImage= (props) => {
    const { ImageLink ,Heading ,Parag, BtnText } = props;
    return(
        <>
        <div className='container lf-container'>
            <div className="row">
                <div className='col-md-6 left-col1'>
                <img className='hero-img' src={ImageLink}/>
                </div>
                <div className='col-md-6 left-col2'>
                <h3>{Heading}</h3>
                <p>{Parag}</p>
                <button className='orng-btn' style={{width:150}}>{BtnText}</button>
                </div>
            </div>
        </div>
        </>
    )
};

const RightImage= (props) => {
    const { ImageLink ,Heading ,Parag, BtnText } = props;
    return(
        <>
        <div className='container lf-container'>
            <div className="row">
                <div className='col-md-6 right-col1'>
                <h3>{Heading}</h3>
                <p>{Parag}</p>
                <button className='prpl-btn' style={{width:150}}>{BtnText}</button>
                </div>
                <div className='col-md-6 right-col2'>
                <img className='hero-img' src={ImageLink}/>
                </div>
            </div>
        </div>
        </>
    )
};
export { LeftImage, RightImage };