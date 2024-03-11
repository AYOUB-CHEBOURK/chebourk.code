import "./service.css"
import image1 from '../../../../public/settings.png'
import image2 from '../../../../public/computer.png'
import image3 from '../../../../public/markiting.png'
import Image from "next/image"
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";

const Service = () =>{

    const { mode } = useContext(ThemeContext)

    const ServiceData =[
        {
            id: 1,
            image: image1,
            title: "web development",
            description: "I design and develop custom websites that fit your unique business needs. Whether you need a beautiful portfolio website, an e-commerce platform, or a complex web application, I am here to serve you.",
        },
        {
            id: 2,
            image: image3,
            title: "blogging/seo",
            description: "I implement best practices for search engine optimization (SEO) to improve your website's visibility and rankings on search engine results pages (SERPs), driving organic traffic and maximizing your online presence.",
        },
        {
            id: 3,
            image: image2,
            title: "responsive design",
            description: "I prioritize responsiveness to ensure your website looks and performs flawlessly across all devices and screen sizes. From desktops to smartphones, your audience will enjoy a consistent and user-friendly experience.",
        }
    ]


    return(
        <>
          <div className="service" id="service">
            <h1 data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Service</h1>
            <div className="container">
                {ServiceData.map((item , id)=>(
                    <div className="box" key={id} style={mode === "dark" ? { border: "2px solid white", boxShadow: "15px 14px 0px -5px white" } : { border: "var(--border)", boxShadow: "var(--box-shadow)" }}
                        data-aos="fade-up" data-aos-duration="2000">
                        <div className="image">
                          <Image src={item.image} alt="image"/>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </>
    )
}

export default Service