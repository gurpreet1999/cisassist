import React from "react";
import "./WhyCISAssist.scss";
import heroimage from "../../Assest/Group 2056 (1).png";
import eligibleImage from "../../Assest/Mask Group.png";

// import food from "../../Assest/whyCISAssist/food.svg";
// import car from "../../Assest/whyCISAssist/car.svg";
// import accommodation from "../../Assest/whyCISAssist/accommodation.svg";
// import clothing from "../../Assest/whyCISAssist/clothing.svg";
// import tool from "../../Assest/whyCISAssist/tool.svg";
// import training from "../../Assest/whyCISAssist/training.svg";
import ukMap from "../../Assest/whyCISAssist/ukMap.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroimage2 from "../../Assest/Group 9154.png"
import verify from "../../Assest/verify.png"
import basic from "../../Assest/basic.png"
import standard from "../../Assest/standard.png"
import premium from "../../Assest/premium.png"
import rebateplus from "../../Assest/rebateplus.png"
import creditcard from "../../Assest/atm-card_8983163.png"
import compliance from "../../Assest/copyright.png"
import money from "../../Assest/money (1).png"

import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);



const WhyCISAssist = () => {

  const basicRebatePayment = () => {
    window.location.href = 'https://buy.stripe.com/bIY14DewFg1Ge7m8wz';
  }
  const standardRebatePayment = () => {
    window.location.href = 'https://buy.stripe.com/9AQ00z3S14iYgfu001'; // Redirect to Stripe Checkout
  };

  const RebatePlusPayment = () => {
    window.location.href = 'https://buy.stripe.com/dR63cL3S116M6EU9AC'; // Redirect to Stripe Checkout
  };

  
  useGSAP(()=>{
    
    gsap.utils.toArray("h1").forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: heading,
        
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });
    gsap.utils.toArray("h2").forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: heading,
        
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });


    gsap.utils.toArray(".left p").forEach((para) => {
      gsap.fromTo(
        para,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: para,
        
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });
    gsap.utils.toArray(".right p").forEach((para) => {
      gsap.fromTo(
        para,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: para,
        
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });



    // gsap.utils.toArray(".card").forEach((card) => {
    //   gsap.fromTo(card, 
    //     {
    //       opacity: 0,
    //       scale: 0.8,
    //       filter: "blur(1px)"
    //     }, 
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       filter: "blur(0px)",
    //       duration: 1.5,
    //       ease: "power3.inOut",
    //       scrollTrigger: {
    //         trigger: card,
    //         start: "top bottom", 
    //         end: "bottom top", 
          
    //       }
    //     }
    //   );
    // });
    
  })












  return (
    <div className="whyCISAssist">
      <section className="heroSection">
        <div className="left">
          <h1>Let <span>CISAssist</span> simplify your CIS  refund  <span>claim.</span> </h1>
          <p>
          Navigating CIS refund claims can be challenging and time consuming. At CISAssist, we streamline the process by combining our expert team with advanced technology to ensure a smooth, transparent, and efficient experience for your refund claim.
          </p>
          <button>
            <strong>Get Started</strong>
          </button>

          <div className="review"></div>
        </div>

        <div className="right">
          <figure>
            <img src={heroimage} alt="hero" />
          </figure>
        </div>
      </section>

      <main className="whyChooseUs">
        <div className="left">
          <figure>
            <img src={heroimage2} alt="eligible" />
          </figure>
        </div>

        <div className="right">
        <h1>Why Choose <i>CISAssist</i>?</h1>
  
        <div className="cardContainer">
          <div className="card1 card">
            <div className="left"><img src={money} /></div>
            <div className="right">  <h3>Maximised Refund</h3>
            <p>
            We ensure you get the maximum CIS refund with minimal effort.
            </p></div>
          
          </div>

          <div className="card2 card">
          <div className="left"><img src={compliance}/></div>
          <div className="right">

          <h3>Compliance</h3>
            <p>
            We ensure full HMRC compliance, so you can manage your CIS obligations worry-free.
            </p>
          </div>
           
          </div>

          <div className="card3 card">
          <div className="left"><img src={creditcard}/></div>
          <div className="right">
            
             <h3>Choose how to pay</h3>
            <p>
            We offer flexible payment options to suit your needs.
            </p>
            </div>
           
          </div>
        </div>

       
        </div>
      </main>

      <div className="ourServices">

<h1>Choose Your Payment Options</h1>

<div className="serviceContainer"> 
  <div className="left">
  <figure>
<img src={eligibleImage} />
</figure>
  </div>

  <div className="right">
    <div className="card">
      <div className="left">
      <figure>
        <img src={basic} alt="Fuel & Travel Expenses" />
      </figure>
      </div>
      <div className="right">
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>CIS refund only no expenses</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>A Minimum £2500 refund</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£150 plus VAT upfront</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£200 plus VAT from refund</label>
      </div>
     
    <button onClick={basicRebatePayment} >Pay now</button>
    
      </div>
     
    
    </div>
    <div className="card">
      <div className="left"> <figure>
        <img src={standard} alt="food" />
      </figure></div>
      <div className="right">
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>CIS refund plus expenses</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Ideal for emailed expenses and CSV bank statements</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Up to £4,500 refund</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£250 plus VAT upfront, or £350 plus VAT from refund</label>
      </div>
      {/* <p>Ideal for emailed expenses and CSV bank statements</p>
      <p>Up to £4,500 rebate</p>
      <p>£250 plus VAT upfront, or £350 plus VAT from rebate</p> */}
      
      
      <button onClick={standardRebatePayment} >Pay now</button>
      </div>
     
    
    </div>
    <div className="card">
      <div className="left">  <figure>
        <img src={rebateplus} alt="Accommodation" />
      </figure></div>
      <div className="right">
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>CIS refund plus expenses</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>For scanned expenses or PDF bank statements</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Up to £4,500 refund</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£300 plus VAT upfront, or £400 plus VAT from refund</label>
      </div>
      <button onClick={RebatePlusPayment} >Pay now</button>
      
      </div>
    
      
    </div>
    {/* <div className="card">
      <div className="left"> <figure>
        <img src={premium} alt="tool" />
      </figure></div>
     
     <div className="right">
     <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Comprehensive expense management</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Customized pricing based on needs</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Tailored support throughout the process</label>
      </div>
  
      
      </div>
     
    </div> */}
 
  </div>


</div>
</div>


      <div className="howItWork">
        <div className="cont">
          <div className="left">
            <h1>Your money is waiting for you to claim it! There are <strong>£</strong>4.5  <strong>bn</strong> in unclaimed rebates, benefits, and tax credits.</h1>
       
          </div>

          <div className="right">
            <figure>
              <img src={ukMap} alt="UK Map" />
            </figure>
          </div>
        </div>
      </div>

     
    </div>
  );
};
  

export default WhyCISAssist;
