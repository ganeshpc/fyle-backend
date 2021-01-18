const express = require("express");

const router = express.Router();

const BankController = require("../controller/bank.controller");

router.get("/", BankController.getAllMatch);

router.get("/autocomplete", BankController.getBranchNameMatch);

module.exports = router;
