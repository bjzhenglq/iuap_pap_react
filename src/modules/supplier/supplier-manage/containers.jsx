/**
 * 业务容器组件
 */
import React, { Component } from "react";
import mirror, { actions, connect } from "mirrorx";
import model from './models';
import RegisterInfo from './components/RegisterInfo';

//注入Model
mirror.model(model);

export const registerInfo= connect((state) => state.supplier)(RegisterInfo);
