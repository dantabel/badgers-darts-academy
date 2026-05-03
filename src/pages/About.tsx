import badger from '../assets/Gemini_Generated_Image_bpe3efbpe3efbpe3.png';

const About: React.FC = () => (
  <div className="container mx-auto md:grid md:grid-cols-2 md:gap-4">
    <div className='ps-4'>
      <h1>About the Academy</h1>
      <p>
        The Junior Darts Corporation (JDC) is a global organisation, founded in
        2010 by former professional dart player Steve Brown. The JDC provides a
        professional environment for players aged <strong>seven to 17</strong>.
        It also offers a structured pathway from grassroots academies to the
        world stage. And is the only youth system officially endorsed by the
        Professional Darts Corporation (PDC). 
      </p>
      <p>
        The JDC offers many unique opportunities to its players other youth
        darts clubs and groups are unable to match. By being part of the JDC
        your child will enhance their skill development through a distinctive
        grading system that allows players to track their progress and set
        tangible goals. They get professional exposure to elite competitions and
        even have a chance to play at the JDC World Championship on the iconic
        Alexandra Palace stage. There is also a progression pathway to
        competitive tours, including the Foundation and Advanced Tours. These
        tours prepare players for adult circuits and the professional &quot;Q
        School&quot;.
      </p>
      <p>
        By being accepted into the Pontyclun Badgers Junior Darts academy your
        child will benefit from coaching by current and former International,
        County and Super League players, with a combined level of experience
        totalling more than 250 years.
      </p>
      <p>
        The Pontyclun Badgers Junior Darts Academy strictly follows the JDC
        administration structure. And will be joining the other academies around
        the world at the start of Season Three. The JDC structures it’s year
        into six seasons each lasting eight weeks. During these seasons, the
        junior players participate in a weekly ‘JDC Challenge Routine’ that is
        scored ‘live’ into a JDC database by our Badgers team of accredited
        coaches. This is to track the child’s development and accuracy and
        consistency. To earn an official seasonal grade and a position on the
        Academy Order of Merit, players must record a minimum of six scores
        during the eight-week season block. If a player completes all eight
        weeks their top six scores are averaged to determine their final rating.
      </p>
      <p>
        These averages translate into a martial-arts style ‘belt’ system where
        players earn medals with distinct coloured ribbons representing their
        skill level, ranging from white for beginners to gold for elite level
        players.
      </p>
      <p>
        To get the most out of the sessions we would encourage Junior players to
        attend every week.
      </p>
      <p>Medals will be presented at the end of every eight week season.</p>
    </div>
    <div>
      <img src={badger}/>
    </div>
  </div>
);

export default About;
