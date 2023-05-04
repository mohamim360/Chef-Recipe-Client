import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>
        What are the differences between uncontrolled and controlled components?
      </h2>
      <p>
        In an uncontrolled component, the form data is handled by the DOM
        itself. The data is accessed through the DOM using a ref. On the other
        hand, in a controlled component, the form data is handled by the React
        component. The component updates the state on every change, and the form
        values are passed down as props. This provides greater control and
        allows for easier manipulation of form data.
      </p>
      <h2>How to validate React props using PropTypes?</h2>
      <p>
        PropTypes is a built-in library in React that allows you to validate the
        props passed to a component. You can define the data type, whether it is
        required or not, and other rules to ensure that the component receives
        the correct data. To use PropTypes, you need to import it and define the
        PropTypes of your component. For example, to validate that a prop named
        "name" is a string and is required
      </p>
      <h2>What is the difference between Node.js and Express.js?</h2>
      <p>
        Node.js is a runtime environment for JavaScript that allows you to run
        JavaScript outside of the web browser. It is used for server-side
        programming, and it provides features like file system access, network
        I/O, and more. On the other hand, Express.js is a framework built on top
        of Node.js that simplifies the process of building web applications. It
        provides features like routing, middleware, and template rendering,
        among others.
      </p>
      <h2>What is a custom hook, and why will you create a custom hook?</h2>
      <p>
        A custom hook is a JavaScript function that uses React hooks to provide
        reusable functionality to a React component. You can create custom hooks
        to abstract away complex logic or to provide functionality that is not
        available out-of-the-box in React. For example, you could create a
        custom hook to handle form validation or to fetch data from an API.
      </p>
    </div>
  );
};

export default Blog;
