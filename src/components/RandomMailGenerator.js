import React from "react";

function RandomMailGenerator({ _class, label }) {
  const mailID = getMailID(10);
  return <a className={_class} href={`mailto:${mailID}@mauermann.io`}>{label}</a>;
};

function getMailID(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}


export default RandomMailGenerator;
