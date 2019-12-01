import styled from 'styled-components'

export const PageWrapper = styled.div`
    /* border: 1px solid yellow; */
    background: black;

    height: 100vh;
    display: flex;
    flex-direction: column;

    .blur-me {
        filter: grayscale(20%) blur(3px);
    }

    .un-blur-me {
        transition: filter 0.6s;
        filter: grayscale(0) blur(0px);
    }

    .below-banner-wrapper {
        flex: 1;
    }
`

export const TopBannerStyle = styled.div`
    /* position: fixed; */
    /* top: 0; */
    /* bottom: 0; */
    /* right: 0; */
    /* left: 0; */
    z-index: 2;
    background: red;
    /* padding: 10px; */
    min-height: 40px;
    padding: 10px 0;

    display: flex;
    justify-content: center;

    p {
        margin: 0;
        font-size: 18px;
    }

    @media (min-width: 1200px) {
        height: 40px;
        padding: unset;
    }

    .banner-wrapper {
        display: flex;
        width: 95%;
        /* max-width: 1300px; */
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 1200px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .item-left,
    .item-right {
        display: flex;
        align-items: center;

        padding: 5px 0;
        @media (min-width: 1200px) {
            padding: 0;
        }

        p {
            font-size: 15px;
            line-height: 1.2;
            @media (min-width: 1200px) {
                font-size: 16px;
            }
        }
    }

    .item-left {
        a {
            color: white;
        }
        text-align: center;
    }

    .item-right {
        display: none;
        @media (min-width: 370px) {
            display: flex;
        }
    }

    .item-right-message {
        display: none;
        @media (min-width: 565px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .hand {
        font-size: 28px;
        margin-left: 20px;
        animation: shake 1.5s 1s infinite;
    }

    .icons {
        display: flex;
        margin-left: 20px;
    }

    .share-btn:focus {
        /* border: 5px solid green; */
        outline: none;
    }

    .icon-wrapper {
    }

    .icon {
        width: 25px;
        margin-right: 20px;
        color: white;

        display: flex;
        justify-content: center;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
            background: gold;
        }
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
        padding: 15px 50px 15px 30px;
        /* width: 90%; */
        text-align: center;
        width: 95%
        margin: 0 auto;
        max-width: 900px;
        span {
            font-size: 20px;
        }
        position: relative;

        @media (min-width: 768px) {
            padding: 30px 60px;
            span {
                font-size: 40px;
            }
        }
    }

    .message-close-btn {
        position: absolute;
        top: 10px;
        right: 10px;

        @media (min-width: 768px) {
            top: 20px;
            right: 20px;
        }
    }

    .message-close-btn-x {
        font-size: 20px;
        cursor: pointer;
        &:hover {
            color: red;
            transition: 0.4s;
            transform: rotate(90deg);
        }

        @media (min-width: 768px) {
            font-size: 40px;
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
        top: 20px;
        right: 20px;
        color: white;

        @media (min-width: 768px) {
            top: 50px;
            right: 50px;
        }

        .lightbox-close-btn-x {
            font-size: 40px;
            cursor: pointer;

            @media (min-width: 768px) {
                font-size: 60px;
            }

            &:hover {
                color: red;
                transition: 0.4s;
                transform: rotate(90deg);
            }
        }
    }
`

export const Cover = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* height: calc(100vh - 40px); */
    height: 100%;
    width: 100%;

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

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    /* max-height: calc(100vh - 40px); */
    /* margin-top: 40px; */

    height: 100%;
    width: 100%;
`

export const Item = styled.div`
    width: 25%;
    height: 16.6666%;
    position: relative;
    cursor: pointer;

    @media (min-width: 500px) {
        width: 16.6666%;
        /* height: calc(25vh - 10px); */
        height: 25%;
    }

    &:hover ${ImageExpand} {
        animation-name: fade-in;
        animation-duration: 2.5s;

        @media (min-width: 576px) {
            display: block;
        }
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
            font-size: 20px;
            color: white;

            @media (min-width: 576px) {
                font-size: 40px;
            }

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
