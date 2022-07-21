import propTypes from 'prop-types'

function Labels(props) {
    return (
      <div className="Labels">
        {props.labels.map((e, idx) => (
            <p key={idx}>{e}</p>
        ))}
      </div>
    );
  }

Labels.propTypes = {
  labels: propTypes.array
}
  
export default Labels;
  