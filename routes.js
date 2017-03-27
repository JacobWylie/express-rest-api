'use strict';

const express = require('express');
const router = express.Router();

// GET /questions
// Route to return all the questions
router.get('/', (req, res) => {
	res.json({
		response: 'You sent me a GET request'
	});
});

// POST /questions
// Route for creating questions
router.post('/', (req, res) => {
	res.json({
		response: 'You sent me a POST request',
		body: req.body
	});
});

// GET /questions/:qId
// Route for specific questions
router.get('/:qId', (req, res) => {
	res.json({
		response: `You sent me a GET request for a specific ID ${req.params.qId}`
	});
});

// POST /questions/:qId/answers
// Route for creating an answer
router.post('/:qId/answers', (req, res) => {
	res.json({
		response: `You sent me a POST request to /answers`,
		questionId: req.params.qId,
		body: req.body
	});
});

// PUT /questions/:qId/answers/:aId
// Edit a specific answer
router.put('/:qId/answers/:aId', (req, res) => {
	res.json({
		response: `You sent me a PUT request to /answers`,
		questionId: req.params.qId,
		answerID: req.params.aId,
		body: req.body
	});
});

// Delete /questions/:qId/answers/:aId
// Delete a specific answer
router.delete('/:qId/answers/:aId', (req, res) => {
	res.json({
		response: `You sent me a DELETE request to /answers`,
		questionId: req.params.qId,
		answerID: req.params.aId
	});
});

// POST /questions/:qId/answers/:aId/vote-up
// POST /questions/:qId/answers/:aId/vote-down
// Vote on a specific answer
router.post('/:qId/answers/:aId/vote-:dir', (req, res) => {
	res.json({
		response: `You sent me a POST request to /vote-${req.params.dir}`,
		questionId: req.params.qId,
		answerID: req.params.aId,
		vote: req.params.dir
	});
});








module.exports = router;
































