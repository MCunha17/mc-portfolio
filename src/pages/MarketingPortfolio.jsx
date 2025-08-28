import React from 'react';
import MarketingProject from '../components/MarketingProject';

import thought from '../assets/images/thought-leadership.png';
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
      <h3>MARKETING PROJECTS</h3>
      <div className="projects">
      <MarketingProject
          title="Thought Leadership: AI-Driven Creative Personalization"
          description="Authored a thought leadership article on AI and creative content, credited to the Product
          Manager."
          image={thought}
          projectLink="https://www.thedrum.com/profile/ipgmediabrands/article/ai-driven-creative-personalization-revolutionizing-brand-engagement"
        />
        <MarketingProject
          title="Whitepaper: Data Lakes Defined"
          description="Formulated a whitepaper explaining data lakes, their advantages, and differences from traditional warehouses."
          image={whitepaper}
          projectLink="https://drive.google.com/file/d/1FywCXfgpugFdfh49__-38hj0Do7hUy8i/view"
        />
        <MarketingProject
          title="Onboarding Marketing Recommendation for Warmly AI"
          description="Created an onboarding email strategy to drive setup completion and upsell premium features."
          image={onboarding}
          projectLink="https://drive.google.com/file/d/19a99T1jUNdFFJy71YiwQUTTwNT1qAa4X/view"
        />
        <MarketingProject
          title="Promotional Email: Daybreaker Carnival Event"
          description="Developed a vibrant promotional email highlighting energy, color, and joy to drive ticket sales."
          image={promotion}
          projectLink="https://drive.google.com/file/d/1zox6XvR-rkKOisygSLWAi61BzGpKZnnB/view"
        />
        <MarketingProject
          title="Launch Communication: Media Activation Product"
          description="Crafted a relaunch message that reintroduced a Media Activation product with enhanced features."
          image={launch}
          projectLink="https://drive.google.com/file/d/1317aanO-c6eWjetwmYPfmsj1qNbQMRnl/view"
        />
        <MarketingProject
          title="Sizzle Reel: Taxonomy Management"
          description="Produced a sizzle reel showcasing benefits of a Taxonomy Management product for new business pitches."
          image={sizzle}
          projectLink="https://drive.google.com/file/d/1ZhmPYeS0ys8wqWGfeS3rNv_cloW7HnAI/view"
        />
        <MarketingProject
          title="Competitive Comparison: Report Visualization"
          description="Analyzed competing visualization tools to help teams choose the best option for clients."
          image={competitive}
          projectLink="https://drive.google.com/file/d/1BZfdkv8y5J8u4J9CRQbzej4lPQIV3Hss/view"
        />
        <MarketingProject
          title="Customer Satisfaction Survey & Readout"
          description="Designed and analyzed a customer survey, presenting data-driven insights and recommendations."
          image={survey}
          projectLink="https://drive.google.com/file/d/1bMiopYIIv7S9Chf5VzrM3AoubUu7JO0-/view"
        />
        <MarketingProject
          title="Case Study: Project Management Software"
          description="Documented improvements from a PM software launch, creating a case study to share results."
          image={study}
          projectLink="https://drive.google.com/file/d/1xe6LMoja2ahTkuL41H62J9eWx6ye1QeK/view"
        />
        <MarketingProject
          title="Use Cases: Unique ID Feature"
          description="Outlined use cases demonstrating adoption of a Unique ID feature for more actionable insights."
          image={cases}
          projectLink="https://drive.google.com/file/d/18sHD6xwH7sQHXTFicYjLdXuF_4Zp1Duq/view"
        />
        <MarketingProject
          title="Slideware: Media Activation Stack"
          description="Created a presentation deck highlighting unique features and benefits of a product stack."
          image={slides}
          projectLink="https://drive.google.com/file/d/1TcQT1Sa9fHRzx2oUuo38Jk0vDYtLiSC2/view"
        />
        <MarketingProject
          title="One-Sheet: Spend Authorization"
          description="Designed a concise one-sheet to demonstrate how spend authorization improves workflows."
          image={sheet}
          projectLink="https://drive.google.com/file/d/1Njzz1Nsb_kBoiafNF2lYpXOLs2KJAhnU/view"
        />
        <MarketingProject
          title="User Guide: Creative Management"
          description="Produced a detailed step-by-step user guide to boost adoption and minimize errors."
          image={guide}
          projectLink="https://drive.google.com/file/d/11kSQoh3IjLyKOnjZMz84Opm20ZfLljwL/view"
        />
        <MarketingProject
          title="Release Notes: Product Updates"
          description="Regularly authored and distributed release notes highlighting new features and fixes."
          image={notes}
          projectLink="https://drive.google.com/file/d/1u60z_ptOmoiDlF6Wfl7sBlbH18hNWfBP/view"
        />
      </div>
    </section>
  );
}

export default MarketingPortfolio;