import Head from "next/head";

function IndexPage() {
    return (
        <div>
            <Head>
                <title>Cool Title</title>
                <meta name="description" content="Checkout our cool page" key="desc" />
                <meta property="og:title" content="Social Title for Cool Page" />
                <meta
                    property="og:description"
                    content="And a social description for our cool page"
                />
                <meta
                    property="og:image"
                    content="https://example.com/images/cool-page.jpg"
                />
            </Head>
            <h1>iPhones for Sale</h1>
            <p>insert a list of iPhones for sale.</p>
        </div>
    );
}

export default IndexPage;