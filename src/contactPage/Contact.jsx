import React from 'react'
import PageHeader from '../components/PageHeader';
import Map from '../components/Map';

const subTitle = "Get in touch with us"; const title = "We're Always Eager To Hear From You!"; const conSubTitle = "Get in touch with Contact us"; const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better."; const btnText = "Send our Message";

const contactList = [ { imgUrl: "/src/assets/images/icon/01.png", imgAlt: "contact icon", title: "Office Address", desc: "12 Uchkurgan Namangan, Uzbekistan", }, { imgUrl: "/src/assets/images/icon/02.png", imgAlt: "contact icon", title: "Phone number", desc: "+998937373477", }, { imgUrl: "/src/assets/images/icon/03.png", imgAlt: "contact icon", title: "Send email", desc: "otabekxolmamatov92@gmail.com", }, { imgUrl: "/src/assets/images/icon/04.png", imgAlt: "contact icon", title: "Our website", desc: "www.shopcart.com", }, ];

const Contact = () => {
  return (
    <div>
        <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />
        <div className='map-address-section padding-tb section-bg'>
        <div className="container">
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>

            <div className="section-wrapper">
                <div className='row flex-row-reverse'>
                <div className='col-xl-4 col-lg-5 col-12'>
                    <div className="contact-wrapper">
                        {
                            contactList.map((item, index) => {
                                return (
                                    <div className="contact-item" key={index}>
                                        <div className="contact-icon">
                                            <img src={item.imgUrl} alt={item.imgAlt} />
                                        </div>
                                        <div className="contact-content">
                                            <h3 className="title">{item.title}</h3>
                                            <p className="desc">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='col-xl-8 col-lg-7 col-12'>
                    <Map />
                </div>
                </div>
            </div>
        </div>
        </div>

        <div className='contact-section padding-tb'>
            <div className="container">
                <div className='section-header text-center'>
                    <span className='subtitle'>{conSubTitle}</span>
                    <h2 className='title'>{conTitle}</h2>
                </div>


                <div className="section-wrapper">
                    <div className="contact-form">
                        <div className="form-group">
                            <input type="text" name='name' id='name' placeholder='Your Name *'/>
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' id='email' placeholder='Your Email *'/>
                        </div>
                        <div className="form-group">
                            <input type="number" name='number' id='number' placeholder='Phone Number *'/>
                        </div>
                        <div className="form-group">
                            <input type="email" name='subject' id='subject' placeholder='Subject *'/>
                        </div>
                        <div className="form-group w-100">
                            <textarea name="message" id="message" rows="8" placeholder='Your Message ...'></textarea>
                        </div>
                        <div className='form-group w-100 text-center'>
                            <button className='lab-btn'>
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact