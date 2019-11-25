import styled from 'styled-components'

// $media-x-sml: 500px;
// $media-sml: 576px;
// $media-med: 768px;
// $media-lrg: 992px;
// $media-lrg-xl: 1200px;

// @media (min-width: 576px) {
//          }

export const PageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`

export const Banner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 576px) {
    }

    background-image: url('./static/graphics/xmas-doodle2-grey.svg');
    background-size: 300px 300px;
    background-position: center;

    .banner-video-cont {
        padding: 0 1rem;
        width: 100%;
        margin: 50px auto;

        h1 {
            font-size: 20px;
        }

        @media (min-width: 576px) {
            max-width: 700px;
        }

        @media (min-width: 776px) {
            max-width: 750px;
        }

        video {
            width: 100%;
            box-shadow: 5px 5px 16px -7px rgba(57, 57, 57, 0.5);
        }
    }

    .banner-alert {
        width: 100%;
        background-color: ${props => props.theme.green};
        background-color: green;
        text-align: center;
        border: 1px solid #000;
        p {
            color: red;
            line-height: 1;
            margin-bottom: 0;
            border-top: 2px solid white;
            padding: 0.5rem 0;
        }
    }

    .banner-alert-btn {
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.green};
        }
    }
`

export const Headlines = styled.div`
    .headline-strip {
        background-color: ${props => props.theme.red};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
        padding: 20px 20px;

        h1 {
            line-height: 1.2;
            margin: 0;
            color: white;
            font-size: 24px;
        }

        @media (min-width: 576px) {
            padding: 40px 20px;
            h1 {
                font-size: 40px;
            }
        }
    }

    .strapline-strip {
        background-color: ${props => props.theme.green};
        text-align: center;
        padding: 20px;

        @media (min-width: 576px) {
            padding: 20px 20px;
        }

        h2 {
            line-height: 1.2;
            margin: 0;
            color: white;
            font-size: 22px;
        }

        @media (min-width: 576px) {
            padding: 40px 20px;
            h2 {
                font-size: 35px;
            }
        }
    }
`

export const ThreeSteps = styled.div`
    .three-steps-wrapper {
        width: 90%;
        max-width: 950px;
        margin: 0 auto;

        @media (min-width: 768px) {
            margin: 80px auto;
        }
    }

    .three-steps {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media (min-width: 576px) {
            justify-content: space-between;
        }

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    .three-steps-headline {
        text-align: center;

        font-size: 20px;
        font-weight: bold;
        padding: 20px;
        margin-bottom: 30px;

        @media (min-width: 576px) {
            font-size: 35px;
        }
    }

    .step-item {
        width: 100%;

        padding: 30px 5px;

        @media (min-width: 576px) {
            width: 30%;
            /* max-width: 400px; */
        }
        @media (min-width: 768px) {
            /* max-width: 400px; */
        }

        text-align: center;
        /* border: 1px solid rgba(0, 0, 0, 0.1); */
        padding: 30px 10px;
        margin-bottom: 40px;
        box-shadow: 2px 2px 13px 0px rgba(0, 0, 0, 0.15);

        p {
            font-size: 24px;
        }
    }

    .step-number {
        width: 35px;
        height: 35px;
        margin: 0 auto 1rem;
        border-radius: 30px;
        background-color: ${props => props.theme.red};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            color: white;
            line-height: 1;
            margin: 0;
            font-weight: bold;
        }
    }
`

export const Login = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 850px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* text-align: center; */

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        margin: 0 auto;

        justify-content: space-between;
    }

    @media (min-width: 768px) {
        /* max-width: 900px; */
        /* margin: auto; */
        /* padding: 2rem 0; */
    }
`
