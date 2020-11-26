import Timeline from "../Icons/TimeLine";
import CardPlaceMilestone from "../CardPlaceMilestone";

function InfoTimeline({ topic, year, ...props }) {
  return (
    <CardPlaceMilestone
      {...props}
      subtitle={`${topic} (${year})`}
      iconHeader={<Timeline />}
      controls
    ></CardPlaceMilestone>
  );
}
export default InfoTimeline;
