
import React from 'react';
import './styles.css';
// import trending from './blogFold/mocks/trending'
// import ReactDOM from 'react-dom';
         // import logo from './logo.svg';
// import './App.css';

function Blogs() {
  return (
    <section class ='container home' style={{gridTemplateColumns: 'repeat(${columns}, minmax(275px, 1fr))'}}>
      <h3>Blogs</h3>
      <div className='row'>
          <h2>Trending Posts</h2>
          <img src={"./blogFold/assets/chocolate"}  alt="food" width="50" height="60"/>
          {/* <PostMasonry posts={trending}columns/> */}
      </div>
    </section>
    
  );
}

export default Blogs;