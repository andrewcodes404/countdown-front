import React from 'react'

// var mySecret = cloudinary.utils.api_sign_request(params_to_sign, api_secret)
// var generateSignature = function(callback, params_to_sign) {
//     $.ajax({
//         url: 'https://www.my-domain.com/my_generate_signature',
//         type: 'GET',
//         dataType: 'text',
//         data: { data: params_to_sign },
//         complete: function() {
//             console.log('complete')
//         },
//         success: function(signature, textStatus, xhr) {
//             callback(signature)
//         },
//         error: function(xhr, status, error) {
//             console.log(xhr, status, error)
//         },
//     })
// }
// cloudinary.utils.api_sign_request(params_to_sign, api_secret)

var generateSignature = 'generateSignature'

var myWidgetSigned = cloudinary.createUploadWidget(
    {
        cloudName: 'countdownwow',
        uploadPreset: 'countdownwow_signed',
        uploadSignature: generateSignature,
        apiKey: 145633765385251,
    },
    (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info)
        }
    }
)

var myWidgetUnsigned = cloudinary.createUploadWidget(
    {
        cloudName: 'countdownwow',
        uploadPreset: 'countdownwow_unsigned',
    },
    (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info)
        }
    }
)

class Build extends React.Component {
    render() {
        return (
            <div>
                <p>Build Comp</p>
                <button
                    onClick={() => {
                        myWidgetUnsigned.open()
                    }}
                >
                    upload
                </button>
            </div>
        )
    }
}

export default Build
