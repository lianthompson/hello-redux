import React from 'react';
import { store } from './store';
import './index.css';
import { setTechnology } from './actions';

const ButtonGroup = ({ technologies }) => (
    <div className="hello-btns">
        {technologies.map((tech, i) => (
            <button
                data-tech={tech}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

export default ButtonGroup;