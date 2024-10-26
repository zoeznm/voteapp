export const formatResultsForChart = (results) => {
  const labels = Object.keys(results);
  const data = Object.values(results);

  return {
    labels,
    datasets: [
      {
        label: 'Votes',
        data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
};