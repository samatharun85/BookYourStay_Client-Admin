import React from "react";
import { useNavigate } from "react-router-dom";

const Privacypolicy = () => {
    const navigate=useNavigate()
  const back=(()=>{
    navigate(-1)
  })
  return (
    <div className="terms">
      <button onClick={back}>Back</button>

      <div className="nametitle">Privacy Policy</div><br/><br/>
      <p>This is one of our top priorities, which can be found at, is the
      privacy of our visitors. This paper outlines the types of information that
      collects and records, as well as how we use it. Please do not hesitate to
      contact us if you have any further questions or need additional details
      about our Privacy Policy. This Privacy Policy only applies to our online
      activities and is applicable to information exchanged and/or collected by
      visitors to our website. This policy does not extend to data collected
      outside of this website or by other means. The Privacy Policy Generator
      was used to build our Privacy Policy.</p><br/>
      <div className="name">Consent</div><br/>
      <p>Through using our website , you consent to and adhere to the terms
      of our Privacy Policy.</p><br/>
      <div className="name">Information we collect</div><br/>
      <p>The personal information you are asked to provide, as well as the
      reasons for doing so, will be explained to you at the time you are asked
      to do so. If you contact us directly, we can obtain additional information
      about you, such as your name, email address, phone number, the contents of
      any message and/or attachments you send us, and any other information you
      choose to provide. We can ask for your contact information when you create
      an Account, such as your name, company name, address, email address, and
      phone number.</p><br/>
      <div className="name">How we use your information</div><br/>
      <p>We use the data we gather in a variety of ways, including: Provide,
      operate, and maintain our website Improve, personalize, and expand our
      website Recognize and evaluate how you use our website. Create new
      products, services, features, and capabilities. Interact with you, either
      directly or through one of our partners, for a variety of reasons,
      including customer support, providing you with website updates and other
      material, and marketing and promotional purposes. Send you emails Find and
      prevent fraud</p><br/>
      <div className="name">Log Files</div><br/>
      <p>The use of log files is common practice. When people visit
      websites, these files record their identities. As part of their analytics,
      all hosting companies perform this task. Log files collect information
      such as IP addresses, browser versions, Internet Service Providers (ISPs),
      date and time stamps, referring/exit sites, and possibly the number of
      clicks. They are not connected to any personally identifiable information.
      The information is collected to analyze patterns, operate the platform,
      monitor users' movements on the site, and gather demographic information.</p><br/>
      <div className="name">Cookies and Web Beacons</div><br/>
      <p>Like every other website, uses 'cookies.' These cookies are used to
      save information such as visitor interests and which pages on the website
      they accessed or visited. We can enhance the user experience by
      customizing our web page content based on visitors' browser type and/or
      other information. Please read "What Are Cookies" for more general
      information on cookies. from Consent to Cookies</p><br/>
      <div className="name">Google DoubleClick DART Cookie</div><br/>
      <p>On our platform, Google is one of the third-party vendors. It also
      employs DART cookies to target advertisements to our site users based on
      their visits to www.website.com and other websites on the internet.
      Visitors can opt-out of the use of DART cookies by going to the Google ad
      and content network Privacy Policy at the following URL –
      "https://policies.google.com/technologies/ads"</p><br/>
      <div className="name">Advertising Partners Privacy Policies</div><br/>
      <p>You will find the Privacy Policies for each of ' advertisement
      partners in this list. Third-party ad servers or ad networks use
      technologies such as cookies, JavaScript, or Web Beacons in their ads and
      links, which are delivered directly to users' browsers. When this happens,
      the IP address is immediately sent to them. These tools are used by
      advertisers to evaluate the effectiveness of their advertisement campaigns
      and/or to customize the advertising content you see on websites you visit.
      It's important to note that has no access to or influence over these
      third-party cookies.</p><br/>
      <div className="name">Third-Party Privacy Policies</div><br/>
      <p>Such ads or blogs are not covered by ' Privacy Policy. As a result,
      we recommend that you read the Privacy Policies of these third-party ad
      servers for more details. It may provide details about their operations as
      well as for instructions about how to opt out of them. By modifying the
      settings in your browser, you can disable cookies. On the websites of the
      different web browsers, you can find more detailed details about cookie
      management.</p><br/>
      <div className="name">
        CCPA Privacy Rights (Please do not sell my personal data)
      </div><br/>
      <p>Consumers in California have the right, among other things, under
      the CCPA to: Request that a business that collects a consumer's personal
      data disclose the categories and specific pieces of data it has collected.
      Request that a company deletes all personal information about a customer
      that it has acquired. Request that a business that sells a customer's
      personal details refrain from doing so. If you submit a request, you will
      receive a response within one month. Please contact us if you wish to
      exercise any of these rights.</p><br/>
      <div className="name">GDPR Data Protection Rights</div><br/>
      <p>We want to make sure you understand your data privacy rights fully.
      Any consumer has the following rights: The right to access information –
      You have the right to a copy of your personal information. For this
      service, we will charge you a small fee. The right to rectification – You
      have the right to request that any information that you feel is incorrect
      be corrected. You also have the option of asking us to fill in any
      information gaps you believe exist. The right to be forgotten – You have
      the right to request that we remove your personal data in some situations.
      The right to limit processing – Under certain circumstances, you have the
      right to request that we restrict the processing of your personal data.
      The right to data portability – You have the right to suggest that we send
      the data we've collected to another organization or directly to you under
      some situations. If you submit any request in this regard, you will
      receive a response within one month. If you wish to exercise any of these
      privileges, please contact us.</p><br/>
      <div className="name">Children's Information</div><br/>
      <p>
        Our other top priority is to improve internet protection for children.
        Parents and guardians should keep an eye on, participate in, monitor,
        and guide their children's online activities. can not collect personally
        identifying information from children under the age of thirteen without
        their consent. If you think your child provided this kind of information
        on our website, please contact us immediately so that we can remove it
        from our records.
      </p><br/>
    </div>
  );
};

export default Privacypolicy;
