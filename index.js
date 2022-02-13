"use strict";

const puppeteer = require("puppeteer");

const url = "https://www.nytimes.com/games/wordle/index.html";

(async function getData() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage));
	
	const key = Object.keys(localStorage);
	const state = localStorage[key[0]];

	const stateParsed = JSON.parse(state);
	const solution = stateParsed.solution;

	console.log(solution);
})();