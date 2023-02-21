export default function Footer(props) {
  return (
    <footer>
        <p>{props.title}</p>
    </footer>
  )
}

Footer.defaultProps = {
    title: "© Umbrella Corporation"
}