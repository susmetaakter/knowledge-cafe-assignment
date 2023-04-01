import React from 'react';

const QuestionAnswer = () => {
    return (
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
            <div class="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
              <h2 class="font-bold text-xl mb-2 md:mb-4">Question 1</h2>
              <p class="text-gray-700 mb-4 md:mb-6 lg:mb-8">What is the difference between Props and state?</p>
              <h2 class="font-bold text-xl mb-2 md:mb-4">Answer 1</h2>
              <p class="text-gray-700">Here is the difference between Props and State: <br /> Props: Props get passed to the component (similar to function parameters) <br />Sate: State is managed within the component (similar to variables declared within a function). </p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
               <h2 class="font-bold text-xl mb-2 md:mb-4">Question 2</h2>
               <p class="text-gray-700 mb-4 md:mb-6 lg:mb-8">How does useState work?</p>
               <h2 class="font-bold text-xl mb-2 md:mb-4">Answer 2</h2>
               <p class="text-gray-700">useState is a built-in React hook that allows functional components to have stateful behavior. It works by returning an array of two values: the current state value and a function to update that state value.</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
             <h2 class="font-bold text-xl mb-2 md:mb-4">Question 3</h2>
             <p class="text-gray-700 mb-4 md:mb-6 lg:mb-8">What is the purpose of useEffect other than fetching data?</p>
             <h2 class="font-bold text-xl mb-2 md:mb-4">Answer 3</h2>
             <p class="text-gray-700">useEffect is a built-in React hook that allows functional components to perform side effects, such as modifying the DOM, subscribing to events, or updating external state. While it is commonly used for fetching data, useEffect can also be used for a variety of other purposes.</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
             <h2 class="font-bold text-xl mb-2 md:mb-4">Question 4</h2>
             <p class="text-gray-700 mb-4 md:mb-6 lg:mb-8">How does React work?</p>
             <h2 class="font-bold text-xl mb-2 md:mb-4">Answer 4</h2>
             <p class="text-gray-700">ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework.</p>
         </div>
         </div>
    </div>
    );
};

export default QuestionAnswer;