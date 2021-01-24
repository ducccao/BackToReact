import React from "react";
import PropTypes from "prop-types";

const language = ["Javascript", "Go", "Python"];

const Language = ({ language }) => <li> {language} </li>;

const LanguageList = ({ languages }) => {
  return (
    <ul>
      {languages.map((lg) => (
        <Language language={lg} />
      ))}
    </ul>
  );
};

const LangSection = ({ header, languages }) => {
  const formatted = languages.map((lan) => lan.toUpperCase());

  return (
    <fieldset>
      <legend> {header} </legend>
      <LanguageList languages={formatted} />
    </fieldset>
  );
};

const VariationsStateLess = () => {
  return (
    <div>
      <LangSection header={"header"} languages={language} />
    </div>
  );
};

export default VariationsStateLess;
