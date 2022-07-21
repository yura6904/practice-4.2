import Labels from "../InputLabels/Labels";
import propTypes from 'prop-types'

function Table(props) {
  const labels=['Дата (ДД.ММ.ГГ)', 'Пройдено км', 'Действия']

  return (
    <div className="Table">
      <Labels labels={labels}/>
      <div className='table-border'>
        {props.data.map((d, idx) => (
          <div className="table-element" key={idx}>
            <div><p>{d.date}</p></div>
            <div><p>{d.distance}</p></div>
            <div className="actions">
              <span className="material-icons">
                mode_edit
              </span>
              <span className="material-icons" onClick={() => props.deleteData(idx)}>
                clear
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Table.propTypes = {
  data: propTypes.array
}

export default Table;
