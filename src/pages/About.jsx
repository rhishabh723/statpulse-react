import { motion } from 'framer-motion';
import './InfoPage.css';

export default function About() {
  return (
    <div className="info-page">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="info-eyebrow">About</p>
        <h1 className="info-title">A little about me</h1>

        <div className="info-body">
          <p>
            I'm Rhishabh, a passionate sports fan who loves working with sports data.
            I completed my Bachelor's in Electrical Engineering and then my Master's
            from Duke University in 2019. I've been in analytics for about six years
            now, and would love to carve out a role at the league or team level using
            the skills I've built.
          </p>
          <p>
            Storytelling and visualization are crucial skills in any industry, and I
            hope this work does justice to delivering real data insights. Analyzing
            sports started as a hobby in 2020, and it's turned into a much bigger
            endeavor over time. Being able to deliver sound sports analysis in the
            simplest way for fans to consume is the biggest motivation behind this
            project. My analytical work uses Python, SQL, and machine learning models
            to build these views.
          </p>
          <p>
            Right now I focus on NBA basketball and Formula 1 racing data, mainly
            because APIs are easily available for both and I've built pipelines to
            scrape and process the information. Most of this work happens during my
            off-time, after my day job — I enjoy finding new ways to process sports
            data that help explain what makes teams and players so good at their craft.
          </p>
          <p>
            I've previously interned at Wasserman, and I currently work as Manager of
            Business Intelligence and Analytics at CBS Sports. I'd appreciate any
            feedback or insights you'd like to share — feel free to reach out at{' '}
            <a className="info-link" href="mailto:rhishabh23@gmail.com">
              rhishabh23@gmail.com
            </a>{' '}
            and I'll get back to you.
          </p>
          <p>
            Thanks for taking the time to go through the site — I look forward to
            connecting with fellow sports enthusiasts.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
