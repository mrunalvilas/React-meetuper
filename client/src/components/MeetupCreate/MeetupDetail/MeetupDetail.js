import React from 'react';
import './MeetupDetail.scss';
import { Field } from 'react-final-form';

const MeetupDetail = () => {
  return (
    <div>
      <Field name="title" component="input" type="text" label="Title">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">Choose Title</label>
            <input
              className="input"
              type="text"
              {...input}
              placeholder="Enter Title"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="startsAt" component="input" type="text" label="Starts At">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">Starts At</label>
            <input
              className="input"
              type="text"
              {...input}
              placeholder="Starts At"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="timeFrom" component="input" type="text" label="Time From">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">From</label>
            <input
              className="input"
              type="text"
              {...input}
              placeholder="Time From"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="timeTo" component="input" type="text" label="Time To">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">To</label>
            <input
              className="input"
              type="text"
              {...input}
              placeholder="Time To"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="category" component="select" type="text" label="Categories">
        {({ input, meta }) => (
          <div className="select">
            <select {...input}>
              <option value="category">Category name</option>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </select>
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default MeetupDetail;