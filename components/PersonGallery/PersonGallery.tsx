import React from "react";
import FullpageSection from "../FullpageSection/FullpageSection";
import Grid from "../Grid/Grid";
import Image from "next/image";
import Styles from "./styles.module.scss";
import Prose from "../Prose/Prose";

interface PersonGalleryProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  people: {
    image: {
      src: string;
      alt?: string;
    };
    name: React.ReactNode;
    description?: React.ReactNode;
  }[];
}
const PersonGallery: React.FunctionComponent<PersonGalleryProps> = ({
  title,
  description,
  people,
}) => {
  return (
    <FullpageSection className={Styles.root}>
      <Grid container marginCenter>
        <header className={Styles.header}>
          <h3>{title}</h3>
          {description && (
            <Prose>
              <p className={Styles.headerDescription}>{description}</p>
            </Prose>
          )}
        </header>
        <div className={Styles.people}>
          {people.map((person) => (
            <div className={Styles.person}>
              <Image src={person.image.src} alt={person.image.alt || ""} />
              <h5 className={Styles.personName}>{person.name}</h5>
              {person.description && <p>{person.description}</p>}
            </div>
          ))}
        </div>
      </Grid>
    </FullpageSection>
  );
};
export default PersonGallery;
