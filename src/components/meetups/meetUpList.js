import MeetUpItem from "./meetItem";
import classes from "./meetUpList.module.css";

function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetUps.map((meetup) => {
        return (
          <MeetUpItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}
export default MeetUpList;
