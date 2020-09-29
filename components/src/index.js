import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard />
          <CommentDetail 
            author="Jordan" 
            timeAgo="Today at 4:45pm" 
            commentPost="Hey"
            avatar={faker.image.avatar()}
          />

          <CommentDetail 
            author="Sally" 
            timeAgo="Today at 7:45pm" 
            commentPost="What you doing?"
            avatar={faker.image.avatar()}
          />

          <CommentDetail 
            author="Austin" 
            timeAgo="Today at 2:45pm" 
            commentPost="Hello!"
            avatar={faker.image.avatar()}
          />
          
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))