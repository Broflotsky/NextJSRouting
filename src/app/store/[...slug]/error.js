"use client";

import React from "react";
import "./error.css";
import Link from "next/link";

export default function Error({ error }) {
  return (
    <div className="error-container">
      <div className="box-message">
        <h1 className="error-heading">Oops! Algo fallo en esta consulta</h1>
        {/* <p className="error-message">{error}</p> */}
        <p className="error-suggestion">
          {`Pero no te preocupes, hay un mundo de opciones por explorar. `}
        </p>
        <p className="error-suggestion">
          {`¿Por qué no pruebas con alguna de estas?`}
        </p>
        <ul className="error-links">
          <Link href="/"> Home </Link>
          <Link href="/store"> Store </Link>
          <Link href="/about"> About </Link>
        </ul>
        <p className="error-suggestion">
          {` ¡Animo! ¡Tienes todo un mundo por descubrir!`}
        </p>
      </div>
    </div>
  );
}
