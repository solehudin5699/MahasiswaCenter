/* eslint-disable */
import React, { useState, useEffect } from "react";

import { Modal } from "react-bootstrap";
import "./modal.css";

export default function AddCourses(props) {
  return (
    <Modal
      {...props}
      style={{ zIndex: 1500, outline: "none" }}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Body>
        <div className='attodo_container'>
          <div className='at_line linetitle'>
            <h5>Add ToDo</h5>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>Activity's name</h6>
            </div>
            <div className='at_input'>
              <input
                type='text'
                // onChange={(e) => }
              />
            </div>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>Detail activity</h6>
            </div>
            <div className='at_input'>
              <textarea
                type='text'
                // onChange={(e) =>

                // }
              />
            </div>
          </div>
          <div className='at_line linebtn'>
            <button
              className='at_btnCancel marginRight15'
              style={{ outline: "none" }}
              onClick={() => props.onHide(false)}>
              Cancel
            </button>
            <button
              className='at_btnAdd'
              style={{ outline: "none" }}
              // onClick={handleAddTodo}
            >
              {/* {isPostPending ? (
                <i className='fa fa-spinner fa-spin fa-2x fa-fw'></i>
              ) : (
                "Add"
              )} */}
              Add
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
