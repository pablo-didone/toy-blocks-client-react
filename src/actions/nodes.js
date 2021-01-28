import fetch from "cross-fetch";
import * as types from "../constants/actionTypes";

const checkNodeStatusStart = (node) => {
  return {
    type: types.CHECK_NODE_STATUS_START,
    node,
  };
};

const checkNodeStatusSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_STATUS_SUCCESS,
    node,
    res,
  };
};

const checkNodeStatusFailure = (node) => {
  return {
    type: types.CHECK_NODE_STATUS_FAILURE,
    node,
  };
};

const loadBlocksStart = (node) => {
  return {
    type: types.LOAD_BLOCKS_START,
    node,
  };
};

const loadBlocksFailure = (node) => {
  return {
    type: types.LOAD_BLOCKS_FAILURE,
    node,
  };
};

const loadBlocksSuccess = (node, res) => {
  return {
    type: types.LOAD_BLOCKS_SUCCESS,
    node,
    res,
  };
};

export function checkNodeStatus(node) {
  return async (dispatch) => {
    try {
      dispatch(checkNodeStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/status`);

      if (res.status >= 400) {
        dispatch(checkNodeStatusFailure(node));
      }

      const json = await res.json();

      dispatch(checkNodeStatusSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeStatusFailure(node));
    }
  };
}

export function checkNodeStatuses(list) {
  return (dispatch) => {
    list.forEach((node) => {
      dispatch(checkNodeStatus(node));
    });
  };
}

export function loadBlocks(node) {
  return async (dispatch) => {
    try {
      dispatch(loadBlocksStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= 400) {
        dispatch(loadBlocksFailure(node));
      }

      const json = await res.json();
      dispatch(loadBlocksSuccess(node, json));
    } catch (err) {
      dispatch(loadBlocksFailure(node));
    }
  };
}
