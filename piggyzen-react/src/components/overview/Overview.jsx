import './overview.css';
import '../ui/pieChart.css';
import PieChart from '../ui/PieChart';

const Overview = () => {
  return (
    <main>
      <h2>Januari 2023</h2>
      <article id='donuts-container' className='grid-container'>
        <PieChart id='donut-1' headerText='Buffert' />
        <PieChart id='donut-2' headerText='Pengamaskin' />
        <PieChart id='donut-3' headerText='Utgifter' />
        <PieChart id='donut-4' headerText='Inkomster' />
      </article>

      <article id='summary-container' className='grid-container'>
        <section id='chart-1' className='chart-container'>
          <div>
            <h3>Buffert</h3>
          </div>
        </section>

        <section id='chart-2' className='chart-container'>
          <div>
            <h3>pengamaskin</h3>
          </div>
        </section>

        <section id='chart-3' className='chart-container'>
          <div>
            <h3>Utgifter</h3>
            <ul>
              <li>Övrigt - Rörliga</li>
              <li>Övrigt - Fasta</li>
              <li>Fordon</li>
              <li>Boende</li>
            </ul>
          </div>
        </section>

        <section id='chart-4' className='chart-container'>
          <div>
            <h3>Inkomster</h3>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Overview;
