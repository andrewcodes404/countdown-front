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
    margin-bottom: 200px;
`

export const Banner = styled.div`
    position: relative;
  
    min-height: 300px;
    max-height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  

     @media (min-width: 576px) {
           min-height: 400px;
        max-height: 450px;
        }

      
    background-image: url('./static/graphics/xmas-doodle2-grey.svg');
    background-size: 300px 300px;
    background-position: center;

    .banner-video-cont {
        padding: 0 1rem;
        width: 100%;

        max-width: 500px;
        margin: auto;
     

        @media (min-width: 576px) {
            max-width: 600px;
        }

        video {
            width: 100%;
            box-shadow: 5px 5px 16px -7px rgba(57, 57, 57, 0.5);
        }
    }

    .banner-alert {
        width: 100%;
        /* background-color: ${props => props.theme.red};; */
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
        height: 100px;

        h1 {
            line-height: 1;
            margin: 0;
            color: white;
        }
    }

    .strapline-strip {
        background-color: ${props => props.theme.green};
        text-align: center;
        padding: 1rem 0;

        @media (min-width: 576px) {
            padding: 1.5rem 0;
        }

        h2 {
            line-height: 1;
            margin: 0;
            color: white;
        }
    }
`

export const ThreeSteps = styled.div`
    .three-steps-wrapper {
        width: 90%;
        max-width: 600px;
        margin: auto;
        padding: 1rem 0;

        @media (min-width: 576px) {
            margin: auto;
            padding: 1rem 0;
        }

        @media (min-width: 768px) {
            max-width: 900px;
            margin: auto;
            padding: 2rem 0;
        }
    }

    .three-steps {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        padding: 20px;

        @media (min-width: 576px) {
            justify-content: space-between;
        }
    }

    .three-steps-headline {
        width: 100%;
        text-align: center;
        margin: 30px 0px 60px;

        font-size: 30px;
        font-weight: bold;
    }

    .step-item {
        width: 100%;
        max-width: 300px;

        @media (min-width: 576px) {
            width: 30%;
        }

        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 1rem 0.5rem 0.5rem;
        margin-bottom: 1rem;
        box-shadow: 2px 2px 13px 0px rgba(0, 0, 0, 0.05);

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
    max-width: 600px;
    margin: auto;
    padding: 1rem 0;

    @media (min-width: 576px) {
        margin: auto;
        padding: 1rem 0;
    }

    @media (min-width: 768px) {
        max-width: 900px;
        margin: auto;
        padding: 2rem 0;
    }

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
