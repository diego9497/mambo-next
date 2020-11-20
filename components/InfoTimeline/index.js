import Timeline from "../Icons/TimeLine";
import CardPlaceMilestone from "../CardPlaceMilestone";

function InfoTimeline({ color, content, title, topic, year, handleClose }) {
  return (
    <CardPlaceMilestone
      color={color}
      content={content}
      title={title}
      subtitle={`${topic} (${year})`}
      handleClose={handleClose}
      iconHeader={<Timeline />}
      controls
    ></CardPlaceMilestone>
  );
}
export default InfoTimeline;
