import React from 'react';
import { Box, ListCountries, Graph} from './components';
import { fetchData } from './dataFetched/';
import styles from './App.module.css';
import image from './images/image.jpg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  // Making a request to fetchData in the API
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data : fetchedData});
  }

  //Making a request to fetchData for a country
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} slt="COVID-19 TITLE"/>
        <Box data={data} />
        <ListCountries handleCountryChange={this.handleCountryChange} />
        <Graph data={data} country = {country}/>
      </div>
    );
  }
}

export default App;