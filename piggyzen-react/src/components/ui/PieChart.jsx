import './pieChart.css';

const PieChart = ({ headerText, id }) => {
  return (
    <section className='chart-container'>
      <h3>{headerText}</h3>
      <div id={id} className='donut'>
        <div className='hole'></div>
      </div>
    </section>
  );
};

export default PieChart;
