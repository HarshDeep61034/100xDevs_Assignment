const express = require("express");

const connect = require("./connect");

connect().then(() => console.log("connected to Mongo DB"));
