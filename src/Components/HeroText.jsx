

function HeroText(props) {
  return (
    <section>
<h1 className="display-4 fw-bold text-light mt-5 mb-3">
  {props.myName}
</h1>
<h4 className="text-muted my-3">{props.greetingMessage}</h4>
<p className="lead text-light mb-5">
  {props.description}
</p>
      <p>
  <a class="link-offset-2 link-underline link-underline-opacity-0 fw-bold fs-3" href="/">
    Contact <i class="fa-solid fa-arrow-right"></i>
  </a>
</p>
      </section>
    );
}

export default HeroText;
