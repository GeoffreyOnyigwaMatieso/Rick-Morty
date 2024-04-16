import React from 'react'
import style from './Cards.module.scss'

const Cards = ({results}) => {
    // console.log(results)
    let display;

    if (results) {
        display = results.map(item => {
            let {id, name, image, location, status} = item

            return (
            <div key = {id} className="col-4 mb-4 position-relative">
                <div className={`${style.cards}`}>
                    <img src={image} alt="" className={`${style.img} img-fluid`}/>
                    <div style= {{ padding: "10px" }} className="content">
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                        <div className="">
                            <div className="fs-6">Last location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                  
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${style.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${style.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${style.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
            </div>
            )
        })
        
    } else {
        display = "No Character Found :/"
    }

  return (
    <div>
      {display}
    </div>
  )
}

export default Cards
