import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import image from '../../image/banner-1.jpg';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

class SectionTwo extends Component {
    render() {
        return (
            <>
                <Desktop>
                    <div>

                    </div>
                </Desktop>

                <Tablet>
                    <div>

                    </div>
                </Tablet>

                <Mobile>
                    <div>

                    </div>
                </Mobile>
            </>
        )
    }
}

export default SectionTwo;