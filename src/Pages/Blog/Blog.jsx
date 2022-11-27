import React from 'react';

const Blog = () => {
    return (
        <div className='px-5 my-5 text-2xl'>
            <h1 className='font-semibold'>What are the different ways to manage a state in a React application?</h1>
            <p className='mt-2 text-lg'>
                Which state management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.
            </p>

            <h1 className='font-semibold'>How does prototypical inheritance work?</h1>
            <p className='mt-2 text-lg'>
                The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Note: The property of an object that points to its prototype is not called prototype .
            </p>

            <h1 className='font-semibold'>What is a unit test? Why should we write unit tests?</h1>
            <p className='mt-2 text-lg'>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
            </p>

            <h1 className='font-semibold'>React vs. Angular vs. Vue?</h1>
            <p className='mt-2 text-lg'>
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
            </p>
        </div>
    );
};

export default Blog;