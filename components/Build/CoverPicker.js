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
        name: 'Holiday tree with decorations',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329299/covers/rodion-kutsaev-ySNkCkdKyTY-unsplash_quhn8c.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329299/covers/rodion-kutsaev-ySNkCkdKyTY-unsplash_quhn8c.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329299/covers/rodion-kutsaev-ySNkCkdKyTY-unsplash_quhn8c.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329299/covers/rodion-kutsaev-ySNkCkdKyTY-unsplash_quhn8c.jpg',
    },
    {
        name: 'Pine brnaches',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329299/covers/kieran-white-SBdmQcW8qag-unsplash_xrdfgl.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329299/covers/kieran-white-SBdmQcW8qag-unsplash_xrdfgl.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329299/covers/kieran-white-SBdmQcW8qag-unsplash_xrdfgl.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329299/covers/kieran-white-SBdmQcW8qag-unsplash_xrdfgl.jpg',
    },

    {
        name: 'Presents',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329298/covers/freestocks-org-PxM8aeJbzvk-unsplash_atlxg7.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329298/covers/freestocks-org-PxM8aeJbzvk-unsplash_atlxg7.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329298/covers/freestocks-org-PxM8aeJbzvk-unsplash_atlxg7.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329298/covers/freestocks-org-PxM8aeJbzvk-unsplash_atlxg7.jpg',
    },
    {
        name: 'Santa Mug',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329298/covers/drew-coffman-UIlHiyFy0Wk-unsplash_i0lsh8.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329298/covers/drew-coffman-UIlHiyFy0Wk-unsplash_i0lsh8.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329298/covers/drew-coffman-UIlHiyFy0Wk-unsplash_i0lsh8.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329298/covers/drew-coffman-UIlHiyFy0Wk-unsplash_i0lsh8.jpg',
    },

    {
        name: 'Santa Decoration',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329296/covers/caleb-woods-xxmszPRm_ck-unsplash_rxhmfx.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329296/covers/caleb-woods-xxmszPRm_ck-unsplash_rxhmfx.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329296/covers/caleb-woods-xxmszPRm_ck-unsplash_rxhmfx.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329296/covers/caleb-woods-xxmszPRm_ck-unsplash_rxhmfx.jpg',
    },
    {
        name: 'Frozen Bubble',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329163/covers/aaron-burden-kWUBVVU7yj0-unsplash_k8cxjv.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329163/covers/aaron-burden-kWUBVVU7yj0-unsplash_k8cxjv.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329163/covers/aaron-burden-kWUBVVU7yj0-unsplash_k8cxjv.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329163/covers/aaron-burden-kWUBVVU7yj0-unsplash_k8cxjv.jpg',
    },
    {
        name: 'Holiday Tree',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329138/covers/arun-kuchibhotla-cRfWUqkr0-s-unsplash_xf305y.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329138/covers/arun-kuchibhotla-cRfWUqkr0-s-unsplash_xf305y.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329138/covers/arun-kuchibhotla-cRfWUqkr0-s-unsplash_xf305y.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329138/covers/arun-kuchibhotla-cRfWUqkr0-s-unsplash_xf305y.jpg',
    },
    {
        name: 'sledge',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574450454/covers/jesse-orrico-rnguvzoG-x8-unsplash_b0mdzz.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574450454/covers/jesse-orrico-rnguvzoG-x8-unsplash_b0mdzz.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574450454/covers/jesse-orrico-rnguvzoG-x8-unsplash_b0mdzz.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574450454/covers/jesse-orrico-rnguvzoG-x8-unsplash_b0mdzz.jpg',
    },

    {
        name: 'wreath',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574450449/covers/erwan-hesry-e9jV1ZyrOmg-unsplash_zbhlcq.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574450449/covers/erwan-hesry-e9jV1ZyrOmg-unsplash_zbhlcq.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574450449/covers/erwan-hesry-e9jV1ZyrOmg-unsplash_zbhlcq.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574450449/covers/erwan-hesry-e9jV1ZyrOmg-unsplash_zbhlcq.jpg',
    },
    {
        name: 'snow',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574329300/covers/jonathan-knepper-9GMO0Sxyw_Y-unsplash_lfukgx.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574329300/covers/jonathan-knepper-9GMO0Sxyw_Y-unsplash_lfukgx.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574329300/covers/jonathan-knepper-9GMO0Sxyw_Y-unsplash_lfukgx.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574329300/covers/jonathan-knepper-9GMO0Sxyw_Y-unsplash_lfukgx.jpg',
    },

    {
        name: 'Santa in the snow',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574937560/covers/osman-rana-u5m61CHska4-unsplash_io08pt.jpg',

        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574937560/covers/osman-rana-u5m61CHska4-unsplash_io08pt.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574937560/covers/osman-rana-u5m61CHska4-unsplash_io08pt.jpg',

        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574937560/covers/osman-rana-u5m61CHska4-unsplash_io08pt.jpg',
    },

    {
        name: 'Snowy Letterbox',
        coverFull:
            'https://res.cloudinary.com/countdownwow/image/upload/v1574937560/covers/les-anderson-7QuEYNRNUeA-unsplash_xfxznd.jpg',
        cover200:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_200/v1574937560/covers/les-anderson-7QuEYNRNUeA-unsplash_xfxznd.jpg',
        cover600:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_600/v1574937560/covers/les-anderson-7QuEYNRNUeA-unsplash_xfxznd.jpg',
        cover3000:
            'https://res.cloudinary.com/countdownwow/image/upload/c_scale,q_auto,w_3000/v1574937560/covers/les-anderson-7QuEYNRNUeA-unsplash_xfxznd.jpg',
    },
]

class CoverPicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            borderMe: this.props.user.cover,
        }
    }

    changeCoverPick = url => {
        this.setState({
            borderMe: url,
        })
    }

    render() {
        return (
            <Covers>
                <div className="covers-grid">
                    {coverFilename.map((el, index) => {
                        // console.log('el = ', el)
                        // console.log('this.props = ', this.props)
                        return (
                            <Mutation
                                key={index}
                                mutation={UPDATE_USER_COVER}
                                variables={{
                                    id: this.props.user.id,
                                    coverFull: el.coverFull,
                                    cover200: el.cover200,
                                    cover600: el.cover600,
                                    cover3000: el.cover3000,
                                }}
                                refetchQueries={[
                                    {
                                        query: USER_LOGGEDIN,
                                    },
                                ]}
                            >
                                {(updateUser, { error }) => {
                                    console.log('error 💣= ', error)
                                    return (
                                        <div
                                            onClick={() => {
                                                this.changeCoverPick(
                                                    el.coverFull
                                                )
                                                updateUser()
                                            }}
                                            // className="covers-item"
                                            className={`covers-item ${
                                                this.state.borderMe ===
                                                el.coverFull
                                                    ? 'make-red'
                                                    : 'boo'
                                            }`}
                                        >
                                            <img
                                                src={el.cover600}
                                                alt={el.name}
                                            />
                                        </div>
                                    )
                                }}
                            </Mutation>
                        )
                    })}
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
