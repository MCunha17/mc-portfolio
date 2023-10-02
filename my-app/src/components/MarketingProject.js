import MarketingProject from '../pages/MarketingPortfolio';
import whitepaper from '../assets/images/whitepaper.png';
import slides from '../assets/images/slideware.png';
import sheet from '../assets/images/one-sheet.png';
import sizzle from '../assets/images/sizzle-reel.png';
import guide from '../assets/images/user-guide.png';
import onboarding from '../assets/images/email-onboarding.png';
import competitive from '../assets/images/competitive-comparison.png';
import survey from '../assets/images/survey.png';
import study from '../assets/images/case-study.png';
import cases from '../assets/images/use-cases.png';
import promotion from '../assets/images/email-marketing.png';
import launch from '../assets/images/launch-communication.png';
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
        title="Whitepaper: Data Lakes"
        description="Authored a whitepaper demystifying data lakes and contrasting them with traditional data warehouses."
        image={whitepaper}
        projectLink="https://drive.google.com/file/d/1FywCXfgpugFdfh49__-38hj0Do7hUy8i/view"
      />
      <MarketingProject
        title="Slideware: Meta's Conversion API"
        description="Developed PowerPoint slides promoting Meta's Conversion API, targeting both new and existing clients."
        image={slides}
        projectLink="https://drive.google.com/file/d/1QIbW3hd6_RsmeJlOPxmz3Hs00U3HzSN1/view?usp=drive_link"
      />
      <MarketingProject
        title="One-Sheet: Meta's Conversion API"
        description="Produced a one-sheet for Meta's Conversions API, emphasizing its capabilities and benefits."
        image={sheet}
        projectLink="https://drive.google.com/file/d/1U0apl4kJ9gXwh-HGdITr4wukiG0EfXFK/view?usp=sharing"
      />
      <MarketingProject
        title="Sizzle Reel: Amazon Ads Portal"
        description="Led project to develop a captivating sizzle reel for the Amazon Ads Portal to enhance new business pitches."
        image={sizzle}
        projectLink="https://drive.google.com/file/d/18Hz0OycdRB5n-KoG0pjc7rGulqbL45jZ/view?usp=sharing"
      />
      <MarketingProject
        title="User Guide: Market Mix Modeling Product"
        description="Designed a user guide for a Market Mix Modeling Product, aiming to enhance user experience and productivity."
        image={guide}
        projectLink="https://drive.google.com/file/d/1hltoTlSd60qcVP6hJZu-QBM5LxNj_In7/view?usp=sharing"
      />
      <MarketingProject
        title="Email Nurturing: AI Sales Software"
        description="Developed an onboarding plan for Warmly's AI Sales Software, focusing on user setup and upselling features to customers in sales and HR."
        image={onboarding}
        projectLink="https://drive.google.com/file/d/19a99T1jUNdFFJy71YiwQUTTwNT1qAa4X/view"
      />
      <MarketingProject
        title="Competitive Comparison: Data Visualization Software"
        description="Conducted an analysis of Data Visualization Software options, aiding account teams in making informed choices."
        image={competitive}
        projectLink="https://drive.google.com/file/d/1BZfdkv8y5J8u4J9CRQbzej4lPQIV3Hss/view"
      />
      <MarketingProject
        title="Customer Satisfaction Survey: Project Management Application"
        description="Distributed and analyzed a customer satisfaction survey, then presented actionable recommendations to executives."
        image={survey}
        projectLink="https://drive.google.com/file/d/1bMiopYIIv7S9Chf5VzrM3AoubUu7JO0-/view"
      />
      <MarketingProject
        title="Case Study: Project Management Application"
        description="Compiled a case study for a large automotive client's Project Management Software, outlining the benefits and efficiencies gained."
        image={study}
        projectLink="https://drive.google.com/file/d/1xe6LMoja2ahTkuL41H62J9eWx6ye1QeK/view"
      />
      <MarketingProject
        title="Use Cases: Data Manipulation"
        description="Documented use cases for a Unique ID Feature in Data Lakes, promoting its adoption for more accurate client insights."
        image={cases}
        projectLink="https://drive.google.com/file/d/18sHD6xwH7sQHXTFicYjLdXuF_4Zp1Duq/view"
      />
      <MarketingProject
        title="Promotional Email: Daybreaker's Virtual Carnival"
        description="Crafted a promotional email for Daybreaker's virtual Brazilian Carnival, driving ticket sales and attendee engagement."
        image={promotion}
        projectLink="https://drive.google.com/file/d/1zox6XvR-rkKOisygSLWAi61BzGpKZnnB/view"
      />
      <MarketingProject
        title="Launch Communication: Media Activation Product"
        description="Used Salesforce Marketing Cloud to send a launch message for a revamped Media Activation Product, boosting user engagement."
        image={launch}
        projectLink="https://drive.google.com/file/d/1317aanO-c6eWjetwmYPfmsj1qNbQMRnl/view"
      />
      <MarketingProject
        title="Bi-weekly Release Notes"
        description="Regularly drafted release notes post-product releases, updating users on new features, improvements, and fixes."
        image={notes}
        projectLink="https://drive.google.com/file/d/1u60z_ptOmoiDlF6Wfl7sBlbH18hNWfBP/view"
      />
      </div>
    </section>
  );
}

export default MarketingPortfolio;