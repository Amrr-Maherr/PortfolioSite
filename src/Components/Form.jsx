import Messaging from "../Messaging.svg"
function Form() {
    return (
        <>
            <section className="my-1">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                        <figure>
                            <img className="img" src={Messaging} alt="" />
                        </figure>
                    </div>
                    <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                        <div class="container my-5">
                    <h2 class="text-center mb-4">Contact Me</h2>
                    <form>
                      <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
                      </div>

                      <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                      </div>

                      <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="5" placeholder="Write your message here" required></textarea>
                      </div>

                      <button type="submit" class="btn btn-primary w-100">Send Message</button>
                    </form>
                      </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Form