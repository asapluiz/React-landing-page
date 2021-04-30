import React from 'react';

function Location(){
  return(
    <div className='location_wrapper'>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38331.068700777905!2d8.883690000000001!3d53.09777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b127ac3d7c156f%3A0xec5ad041bc89a86f!2sLuisental%2029F%2C%2028359%20Bremen%2C%20Germany!5e0!3m2!1sen!2sus!4v1619765828527!5m2!1sen!2sus"
      width="100%"
      height="500px"
      title='map'
      allowfullscreen
      ></iframe>

      <div className="location_tag">
                <div>
                    Location
                </div>
      </div>
    </div>

  )

}

export default Location;
