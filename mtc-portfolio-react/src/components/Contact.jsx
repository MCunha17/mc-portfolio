function Contact() {
    return (
      <section>
        <h3>Contact</h3>
        <form className="form-horizontal" action="/action_page.php">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="name">Name:</label>
            <div className="col-sm-10">
              <input type="name" className="form-control" id="name" placeholder="Enter name" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email Address:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" placeholder="Enter email address" />
            </div>
          </div>
          <div class="form-group">
            <label for="Message">Message:</label>
                <textarea class="form-control" rows="5" id="message"></textarea>
            </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
  
export default Contact;