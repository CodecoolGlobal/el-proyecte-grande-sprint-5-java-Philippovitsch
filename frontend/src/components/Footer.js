const Footer = (props) => {
    return (
        <footer>
            <p>{props.title}</p>
        </footer>
    );
};

Footer.defaultProps = {
    title: "© Umbrella Corporation"
}

export default Footer;