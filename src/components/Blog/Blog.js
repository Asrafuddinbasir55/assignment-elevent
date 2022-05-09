import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="6">
                    <h2>Difference between javascript and nodejs ??</h2>
                    <p>  
                    NodeJS is a cross-platform and opensource Javascript runtime environment
    that allows the javascript to be run on the server-side. Nodejs allows
    Javascript code to run outside the browser. Nodejs comes with a lot of
    modules and mostly used in web development. Javascript is a Scripting
    language. It is mostly abbreviated as JS. It can be said that Javascript is
    the updated version of the ECMA script. Javascript is a high-level
    programming language that uses the concept of Oops but it is based on
    prototype inheritance.                      
                        </p>
                    </Col>
                    <Col md="6">
                    <h2>When should you use nodejs and when should you use mongodb ??</h2>
                    <p>
                    Node.js is based on Google's V8 JavaScript engine which is used in the
      Chrome browser. It also includes a number of modules that provides
      features essential for implementing web applications including networking
      protocols such as HTTP. Third party modules, including the MongoDB driver,
      can be installed, using the npm tool. Node.js is an asynchronous,
      event-driven engine where the application makes a request and then
      continues working on other useful tasks rather than stalling while it
      waits for a response. On completion of the requested task, the application
      is informed of the results via a callback or a promise or Observable. This
      enables large numbers of operations to be performed in parallel essential
      when scaling applications. MongoDB was also designed to be used
      asynchronously and so it works well with Node.js applications.
                    </p>
                    </Col>
                    <Col md="6">
                    <h2> Differences between sql and nosql databases.??</h2>
                    <p>
                    Structured Query language SQL pronounced as “S-Q-L” or sometimes as
        “See-Quel” is the standard language for dealing with Relational
        Databases. A relational database defines relationships in the form of
        tables. SQL programming can be effectively used to insert, search,
        update, delete database records. That doesnt mean SQL cannot do things
        beyond that. It can do a lot of things including, but not limited to,
        optimizing and maintenance of databases. Relational databases like MySQL
        Database, Oracle, Ms SQL Server, Sybase, etc. use SQL. NoSQL is a
        non-relational DMS, that does not require a fixed schema, avoids joins,
        and is easy to scale. NoSQL database is used for distributed data stores
        with humongous data storage needs. NoSQL is used for Big data and
        real-time web apps. For example companies like Twitter, Facebook, Google
        that collect terabytes of user data every single day. NoSQL database
        stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL
        NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.
        Traditional RDBMS uses SQL syntax to store and retrieve data for further
        insights. Instead, a NoSQL database system encompasses a wide range of
        database technologies that can store structured, semi-structured,
        unstructured and polymorphic data. Next, we will discuss the key diff
        between SQL and NoSQL.
                    </p>
                    </Col>
                    <Col md="6">
                    <h2>What is the purpose of jwt and how does it work ??</h2>
                    <p>
          
                    SON Web Token is a standard used to create access tokens for an
                    application. It works this way: the server generates a token that
                    certifies the user identity, and sends it to the client. The client
                    will send the token back to the server for every subsequent request,
                    so the server knows the request comes from a particular identity. This
                    architecture proves to be very effective in modern Web Apps, where
                    after the user is authenticated we perform API requests either to a
                    REST or a GraphQL API. Who uses JWT? Google, for example. If you use
                    the Google APIs, you will use JWT. A JWT is cryptographically signed
                    but not encrypted, hence using HTTPS is mandatory when storing user
                    data in the JWT, so there is a guarantee we can trust it when we
                    receive it, as no middleman can intercept and modify it, or the data
                    it holds, without invalidating it. That said, JWTs are often
                    criticized for their overuse, and especially for them being used when
                    less problematic solutions can be used. You need to form your opinion
                    around the subject. Im not advocating for a technology over another,
                    just presenting all the opportunities and tools you have at your
                    disposal. What are they good for? Mainly API authentication, and
                    server-to-server authorization.
                </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;