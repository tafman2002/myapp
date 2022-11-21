function CopyRight() {
    const today = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright {today} </p>
        </footer>
    );
}

export default CopyRight;