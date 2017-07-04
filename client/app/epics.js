import { combineEpics } from 'redux-observable';
import {
  closeNavEpic,
  fetchPageEpic,
} from 'containers/App/epic';
import {
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';
import * as blogApi from 'utils/blogApi';

const rootEpic = (...args) => combineEpics(
  closeNavEpic,
  fetchPageEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
)(...args, { blogApi });

export default rootEpic;
