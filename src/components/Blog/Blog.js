import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            <h2>Difference between javascript and nodejs ??</h2>
            <p>
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development. Javascript is a Scripting language. It is mostly
              abbreviated as JS. It can be said that Javascript is the updated
              version of the ECMA script. Javascript is a high-level programming
              language that uses the concept of Oops but it is based on
              prototype inheritance.
            </p>
          </Col>
          <Col md="6">
            <h2>
              When should you use nodejs and when should you use mongodb ??
            </h2>
            <p>
              Node.js is based on Google's V8 JavaScript engine which is used in
              the Chrome browser. It also includes a number of modules that
              provides features essential for implementing web applications
              including networking protocols such as HTTP. Third party modules,
              including the MongoDB driver, can be installed, using the npm
              tool. Node.js is an asynchronous, event-driven engine where the
              application makes a request and then continues working on other
              useful tasks rather than stalling while it waits for a response.
              On completion of the requested task, the application is informed
              of the results via a callback or a promise or Observable. This
              enables large numbers of operations to be performed in parallel
              essential when scaling applications. MongoDB was also designed to
              be used asynchronously and so it works well with Node.js
              applications.
            </p>
          </Col>
          <Col md="6">
            <h2> Differences between sql and nosql databases.??</h2>
            <p>
              Structured Query language SQL pronounced as “S-Q-L” or sometimes
              as “See-Quel” is the standard language for dealing with Relational
              Databases. A relational database defines relationships in the form
              of tables. SQL programming can be effectively used to insert,
              search, update, delete database records. That doesnt mean SQL
              cannot do things beyond that. It can do a lot of things including,
              but not limited to, optimizing and maintenance of databases.
              Relational databases like MySQL Database, Oracle, Ms SQL Server,
              Sybase, etc. use SQL. NoSQL is a non-relational DMS, that does not
              require a fixed schema, avoids joins, and is easy to scale. NoSQL
              database is used for distributed data stores with humongous data
              storage needs. NoSQL is used for Big data and real-time web apps.
              For example companies like Twitter, Facebook, Google that collect
              terabytes of user data every single day. NoSQL database stands for
              “Not Only SQL” or “Not SQL.” Though a better term would NoREL
              NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.
              Traditional RDBMS uses SQL syntax to store and retrieve data for
              further insights. Instead, a NoSQL database system encompasses a
              wide range of database technologies that can store structured,
              semi-structured, unstructured and polymorphic data. Next, we will
              discuss the key diff between SQL and NoSQL.
            </p>
          </Col>
          <Col md="6">
            <h2>What is the purpose of jwt and how does it work ??</h2>
            <p>
              JWT, or JSON Web Token, is an open standard used to share
              information between two parties securely — a client and a server.
              In most cases, its an encoded JSON containing a set of claims and
              a signature. Its usually used in the context of other
              authentication mechanisms like OAuth, OpenID to share user-related
              information. Its also a popular way to authenticate/authorize
              users in a microservice architecture. JWT authentication is a
              token-based stateless authentication mechanism. It is popularly
              used as a client-side-based stateless session, this means the
              server doesnt have to completely rely on a data store or database
              to save session information. JWTs can be encrypted, but they are
              typically encoded & signed. We will be focusing on Signed JWTs.
              The purpose of Signed JWT is not to hide the data but to ensure
              the authenticity of the data. And that is why its highly
              recommended to use HTTPS with Signed JWTs.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
