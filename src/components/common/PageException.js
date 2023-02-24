const PageException = ({ exceptionText, auth }) => {
    return (
        <>
            <h1>{exceptionText}</h1>
            <h1>{auth}</h1>
        </>
    );
};

export default PageException;