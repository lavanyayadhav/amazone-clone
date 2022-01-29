import React from 'react'
import '../css/Header.css'
function Header(){
    return(
        <div className='header'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className='header_search'>
                <input className='header_searchInput' type="text" />
                {/*search logo */}
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header_optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & orders
                    </span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>
                        Yours
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
               
            </div>
        </div>
    )
}

export default Header;