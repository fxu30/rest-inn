import React from 'react'

const PropertyDesc = () => {
  return (
      <>
      
    <div className="row columns">
      <nav aria-label="You are here:" role="navigation">
        <ul className="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
        </ul>
      </nav>
    </div>

    <div className='grid-container fluid'>
    <div className="grid-x align-center grid-margin-x">
      <div className="cell medium-6">
        <img className="thumbnail" src="https://images.unsplash.com/photo-1580862842845-5aa6f6438329?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sean-foster-uznuHG_Dxjc-unsplash.jpg&w=640"/>
      </div>

      <div className="cell medium-6">
        <h3>My Awesome Property</h3>
        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in.</p>

        <hr />
        <p>Address...</p>

        <hr />
        
        <h4>Rating</h4>

        <hr />

        <q>Its really a good place to stay. My family really enjoyed outselves...</q>

        <br />

        <a href='#'>View more reviews</a>
        <div className='cell'></div>
        <a href="#" className="button large expanded">Book Now</a>

        <div className="small secondary expanded button-group">
            <a className="button">Facebook</a>
            <a className="button">Twitter</a>
            <a className="button">Google</a>
          </div>
        </div>
    </div>
    </div>

    
      
      <ul className="tabs" data-tabs id="example-tabs">
        <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Detail</a></li>
      </ul>

      
      <h4>Amenities</h4>
      
      <div className='grid-x small-up-2'>
        <div className='cell medium-auto'>a</div>
        <div className='cell medium-auto'>a</div>
        <div className='cell medium-auto'>a</div>
        <div className='cell medium-auto'>a</div>
        <div className='cell medium-auto'>a</div>
      </div>

      <h4>Rules</h4>
      <div className='grid-x small-up-2'>
        <div className='cell medium-6'>
          <div className='grid-y'>
            <div className='cell'>
              a
            </div>
            <div className='cell'>
              b
            </div>
          </div>
        </div>
        <div className='cell medium-6'>
        <div className='cell'>
              a
            </div>
            <div className='cell'>
              b
            </div>
        </div>
      </div>

      
    
    </>
  )
}

export default PropertyDesc