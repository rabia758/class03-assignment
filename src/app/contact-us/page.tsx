

export default function Contact(){
    return(
       <div className="contact">
        
        <h1 className="contact-h1">Contact Us</h1>
        <form >
        <fieldset className="field">
            <legend>
                <label htmlFor="name" className="label"> Name:</label>
                <input type="text"  placeholder="Enter Your Name" className="input" required/>
            </legend>
        </fieldset>
        <fieldset className="field">
            <legend>
                <label htmlFor="name" className="label"> Email:</label>
                <input type="text"  placeholder="Enter Your Name" className="input" required/>
            </legend>
        </fieldset>
        <fieldset className="field">
            <legend>
                <label htmlFor="name" className="label"> Contact Number:</label>
                <input type="number"  placeholder="Enter Your Name" className="input" required/>
            </legend>
        </fieldset>
        <fieldset className="field">
            <legend>
                <label htmlFor="name" className="label"> Message:</label>
                <textarea name="maeesge" id="messsage" placeholder="Enter Your Message" className="textarea" rows={4}></textarea>
            </legend>
        </fieldset>
        <button type="submit"className="btn"> Submit</button>
        </form>




    

        </div>
    )
}