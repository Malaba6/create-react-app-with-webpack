/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from './StoryAction';
import './Story.css';

export class UserStories extends Component {
  UNSAFE_componentWillMount() {
    const { fetchStories } = this.props;
    fetchStories();
  }

  render() {
    const { stories } = this.props;
    return (
      <>
      <div className="wrap-body">
        <div className="story-wrapper">
          <h4>
            Breaking stories :
          </h4>
              <div className="story-list">
                {stories.length
                 ? stories.map(story => (
                    <div
                      key={story.id}
                      className="user-stories-thread__div"
                    >
                      <div className="story">
                        <div className="story-title">
                        {story.title}
                        </div>
                        <div className="story-desc">
                        {story.description.length > 50
                            ? story.description.substring(0, 75)
                            : story.description}
                        </div>
                        <div className="story-story">
                        {story.body.length > 50
                            ? story.body.substring(0, 400)
                            : story.body}
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="no-stories">
                    Loading...
                    </div>
                  )}
              </div>
        </div>
      </div>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  stories: state.stories.stories,
});

const mapDispatchToProps = {
  fetchStories
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserStories);
