import styled from 'styled-components'

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .modal-card {
        background: white;
        padding: 30px;
        width: 95%;
        max-width: 600px;
    }

    .close-btn-wrapper {
        text-align: right;
    }
    .close-btn {
        cursor: pointer;
        transition: 0.4s;
        &:hover {
            color: orange;
        }
    }
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    /* margin-top: 100px; */
`

export const Form = styled.form`
    width: 80%;
    margin: 0 auto;
    width: 300px;

    display: flex;
    flex-direction: column;
    .submit-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        padding: 2px;
        margin-top: 30px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: 0.4s;
        span {
            font-size: 24px;
        }

        &:hover {
            background: green;
            color: white;
            /* border: unset; */
        }
    }
`

export const SuccessMessage = styled.div`
    text-align: center;

    h2 {
        margin: 5px;
        line-height: 1;
        
    }

    p {
        margin: 20px 0;
    }
`
