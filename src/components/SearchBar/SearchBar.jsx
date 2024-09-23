// import { forwardRef } from "react";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    if (!values.query) {
      toast.error("Please enter a search query");
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <header className={css.container}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </header>
  );
}
