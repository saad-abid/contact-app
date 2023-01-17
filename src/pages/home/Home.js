//styles
import classes from "./Home.module.css";

import { useFetch } from "../../hooks/useFetch";
import ContactList from "../../components/ContactList";
import { useState } from "react";


const Home = () => {
  const [query, setQuery] = useState(["number", "desc"])

  const sortHandler = () => {
    setQuery(["number", "desc"]);
  };

  const { isPending, error, data } = useFetch("contacts", query);

  return (
    <div className={classes.card}>
      <button
        onClick={() => {
          sortHandler();
        }}
      >
        sort by date
      </button>
      {isPending && <div className={classes.error}>Loading.....</div>}
      {error && <div className={classes.error}>{error}</div>}
      {!isPending && !error && data && data.length <= 0 && (
        <div style={{ "textAlign": "center", "fontSize": "2em" }}>
          Contact list is empty!!
        </div>
      )}
      {!isPending && !error && data && <ContactList contacts={data} />}
    </div>
  );
};

export default Home;
