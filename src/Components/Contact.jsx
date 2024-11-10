function Contact() {
    return (
        <>
           <div className="container Contact text-center p-4 bg-dark w-75">
    <div className="row">
        <div className="col-lg-6 col-12">
            <h3>Get In Touch</h3>
            <p>If you'd like to discuss a project, ask a question, or collaborate, feel free to reach out to me!</p>
        </div>
        <div className="col-lg-6 col-12 p-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Your message" aria-label="Your message" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
            </div>
        </div>
    </div>
</div>

        </>
    )
}
export default Contact