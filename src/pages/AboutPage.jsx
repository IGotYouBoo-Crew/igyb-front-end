import React from "react";
import MainLayout from "../components/MainLayout";
import { images } from "../constants";

const AboutPage = () => {
  return (
    <MainLayout>
      <section>
        <img className="relative -mt-4" src={images.AboutImage} alt="Header" />
        <div className="textPage bg-sea text-background ">
          <h1 className="textH1 ">About Us</h1>

          <h2 className="textH2 ">Our 'Why'</h2>
          <p className="textP ">
            DudeBros Incorporated {"(DudeBros Inc.)"} were experiencing staff
            retention problems. Despite their best intentions and efforts, their
            workforce consisted almost entirely of white collar middle-aged
            males.
          </p>
          <p className="textP ">
            Over the years, they had employed a diverse group of people that
            were best suited to each role and were top of their field, but no
            matter the pay packet or benefits thrown at them, DudeBros Inc.
            simply couldn't seem to keep their staff happy or wanting to stay.
          </p>
          <p className="textP ">
            The resounding feedback given in the seemingly countless resignation
            letters was that it was no place for anyone who didn't quite fit
            that same macho stereotype.
          </p>
          <p className="textP ">
            So, instead of doubling down and continuing the cycle, we{" "}
            {"(Ella, Jack and Naomi)"} were stoked to get a call from DudeBros
            Inc. asking for help to change their company culture:
          </p>
          <p className="textP font-bold">
            And that is where <i>I Got You, Boo</i> was born.
          </p>
          <p className="textP ">
            The obvious answer was to create some sort of support network for
            females to feel included, and have a safe place where they could ask
            for advice, feedback, and other girls alongside them when they felt
            wildly outnumbered in the workplace.
          </p>
          <p className="textP ">
            However, this concept grew: because it's not just women who were in
            the minority.
          </p>
          <p className="textP ">
            It was also members of the LGBTQI+ community. It was people of
            colour. It was even red heads, as we found out!
          </p>
          <p className="textP ">
            IGYB is a forum with a mentee/mentor mindset encouraged. The purpose
            of this is to be able to give a safe space for people to reach out
            to others in a similar role or industry who have possibly fought the
            same battles, or have learnt by experience, and are now in a place
            to share that wealth of knowledge and help pave the way in similar
            circumstances.
          </p>

          <h2 className="textH2 ">Our 'Who'</h2>
          <p className="textP ">
            We're proud to say that <i>I Got You, Boo {"(IGYB)"}</i> is an
            all-inclusive online community for those who feel like they're on
            the outer, because everyone should have someone who has their back.
          </p>
          <p className="textP ">
            While the aim is for people in industries that might be lacking in
            diversity to have people they can surround themselves with online,
            it doesn't necessarily have to be strictly business: for example,
            one of our most recent Superstars is a 17yo male who wanted to learn
            to crochet, but didn't feel comfortable walking into his local
            nursing home crochet classes: and he was able to find other
            Superstars here who have helped him in that journey!
          </p>
          <p className="textP ">
            We consider every single member of IGYB a Superstar, so that's what
            we refer to our users as.
          </p>

          <h2 className="textH2 ">Our 'What'</h2>
          <p className="textP ">
            At its core, IGYB is a forum where guests can browse through posts,
            comments, and events, and create an account if they want to join the
            community.
          </p>
          <p className="textP ">
            Upon logging in, those users {"(our Superstars)"} can create posts,
            comment on posts, and create personally organised events, as well as
            update their details in their account profile.
          </p>
          <p className="textP ">
            We consider every single member of IGYB a Superstar, so that's what
            we refer to our users as.
          </p>
          <p className="textP ">
            The IGYB Crew are employees, and essentially website admins. This
            gives them the ability to moderate if necessary. The entire IGYB
            idea is built on trust and mutual respect, so this isn't a matter of
            trawling through every single post and comment to follow any
            particular 'rules', but it still gives IGYB Crew the capability to
            delete posts, comments or events that have been created and do not
            uphold the inclusive ethos of IGYB, or to completely delete
            Superstars if they are deemed offensive. Similar to Superstars, IGYB
            Crew can also create posts, comments, and official IGYB events.
          </p>
          <br></br>
          <h2 className="textH2 ">We're so glad you're here.</h2>
          <h2 className="textH2 ">We got you, boo x.</h2>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
