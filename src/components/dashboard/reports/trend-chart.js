import PropTypes from 'prop-types';

// material-ui
import { Grid } from '@mui/material';

// third-party
import dynamic from 'next/dynamic';

// project imports
import useConfig from 'hooks/useConfig';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// =========================|| SATISFACTION CHART CARD ||========================= //

const TrendChart = ({ chartData }) => {
  const { rtlLayout } = useConfig();

  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item>
        </Grid>
        <Grid item sx={{ '& .apexcharts-legend-text': { marginLeft: rtlLayout ? '8px' : 'initial' } }}>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type={chartData.options.chart.type}
            height={chartData.options.chart.height}
          />
        </Grid>
      </Grid>
    </>
  );
};

TrendChart.propTypes = {
  chartData: PropTypes.object
};

export default TrendChart;
