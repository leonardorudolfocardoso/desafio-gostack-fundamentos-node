import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // TODO DONE

    return response.status(200).json({
      transactions: transactionsRepository.all(), balance: transactionsRepository.getBalance()
    });

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO DONE

    const { title, value, type } = request.body;

    if (type === 'outcome' && value > transactionsRepository.getBalance().total) {
      throw new Error('Não há saldo disponível.');
    }

    const newTransaction = transactionsRepository.create({ title, value, type });

    return response.status(200).json(newTransaction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
