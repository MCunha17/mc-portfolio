import MarketingProject from '../pages/MarketingPortfolio';
import whitepaper from '../assets/images/whitepaper.png';
import onboarding from '../assets/images/email-onboarding.png';
import promotion from '../assets/images/email-marketing.png';
import launch from '../assets/images/launch-communication.png';
import sizzle from '../assets/images/sizzle-reel.png';
import survey from '../assets/images/survey.png';
import competitive from '../assets/images/competitive-comparison.png';
import study from '../assets/images/case-study.png';
import cases from '../assets/images/use-cases.png';
import slides from '../assets/images/slideware.png';
import sheet from '../assets/images/one-sheet.png';
import guide from '../assets/images/user-guide.png';
import notes from '../assets/images/release-notes.png';

function MarketingPortfolio() {
  return (
    <section className="portfolio-section">
      <h3 style={{ 
        paddingTop: '25px', 
        fontFamily: 'Helvetica, sans-serif', 
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#ffffff',
      }}>MARKETING PROJECTS</h3>
      <div className="projects">
      <MarketingProject
          title="Whitepaper: DATA LAKES DEFINED"
          description="I authored a whitepaper that explains what data lakes are, their advantages, and how they differ from traditional data warehouses. I used clear, concise language to make technical concepts easy to understand."
          image={whitepaper}
          projectLink="https://drive.google.com/file/d/1FywCXfgpugFdfh49__-38hj0Do7hUy8i/view"
        />
        <MarketingProject
          title="Practical Onboarding Marketing Recommendation for Warmly AI Sales Software"
          description="I created a practical onboarding marketing recommendation for Warmly, an AI Sales Software. This recommendation included a detailed plan of email communications and objectives, such as driving customers to complete setup and upselling 'Warmly for Business' to free customers who are in sales or HR roles."
          image={onboarding}
          projectLink="https://drive.google.com/file/d/19a99T1jUNdFFJy71YiwQUTTwNT1qAa4X/view"
        />
        <MarketingProject
          title="Engaging Promotional Email for Daybreaker's Brazilian Carnival Dance Party"
          description="I developed a promotional email for Daybreaker's virtual Brazilian Carnival dance party. The email effectively highlighted the event's key components and emphasized the significance of color, energy, and joy in the carnival spirit. The email successfully encouraged participants to bring their props and purchase tickets."
          image={promotion}
          projectLink="https://drive.google.com/file/d/1zox6XvR-rkKOisygSLWAi61BzGpKZnnB/view"
        />
        <MarketingProject
          title="Effective Launch Communication for Media Activation Product"
          description="Using Salesforce Marketing Cloud, I crafted and delivered a powerful launch message that reintroduced a Media Activation Product to its users. The message emphasized its growth, evolution, and new three-component system, which enhances the software's functionality and user experience. The message was delivered with a clear call-to-action, encouraging users to familiarize themselves with the new structure and positioning, ultimately driving user engagement."
          image={launch}
          projectLink="https://drive.google.com/file/d/1317aanO-c6eWjetwmYPfmsj1qNbQMRnl/view"
        />
        <MarketingProject
          title="Engaging Sizzle Reel Video for a Taxonomy Management Product"
          description="To enhance new business pitches, I created a sizzle reel that showcases the benefits of a Taxonomy Management product. I used Canva to create engaging visuals and compelling copy that captivate the audience's attention and generate excitement."
          image={sizzle}
          projectLink="https://drive.google.com/file/d/1ZhmPYeS0ys8wqWGfeS3rNv_cloW7HnAI/view"
        />
        <MarketingProject
          title="Insightful Competitive Comparison of Report Visualization Software"
          description="I conducted a competitive comparison of different Report Visualization Software options, providing account teams with valuable insights to determine which one to leverage for their clients. The analysis provided account teams with a clear understanding of the strengths and weaknesses of each option, allowing them to make an informed decision and provide the best possible service to their clients."
          image={competitive}
          projectLink="https://drive.google.com/file/d/1BZfdkv8y5J8u4J9CRQbzej4lPQIV3Hss/view"
        />
        <MarketingProject
          title="Data-Driven Customer Satisfaction Survey & Readout for Project Management Software"
          description="I designed and distributed a customer satisfaction survey, using Microsoft Forms, for a Project Management Software, analyzed the feedback received from users, and presented the results to executives with visually appealing data representations. The recommendations provided aimed at enhancing user satisfaction, identifying areas for improvement, and driving the software's development."
          image={survey}
          projectLink="https://drive.google.com/file/d/1bMiopYIIv7S9Chf5VzrM3AoubUu7JO0-/view"
        />
        <MarketingProject
          title="Case Study: Improvements & Efficiencies from Project Management Software Implementation"
          description="As part of my involvement in the launch of a Project Management Software for a large automotive client, I worked closely with the media team to monitor and document the improvements and efficiencies gained through the software's implementation. This data was then used to create a comprehensive case study, which showcased the tangible benefits of the software and provided a valuable resource for sharing with potential clients and stakeholders."
          image={study}
          projectLink="https://drive.google.com/file/d/1xe6LMoja2ahTkuL41H62J9eWx6ye1QeK/view"
        />
        <MarketingProject
          title="Use Cases for Unique ID Feature in Data Lake Manipulation"
          description="I documented a range of use cases to illustrate how teams could effectively leverage a Unique ID Feature to manipulate data within a Data Lake. By effectively documenting and communicating these use cases, I was able to drive greater adoption and utilization of this Unique ID feature, ultimately leading to more accurate and actionable insights for clients."
          image={cases}
          projectLink="https://drive.google.com/file/d/18sHD6xwH7sQHXTFicYjLdXuF_4Zp1Duq/view"
        />
        <MarketingProject
          title="Powerful Slideware for a Media Activation Product Stack"
          description="I created a set of PowerPoint slides to promote a Media Activation Product Stack. The slides highlight the unique features, capabilities, and benefits of the product stack to both new and existing clients."
          image={slides}
          projectLink="https://drive.google.com/file/d/1TcQT1Sa9fHRzx2oUuo38Jk0vDYtLiSC2/view"
        />
        <MarketingProject
          title="Concise One-Sheet for Spend Authorization Product"
          description="I created a one-sheet for a Spend Authorization Product that showcases its unique features and benefits. The one-sheet effectively demonstrates the software's ability to streamline and optimize the authorization process for company spending."
          image={sheet}
          projectLink="https://drive.google.com/file/d/1Njzz1Nsb_kBoiafNF2lYpXOLs2KJAhnU/view"
        />
        <MarketingProject
          title="Comprehensive User Guide for Creatives Management Product"
          description="I designed a user guide that offers step-by-step instructions and relevant information on how to effectively use a Creatives Management Product. The guide aims to enhance the user experience, minimize errors, and increase productivity."
          image={guide}
          projectLink="https://drive.google.com/file/d/11kSQoh3IjLyKOnjZMz84Opm20ZfLljwL/view"
        />
        <MarketingProject
          title="Informative Release Notes for Active Product Users"
          description="I regularly drafted and distributed informative release notes using SalesForce Marketing Cloud every two weeks after a product release. These notes provided active product users with a detailed summary of new features, improvements, and bug fixes."
          image={notes}
          projectLink="https://drive.google.com/file/d/1u60z_ptOmoiDlF6Wfl7sBlbH18hNWfBP/view"
        />
      </div>
    </section>
  );
}

export default MarketingPortfolio;