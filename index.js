const _ = require('lodash');
const qiskit = require('qiskit');
const quantumRandom = require('quantum-random');

/**
 * Apply a quantum gate to a quantum circuit.
 * @param {object} circuit The quantum circuit to apply the gate to.
 * @param {string} gate The gate to apply.
 * @param {number[]} qubits The qubits to apply the gate to.
 */
function applyGate(circuit, gate, qubits) {
    circuit.applyGate(gate, qubits);
}

/**
 * Measure the state of qubits in a quantum circuit.
 * @param {object} circuit The quantum circuit to measure.
 * @param {number[]} qubits The qubits to measure.
 * @returns {string} The measured state of the qubits.
 */
function measureQubits(circuit, qubits) {
    return circuit.measure(qubits);
}

/**
 * Generate a random quantum state using quantum random number generator.
 * @param {number} numQubits Number of qubits for the quantum state.
 * @returns {string} Random quantum state represented as a string.
 */
function generateRandomState(numQubits) {
    const randomBits = quantumRandom.generateRandomBits(numQubits);
    const randomState = _.join(randomBits, '');
    return randomState;
}

module.exports = {
    applyGate,
    measureQubits,
    generateRandomState
};
