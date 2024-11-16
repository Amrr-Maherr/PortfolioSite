// Defining the Contact component
function Contact() {
    return (
        <>
            {/* A container for the contact section */}
            <div className="container Contact text-center p-4 bg-dark w-75">
                <div className="row">
                    {/* Left column: Contact message */}
                    <div className="col-lg-6 col-12">
                        <h3>Get In Touch</h3>
                        <p>If you'd like to discuss a project, ask a question, or collaborate, feel free to reach out to me!</p>
                    </div>
                    {/* Right column: Input field and send button */}
                    <div className="col-lg-6 col-12 p-4">
                        <div className="input-group mb-3">
                            {/* Input field for the user's message */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your message"
                                aria-label="Your message"
                                aria-describedby="button-addon2"
                            />
                            {/* Send button */}
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exporting the Contact component to make it available for use in other files
export default Contact;
