import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} />
  </article>
);

/*
<article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">CSS</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        Leanne Graham
      </a>
    </article>

    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">JS</h2>

      <a className="UserInfo" href="mailto:Shanna@melissa.tv">
        Ervin Howell
      </a>
    </article>

    <article className="TodoInfo">
      <h2 className="TodoInfo__title">React</h2>

      <a className="UserInfo" href="mailto:Nathan@yesenia.net">
        Clementine Bauch
      </a>
    </article>
*/
