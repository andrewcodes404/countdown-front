import React from 'react'
import Head from 'next/head'

const Meta = () => (
    <Head>
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />

        <meta charSet="utf-8" />

        <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600"
            rel="stylesheet"
        ></link>

        {/* material ui */}
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        {/* ️️ 🌈 CLOUDINARY 🌩️ 🌈 */}
        <script
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript"
        ></script>

        {/* FAVICON --- FAVICON --- FAVICON --- FAVICON --- FAVICON ---  */}

        {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-96559774-20"
        ></script> */}

        {/* <!-- META -- META -- META -- META --  --> */}
        {/* <meta property="og:image:height" content="630" /> */}
        {/* <meta property="og:image:width" content="1120" /> */}
        <meta property="og:title" content="Countdown" />
        {/* <meta
            property="og:description"
            content="ReThink is a two-day event dedicated to sustainability. Championing eco-friendly business operations, showcasing innovation and responsible procurement."
        /> */}
        {/* <meta
            property="og:image"
            content="https://res.cloudinary.com/dcqi9fn2y/image/upload/v1554473156/rethink/rethink_fb_card.jpg"
        /> */}
        {/* <meta property="og:url" content="https://rethink-event.com" /> */}

        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <!-- <meta name="twitter:site" content="@twitter@username" /> --> */}
        {/* <meta name="twitter:title" content="Stellar" /> */}
        {/* <meta
            name="twitter:description"
            content="ReThink is a two-day event dedicated to sustainability. Championing eco-friendly business operations, showcasing innovation and responsible procurement."
        /> */}
        {/* <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dcqi9fn2y/image/upload/v1554473156/rethink/rethink_fb_card.jpg"
        /> */}

        <title>CountDownWow</title>
    </Head>
)

export default Meta
