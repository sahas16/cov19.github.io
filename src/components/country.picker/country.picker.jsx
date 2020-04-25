import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/index";

import styles from "./country.picker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fCountries, setFCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => handleCountryChange(event.target.value)}
      >
        <option value="global">Global</option>
        {fCountries.map((country, i) => (
          <option value={country.name} key={i}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
