import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { UPDATE_USER_COVER, USER_LOGGEDIN } from '../../lib/graphqlTags'

const Covers = styled.div`
    margin: 50px 0;
    .covers-grid {
        display: flex;
        flex-wrap: wrap;
    }

    .covers-item {
        /* width: 200px; */
        /* height: 150px; */
        background: #99ffac;
        background: #e6e6e6;
        padding: 10px;

        width: 33.33%;

        @media (min-width: 768px) {
            width: 16.666%;
        }

        img {
            object-fit: cover;
            height: 100%;
        }
        cursor: pointer;
        &:hover {
            background: green;
        }
    }

    .make-red {
        background: red;
    }
`

const coverFilename = [
    {
        name: 'jingle bells',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329300/covers/joanna-kosinska-xLGtGvH0A8g-unsplash_qrd9hk.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329300/covers/joanna-kosinska-xLGtGvH0A8g-unsplash_qrd9hk.jpg',
    },
    {
        name: 'snow',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329300/covers/jonathan-knepper-9GMO0Sxyw_Y-unsplash_lfukgx.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329300/covers/jonathan-knepper-9GMO0Sxyw_Y-unsplash_lfukgx.jpg',
    },
    {
        name: 'Holiday tree with decorations',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329299/covers/rodion-kutsaev-ySNkCkdKyTY-unsplash_quhn8c.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329299/covers/rodion-kutsaev-ySNkCkdKyTY-unsplash_quhn8c.jpg',
    },
    {
        name: 'Pine brnaches',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329299/covers/kieran-white-SBdmQcW8qag-unsplash_xrdfgl.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329299/covers/kieran-white-SBdmQcW8qag-unsplash_xrdfgl.jpg',
    },
    {
        name: 'Wrapping Paper',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329299/covers/freestocks-org-spP6LqxN0-g-unsplash_uzsgvj.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329299/covers/freestocks-org-spP6LqxN0-g-unsplash_uzsgvj.jpg',
    },
    {
        name: 'Holiday Decorations',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329299/covers/joanna-kosinska-LOCPyTogWHU-unsplash_nwy9r9.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329299/covers/joanna-kosinska-LOCPyTogWHU-unsplash_nwy9r9.jpg',
    },
    {
        name: 'Presents',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329298/covers/freestocks-org-PxM8aeJbzvk-unsplash_atlxg7.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329298/covers/freestocks-org-PxM8aeJbzvk-unsplash_atlxg7.jpg',
    },
    {
        name: 'Santa Mug',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329298/covers/drew-coffman-UIlHiyFy0Wk-unsplash_i0lsh8.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329298/covers/drew-coffman-UIlHiyFy0Wk-unsplash_i0lsh8.jpg',
    },
    {
        name: 'Festive Dog',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329298/covers/jakob-owens-mpnqu9o4b9w-unsplash_whlu5e.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329298/covers/jakob-owens-mpnqu9o4b9w-unsplash_whlu5e.jpg',
    },
    {
        name: 'Decorations',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329298/covers/freestocks-org-r0eEDn1GAKw-unsplash_m44d5m.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329298/covers/freestocks-org-r0eEDn1GAKw-unsplash_m44d5m.jpg',
    },
    {
        name: 'Decorations',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329298/covers/freestocks-org--Qf9JKLysUg-unsplash_jz5oi6.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329298/covers/freestocks-org--Qf9JKLysUg-unsplash_jz5oi6.jpg',
    },
    {
        name: 'Santa Decoration',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329296/covers/caleb-woods-xxmszPRm_ck-unsplash_rxhmfx.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329296/covers/caleb-woods-xxmszPRm_ck-unsplash_rxhmfx.jpg',
    },
    {
        name: 'Frozen Bubble',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329163/covers/aaron-burden-kWUBVVU7yj0-unsplash_k8cxjv.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329163/covers/aaron-burden-kWUBVVU7yj0-unsplash_k8cxjv.jpg',
    },
    {
        name: 'Holiday Tree',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574329138/covers/arun-kuchibhotla-cRfWUqkr0-s-unsplash_xf305y.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329138/covers/arun-kuchibhotla-cRfWUqkr0-s-unsplash_xf305y.jpg',
    },
    {
        name: 'sledge',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574450454/covers/jesse-orrico-rnguvzoG-x8-unsplash_b0mdzz.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574450454/covers/jesse-orrico-rnguvzoG-x8-unsplash_b0mdzz.jpg',
    },
    {
        name: 'cheers',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574450453/covers/kelsey-chance-tAH2cA_BL5g-unsplash_ssoraw.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574450453/covers/kelsey-chance-tAH2cA_BL5g-unsplash_ssoraw.jpg',
    },
    {
        name: 'ticker tape',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574450451/covers/jason-leung-Xaanw0s0pMk-unsplash_fjd6u9.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574450451/covers/jason-leung-Xaanw0s0pMk-unsplash_fjd6u9.jpg',
    },
    {
        name: 'wreath',
        img:
            'https://res.cloudinary.com/countdownwow/image/upload/w_400,h_300,c_scale/v1574450449/covers/erwan-hesry-e9jV1ZyrOmg-unsplash_zbhlcq.jpg',
        imgFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574450449/covers/erwan-hesry-e9jV1ZyrOmg-unsplash_zbhlcq.jpg',
    },
]

class CoverPicker extends React.Component {
    handleCoverClick = url => {
        console.log('url = ', url)
    }

    render() {
        return (
            <Covers>
                <div className="covers-grid">
                    {coverFilename.map((el, index) => (
                        <Mutation
                            key={index}
                            mutation={UPDATE_USER_COVER}
                            variables={{
                                id: this.props.user.id,
                                cover: el.imgFull,
                            }}
                            refetchQueries={[
                                {
                                    query: USER_LOGGEDIN,
                                },
                            ]}
                        >
                            {(updateUser, { error }) => {
                                console.log('error = ', error)
                                return (
                                    <div
                                        onClick={() => {
                                            updateUser()
                                        }}
                                        // className="covers-item"
                                        className={`covers-item ${
                                            this.props.user.cover === el.imgFull
                                                ? 'make-red'
                                                : 'boo'
                                        }`}
                                    >
                                        <img src={el.img} alt={el.name} />
                                    </div>
                                )
                            }}
                        </Mutation>
                    ))}
                </div>
            </Covers>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         user: state.user,
//         userImages: state.user.userImages,
//     }
// }

export default CoverPicker
