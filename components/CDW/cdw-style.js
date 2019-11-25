import styled from 'styled-components'

export const PageWrapper = styled.div`
    /* border: 1px solid yellow; */
    background: green;

    .blur-me {
        filter: grayscale(20%) blur(3px);
    }

    .un-blur-me {
        transition: filter 0.6s;
        filter: grayscale(0) blur(0px);
    }
`

export const TimerStyled = styled.div`
    .message {
        font-size: 80px;
        color: white;
    }

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: rgba(000, 000, 000, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TheClock = styled.div`
    font-size: 60px;
    color: white;
    text-align: center;
    .secs {
        display: inline-block;
        width: 80px;
    }
`
export const Message = styled.div`
    .message-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 3;
        background: rgba(000, 000, 000, 0.8);
    }

    .message-text {
        background: white;
        /* background: lightgrey; */
        /* background: rgba(255, 255, 255, 0.8); */
        padding: 30px 60px;
        /* width: 90%; */
        text-align: center;
        max-width: 900px;
        span {
            font-size: 40px;
        }
        position: relative;
    }

    .message-close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .message-close-btn-x {
        font-size: 40px;
        cursor: pointer;
        &:hover {
            color: red;
            transition: 0.4s;
            transform: rotate(90deg);
        }
    }

    .fade-out {
        animation-name: fade-out;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        border: 3px solid green;
    }
`

export const Lightbox = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
    background: rgba(000, 000, 000, 0.8);

    animation-name: fade-in;
    animation-duration: 1s;

    .lightbox-img {
        max-width: 80%;
        height: 80%;
        margin: 0 auto;

        img {
            object-fit: scale-down;
            height: 100%;
        }
    }

    .lightbox-close-btn {
        position: absolute;
        top: 50px;
        right: 50px;
        color: white;
        font-size: 80px;

        .lightbox-close-btn-x {
            font-size: 60px;
            cursor: pointer;
            &:hover {
                color: red;
                transition: 0.4s;
                transform: rotate(90deg);
            }
        }
    }
`

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: 100vh;
`

export const Cover = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* background: palegoldenrod; */
    /* z-index: 1; */
    img {
        object-fit: cover;
        height: 100%;
    }
`

export const ImageExpand = styled.div`
    .img-expand-icon {
        font-size: 35px;
        color: white;
        line-height: 0;
        margin: 0;
        transition: 0.4s;
    }
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 2;
    padding: 0 0 0 5px;
    border-bottom-left-radius: 10px;
    background: rgba(000, 000, 000, 0.8);
    &:hover {
        .img-expand-icon {
            color: green;
        }
    }

    display: none;
`

export const Item = styled.div`
    width: 25vw;
    height: 16.6666vh;
    position: relative;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 16.6666vw;
        height: 25vh;
    }

    &:hover ${ImageExpand} {
        display: block;
        animation-name: fade-in;
        animation-duration: 2.5s;
    }

    .img-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;

        img {
            object-fit: cover;
            height: 100%;
        }
        transition: 0.4s;
    }

    .hide-item {
        display: none;
    }

    .show-item {
        display: block;
        animation-name: fade-in;
        animation-duration: 1.5s;
    }

    .users-index {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        h3 {
            margin: 0;
            font-size: 40px;
            color: white;
            &:hover {
                color: green;
                animation: shake-up-down 1s;
            }
        }
    }

    .bad-number {
        h3 {
            &:hover {
                color: red;
                animation: shake 1s;
            }
        }
    }
`
