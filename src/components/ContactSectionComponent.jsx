import { React, useState, useEffect,  } from 'react'
import { useForm } from 'react-hook-form'

function ContactSectionComponent() {
   
   const url = 'http://127.0.0.1:8000/api/get-page-data/contactus';
   const [data, setData ] = useState({});

   useEffect(() => {
      contactPageData();
   }, [])

   const contactPageData = async () => {
      try{
      //      fetch(url)
      //      .then((response) => response.json())
      //      .then((res) => {
      //         const contactData = Object.fromEntries(
      //             res.data.map((item) => [item.key, item.keyValue])
      //         );  

      //       setData(contactData);
      //       console.log(contactData);
      //      })  
      //      .catch((error) => {
      //       console.log(error);
      //      });

        const response = await fetch(url);
        const res = await response.json();

        const contactData = Object.fromEntries(
            res.data.map((item)=>[
                item.key,
                item.keyValue
            ])
        );
        setData(contactData);
      }
      catch(err){
        console.log(err);
      }

   } 
 
   const { register, handleSubmit, 
           formState, reset 
          } = useForm({
              defaultValues: {
                  name: "",
                  email: "",
                  subject: 34,
                  message: "",  
              }

          });

   const { errors } = formState;

   const onSubmit = async (data) => {
          console.log(data);
          try {

          const response = await fetch("https://your-api-url.com/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });


          const result = await response.json();


          if(response.ok){
            console.log("Message Sent Successfully", result);

            alert("Your message has been sent successfully!");

            reset(); // clear form after submit
          }
          else{
            console.log("API Error:", result);
            alert("Something went wrong!");
          }

        } catch(error){

          console.log("Network Error:", error);
          alert("Server not reachable!");

        }

   }

   const onErrors = (errors) => {
     console.log("Errors : ", errors);
   }
 

  return (
    <>
      <div className="contact section mt-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            {/* <h6>| Contact Us</h6> */}
            <h6>| {data.title}</h6>
            <h2>{ data?.heading && "Get In Touch With Our Agents" }</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="contact-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div id="map">
            {data?.link && <iframe src={data.link} width="100%" height="500px" frameBorder="0" style={{ border:"0", borderRadius: "10px", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }} allowFullScreen=""></iframe>}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="item phone">
                <img src="assets/assets/images/phone-icon.png" alt="" style={{maxWidth: "52px"}} />
                <h6>{ data?.phone && "010-020-0340" }<br /><span>Phone Number</span></h6>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item email">
                <img src="assets/assets/images/email-icon.png" alt="" style={{ maxWidth: "52px"}} />
                <h6>{ data?.address && "info@villa.co" }<br /><span>Business Email</span></h6>
              </div>
            </div>
          </div>
        </div>

        {/* contact form start*/}
        <div className="col-lg-5">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit, onErrors)}>
            <div className="row">
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on"
                    { ...register("name", {
                      required: 'Name is required.',
                    })}  />
                    {errors.name && <p className="error">{errors.name?.message}</p>}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="email">Email Address</label>
                  <input type="text" name="email" id="email" placeholder="Your E-mail..." 
                    { ...register("email", {
                      required: 'Email is required.',
                       pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: 'Invalid email address'
                      },
                      //this is a cutom validation
                      validate:{ 
                        notAdminEmail: (value) => {
                        return(
                        value !== "admin@example.com" || "Enter a diffreent email address."
                        )}},
                        // notBloackListedEmail: (value) => {
                        //     return(
                        //       !value.endsWith("@yopmail.com") || "This domain is not allowed."
                        //     )
                        // },
                        //to check if the email is already exists or not.....
                        // availableEmail: async (value) => {
                        //     const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
                        //     const data = await response.json();
                        //     return data.length === 0 || "Email alreaady exists."; 
                        // },
                    })}/>
                    {errors.email && <p className="error">{errors.email?.message}</p>}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="subject">Subject</label>
                  <input type="subject" name="subject" id="subject" placeholder="Subject..." 
                  {...register("subject", {
                    required: "Subject is required."
                  })}
                  />
                  {errors.subject && <p className="error">{ errors.subject?.message }</p>}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Your Message"
                   { ...register("message", {
                    required: 'Message is required.'
                   })}
                  ></textarea>
                   { errors.message && <p className="error">{ errors.message?.message }</p>}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        {/* contact form end*/}

      </div>
    </div>
  </div>
    </>
  )
}

export default ContactSectionComponent